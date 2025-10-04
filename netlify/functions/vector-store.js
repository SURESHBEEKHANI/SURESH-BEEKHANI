import { Pinecone } from '@pinecone-database/pinecone';
import { config } from './config.js';
import { embeddingService } from './embeddings.js';
import { RetryHandler } from './retry-handler.js';
import { serviceHealth } from './service-health.js';

class VectorStore {
  constructor() {
    if (config.PINECONE_API_KEY) {
      this.pc = new Pinecone({
        apiKey: config.PINECONE_API_KEY,
      });
      // Access the 'pdf' namespace where the data is stored
      this.index = this.pc.index(config.PINECONE_INDEX_NAME).namespace('pdf');
    }
  }

  validateConnection() {
    if (!config.PINECONE_API_KEY) {
      console.error('Pinecone API key is missing');
      return false;
    }
    if (!this.index) {
      console.error('Pinecone index not initialized');
      return false;
    }
    return true;
  }

  async search(query, topK = null) {
    if (topK === null) {
      topK = config.TOP_K;
    }

    try {
      // Validate connection
      if (!this.validateConnection()) {
        console.warn('Pinecone not available, returning empty context');
        return [];
      }

      // Get query embedding
      const queryEmbedding = await embeddingService.getEmbedding(query);

      // Validate embedding dimension
      if (queryEmbedding.length !== config.EMBEDDING_DIMENSION) {
        console.error(`Embedding dimension mismatch: expected ${config.EMBEDDING_DIMENSION}, got ${queryEmbedding.length}`);
        return [];
      }

      // Search with retry
      const searchResponse = await this.searchWithRetry(queryEmbedding, topK);

      // Filter and extract contexts
      const contexts = this.filterByRelevance(searchResponse.matches || []);

      serviceHealth.recordSuccess('pinecone');
      return contexts;

    } catch (error) {
      console.error('Error searching Pinecone:', error.message);
      serviceHealth.recordFailure('pinecone', error);
      return [];
    }
  }

  async searchWithRetry(queryEmbedding, topK) {
    const operation = async () => {
      return await this.index.query({
        vector: queryEmbedding,
        topK: topK,
        includeMetadata: true
      });
    };

    return await RetryHandler.withRetry(operation, {
      maxRetries: 1,
      baseDelay: 300,
      maxDelay: 1000,
      timeout: 8000,
      onRetry: (attempt, error) => {
        console.log(`Retrying Pinecone query (attempt ${attempt}): ${error.message}`);
      }
    });
  }

  filterByRelevance(matches) {
    const contexts = [];
    for (const match of matches) {
      if (match.score > config.SIMILARITY_THRESHOLD) {
        const text = match.metadata?.text;
        if (text) {
          contexts.push(text);
        }
      }
    }
    return contexts;
  }

  async upsertDocuments(documents) {
    const vectors = [];

    for (let docIdx = 0; docIdx < documents.length; docIdx++) {
      const doc = documents[docIdx];
      const text = doc.text || '';
      const metadata = doc.metadata || {};

      if (!text) {
        console.warn(`Skipping document ${docIdx}: no text provided`);
        continue;
      }

      // Chunk the text
      const chunks = this.chunkText(text);

      // Create vectors for each chunk
      for (let chunkIdx = 0; chunkIdx < chunks.length; chunkIdx++) {
        const chunk = chunks[chunkIdx];
        try {
          const embedding = await embeddingService.getEmbedding(chunk);

          const vectorId = `doc_${docIdx}_chunk_${chunkIdx}_${this.hashString(chunk)}`;

          vectors.push({
            id: vectorId,
            values: embedding,
            metadata: {
              ...metadata,
              text: chunk,
              chunk_index: chunkIdx,
              total_chunks: chunks.length,
              document_index: docIdx
            }
          });
        } catch (error) {
          console.error(`Error processing chunk ${chunkIdx} of document ${docIdx}:`, error);
        }
      }
    }

    if (vectors.length === 0) {
      throw new Error("No valid vectors generated");
    }

    // Upsert in batches
    const batchSize = 100;
    let upsertedCount = 0;

    for (let i = 0; i < vectors.length; i += batchSize) {
      const batch = vectors.slice(i, i + batchSize);
      try {
        await this.index.upsert(batch);
        upsertedCount += batch.length;
        console.log(`Upserted batch ${Math.floor(i / batchSize) + 1}, total: ${upsertedCount}`);
      } catch (error) {
        console.error(`Error upserting batch ${Math.floor(i / batchSize) + 1}:`, error);
      }
    }

    return {
      documents_processed: documents.length,
      vectors_created: vectors.length,
      vectors_upserted: upsertedCount
    };
  }

  fallbackSearch(query) {
    const fallbackKnowledge = [
      "Suresh Beekhani is an experienced AI developer specializing in machine learning, deep learning, and AI system architecture.",
      "Suresh offers AI services including chatbot development, computer vision, NLP, and predictive modeling.",
      "He has worked on projects in healthcare, legal tech, e-commerce, and fintech industries.",
      "You can contact Suresh through his website contact form or LinkedIn."
    ];

    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const relevant = [];

    for (const knowledge of fallbackKnowledge) {
      const knowledgeLower = knowledge.toLowerCase();
      if (queryWords.some(word => knowledgeLower.includes(word))) {
        relevant.push(knowledge);
      }
    }

    return relevant;
  }

  chunkText(text) {
    const sentences = text.split('.').map(s => s.trim()).filter(s => s);
    const chunks = [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if (currentChunk.length + sentence.length > config.MAX_CHUNK_SIZE && currentChunk) {
        chunks.push(currentChunk.trim());

        // Add overlap
        const words = currentChunk.split(' ');
        const overlapWords = words.slice(-Math.floor(config.CHUNK_OVERLAP / 10));
        currentChunk = overlapWords.join(' ') + ' ' + sentence;
      } else {
        currentChunk += (currentChunk ? ' ' : '') + sentence;
      }
    }

    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  }

  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }
}

export const vectorStore = new VectorStore();