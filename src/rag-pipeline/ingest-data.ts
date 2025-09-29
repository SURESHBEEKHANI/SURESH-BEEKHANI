import "dotenv/config";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import type { Document } from "langchain/document";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
// Import the library function directly to avoid package-level side effects
// that try to open test PDFs on import.
import pdf from "pdf-parse/lib/pdf-parse.js";

// Remove URLs from extracted text
function removeUrls(input: string): string {
  if (!input) return input;
  // Matches http(s) URLs, www.* and bare domains with TLDs
  const urlRegex = /(https?:\/\/\S+)|(www\.\S+)|\b[\w-]+\.(?:com|net|org|io|ai|app|dev|co|info|biz|edu|gov|in|uk|us|eu)(?:\/\S*)?/gi;
  return input.replace(urlRegex, "").replace(/\s+/g, " ").trim();
}

const PINECONE_INDEX = process.env.PINECONE_INDEX ?? "towering-fir";
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const HF_TOKEN = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;

// Normalize HF token env for transformers.js
if (HF_TOKEN) {
  process.env.HUGGING_FACE_HUB_TOKEN = HF_TOKEN;
  process.env.HF_TOKEN = HF_TOKEN;
}

if (!PINECONE_API_KEY) {
  console.error("Missing PINECONE_API_KEY in environment variables");
  process.exit(1);
}

// Portfolio URLs to ingest
export const PORTFOLIO_URLS: string[] = [];

// Additional project-specific URLs
export const PROJECT_URLS: string[] = [];

// Industry-specific URLs
export const INDUSTRY_URLS: string[] = [];

// Service URLs
export const SERVICE_URLS: string[] = [];

async function createEmbeddings() {
  console.log("🔧 Creating embeddings model...");
  return new HuggingFaceTransformersEmbeddings({
    model: "Xenova/bge-small-en-v1.5",
  });
}

async function loadLocalPdfDocuments(pdfPath: string): Promise<Document[]> {
  const absolutePath = path.isAbsolute(pdfPath)
    ? pdfPath
    : path.join(process.cwd(), pdfPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`⚠️  PDF not found at: ${absolutePath}`);
    return [] as unknown as Document[];
  }

  console.log(`📄 Extracting text from PDF: ${absolutePath}`);
  const fileBuffer = fs.readFileSync(absolutePath);
  const parsed = await pdf(fileBuffer);
  const normalized = (parsed.text || "").replace(/\s+/g, " ").trim();
  const cleaned = removeUrls(normalized);

  if (!cleaned || cleaned.length < 20) {
    console.warn("⚠️  Skipped empty/short PDF content");
    return [] as unknown as Document[];
  }

  return [
    { pageContent: cleaned, metadata: { source: "local:1.pdf", path: absolutePath } } as any,
  ];
}

export async function fetchAndExtractText(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    $("script, style, noscript, iframe").remove();
    $("header, nav, footer, aside").remove();

    // Prefer main/article/content containers
    let text = $("main").text();
    if (!text || text.trim().length < 50) {
      text = $("article").text();
    }
    if (!text || text.trim().length < 50) {
      text = $("#content, .content, .container, .page").text();
    }
    if (!text || text.trim().length < 50) {
      text = $("body").text();
    }

    const normalized = text.replace(/\s+/g, " ").replace(/\u00A0/g, " ").trim();
    return removeUrls(normalized);
  } catch (e) {
    console.warn(`⚠️  Fallback fetch failed for ${url}:`, e instanceof Error ? e.message : String(e));
    return "";
  }
}

async function loadWebPages(urls: string[]): Promise<Document[]> {
  console.log(`📥 Loading ${urls.length} web pages...`);
  const processed: Document[] = [] as unknown as Document[];

  for (const url of urls) {
    // Try Cheerio loader first
    let pageText = "";
    try {
      const loader = new CheerioWebBaseLoader(url, { selector: "body" });
      const docs = await loader.load();
      const combined = docs.map((d: any) => (d?.pageContent || "").toString()).join("\n");
      pageText = combined.replace(/\s+/g, " ").trim();
    } catch (_) {
      // ignore
    }

    // Fallback to manual fetch if content looks too small
    if (!pageText || pageText.length < 50) {
      const fallback = await fetchAndExtractText(url);
      if (fallback) {
        pageText = fallback;
      }
    }

    if (pageText && pageText.length > 20) {
      const cleaned = removeUrls(pageText);
      processed.push({ pageContent: cleaned, metadata: { source: url } } as any);
    } else {
      console.warn(`⚠️  Skipped empty/short content: ${url}`);
    }
  }

  console.log(`🧹 After cleaning, ${processed.length} documents have non-empty content`);
  return processed;
}

async function splitDocuments(docs: Document[]): Promise<Document[]> {
  console.log("✂️ Splitting documents into chunks...");
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 80,
  });
  const splitDocs = await splitter.splitDocuments(docs);
  console.log(`✅ Split into ${splitDocs.length} chunks`);
  return splitDocs;
}

async function connectPinecone() {
  console.log("🌲 Connecting to Pinecone...");
  const client = new Pinecone({
    apiKey: PINECONE_API_KEY!,
  });
  const index = client.index(PINECONE_INDEX);
  console.log(`✅ Connected to Pinecone index: ${PINECONE_INDEX}`);
  return { client, index };
}

async function ingestToPinecone(
  docs: Document[], 
  embeddings: HuggingFaceTransformersEmbeddings,
  namespace: string = "default"
) {
  console.log(`📤 Ingesting ${docs.length} documents to Pinecone namespace: ${namespace}...`);
  const { index } = await connectPinecone();

  const vectorStore = await PineconeStore.fromDocuments(docs, embeddings as any, {
    pineconeIndex: index as any,
    namespace: namespace,
    maxConcurrency: 5,
  });

  console.log(`✅ Successfully upserted to Pinecone namespace: ${namespace}`);
  return vectorStore;
}

async function saveIngestionMetadata(data: any) {
  const metadata = {
    timestamp: new Date().toISOString(),
    totalDocuments: data.totalDocuments,
    namespaces: data.namespaces,
    urls: data.urls,
    chunkSize: 1000,
    chunkOverlap: 200,
    embeddingModel: "Xenova/llama-text-embed-v2"
  };

  const metadataPath = path.join(process.cwd(), "src/rag-pipeline/ingestion-metadata.json");
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  console.log(`📄 Ingestion metadata saved to: ${metadataPath}`);
}

async function main() {
  console.log("🚀 Starting data ingestion process...");
  
  const allUrls = [
    ...PORTFOLIO_URLS,
    ...PROJECT_URLS, 
    ...INDUSTRY_URLS,
    ...SERVICE_URLS
  ];

  console.log(`📋 Total URLs to process: ${allUrls.length}`);
  console.log(`   - Portfolio pages: ${PORTFOLIO_URLS.length}`);
  console.log(`   - Project pages: ${PROJECT_URLS.length}`);
  console.log(`   - Industry pages: ${INDUSTRY_URLS.length}`);
  console.log(`   - Service pages: ${SERVICE_URLS.length}`);

  try {
    // Create embeddings
    const embeddings = await createEmbeddings();

    // Process each category separately for better organization
    const categories = [
      { name: "portfolio", urls: PORTFOLIO_URLS },
      { name: "projects", urls: PROJECT_URLS },
      { name: "industries", urls: INDUSTRY_URLS },
      { name: "services", urls: SERVICE_URLS }
    ];

    let totalDocuments = 0;
    const namespaces: string[] = [];

    for (const category of categories) {
      if (category.urls.length === 0) continue;

      console.log(`\n📂 Processing ${category.name} category...`);
      
      // Load web pages
      const rawDocs = await loadWebPages(category.urls);
      
      // Split documents
      const docs = await splitDocuments(rawDocs);
      
      // Ingest to Pinecone with category-specific namespace
      await ingestToPinecone(docs, embeddings, category.name);
      
      totalDocuments += docs.length;
      namespaces.push(category.name);
      
      console.log(`✅ Completed ${category.name}: ${docs.length} chunks`);
    }

    // Also ingest local PDF: src/data/1.pdf
    const pdfDocs = await loadLocalPdfDocuments("src/data/1.pdf");
    if (pdfDocs.length > 0) {
      const docs = await splitDocuments(pdfDocs);
      await ingestToPinecone(docs, embeddings, "pdf");
      totalDocuments += docs.length;
      namespaces.push("pdf");
      console.log(`✅ Completed pdf: ${docs.length} chunks`);
    }

    // Save ingestion metadata
    await saveIngestionMetadata({
      totalDocuments,
      namespaces,
      urls: allUrls
    });

    console.log("\n🎉 Data ingestion completed successfully!");
    console.log(`📊 Total documents processed: ${totalDocuments}`);
    console.log(`📁 Namespaces created: ${namespaces.join(", ")}`);
    console.log(`🌲 Pinecone index: ${PINECONE_INDEX}`);

  } catch (error) {
    console.error("❌ Ingestion failed:", error);
    process.exit(1);
  }
}

// Run the ingestion
main().catch((e) => {
  console.error("💥 Fatal error:", e);
  process.exit(1);
});
