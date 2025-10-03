import { Pinecone } from '@pinecone-database/pinecone';
import Groq from 'groq-sdk';

// Initialize Pinecone
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Simple keyword matching for fallback context retrieval
function findRelevantContext(query, knowledgeBase) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\W+/).filter(w => w.length > 2);
  
  return knowledgeBase.filter(knowledge => {
    const knowledgeLower = knowledge.toLowerCase();
    return queryWords.some(word => knowledgeLower.includes(word));
  });
}

// Embedding function with fallback to Hugging Face API
async function getEmbedding(text) {
  try {
    // Try Hugging Face Inference API first (free tier available)
    const response = await fetch('https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text,
        options: { wait_for_model: true }
      }),
    });

    if (response.ok) {
      const embedding = await response.json();
      return Array.isArray(embedding[0]) ? embedding[0] : embedding;
    }
  } catch (error) {
    console.log('Hugging Face API not available, using fallback');
  }

  // Fallback: create a simple hash-based embedding
  const words = text.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const embedding = new Array(384).fill(0);
  
  words.forEach((word, index) => {
    const hash = word.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const embeddingIndex = Math.abs(hash) % 384;
    embedding[embeddingIndex] += 1 / (index + 1);
  });
  
  // Normalize
  const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return magnitude > 0 ? embedding.map(val => val / magnitude) : embedding;
}

// RAG function to retrieve relevant context
async function retrieveContext(query, topK = 3) {
  try {
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
    
    // Get embedding for the query
    const queryEmbedding = await getEmbedding(query);
    
    // Search for similar vectors
    const searchResponse = await index.query({
      vector: queryEmbedding,
      topK: topK,
      includeMetadata: true,
    });

    // Extract context from matches
    const contexts = searchResponse.matches
      .filter(match => match.score > 0.5) // Lower threshold for fallback embeddings
      .map(match => match.metadata?.text || '')
      .filter(text => text.length > 0);

    return contexts.join('\n\n');
  } catch (error) {
    console.error('Error retrieving context:', error);
    
    // Fallback: use simple keyword matching with predefined knowledge
    const fallbackKnowledge = [
      "Suresh Beekhani is an experienced AI developer specializing in machine learning, deep learning, and AI system architecture.",
      "Suresh offers AI development services including chatbot development, computer vision, NLP, and predictive modeling.",
      "He has worked on projects in healthcare, legal tech, e-commerce, and fintech industries.",
      "You can contact Suresh through the contact form on his website or connect with him on LinkedIn."
    ];
    
    const relevantKnowledge = findRelevantContext(query, fallbackKnowledge);
    
    return relevantKnowledge.join('\n\n');
  }
}

// Generate response using Groq with RAG context
async function generateResponse(query, context) {
  const systemPrompt = `You are Suresh's AI Assistant, a knowledgeable and helpful AI that represents Suresh Beekhani, an AI developer and consultant.

CONTEXT INFORMATION:
${context}

INSTRUCTIONS:
- Use the provided context to answer questions about Suresh's work, projects, services, and expertise
- If the context doesn't contain relevant information, provide general helpful responses about AI development
- Be conversational, professional, and enthusiastic about AI technology
- Always stay in character as Suresh's AI assistant
- Keep responses concise but informative
- If asked about specific projects or services, refer to the context information provided

PERSONALITY:
- Professional yet approachable
- Knowledgeable about AI/ML technologies
- Enthusiastic about helping with AI projects
- Direct and helpful in responses`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
      model: 'llama-3.1-70b-versatile',
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || 'I apologize, but I encountered an issue generating a response. Please try again.';
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I\'m having trouble connecting to my knowledge base right now. Please try again in a moment.';
  }
}

// Main handler function
export const handler = async (event) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const { message } = JSON.parse(event.body);

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Retrieve relevant context using RAG
    const context = await retrieveContext(message);

    // Generate response using Groq with context
    const response = await generateResponse(message, context);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response,
        contextUsed: context.length > 0,
        timestamp: new Date().toISOString(),
      }),
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Something went wrong processing your request.',
      }),
    };
  }
};