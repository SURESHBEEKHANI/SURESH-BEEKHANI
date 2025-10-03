/**
 * Data Ingestion Configuration
 */

export const ingestionConfig = {
  // Pinecone settings
  pinecone: {
    indexName: process.env.PINECONE_INDEX_NAME || 'towering',
    namespace: 'documents',
    environment: process.env.PINECONE_ENVIRONMENT || 'us-east-1'
  },

  // Text processing settings
  textProcessing: {
    chunkSize: 1000,
    chunkOverlap: 200,
    separators: ['\n\n', '\n', '. ', ' ', '']
  },

  // Embedding settings
  embeddings: {
    model: 'sentence-transformers/all-MiniLM-L6-v2',
    dimensions: 384,
    device: 'cpu',
    normalize: true
  },

  // File processing settings
  files: {
    inputDir: './data-ingestion/data',
    processedDir: './data-ingestion/processed',
    supportedExtensions: ['.pdf'],
    maxFileSize: 50 * 1024 * 1024, // 50MB
    batchSize: 5 // Process 5 files at a time
  },

  // Logging settings
  logging: {
    level: 'info',
    logFile: './data-ingestion/logs/ingestion.log'
  }
};

export default ingestionConfig;