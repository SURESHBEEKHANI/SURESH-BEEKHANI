import { HuggingFaceTransformersEmbeddings } from '@langchain/community/embeddings/hf_transformers';
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';
import { Document } from '@langchain/core/documents';

export interface EmbeddingConfig {
  modelName: string;
  dimensions: number;
  maxTokens: number;
  batchSize: number;
}

export interface VectorSearchOptions {
  topK?: number;
  namespace?: string;
  filter?: Record<string, any>;
  includeMetadata?: boolean;
}

export interface VectorSearchResult {
  content: string;
  score: number;
  metadata: Record<string, any>;
}

export class EmbeddingService {
  private static instance: EmbeddingService;
  private embeddings: HuggingFaceTransformersEmbeddings;
  private pinecone: Pinecone | null = null;
  private config: EmbeddingConfig;

  private constructor() {
    // Using all-MiniLM-L6-v2 - a popular, efficient sentence transformer
    // 384 dimensions, good balance of performance and speed
    this.config = {
      modelName: 'sentence-transformers/all-MiniLM-L6-v2',
      dimensions: 384,
      maxTokens: 512,
      batchSize: 32
    };

    this.embeddings = new HuggingFaceTransformersEmbeddings({
      modelName: this.config.modelName,
    });
  }

  public static getInstance(): EmbeddingService {
    if (!EmbeddingService.instance) {
      EmbeddingService.instance = new EmbeddingService();
    }
    return EmbeddingService.instance;
  }

  /**
   * Initialize Pinecone connection
   */
  public async initializePinecone(apiKey: string): Promise<void> {
    try {
      this.pinecone = new Pinecone({ apiKey });
      console.log('Pinecone initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Pinecone:', error);
      throw new Error('Pinecone initialization failed');
    }
  }

  /**
   * Get embeddings for a single text
   */
  public async embedText(text: string): Promise<number[]> {
    try {
      const embedding = await this.embeddings.embedQuery(text);
      return embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw new Error('Failed to generate embedding');
    }
  }

  /**
   * Get embeddings for multiple texts
   */
  public async embedTexts(texts: string[]): Promise<number[][]> {
    try {
      const embeddings = await this.embeddings.embedDocuments(texts);
      return embeddings;
    } catch (error) {
      console.error('Error generating embeddings:', error);
      throw new Error('Failed to generate embeddings');
    }
  }

  /**
   * Store documents in Pinecone vector database
   */
  public async storeDocuments(
    documents: Document[],
    indexName: string,
    namespace?: string
  ): Promise<void> {
    if (!this.pinecone) {
      throw new Error('Pinecone not initialized');
    }

    try {
      const index = this.pinecone.Index(indexName);

      await PineconeStore.fromDocuments(
        documents,
        this.embeddings,
        {
          pineconeIndex: index,
          namespace: namespace || 'default',
        }
      );

      console.log(`Stored ${documents.length} documents in Pinecone`);
    } catch (error) {
      console.error('Error storing documents:', error);
      throw new Error('Failed to store documents in vector database');
    }
  }

  /**
   * Perform similarity search in Pinecone
   */
  public async similaritySearch(
    query: string,
    indexName: string,
    options: VectorSearchOptions = {}
  ): Promise<VectorSearchResult[]> {
    if (!this.pinecone) {
      throw new Error('Pinecone not initialized');
    }

    const {
      topK = 5,
      namespace = 'default',
      filter,
      includeMetadata = true
    } = options;

    try {
      const index = this.pinecone.Index(indexName);

      const vectorStore = await PineconeStore.fromExistingIndex(
        this.embeddings,
        {
          pineconeIndex: index,
          namespace,
        }
      );

      const searchResults = await vectorStore.similaritySearchWithScore(
        query,
        topK,
        filter
      );

      return searchResults.map(([doc, score]) => ({
        content: doc.pageContent,
        score,
        metadata: includeMetadata ? doc.metadata : {}
      }));

    } catch (error) {
      console.error('Error performing similarity search:', error);
      throw new Error('Failed to perform similarity search');
    }
  }

  /**
   * Get vector store instance for advanced operations
   */
  public async getVectorStore(
    indexName: string,
    namespace?: string
  ): Promise<PineconeStore> {
    if (!this.pinecone) {
      throw new Error('Pinecone not initialized');
    }

    const index = this.pinecone.Index(indexName);

    return await PineconeStore.fromExistingIndex(
      this.embeddings,
      {
        pineconeIndex: index,
        namespace: namespace || 'default',
      }
    );
  }

  /**
   * Delete documents from namespace
   */
  public async deleteNamespace(
    indexName: string,
    namespace: string
  ): Promise<void> {
    if (!this.pinecone) {
      throw new Error('Pinecone not initialized');
    }

    try {
      const index = this.pinecone.Index(indexName);
      await index.namespace(namespace).deleteAll();
      console.log(`Deleted all documents from namespace: ${namespace}`);
    } catch (error) {
      console.error('Error deleting namespace:', error);
      throw new Error('Failed to delete namespace');
    }
  }

  /**
   * Get index statistics
   */
  public async getIndexStats(indexName: string): Promise<any> {
    if (!this.pinecone) {
      throw new Error('Pinecone not initialized');
    }

    try {
      const index = this.pinecone.Index(indexName);
      const stats = await index.describeIndexStats();
      return stats;
    } catch (error) {
      console.error('Error getting index stats:', error);
      throw new Error('Failed to get index statistics');
    }
  }

  /**
   * Get embedding configuration
   */
  public getConfig(): EmbeddingConfig {
    return { ...this.config };
  }

  /**
   * Update embedding model (requires reinitialization)
   */
  public updateModel(modelName: string, dimensions: number): void {
    this.config.modelName = modelName;
    this.config.dimensions = dimensions;

    this.embeddings = new HuggingFaceTransformersEmbeddings({
      modelName: this.config.modelName,
    });

    console.log(`Updated embedding model to: ${modelName}`);
  }

  /**
   * Test embedding generation
   */
  public async testEmbedding(): Promise<boolean> {
    try {
      const testText = "This is a test sentence for embedding generation.";
      const embedding = await this.embedText(testText);

      return Array.isArray(embedding) &&
        embedding.length === this.config.dimensions &&
        embedding.every(val => typeof val === 'number');
    } catch (error) {
      console.error('Embedding test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const embeddingService = EmbeddingService.getInstance();

// Export commonly used embedding models
// Single embedding model configuration
export const EMBEDDING_MODEL = {
  name: 'sentence-transformers/all-MiniLM-L6-v2',
  dimensions: 384,
  description: 'Fast and efficient embedding model'
} as const;

export default EmbeddingService;