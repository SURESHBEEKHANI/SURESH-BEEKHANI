import { Pinecone } from '@pinecone-database/pinecone';
import { config } from './config.js';
import { embeddingService } from './embeddings.js';
import { RetryHandler } from './retry-handler.js';

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
      if (!this.validateConnection()) {
        console.warn('Pinecone not available, returning empty context');
        return [];
      }

      console.log('[Pinecone] Searching with query:', query.substring(0, 50));

      // Get query embedding
      const queryEmbedding = await embeddingService.getEmbedding(query);
      console.log('[Pinecone] Generated embedding, dimension:', queryEmbedding.length);

      if (queryEmbedding.length !== config.EMBEDDING_DIMENSION) {
        console.error(`Embedding dimension mismatch: expected ${config.EMBEDDING_DIMENSION}, got ${queryEmbedding.length}`);
        return [];
      }

      // Search with retry
      const searchResponse = await this.searchWithRetry(queryEmbedding, topK);
      console.log('[Pinecone] Search response - matches:', searchResponse.matches?.length || 0);

      // Filter and extract contexts
      const contexts = this.filterByRelevance(searchResponse.matches || []);
      console.log('[Pinecone] Filtered contexts:', contexts.length);

      if (contexts.length > 0) {
        console.log('[Pinecone] ✓ Found relevant context');
      } else {
        console.warn('[Pinecone] ✗ No relevant context found (threshold:', config.SIMILARITY_THRESHOLD, ')');
      }

      return contexts;

    } catch (error) {
      console.error('[Pinecone] Error searching:', error.message);
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
      maxRetries: config.RETRY_MAX_ATTEMPTS || 2,     // ✅ use config value
      baseDelay: config.RETRY_BASE_DELAY || 300,
      maxDelay: config.RETRY_MAX_DELAY || 1000,
      timeout: config.REQUEST_TIMEOUT || 8000        // ✅ use config value
    });
  }

  filterByRelevance(matches) {
    const contexts = [];
    
    if (matches.length > 0) {
      console.log('[Pinecone] Match scores:', matches.map(m => m.score.toFixed(3)).join(', '));
    }
    
    for (const match of matches) {
      if (match.score > config.SIMILARITY_THRESHOLD) {
        let text = match.metadata?.text;
        if (text) {
          // ✅ Trim context length to avoid token explosion
          if (text.length > 2000) {
            text = text.substring(0, 2000) + '... [truncated]';
          }
          contexts.push(text);
        }
      }
    }
    return contexts;
  }

  async getIndexStats() {
    try {
      if (!this.validateConnection()) {
        throw new Error('Pinecone connection not available');
      }

      const stats = await this.pc.index(config.PINECONE_INDEX_NAME).describeIndexStats();
      return stats;
    } catch (error) {
      console.error('[Pinecone] Error getting index stats:', error.message);
      throw error;
    }
  }
}

export const vectorStore = new VectorStore();
export { VectorStore };
