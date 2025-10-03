from pinecone import Pinecone
from typing import List, Dict, Any, Optional
import logging
from config import Config
from embeddings import embedding_service

logger = logging.getLogger(__name__)

class VectorStore:
    def __init__(self):
        self.config = Config()
        self.pc = Pinecone(api_key=self.config.PINECONE_API_KEY)
        self.index = self.pc.Index(self.config.PINECONE_INDEX_NAME)
        
    def search(self, query: str, top_k: Optional[int] = None) -> List[str]:
        """Search for relevant context"""
        if top_k is None:
            top_k = self.config.TOP_K
            
        try:
            query_embedding = embedding_service.get_embedding(query)
            
            search_response = self.index.query(
                vector=query_embedding,
                top_k=top_k,
                include_metadata=True
            )
            
            contexts = []
            for match in search_response.matches:
                if match.score > self.config.SIMILARITY_THRESHOLD:
                    text = match.metadata.get('text', '')
                    if text:
                        contexts.append(text)
            
            return contexts
            
        except Exception as e:
            logger.error(f"Error searching Pinecone: {e}")
            return self._fallback_search(query)
    
    def upsert_documents(self, documents: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Upsert documents to Pinecone"""
        vectors = []
        
        for doc_idx, doc in enumerate(documents):
            text = doc.get('text', '')
            metadata = doc.get('metadata', {})
            
            if not text:
                logger.warning(f"Skipping document {doc_idx}: no text provided")
                continue
                
            # Chunk the text
            chunks = self._chunk_text(text)
            
            # Create vectors for each chunk
            for chunk_idx, chunk in enumerate(chunks):
                try:
                    embedding = embedding_service.get_embedding(chunk)
                    
                    vector_id = f"doc_{doc_idx}_chunk_{chunk_idx}_{hash(chunk)}"
                    
                    vectors.append({
                        'id': vector_id,
                        'values': embedding,
                        'metadata': {
                            **metadata,
                            'text': chunk,
                            'chunk_index': chunk_idx,
                            'total_chunks': len(chunks),
                            'document_index': doc_idx
                        }
                    })
                except Exception as e:
                    logger.error(f"Error processing chunk {chunk_idx} of document {doc_idx}: {e}")
        
        if not vectors:
            raise ValueError("No valid vectors generated")
        
        # Upsert in batches
        batch_size = 100
        upserted_count = 0
        
        for i in range(0, len(vectors), batch_size):
            batch = vectors[i:i + batch_size]
            try:
                self.index.upsert(vectors=batch)
                upserted_count += len(batch)
                logger.info(f"Upserted batch {i//batch_size + 1}, total: {upserted_count}")
            except Exception as e:
                logger.error(f"Error upserting batch {i//batch_size + 1}: {e}")
        
        return {
            'documents_processed': len(documents),
            'vectors_created': len(vectors),
            'vectors_upserted': upserted_count
        }
    
    def _chunk_text(self, text: str) -> List[str]:
        """Chunk text into smaller pieces"""
        sentences = [s.strip() for s in text.split('.') if s.strip()]
        chunks = []
        current_chunk = ''
        
        for sentence in sentences:
            if len(current_chunk) + len(sentence) > self.config.MAX_CHUNK_SIZE and current_chunk:
                chunks.append(current_chunk.strip())
                
                # Add overlap
                words = current_chunk.split()
                overlap_words = words[-self.config.CHUNK_OVERLAP//10:]
                current_chunk = ' '.join(overlap_words) + ' ' + sentence
            else:
                current_chunk += (' ' if current_chunk else '') + sentence
        
        if current_chunk.strip():
            chunks.append(current_chunk.strip())
            
        return chunks
    
    def _fallback_search(self, query: str) -> List[str]:
        """Fallback search using keyword matching"""
        fallback_knowledge = [
            "Suresh Beekhani is an experienced AI developer specializing in machine learning, deep learning, and AI system architecture.",
            "Suresh offers AI services including chatbot development, computer vision, NLP, and predictive modeling.",
            "He has worked on projects in healthcare, legal tech, e-commerce, and fintech industries.",
            "You can contact Suresh through his website contact form or LinkedIn."
        ]
        
        query_words = query.lower().split()
        query_words = [w for w in query_words if len(w) > 2]
        
        relevant = []
        for knowledge in fallback_knowledge:
            knowledge_lower = knowledge.lower()
            if any(word in knowledge_lower for word in query_words):
                relevant.append(knowledge)
        
        return relevant

# Global instance
vector_store = VectorStore()