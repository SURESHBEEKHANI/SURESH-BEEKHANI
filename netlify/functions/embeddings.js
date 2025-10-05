import { config } from './config.js';
import { RetryHandler } from './retry-handler.js';

class EmbeddingService {
  constructor() {
    this.model = null;
  }

  async getEmbedding(text) {
    // Try HuggingFace API first
    if (config.HUGGINGFACE_API_KEY) {
      try {
        const embedding = await this.getEmbeddingWithHuggingFace(text);
        if (this.validateEmbedding(embedding)) {
          return embedding;
        }
      } catch (error) {
        console.warn('HuggingFace embedding failed, using fallback:', error.message);
      }
    }

    // Fallback to simple embedding if HuggingFace fails
    console.warn('Using fallback embeddings - results may be less accurate');
    return this.fallbackEmbedding(text);
  }

  async getEmbeddingWithHuggingFace(text) {
    const operation = async () => {
      // Use paraphrase model which supports feature extraction
      const response = await fetch('https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-MiniLM-L6-v2', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: text,
          options: { wait_for_model: true }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('HuggingFace error response:', errorText);
        const error = new Error(`HuggingFace API error: ${response.statusText}`);
        error.status = response.status;
        throw error;
      }

      const data = await response.json();

      // Response format varies, handle both
      let embedding;
      if (Array.isArray(data) && Array.isArray(data[0])) {
        embedding = data[0]; // Nested array
      } else if (Array.isArray(data)) {
        embedding = data; // Direct array
      } else {
        throw new Error('Unexpected response format');
      }

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

    // Use TF-IDF-like approach for better matching
    const wordFreq = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    // Create embedding based on word frequencies and positions
    Object.entries(wordFreq).forEach(([word, freq]) => {
      // Use multiple hash functions for better distribution
      for (let i = 0; i < 3; i++) {
        const hash = this.hashString(word + i) % config.EMBEDDING_DIMENSION;
        embedding[hash] += freq * (1 / (i + 1));
      }
    });

    // Normalize
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    if (magnitude > 0) {
      return embedding.map(val => val / magnitude);
    }

    return embedding;
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

export const embeddingService = new EmbeddingService();
