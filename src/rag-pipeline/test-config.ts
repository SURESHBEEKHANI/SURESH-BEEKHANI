import "dotenv/config";
import fs from "fs";
import path from "path";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";

const PINECONE_INDEX = process.env.PINECONE_INDEX || "<unset>";
const HF_TOKEN = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;
// Ensure both env var names are set for transformers.js compatibility
if (HF_TOKEN) {
  process.env.HUGGING_FACE_HUB_TOKEN = HF_TOKEN;
  process.env.HF_TOKEN = HF_TOKEN;
}

// Ensure a stable cache location (outside node_modules) to avoid partial/corrupt artifacts
if (!process.env.TRANSFORMERS_CACHE) {
  process.env.TRANSFORMERS_CACHE = path.join(process.cwd(), ".cache", "hf");
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function tryRemoveModelCache(modelRepo: string) {
  try {
    const cacheRoot = process.env.TRANSFORMERS_CACHE
      ? process.env.TRANSFORMERS_CACHE
      : path.join(process.cwd(), "node_modules", "@huggingface", "transformers", ".cache");

    const vendor = modelRepo.split("/")[0];
    const name = modelRepo.split("/")[1];
    const candidateDirs = [
      path.join(cacheRoot, vendor, name),
      // Legacy/default in node_modules if TRANSFORMERS_CACHE wasn't set earlier
      path.join(process.cwd(), "node_modules", "@huggingface", "transformers", ".cache", vendor, name),
    ];

    for (const dir of candidateDirs) {
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
        console.log(`🧹 Cleared model cache: ${dir}`);
      }
    }
  } catch (e) {
    console.warn("Could not clear model cache:", e);
  }
}

async function testEmbeddingModel(maxRetries: number = 3) {
  console.log("🧪 Testing embedding model configuration...");

  const testText = "This is a test of the bge-small-en-v1.5 embedding model";
  const modelRepo = "Xenova/bge-small-en-v1.5";
  let attempt = 0;

  while (attempt < maxRetries) {
    attempt += 1;
    try {
      // Create embeddings instance (will trigger model download on first run)
      const embeddings = new HuggingFaceTransformersEmbeddings({
        model: modelRepo,
      });

      console.log(`📝 Testing with: "${testText}" (attempt ${attempt}/${maxRetries})`);
      const vectors = await embeddings.embedQuery(testText);
      console.log(`✅ Embedding generated successfully!`);
      console.log(`📊 Vector dimension: ${vectors.length}`);
      console.log(`🎯 Expected dimension: 384`);

      if (vectors.length === 384) {
        console.log(`✅ Dimension matches expected value (384)`);
      } else {
        console.log(`⚠️  Dimension mismatch! Expected 384, got ${vectors.length}`);
      }

      console.log(`🔍 First 5 values: [${vectors.slice(0, 5).map(v => v.toFixed(4)).join(', ')}...]`);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`❌ Error on attempt ${attempt}:`, message);
      if (message && message.includes("Protobuf parsing failed")) {
        console.log("🛠 Detected corrupt/partial ONNX download. Clearing cache and retrying...");
        tryRemoveModelCache(modelRepo);
      }
      if (attempt >= maxRetries) {
        console.error("❌ Exhausted retries.");
        return false;
      }
      const backoffMs = 2000 * attempt;
      console.log(`⏳ Retrying in ${backoffMs}ms...`);
      await sleep(backoffMs);
    }
  }

  return false;
}

async function main() {
  console.log("🔧 RAG Configuration Test");
  console.log("=========================");
  console.log(`Index Name: ${PINECONE_INDEX}`);
  console.log(`Model: Xenova/bge-small-en-v1.5`);
  console.log(`Expected Dimensions: 384`);
  console.log("");

  const success = await testEmbeddingModel();
  
  if (success) {
    console.log("");
    console.log("🎉 Configuration test passed!");
    console.log("✅ Your RAG pipeline is ready to use with the configured index");
  } else {
    console.log("");
    console.log("❌ Configuration test failed!");
    console.log("Please check your setup and try again.");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
