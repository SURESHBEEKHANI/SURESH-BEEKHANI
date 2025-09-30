import "dotenv/config";
import express from "express";
import cors from "cors";

// LangChain imports
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { ChatGroq } from "@langchain/groq";
import { RetrievalQAChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";
import type { Document } from "langchain/document";

// Configuration constants
const DEFAULT_PORT = 5757;
const DEFAULT_RETRIEVAL_K = 5;
const DEFAULT_TEMPERATURE = 0.2;
const DEFAULT_EMBEDDING_DIMENSION = 384;
const DEFAULT_PROCESSING_TIME_MIN = 20;
const DEFAULT_PROCESSING_TIME_MAX = 60;

// Environment variables
const PORT = Number(process.env.RAG_PORT || process.env.VITE_RAG_PORT || DEFAULT_PORT);
const PINECONE_INDEX = process.env.PINECONE_INDEX;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const HF_TOKEN = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;

// Model configuration
const EMBEDDING_MODEL = "Xenova/bge-small-en-v1.5";
const LLM_MODEL = "openai/gpt-oss-120b";


// Namespace configuration
const NAMESPACES = ["portfolio", "projects", "industries", "services"] as const;
const DEFAULT_NAMESPACE = "default";

// Normalize HF token env for transformers.js
if (HF_TOKEN) {
  process.env.HUGGING_FACE_HUB_TOKEN = HF_TOKEN;
  process.env.HF_TOKEN = HF_TOKEN;
}

const USE_MOCK = !PINECONE_API_KEY || !GROQ_API_KEY || !PINECONE_INDEX;
if (USE_MOCK) {
  console.warn("⚠️ Missing API keys (PINECONE_API_KEY or GROQ_API_KEY). Starting RAG server in MOCK mode for development.");
}

// Type definitions
interface ChainMap {
  [namespace: string]: RetrievalQAChain;
}

interface QueryResponse {
  answer: string;
  sourceDocuments: Array<{
    content: string;
    metadata: Record<string, any>;
  }>;
  processingTime: string;
  namespace: string;
  timestamp: string;
}

interface HealthResponse {
  status: string;
  timestamp: string;
  pineconeIndex?: string;
  model: string;
  mode: string;
}

interface StatsResponse {
  status: string;
  pineconeIndex?: string;
  model: string;
  embeddingModel: string;
  namespaces: string[];
  totalChains: number;
  timestamp: string;
}

interface DatabaseDetectionResponse {
  connected: boolean;
  indexName?: string;
  totalVectors: number;
  namespaces: string[];
  dimension: number;
  timestamp: string;
}

// Global state
let globalChains: ChainMap = {};
let globalVectorStore: PineconeStore | null = null;

async function createEmbeddings(): Promise<HuggingFaceTransformersEmbeddings> {
  try {
    // Using bge-small-en-v1.5 model for 384 dimensions
    return new HuggingFaceTransformersEmbeddings({
      model: EMBEDDING_MODEL,
    });
  } catch (error) {
    console.error("Failed to create embeddings:", error);
    throw new Error(`Embedding creation failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}



async function connectPinecone(): Promise<{ client: Pinecone; index: any }> {
  if (!PINECONE_API_KEY) {
    throw new Error("PINECONE_API_KEY is required but not provided");
  }

  if (!PINECONE_INDEX) {
    throw new Error("PINECONE_INDEX is required but not provided");
  }

  try {
    const client = new Pinecone({
      apiKey: PINECONE_API_KEY,
    });

    const index = client.index(PINECONE_INDEX);

    // Verify connection by checking index stats
    await index.describeIndexStats();

    return { client, index };
  } catch (error) {
    console.error("Failed to connect to Pinecone:", error);
    throw new Error(`Pinecone connection failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}


async function buildRetrieverAndChain(
  vectorStore: PineconeStore,
  namespace: string = DEFAULT_NAMESPACE
): Promise<{ chain: RetrievalQAChain }> {
  if (!vectorStore) {
    throw new Error("Vector store is required but not provided");
  }

  if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is required but not provided");
  }

  console.log(`Building retriever and chain for namespace: ${namespace}...`);

  try {
    // Make retriever with k=5 similar documents for better context
    const retriever = vectorStore.asRetriever({
      k: DEFAULT_RETRIEVAL_K,
      filter: namespace !== DEFAULT_NAMESPACE ? { namespace } : undefined
    });

    // LLM with Groq
    const llm = new ChatGroq({
      model: LLM_MODEL,
      temperature: DEFAULT_TEMPERATURE,
      apiKey: GROQ_API_KEY,
    });

    // Enhanced Personal Assistant Prompt Template for Suresh Beekhani's Portfolio
    const promptTemplate = new PromptTemplate({
      template: `You are Suresh Beekhani's AI assistant. Answer the user's question in 50–70 tokens using only the provided context. Focus on AI/ML skills (ML, DL, NLP) and projects (Law GPT, Diagnostics, Fraud Detection).  
               Context: {context}  
               Question: {question}  
               Answer:
               `,
      inputVariables: ["context", "question"],
    });

    const chain = RetrievalQAChain.fromLLM(llm, retriever, {
      returnSourceDocuments: true,
      prompt: promptTemplate,
    });

    console.log(`Chain built successfully for namespace: ${namespace}!`);
    return { chain };
  } catch (error) {
    console.error(`Failed to build chain for namespace ${namespace}:`, error);
    throw new Error(`Chain building failed for namespace ${namespace}: ${error instanceof Error ? error.message : String(error)}`);
  }
}


async function initializeChains(): Promise<void> {
  console.log("🔧 Initializing RAG chains for all namespaces...");

  try {
    const embeddings = await createEmbeddings();
    const { index } = await connectPinecone();

    // Create vector store
    const vectorStore = new PineconeStore(embeddings, {
      pineconeIndex: index,
    });

    // Initialize chains for each namespace in parallel for better performance
    const namespacePromises = NAMESPACES.map(async (namespace) => {
      try {
        const { chain } = await buildRetrieverAndChain(vectorStore, namespace);
        globalChains[namespace] = chain;
        console.log(`✅ Initialized chain for namespace: ${namespace}`);
        return { namespace, success: true };
      } catch (error) {
        console.warn(`⚠️ Failed to initialize chain for namespace ${namespace}:`, error);
        return { namespace, success: false, error };
      }
    });

    const results = await Promise.allSettled(namespacePromises);
    const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
    const failed = results.length - successful;

    if (failed > 0) {
      console.warn(`⚠️ ${failed} namespace(s) failed to initialize`);
    }

    // Create a default chain that searches across all namespaces
    const { chain: defaultChain } = await buildRetrieverAndChain(vectorStore, DEFAULT_NAMESPACE);
    globalChains[DEFAULT_NAMESPACE] = defaultChain;

    globalVectorStore = vectorStore;
    console.log(`🎉 Initialization complete! ${successful}/${NAMESPACES.length} namespaces successful`);
  } catch (error) {
    console.error("Failed to initialize chains:", error);
    throw new Error(`Chain initialization failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function main(): Promise<void> {
  try {
    // Set up Express API
    const app = express();

    // Security and performance middleware
    app.use(cors({
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));

    // Body parsing with size limits
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    // Request logging middleware
    app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
      next();
    });

    if (!USE_MOCK) {
      // Initialize real chains
      await initializeChains();
    }

    // Health check endpoint
    app.get("/health", (req, res) => {
      const healthResponse: HealthResponse = {
        status: "healthy",
        timestamp: new Date().toISOString(),
        pineconeIndex: PINECONE_INDEX,
        model: USE_MOCK ? "mock-llm" : LLM_MODEL,
        mode: USE_MOCK ? "mock" : "live"
      };

      res.json(healthResponse);
    });

    // Query endpoint with namespace support
    app.post("/query", async (req, res) => {
      try {
        const { query, namespace = DEFAULT_NAMESPACE } = req.body;

        // Input validation
        if (!query || typeof query !== 'string' || query.trim().length === 0) {
          return res.status(400).json({
            error: "Invalid query parameter",
            detail: "Query must be a non-empty string"
          });
        }

        if (typeof namespace !== 'string') {
          return res.status(400).json({
            error: "Invalid namespace parameter",
            detail: "Namespace must be a string"
          });
        }

        if (USE_MOCK) {
          const processingTime = Math.floor(
            Math.random() * (DEFAULT_PROCESSING_TIME_MAX - DEFAULT_PROCESSING_TIME_MIN) + DEFAULT_PROCESSING_TIME_MIN
          );

          const mockResponse: QueryResponse = {
            answer: "(Mock) Hi! The AI knowledge base isn't connected in dev. Ask about portfolio, services, or projects and I'll respond with generic info.",
            sourceDocuments: [],
            processingTime: `${processingTime}ms`,
            namespace,
            timestamp: new Date().toISOString()
          };

          return res.json(mockResponse);
        }

        const chain = globalChains[namespace] || globalChains[DEFAULT_NAMESPACE];
        if (!chain) {
          return res.status(500).json({
            error: "RAG chain not initialized",
            detail: `No chain available for namespace: ${namespace}`
          });
        }

        console.log(`Processing query: "${query}" in namespace: ${namespace}`);
        const startTime = Date.now();

        const response = await chain.call({ query });
        const processingTime = Date.now() - startTime;

        const queryResponse: QueryResponse = {
          answer: response.text || "No answer generated",
          sourceDocuments: response.sourceDocuments?.map((doc: Document) => ({
            content: doc.pageContent.substring(0, 200) + "...",
            metadata: doc.metadata || {}
          })) || [],
          processingTime: `${processingTime}ms`,
          namespace,
          timestamp: new Date().toISOString()
        };

        res.json(queryResponse);
      } catch (err) {
        console.error("Query error:", err);
        res.status(500).json({
          error: "Internal server error",
          detail: err instanceof Error ? err.message : String(err)
        });
      }
    });


    // Get stats endpoint
    app.get("/stats", async (req, res) => {
      try {
        if (USE_MOCK) {
          const mockStats: StatsResponse = {
            status: "mock",
            pineconeIndex: PINECONE_INDEX,
            model: "mock-llm",
            embeddingModel: "mock-embeddings",
            namespaces: [DEFAULT_NAMESPACE],
            totalChains: 1,
            timestamp: new Date().toISOString()
          };

          return res.json(mockStats);
        }

        if (!globalVectorStore) {
          return res.status(500).json({
            error: "Vector store not initialized",
            detail: "Please wait for initialization to complete or check server logs"
          });
        }

        const stats: StatsResponse = {
          status: "initialized",
          pineconeIndex: PINECONE_INDEX,
          model: LLM_MODEL,
          embeddingModel: EMBEDDING_MODEL,
          namespaces: Object.keys(globalChains),
          totalChains: Object.keys(globalChains).length,
          timestamp: new Date().toISOString()
        };

        res.json(stats);
      } catch (err) {
        console.error("Stats error:", err);
        res.status(500).json({
          error: "Failed to get stats",
          detail: err instanceof Error ? err.message : String(err)
        });
      }
    });

    // Database detection endpoint
    app.get("/detect-database", async (req, res) => {
      try {
        if (USE_MOCK) {
          const mockDetection: DatabaseDetectionResponse = {
            connected: false,
            indexName: PINECONE_INDEX,
            totalVectors: 0,
            namespaces: [DEFAULT_NAMESPACE],
            dimension: DEFAULT_EMBEDDING_DIMENSION,
            timestamp: new Date().toISOString()
          };

          return res.json(mockDetection);
        }

        const { index } = await connectPinecone();

        // Get index stats
        const stats = await index.describeIndexStats();

        const detection: DatabaseDetectionResponse = {
          connected: true,
          indexName: PINECONE_INDEX,
          totalVectors: stats.totalRecordCount || 0,
          namespaces: Object.keys(stats.namespaces || {}),
          dimension: stats.dimension || DEFAULT_EMBEDDING_DIMENSION,
          timestamp: new Date().toISOString()
        };

        res.json(detection);
      } catch (err) {
        console.error("Database detection error:", err);
        res.status(500).json({
          error: "Failed to detect database",
          detail: err instanceof Error ? err.message : String(err)
        });
      }
    });

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`🚀 RAG server (${USE_MOCK ? 'MOCK' : 'LIVE'}) running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`🔍 Query endpoint: POST http://localhost:${PORT}/query`);
      console.log(`📈 Stats endpoint: GET http://localhost:${PORT}/stats`);
      console.log(`🔍 Database detection: GET http://localhost:${PORT}/detect-database`);
    });

    // Graceful shutdown handling
    const gracefulShutdown = (signal: string) => {
      console.log(`\n🛑 Received ${signal}. Shutting down RAG server gracefully...`);

      server.close((err) => {
        if (err) {
          console.error('Error during server shutdown:', err);
          process.exit(1);
        }

        console.log('✅ Server closed successfully');
        process.exit(0);
      });

      // Force close after 10 seconds
      setTimeout(() => {
        console.error('⚠️ Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

  } catch (error) {
    console.error("Failed to start RAG server:", error);
    process.exit(1);
  }
}

// Start the application
main().catch((error) => {
  console.error('💥 Fatal error during startup:', error);
  process.exit(1);
});
