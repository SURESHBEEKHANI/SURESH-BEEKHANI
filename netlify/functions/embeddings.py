import numpy as np
from sentence_transformers import SentenceTransformer
from typing import List
import logging
from config import Config

logger = logging.getLogger(__name__)

class EmbeddingService:
    def __init__(self):
        self.model = None
        self.config = Config()
        
    def _initialize_model(self):
        """Initialize the sentence transformer model"""
        if self.model is None:
            try:
                logger.info(f"Loading embedding model: {self.config.EMBEDDING_MODEL}")
                self.model = SentenceTransformer(self.config.EMBEDDING_MODEL)
                logger.info("Embedding model loaded successfully")
            except Exception as e:
                logger.error(f"Error loading embedding model: {e}")
                raise
    
    def get_embedding(self, text: str) -> List[float]:
        """Generate embedding for a single text"""
        try:
            self._initialize_model()
            embedding = self.model.encode(text, normalize_embeddings=True)
            return embedding.tolist()
        except Exception as e:
            logger.error(f"Error generating embedding: {e}")
            # Fallback to simple hash embedding
            return self._fallback_embedding(text)
    
    def _fallback_embedding(self, text: str) -> List[float]:
        """Simple hash-based embedding as fallback"""
        words = text.lower().split()
        words = [w for w in words if len(w) > 2]
        
        embedding = np.zeros(self.config.EMBEDDING_DIMENSION)
        
        for i, word in enumerate(words):
            # Simple hash function
            hash_val = sum(ord(c) for c in word) % self.config.EMBEDDING_DIMENSION
            embedding[hash_val] += 1 / (i + 1)
        
        # Normalize
        magnitude = np.linalg.norm(embedding)
        if magnitude > 0:
            embedding = embedding / magnitude
            
        return embedding.tolist()

# Global instance
embedding_service = EmbeddingService()