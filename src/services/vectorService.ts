
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { Document } from "langchain/document";
import { pipeline } from "@huggingface/transformers";

// This class manages the vector database and embeddings
export class VectorService {
  private vectorStore: MemoryVectorStore | null = null;
  private embeddingModel: any = null;
  private isInitialized = false;
  
  // Initialize the embedding model and vector store
  public async initialize() {
    if (this.isInitialized) return;
    
    try {
      console.log("Initializing vector service...");
      
      // Create embedding model using Hugging Face Transformers.js
      this.embeddingModel = await pipeline(
        "feature-extraction",
        "mixedbread-ai/mxbai-embed-xsmall-v1"
      );
      
      // Create a custom embedding function
      const embedFunction = async (texts: string[]) => {
        const embeddings = await this.embeddingModel(texts, { 
          pooling: "mean", 
          normalize: true 
        });
        return embeddings.tolist();
      };
      
      // Initialize the vector store with our embedding function
      this.vectorStore = new MemoryVectorStore({
        embeddings: {
          embedDocuments: async (documents: string[]) => embedFunction(documents),
          embedQuery: async (query: string) => (await embedFunction([query]))[0],
        }
      });
      
      this.isInitialized = true;
      console.log("Vector service initialized successfully");
      return true;
    } catch (error) {
      console.error("Error initializing vector service:", error);
      return false;
    }
  }
  
  // Add documents to the vector store
  public async addDocuments(documents: { text: string; metadata?: Record<string, any> }[]) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    if (!this.vectorStore) {
      throw new Error("Vector store not initialized");
    }
    
    const docs = documents.map(
      (doc) => new Document({ pageContent: doc.text, metadata: doc.metadata || {} })
    );
    
    await this.vectorStore.addDocuments(docs);
    return true;
  }
  
  // Search similar documents based on a query
  public async similaritySearch(query: string, k = 4) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    if (!this.vectorStore) {
      throw new Error("Vector store not initialized");
    }
    
    const results = await this.vectorStore.similaritySearch(query, k);
    return results;
  }
}

// Singleton instance
export const vectorService = new VectorService();
