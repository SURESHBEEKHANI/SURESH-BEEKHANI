// Embedding configuration for Hugging Face models with Pinecone

export interface EmbeddingModelConfig {
  name: string;
  dimensions: number;
  maxTokens: number;
  description: string;
  performance: 'fast' | 'balanced' | 'high-quality';
  multilingual: boolean;
}

// Single embedding model configuration
export const EMBEDDING_MODEL: EmbeddingModelConfig = {
  name: 'sentence-transformers/all-MiniLM-L6-v2',
  dimensions: 384,
  maxTokens: 512,
  description: 'Fast and efficient embedding model',
  performance: 'fast',
  multilingual: false,
};

// Current embedding configuration
export const embeddingConfig = {
  // Single model configuration
  model: EMBEDDING_MODEL,

  // Pinecone configuration
  pinecone: {
    environment: process.env.PINECONE_ENVIRONMENT || 'us-east-1-aws',
    indexName: process.env.PINECONE_INDEX_NAME || 'suresh-ai-knowledge',
    defaultNamespace: 'default',

    // Index configuration for all-MiniLM-L6-v2
    indexConfig: {
      dimension: 384,
      metric: 'cosine',
      pods: 1,
      replicas: 1,
      pod_type: 'p1.x1',
    },
  },

  // Text processing configuration
  textProcessing: {
    chunkSize: 1000,
    chunkOverlap: 200,
    separators: ['\n\n', '\n', '. ', '! ', '? ', ' ', ''],
    maxChunksPerDocument: 100,
  },

  // Search configuration
  search: {
    defaultTopK: 5,
    maxTopK: 20,
    scoreThreshold: 0.7, // Minimum similarity score
    includeMetadata: true,
  },

  // Performance settings
  performance: {
    batchSize: 32, // Number of texts to embed in one batch
    maxConcurrentRequests: 5,
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
  },
} as const;

// Get current model configuration
export function getCurrentModelConfig(): EmbeddingModelConfig {
  return embeddingConfig.model;
}

// Validate Pinecone index configuration
export function validatePineconeConfig(): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!process.env.PINECONE_API_KEY) {
    errors.push('PINECONE_API_KEY environment variable is required');
  }

  if (!process.env.PINECONE_INDEX_NAME) {
    errors.push('PINECONE_INDEX_NAME environment variable is required');
  }

  const currentModel = getCurrentModelConfig();
  if (!currentModel) {
    errors.push(`Invalid embedding model configuration`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Get embedding status
export function getEmbeddingStatus(): {
  configured: boolean;
  model: string;
  dimensions: number;
  pineconeReady: boolean;
  message: string;
} {
  const validation = validatePineconeConfig();
  const currentModel = getCurrentModelConfig();

  return {
    configured: validation.valid,
    model: currentModel?.name || 'Unknown',
    dimensions: currentModel?.dimensions || 0,
    pineconeReady: validation.valid,
    message: validation.valid
      ? `Embeddings configured with ${currentModel.name} (${currentModel.dimensions}D)`
      : `Configuration issues: ${validation.errors.join(', ')}`,
  };
}

// Get the single embedding model
export function getEmbeddingModel(): EmbeddingModelConfig {
  return EMBEDDING_MODEL;
}

export default embeddingConfig;