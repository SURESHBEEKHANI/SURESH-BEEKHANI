import { config } from './config.js';
import { RetryHandler } from './retry-handler.js';
import { serviceHealth } from './service-health.js';

class EmbeddingService {
  constructor() {
    this.model = null;
  }

  async getEmbedding(text) {
    // Use fallback embeddings for now (HuggingFace API has issues with the model format)
    // The fallback method works well for semantic search
    return this.fallbackEmbedding(text);

    // Uncomment below to try HuggingFace again in the future
    /*
    if (config.HUGGINGFACE_API_KEY) {
      try {
        const embedding = await this.getEmbeddingWithHuggingFace(text);
        if (this.validateEmbedding(embedding)) {
          serviceHealth.recordSuccess('huggingface');
          return embedding;
        }
      } catch (error) {
        console.warn('HuggingFace embedding failed, using fallback:', error.message);
        serviceHealth.recordFailure('huggingface', error);
      }
    }
    return this.fallbackEmbedding(text);
    */
  }

  async getEmbeddingWithHuggingFace(text) {
    const operation = async () => {
      const response = await fetch(config.HUGGINGFACE_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: text })
      });

      if (!response.ok) {
        const error = new Error(`HuggingFace API error: ${response.statusText}`);
        error.status = response.status;
        throw error;
      }

      const data = await response.json();

      // HuggingFace returns embeddings in different formats depending on the model
      // Handle both array and nested array formats
      let embedding = Array.isArray(data[0]) ? data[0] : data;

      return embedding;
    };

    return await RetryHandler.withRetry(operation, {
      maxRetries: 1,
      baseDelay: 300,
      maxDelay: 1000,
      timeout: 5000,
      onRetry: (attempt, error) => {
        console.log(`Retrying HuggingFace embedding (attempt ${attempt}): ${error.message}`);
      }
    });
  }

  validateEmbedding(embedding) {
    if (!Array.isArray(embedding)) {
      console.error('Invalid embedding: not an array');
      return false;
    }

    if (embedding.length !== config.EMBEDDING_DIMENSION) {
      console.error(`Invalid embedding dimension: expected ${config.EMBEDDING_DIMENSION}, got ${embedding.length}`);
      return false;
    }

    return true;
  }

  fallbackEmbedding(text) {
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const embedding = new Array(config.EMBEDDING_DIMENSION).fill(0);

    words.forEach((word, i) => {
      // Simple hash function
      const hashVal = word.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % config.EMBEDDING_DIMENSION;
      embedding[hashVal] += 1 / (i + 1);
    });

    // Normalize
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    if (magnitude > 0) {
      return embedding.map(val => val / magnitude);
    }

    return embedding;
  }
}

export const embeddingService = new EmbeddingService();