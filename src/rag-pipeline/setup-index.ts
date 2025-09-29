import "dotenv/config";
import { Pinecone } from "@pinecone-database/pinecone";

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX = process.env.PINECONE_INDEX;

if (!PINECONE_API_KEY || !PINECONE_INDEX) {
  console.error("Missing PINECONE_API_KEY or PINECONE_INDEX in environment variables");
  process.exit(1);
}

async function createPineconeIndex() {
  console.log("🌲 Setting up Pinecone index...");
  
  try {
    // Initialize Pinecone client
    const pinecone = new Pinecone({
      apiKey: PINECONE_API_KEY!,
    });

    // Check if index already exists
    const existingIndexes = await pinecone.listIndexes();
    const indexExists = existingIndexes.indexes?.some(index => index.name === PINECONE_INDEX);

    if (indexExists) {
      console.log(`✅ Index "${PINECONE_INDEX}" already exists!`);
      
      // Get index stats
      const index = pinecone.index(PINECONE_INDEX);
      const stats = await index.describeIndexStats();
      
      console.log(`📊 Index Statistics:`);
      console.log(`   - Name: ${PINECONE_INDEX}`);
      console.log(`   - Dimension: ${stats.dimension || 1024}`);
      console.log(`   - Total Vectors: ${stats.totalRecordCount || 0}`);
      console.log(`   - Namespaces: ${Object.keys(stats.namespaces || {}).join(', ') || 'None'}`);
      
      return true;
    }

    // Create new index (bge-small-en-v1.5 uses 384-dim, cosine)
    console.log(`🔨 Creating new index "${PINECONE_INDEX}"...`);
    
    await pinecone.createIndex({
      name: PINECONE_INDEX,
      dimension: 384,
      metric: 'cosine',
      spec: {
        serverless: {
          cloud: 'aws',
          // Region should be configured in Pinecone dashboard; avoid hardcoding
          region: process.env.PINECONE_ENV || 'us-east-1'
        }
      }
    });

    console.log(`✅ Successfully created index "${PINECONE_INDEX}"!`);
    console.log(`⏳ Index is being created in the background. This may take a few minutes.`);
    console.log(`🔍 You can check the status in your Pinecone dashboard.`);
    
    return true;

  } catch (error) {
    console.error("❌ Failed to create index:", error);
    return false;
  }
}

async function main() {
  console.log("🚀 Pinecone Index Setup");
  console.log("======================");
  console.log(`Index Name: ${PINECONE_INDEX}`);
  console.log(`API Key: ${PINECONE_API_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log("");

  const success = await createPineconeIndex();
  
  if (success) {
    console.log("");
    console.log("🎉 Setup completed successfully!");
    console.log("");
    console.log("Next steps:");
    console.log("1. Wait for the index to be ready (check Pinecone dashboard)");
    console.log("2. Run data ingestion: npm run ingest");
    console.log("3. Start the RAG server: npm run rag:dev");
  } else {
    console.log("");
    console.log("❌ Setup failed. Please check your API key and try again.");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
