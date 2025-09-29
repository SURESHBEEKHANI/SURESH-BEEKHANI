import "dotenv/config";
import express from "express";
import cors from "cors";

import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { ChatGroq } from "@langchain/groq";
import { RetrievalQAChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PromptTemplate } from "@langchain/core/prompts";
import type { Document } from "langchain/document";

// Use dedicated RAG-specific port envs; ignore generic PORT to avoid conflicts with Vite/OS
const PORT = Number(process.env.RAG_PORT || process.env.VITE_RAG_PORT || 5757);
const PINECONE_INDEX = process.env.PINECONE_INDEX;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const HF_TOKEN = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;

// Normalize HF token env for transformers.js
if (HF_TOKEN) {
  process.env.HUGGING_FACE_HUB_TOKEN = HF_TOKEN;
  process.env.HF_TOKEN = HF_TOKEN;
}

const USE_MOCK = !PINECONE_API_KEY || !GROQ_API_KEY || !PINECONE_INDEX;
if (USE_MOCK) {
  console.warn("⚠️ Missing API keys (PINECONE_API_KEY or GROQ_API_KEY). Starting RAG server in MOCK mode for development.");
}

// Global variables to store the chains and vector store
let globalChains: { [namespace: string]: any } = {};
let globalVectorStore: any = null;

async function createEmbeddings() {
  // Using bge-small-en-v1.5 model for 384 dimensions
  return new HuggingFaceTransformersEmbeddings({
    model: "Xenova/bge-small-en-v1.5",
  });
}

async function loadWebPages(urls: string[]): Promise<Document[]> {
  console.log(`Loading ${urls.length} web pages...`);
  const loaders = urls.map((url) => new CheerioWebBaseLoader(url));
  const docsArrays = await Promise.all(loaders.map((loader) => loader.load()));
  const docs = docsArrays.flat();
  console.log(`Loaded ${docs.length} documents`);
  return docs;
}

async function splitDocuments(docs: Document[]): Promise<Document[]> {
  console.log("Splitting documents...");
  // Text splitter (adjust chunk size/overlap as needed)
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 200,
  });
  const splitDocs = await splitter.splitDocuments(docs);
  console.log(`Split into ${splitDocs.length} chunks`);
  return splitDocs;
}

async function connectPinecone() {
  const client = new Pinecone({
    apiKey: PINECONE_API_KEY!,
  });
  const index = client.index(PINECONE_INDEX);
  return { client, index: index as any };
}

async function ingestToPinecone(
  docs: Document[], 
  embeddings: HuggingFaceTransformersEmbeddings
) {
  console.log("Creating embeddings and upserting to Pinecone...");
  const { index } = await connectPinecone();

  // Use PineconeStore.fromDocuments which handles embeddings + upsert
  const vectorStore = await PineconeStore.fromDocuments(docs, embeddings as any, {
    pineconeIndex: index,
    // Optional control for upload concurrency
    maxConcurrency: 5,
  });

  console.log("Successfully upserted to Pinecone!");
  return vectorStore;
}

async function buildRetrieverAndChain(vectorStore: any, namespace: string = "default") {
  console.log(`Building retriever and chain for namespace: ${namespace}...`);
  
  // Make retriever with k=6 similar documents for better context
  const retriever = vectorStore.asRetriever({ 
    k: 6,
    filter: namespace !== "default" ? { namespace } : undefined
  });

  // LLM with Groq
  const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0.2,
    apiKey: GROQ_API_KEY,
  });

  // Enhanced Personal Assistant Prompt Template for Suresh Beekhani's Portfolio
  const promptTemplate = new PromptTemplate({
    template: `You are the AI personal assistant for Suresh Beekhani, AI/ML Engineer & Full-Stack Developer. Speak in his professional, approachable voice.

Role

Present Suresh’s expertise, projects, and services clearly and concisely.

Explain AI/ML projects and outcomes in simple terms.

Show how his skills solve client problems with examples: AI-Driven Law GPT, Patient Diagnostic System, Fraud Detection, Travel Assistant, Social Media Creator, AI Image Generator, etc.

Highlight technical strengths (ML, DL, NLP, CV, predictive modeling, RAG, vector DBs) in plain language.

Relate work to HealthTech, FinTech, EdTech, GreenTech, Retail, LegalTech.

Tone & Style

Professional yet conversational, client-focused.

Use examples when possible.

Suggest connecting with Suresh if details are missing.

Recommend consultation for pricing or detailed projects.

Keep answers short (~100 tokens).

Do not display emails or phone numbers unless the user explicitly asks for them.

Context: {context}
Question: {question}
Answer:
`,
    inputVariables: ["context", "question"],
  });

  const chain = RetrievalQAChain.fromLLM(llm as any, retriever, {
    returnSourceDocuments: true,
    prompt: promptTemplate,
  });

  console.log(`Chain built successfully for namespace: ${namespace}!`);
  return { chain };
}

async function initialIngest(urls: string[]) {
  console.log("Starting initial ingestion...");
  
  // Load web pages
  const rawDocs = await loadWebPages(urls);

  // Split documents
  const docs = await splitDocuments(rawDocs);

  // Create embeddings
  const embeddings = await createEmbeddings();

  // Upsert to Pinecone
  const vectorStore = await ingestToPinecone(docs, embeddings);

  // Build chain
  const { chain } = await buildRetrieverAndChain(vectorStore);

  console.log("Initial ingestion complete!");
  return { vectorStore, chain };
}

async function initializeChains() {
  console.log("🔧 Initializing RAG chains for all namespaces...");
  
  const embeddings = await createEmbeddings();
  const { index } = await connectPinecone();
  
  // Create vector store
  const vectorStore = new PineconeStore(embeddings as any, {
    pineconeIndex: index as any,
  });
  
  // Initialize chains for each namespace
  const namespaces = ["portfolio", "projects", "industries", "services"];
  
  for (const namespace of namespaces) {
    try {
      const { chain } = await buildRetrieverAndChain(vectorStore, namespace);
      globalChains[namespace] = chain;
      console.log(`✅ Initialized chain for namespace: ${namespace}`);
    } catch (error) {
      console.warn(`⚠️ Failed to initialize chain for namespace ${namespace}:`, error);
    }
  }
  
  // Create a default chain that searches across all namespaces
  const { chain: defaultChain } = await buildRetrieverAndChain(vectorStore, "default");
  globalChains["default"] = defaultChain;
  
  globalVectorStore = vectorStore;
  console.log("🎉 All chains initialized successfully!");
}

async function main() {
  // Set up Express API
  const app = express();
  // Allow frontend (Vite) to access this server from another port
  app.use(cors({ origin: true }));
  app.use(express.json());

  if (!USE_MOCK) {
    // Initialize real chains
    await initializeChains();
  }

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      pineconeIndex: PINECONE_INDEX,
      model: USE_MOCK ? "mock-llm" : "openai/gpt-oss-120b",
      mode: USE_MOCK ? "mock" : "live"
    });
  });

  // Query endpoint with namespace support
  app.post("/query", async (req, res) => {
    try {
      const { query, namespace = "default" } = req.body;
      if (!query) {
        return res.status(400).json({ error: "Missing query parameter" });
      }

      if (USE_MOCK) {
        const processingTime = Math.floor(Math.random() * 40) + 20;
        return res.json({
          answer: "(Mock) Hi! The AI knowledge base isn't connected in dev. Ask about portfolio, services, or projects and I’ll respond with generic info.",
          sourceDocuments: [],
          processingTime: `${processingTime}ms`,
          namespace,
          timestamp: new Date().toISOString()
        });
      }

      const chain = globalChains[namespace] || globalChains["default"];
      if (!chain) {
        return res.status(500).json({ error: "RAG chain not initialized" });
      }

      console.log(`Processing query: "${query}" in namespace: ${namespace}`);
      const startTime = Date.now();
      
      const response = await chain.call({ query });
      const processingTime = Date.now() - startTime;

      res.json({
        answer: response.text,
        sourceDocuments: response.sourceDocuments?.map((doc: any) => ({
          content: doc.pageContent.substring(0, 200) + "...",
          metadata: doc.metadata
        })) || [],
        processingTime: `${processingTime}ms`,
        namespace: namespace,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      console.error("Query error:", err);
      res.status(500).json({ 
        error: "Internal server error", 
        detail: err instanceof Error ? err.message : String(err) 
      });
    }
  });

  // Refresh/re-ingest endpoint
  app.post("/refresh", async (req, res) => {
    try {
      const { urls: customUrls } = req.body;
      const defaultUrls = [
        "https://sureshbeekhani.netlify.app/Portfolio",
        "https://sureshbeekhani.netlify.app/About",
        "https://sureshbeekhani.netlify.app/Services",
        "https://sureshbeekhani.netlify.app/Experience",
        "https://sureshbeekhani.netlify.app/Contact"
      ];
      const urlsToUse = Array.isArray(customUrls) && customUrls.length > 0 ? customUrls : defaultUrls;
      
      console.log(`Refreshing with ${urlsToUse.length} URLs...`);
      const { vectorStore, chain } = await initialIngest(urlsToUse);
      
      // Update global references
      globalVectorStore = vectorStore;
      globalChains["default"] = chain;
      
      res.json({ 
        ok: true, 
        message: "Re-ingest completed successfully",
        urlsProcessed: urlsToUse.length,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      console.error("Refresh error:", err);
      res.status(500).json({ 
        error: "Refresh failed", 
        detail: err instanceof Error ? err.message : String(err) 
      });
    }
  });

  // Get stats endpoint
  app.get("/stats", async (req, res) => {
    try {
      if (USE_MOCK) {
        return res.json({
          status: "mock",
          pineconeIndex: PINECONE_INDEX,
          model: "mock-llm",
          embeddingModel: "mock-embeddings",
          namespaces: ["default"],
          totalChains: 1,
          timestamp: new Date().toISOString()
        });
      }

      if (!globalVectorStore) {
        return res.status(500).json({ error: "Vector store not initialized" });
      }

      // Get basic stats
      res.json({
        status: "initialized",
        pineconeIndex: PINECONE_INDEX,
        model:"openai/gpt-oss-120b",
        embeddingModel: "Xenova/bge-small-en-v1.5",
        namespaces: Object.keys(globalChains),
        totalChains: Object.keys(globalChains).length,
        timestamp: new Date().toISOString()
      });
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
        return res.json({
          connected: false,
          indexName: PINECONE_INDEX,
          totalVectors: 0,
          namespaces: ["default"],
          dimension: 384,
          timestamp: new Date().toISOString()
        });
      }

      const { index } = await connectPinecone();
      
      // Get index stats
      const stats = await index.describeIndexStats();
      
      res.json({
        connected: true,
        indexName: PINECONE_INDEX,
        totalVectors: stats.totalRecordCount || 0,
        namespaces: Object.keys(stats.namespaces || {}),
        dimension: stats.dimension || 384,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      console.error("Database detection error:", err);
      res.status(500).json({ 
        error: "Failed to detect database", 
        detail: err instanceof Error ? err.message : String(err) 
      });
    }
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`🚀 RAG server (${USE_MOCK ? 'MOCK' : 'LIVE'}) running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🔍 Query endpoint: POST http://localhost:${PORT}/query`);
    console.log(`🔄 Refresh endpoint: POST http://localhost:${PORT}/refresh`);
    console.log(`📈 Stats endpoint: GET http://localhost:${PORT}/stats`);
  });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down RAG server...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down RAG server...');
  process.exit(0);
});

main().catch((e) => {
  console.error("💥 Fatal error:", e);
  process.exit(1);
});
