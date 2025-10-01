import 'dotenv/config';
import { Pinecone } from '@pinecone-database/pinecone';

async function main() {
  const apiKey = process.env.PINECONE_API_KEY;
  const indexName = process.env.PINECONE_INDEX;
  if (!indexName) {
    console.error('Missing PINECONE_INDEX in environment variables');
    process.exit(1);
  }

  if (!apiKey) {
    console.error('Missing PINECONE_API_KEY in environment variables');
    process.exit(1);
  }

  console.log('🔗 Connecting to Pinecone...');
  const pc = new Pinecone({ apiKey });
  const index = pc.index(indexName);

  console.log(`📡 Target index: ${indexName}`);
  const stats = await index.describeIndexStats();

  console.log('📊 Index stats:');
  console.log(`  - Dimension: ${stats.dimension}`);
  console.log(`  - Total vectors: ${stats.totalRecordCount || 0}`);
  console.log(`  - Namespaces: ${Object.keys(stats.namespaces || {}).join(', ') || 'None'}`);
}

main().catch((err) => {
  console.error('Failed to connect to Pinecone:', err instanceof Error ? err.message : String(err));
  process.exit(1);
});


