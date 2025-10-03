import { Pinecone } from '@pinecone-database/pinecone';

// Initialize Pinecone
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

// Function to get embeddings from our local embedding service
async function getEmbedding(text) {
  try {
    const response = await fetch(`${process.env.URL}/.netlify/functions/embed-local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Embedding service error: ${response.status}`);
    }

    const data = await response.json();
    return data.embedding;
  } catch (error) {
    console.error('Error getting embedding:', error);
    throw error;
  }
}

// Function to chunk text into smaller pieces
function chunkText(text, maxChunkSize = 500, overlap = 50) {
  const chunks = [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (currentChunk.length + trimmedSentence.length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      
      // Add overlap
      const words = currentChunk.split(' ');
      const overlapWords = words.slice(-Math.floor(overlap / 10));
      currentChunk = overlapWords.join(' ') + ' ' + trimmedSentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + trimmedSentence;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

// Main ingestion handler
export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { documents } = JSON.parse(event.body);

    if (!documents || !Array.isArray(documents)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Documents array is required' }),
      };
    }

    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
    const vectors = [];

    // Process each document
    for (let i = 0; i < documents.length; i++) {
      const doc = documents[i];
      const { text, metadata = {} } = doc;

      if (!text) {
        console.warn(`Skipping document ${i}: no text provided`);
        continue;
      }

      // Chunk the text
      const chunks = chunkText(text);

      // Create vectors for each chunk
      for (let j = 0; j < chunks.length; j++) {
        const chunk = chunks[j];
        
        try {
          const embedding = await getEmbedding(chunk);
          
          vectors.push({
            id: `doc_${i}_chunk_${j}_${Date.now()}`,
            values: embedding,
            metadata: {
              ...metadata,
              text: chunk,
              chunkIndex: j,
              totalChunks: chunks.length,
              documentIndex: i,
              timestamp: new Date().toISOString(),
            },
          });
        } catch (error) {
          console.error(`Error processing chunk ${j} of document ${i}:`, error);
        }
      }
    }

    if (vectors.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No valid vectors generated' }),
      };
    }

    // Upsert vectors to Pinecone in batches
    const batchSize = 100;
    let upsertedCount = 0;

    for (let i = 0; i < vectors.length; i += batchSize) {
      const batch = vectors.slice(i, i + batchSize);
      
      try {
        await index.upsert(batch);
        upsertedCount += batch.length;
        console.log(`Upserted batch ${Math.floor(i / batchSize) + 1}, total: ${upsertedCount}`);
      } catch (error) {
        console.error(`Error upserting batch ${Math.floor(i / batchSize) + 1}:`, error);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Documents ingested successfully',
        documentsProcessed: documents.length,
        vectorsCreated: vectors.length,
        vectorsUpserted: upsertedCount,
      }),
    };

  } catch (error) {
    console.error('Ingestion function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to ingest documents',
        message: error.message,
      }),
    };
  }
};