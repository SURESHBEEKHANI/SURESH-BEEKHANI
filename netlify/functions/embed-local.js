// Local embedding service using Xenova transformers
import { pipeline } from '@xenova/transformers';

let embedder = null;

// Initialize the embedding model
async function initializeEmbedder() {
  if (!embedder) {
    try {
      embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    } catch (error) {
      console.error('Error initializing embedder:', error);
      throw error;
    }
  }
  return embedder;
}

// Generate embeddings using local model
async function generateEmbedding(text) {
  try {
    const model = await initializeEmbedder();
    const output = await model(text, { pooling: 'mean', normalize: true });
    
    // Convert to regular array
    const embedding = Array.from(output.data);
    
    // Ensure 384 dimensions (all-MiniLM-L6-v2 outputs 384 dimensions)
    if (embedding.length !== 384) {
      console.warn(`Expected 384 dimensions, got ${embedding.length}`);
    }
    
    return embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

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
    const { text } = JSON.parse(event.body);

    if (!text || typeof text !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Text is required' }),
      };
    }

    const embedding = await generateEmbedding(text);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        embedding,
        dimensions: embedding.length,
        model: 'all-MiniLM-L6-v2',
      }),
    };

  } catch (error) {
    console.error('Embedding function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to generate embedding',
        message: error.message,
      }),
    };
  }
};