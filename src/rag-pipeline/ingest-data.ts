import "dotenv/config";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import type { Document } from "langchain/document";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, isAbsolute } from "path";
import pdf from "pdf-parse/lib/pdf-parse.js";

// Constants
const MIN_PDF_LENGTH = 20;
const CHUNK_SIZE = 300;
const CHUNK_OVERLAP = 80;
const MAX_CONCURRENCY = 5;

// Environment variables with validation
const PINECONE_INDEX = process.env.PINECONE_INDEX;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const HF_TOKEN = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;

// Normalize HF token environment variables
if (HF_TOKEN) {
  process.env.HUGGING_FACE_HUB_TOKEN = HF_TOKEN;
  process.env.HF_TOKEN = HF_TOKEN;
}

// Validate required environment variables
if (!PINECONE_API_KEY || !PINECONE_INDEX) {
  console.error("❌ Missing PINECONE_API_KEY or PINECONE_INDEX in environment variables");
  process.exit(1);
}

// Create embeddings model with error handling
const createEmbeddings = async (): Promise<HuggingFaceTransformersEmbeddings> => {
  console.log("🔧 Creating embeddings model...");
  try {
    return new HuggingFaceTransformersEmbeddings({
      model: "Xenova/bge-small-en-v1.5",
    });
  } catch (error) {
    console.error("❌ Failed to create embeddings:", error);
    throw new Error(`Embedding creation failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Load and process local PDF documents
const loadLocalPdfDocuments = async (pdfPath: string): Promise<Document[]> => {
  const absolutePath = isAbsolute(pdfPath) ? pdfPath : join(process.cwd(), pdfPath);
  
  if (!existsSync(absolutePath)) {
    console.warn(`⚠️  PDF not found at: ${absolutePath}`);
    return [];
  }

  console.log(`📄 Extracting text from PDF: ${absolutePath}`);
  
  try {
    const fileBuffer = readFileSync(absolutePath);
    const parsed = await pdf(fileBuffer);
    const normalized = (parsed.text || "").replace(/\s+/g, " ").trim();

    if (!normalized || normalized.length < MIN_PDF_LENGTH) {
      console.warn("⚠️  Skipped empty/short PDF content");
      return [];
    }

    return [{
      pageContent: normalized,
      metadata: { source: "local:1.pdf", path: absolutePath }
    } as Document];
  } catch (error) {
    console.error(`❌ Failed to process PDF ${absolutePath}:`, error);
    return [];
  }
};

// Split documents into chunks with error handling
const splitDocuments = async (docs: Document[]): Promise<Document[]> => {
  if (!docs.length) {
    console.warn("⚠️  No documents provided for splitting");
    return [];
  }

  console.log("✂️ Splitting documents into chunks...");
  
  try {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: CHUNK_SIZE,
      chunkOverlap: CHUNK_OVERLAP,
    });
    
    const splitDocs = await splitter.splitDocuments(docs);
    
    if (splitDocs.length === 0) {
      console.warn("⚠️  Document splitting resulted in no chunks");
      return [];
    }
    
    console.log(`✅ Split into ${splitDocs.length} chunks`);
    return splitDocs;
  } catch (error) {
    console.error("❌ Failed to split documents:", error);
    throw new Error(`Document splitting failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Connect to Pinecone with error handling
const connectPinecone = async (): Promise<{ client: Pinecone; index: any }> => {
  console.log("🌲 Connecting to Pinecone...");
  
  try {
    const client = new Pinecone({
      apiKey: PINECONE_API_KEY!,
    });
    
    const index = client.index(PINECONE_INDEX!);
    
    // Verify connection by checking index stats
    await index.describeIndexStats();
    
    console.log(`✅ Connected to Pinecone index: ${PINECONE_INDEX}`);
    return { client, index };
  } catch (error) {
    console.error("❌ Failed to connect to Pinecone:", error);
    throw new Error(`Pinecone connection failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Ingest documents to Pinecone with improved error handling
const ingestToPinecone = async (
  docs: Document[], 
  embeddings: HuggingFaceTransformersEmbeddings,
  namespace: string = "default"
): Promise<PineconeStore> => {
  if (!docs.length) {
    console.warn(`⚠️  No documents to ingest for namespace: ${namespace}`);
    throw new Error(`No documents provided for namespace: ${namespace}`);
  }

  console.log(`📤 Ingesting ${docs.length} documents to Pinecone namespace: ${namespace}...`);
  
  try {
    const { index } = await connectPinecone();

    const vectorStore = await PineconeStore.fromDocuments(docs, embeddings as any, {
      pineconeIndex: index as any,
      namespace: namespace,
      maxConcurrency: MAX_CONCURRENCY,
    });

    console.log(`✅ Successfully upserted to Pinecone namespace: ${namespace}`);
    return vectorStore;
  } catch (error) {
    console.error(`❌ Failed to ingest to Pinecone namespace ${namespace}:`, error);
    throw new Error(`Pinecone ingestion failed for namespace ${namespace}: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Save ingestion metadata with proper typing
interface IngestionMetadata {
  timestamp: string;
  totalDocuments: number;
  namespaces: string[];
  urls: string[];
  chunkSize: number;
  chunkOverlap: number;
  embeddingModel: string;
}

const saveIngestionMetadata = async (data: {
  totalDocuments: number;
  namespaces: string[];
  urls: string[];
}): Promise<void> => {
  const metadata: IngestionMetadata = {
    timestamp: new Date().toISOString(),
    totalDocuments: data.totalDocuments,
    namespaces: data.namespaces,
    urls: data.urls,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    embeddingModel: "Xenova/bge-small-en-v1.5"
  };

  try {
    const metadataPath = join(process.cwd(), "src/rag-pipeline/ingestion-metadata.json");
    writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`📄 Ingestion metadata saved to: ${metadataPath}`);
  } catch (error) {
    console.error("❌ Failed to save ingestion metadata:", error);
    throw new Error(`Metadata saving failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Main ingestion function with improved error handling and logging
const main = async (): Promise<void> => {
  console.log("🚀 Starting data ingestion process...");
  
  try {
    // Create embeddings
    const embeddings = await createEmbeddings();

    let totalDocuments = 0;
    const namespaces: string[] = [];
    const startTime = Date.now();

    // Process local PDF
    console.log("\n📄 Processing local PDF...");
    const pdfDocs = await loadLocalPdfDocuments("src/data/1.pdf");
    if (pdfDocs.length > 0) {
      const docs = await splitDocuments(pdfDocs);
      if (docs.length > 0) {
        await ingestToPinecone(docs, embeddings, "pdf");
        totalDocuments += docs.length;
        namespaces.push("pdf");
        console.log(`✅ Completed pdf: ${docs.length} chunks`);
      }
    }

    // Save ingestion metadata
    await saveIngestionMetadata({
      totalDocuments,
      namespaces,
      urls: []
    });

    const processingTime = Date.now() - startTime;
    console.log("\n🎉 Data ingestion completed successfully!");
    console.log(`📊 Total documents processed: ${totalDocuments}`);
    console.log(`📁 Namespaces created: ${namespaces.join(", ")}`);
    console.log(`🌲 Pinecone index: ${PINECONE_INDEX}`);
    console.log(`⏱️  Processing time: ${(processingTime / 1000).toFixed(2)}s`);

  } catch (error) {
    console.error("❌ Ingestion failed:", error);
    process.exit(1);
  }
};

// Run the ingestion with proper error handling
main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
