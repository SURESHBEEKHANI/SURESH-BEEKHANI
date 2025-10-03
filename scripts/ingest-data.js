// Script to ingest knowledge data into Pinecone via Netlify function
import fs from 'fs';
import path from 'path';

const NETLIFY_SITE_URL = process.env.URL || 'http://localhost:8888';

async function ingestData() {
  try {
    console.log('🚀 Starting data ingestion...');
    
    // Read the knowledge data
    const dataPath = path.join(process.cwd(), 'data', 'suresh-knowledge.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const documents = JSON.parse(rawData);
    
    console.log(`📚 Loaded ${documents.length} documents`);
    
    // Call the ingestion function
    const response = await fetch(`${NETLIFY_SITE_URL}/.netlify/functions/ingest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documents }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ingestion failed: ${response.status} - ${errorText}`);
    }
    
    const result = await response.json();
    console.log('✅ Ingestion completed successfully!');
    console.log(`📊 Results:`, result);
    
  } catch (error) {
    console.error('❌ Ingestion failed:', error);
    process.exit(1);
  }
}

// Run the ingestion
ingestData();