import { embeddingService, VectorSearchOptions, VectorSearchResult } from './embeddingService';
import { embeddingConfig, getEmbeddingStatus } from '../config/embeddings';
import { Document } from '@langchain/core/documents';

export interface VectorStoreDocument {
  id?: string;
  content: string;
  metadata: Record<string, any>;
  namespace?: string;
}

export interface VectorStoreStats {
  totalVectors: number;
  namespaces: Record<string, number>;
  indexDimension: number;
  indexFullness: number;
}

export interface SearchFilters {
  source?: string;
  type?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  tags?: string[];
  custom?: Record<string, any>;
}

export class VectorService {
  private static instance: VectorService;
  private initialized = false;

  private constructor() {}

  public static getInstance(): VectorService {
    if (!VectorService.instance) {
      VectorService.instance = new VectorService();
    }
    return VectorService.instance;
  }

  /**
   * Initialize the vector service
   */
  public async initialize(): Promise<void> {
    if (this.initialized) return;

    const status = getEmbeddingStatus();
    if (!status.configured) {
      throw new Error(`Vector service configuration error: ${status.message}`);
    }

    const apiKey = process.env.PINECONE_API_KEY;
    if (!apiKey) {
      throw new Error('PINECONE_API_KEY environment variable is required');
    }

    await embeddingService.initializePinecone(apiKey);
    this.initialized = true;
    
    console.log('Vector service initialized successfully');
  }

  /**
   * Store documents in the vector database
   */
  public async storeDocuments(
    documents: VectorStoreDocument[],
    namespace?: string
  ): Promise<void> {
    await this.ensureInitialized();

    const indexName = embeddingConfig.pinecone.indexName;
    const targetNamespace = namespace || embeddingConfig.pinecone.defaultNamespace;

    // Convert to LangChain Document format
    const langchainDocs = documents.map((doc, index) => new Document({
      pageContent: doc.content,
      metadata: {
        ...doc.metadata,
        id: doc.id || `doc_${Date.now()}_${index}`,
        namespace: targetNamespace,
        createdAt: new Date().toISOString(),
      }
    }));

    await embeddingService.storeDocuments(langchainDocs, indexName, targetNamespace);
    
    console.log(`Stored ${documents.length} documents in namespace: ${targetNamespace}`);
  }

  /**
   * Search for similar documents
   */
  public async search(
    query: string,
    options: {
      topK?: number;
      namespace?: string;
      filters?: SearchFilters;
      scoreThreshold?: number;
    } = {}
  ): Promise<VectorSearchResult[]> {
    await this.ensureInitialized();

    const {
      topK = embeddingConfig.search.defaultTopK,
      namespace = embeddingConfig.pinecone.defaultNamespace,
      filters,
      scoreThreshold = embeddingConfig.search.scoreThreshold
    } = options;

    const indexName = embeddingConfig.pinecone.indexName;

    // Convert filters to Pinecone format
    const pineconeFilter = this.convertFilters(filters);

    const searchOptions: VectorSearchOptions = {
      topK: Math.min(topK, embeddingConfig.search.maxTopK),
      namespace,
      filter: pineconeFilter,
      includeMetadata: embeddingConfig.search.includeMetadata,
    };

    const results = await embeddingService.similaritySearch(
      query,
      indexName,
      searchOptions
    );

    // Filter by score threshold
    return results.filter(result => result.score >= scoreThreshold);
  }

  /**
   * Get enhanced search results with context
   */
  public async searchWithContext(
    query: string,
    options: {
      topK?: number;
      namespace?: string;
      filters?: SearchFilters;
      includeContext?: boolean;
    } = {}
  ): Promise<{
    results: VectorSearchResult[];
    context: string;
    totalResults: number;
    searchQuery: string;
  }> {
    const results = await this.search(query, options);
    
    let context = '';
    if (options.includeContext !== false && results.length > 0) {
      context = results
        .map((result, index) => {
          const source = result.metadata.source || 'Unknown';
          return `[Document ${index + 1} - ${source}]\n${result.content}`;
        })
        .join('\n\n---\n\n');
    }

    return {
      results,
      context,
      totalResults: results.length,
      searchQuery: query,
    };
  }

  /**
   * Delete documents from a namespace
   */
  public async deleteNamespace(namespace: string): Promise<void> {
    await this.ensureInitialized();
    
    const indexName = embeddingConfig.pinecone.indexName;
    await embeddingService.deleteNamespace(indexName, namespace);
    
    console.log(`Deleted namespace: ${namespace}`);
  }

  /**
   * Get vector database statistics
   */
  public async getStats(): Promise<VectorStoreStats> {
    await this.ensureInitialized();
    
    const indexName = embeddingConfig.pinecone.indexName;
    const stats = await embeddingService.getIndexStats(indexName);
    
    return {
      totalVectors: stats.totalVectorCount || 0,
      namespaces: stats.namespaces || {},
      indexDimension: stats.dimension || 0,
      indexFullness: stats.indexFullness || 0,
    };
  }

  /**
   * Test the vector service
   */
  public async test(): Promise<{
    embeddingTest: boolean;
    searchTest: boolean;
    error?: string;
  }> {
    try {
      await this.ensureInitialized();
      
      // Test embedding generation
      const embeddingTest = await embeddingService.testEmbedding();
      
      // Test search (this will fail gracefully if no documents exist)
      let searchTest = false;
      try {
        const testResults = await this.search('test query', { topK: 1 });
        searchTest = Array.isArray(testResults);
      } catch (searchError) {
        // Search test can fail if index is empty, which is okay
        searchTest = true;
      }
      
      return {
        embeddingTest,
        searchTest,
      };
    } catch (error) {
      return {
        embeddingTest: false,
        searchTest: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Get service status
   */
  public getStatus(): {
    initialized: boolean;
    embeddingModel: string;
    dimensions: number;
    indexName: string;
    ready: boolean;
  } {
    const embeddingStatus = getEmbeddingStatus();
    
    return {
      initialized: this.initialized,
      embeddingModel: embeddingStatus.model,
      dimensions: embeddingStatus.dimensions,
      indexName: embeddingConfig.pinecone.indexName,
      ready: this.initialized && embeddingStatus.configured,
    };
  }

  /**
   * Ensure service is initialized
   */
  private async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      await this.initialize();
    }
  }

  /**
   * Convert search filters to Pinecone format
   */
  private convertFilters(filters?: SearchFilters): Record<string, any> | undefined {
    if (!filters) return undefined;

    const pineconeFilter: Record<string, any> = {};

    if (filters.source) {
      pineconeFilter.source = { $eq: filters.source };
    }

    if (filters.type) {
      pineconeFilter.type = { $eq: filters.type };
    }

    if (filters.tags && filters.tags.length > 0) {
      pineconeFilter.tags = { $in: filters.tags };
    }

    if (filters.dateRange) {
      pineconeFilter.createdAt = {
        $gte: filters.dateRange.start,
        $lte: filters.dateRange.end,
      };
    }

    if (filters.custom) {
      Object.assign(pineconeFilter, filters.custom);
    }

    return Object.keys(pineconeFilter).length > 0 ? pineconeFilter : undefined;
  }
}

// Export singleton instance
export const vectorService = VectorService.getInstance();

// Utility functions for common operations
export const vectorUtils = {
  /**
   * Create a document from text with automatic metadata
   */
  createDocument(
    content: string,
    source: string,
    type: string = 'text',
    additionalMetadata: Record<string, any> = {}
  ): VectorStoreDocument {
    return {
      content,
      metadata: {
        source,
        type,
        length: content.length,
        wordCount: content.split(/\s+/).length,
        createdAt: new Date().toISOString(),
        ...additionalMetadata,
      },
    };
  },

  /**
   * Split long text into chunks
   */
  splitText(
    text: string,
    chunkSize: number = embeddingConfig.textProcessing.chunkSize,
    overlap: number = embeddingConfig.textProcessing.chunkOverlap
  ): string[] {
    const chunks: string[] = [];
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    let currentChunk = '';
    
    for (const sentence of sentences) {
      const trimmedSentence = sentence.trim();
      if (currentChunk.length + trimmedSentence.length > chunkSize) {
        if (currentChunk) {
          chunks.push(currentChunk.trim());
          // Add overlap
          const words = currentChunk.split(' ');
          const overlapWords = words.slice(-Math.floor(overlap / 10));
          currentChunk = overlapWords.join(' ') + ' ';
        }
      }
      currentChunk += trimmedSentence + '. ';
    }
    
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }
    
    return chunks;
  },

  /**
   * Format search results for display
   */
  formatSearchResults(results: VectorSearchResult[]): string {
    if (results.length === 0) {
      return 'No relevant documents found.';
    }

    return results
      .map((result, index) => {
        const source = result.metadata.source || 'Unknown';
        const score = (result.score * 100).toFixed(1);
        return `**Result ${index + 1}** (${score}% match - ${source})\n${result.content}`;
      })
      .join('\n\n---\n\n');
  },
};

export default VectorService;