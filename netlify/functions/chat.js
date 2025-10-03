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

// Simple keyword matching for fallback
function findRelevantContext(query, knowledgeBase) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\W+/).filter(w => w.length > 2);

  return knowledgeBase.filter(knowledge => {
    const knowledgeLower = knowledge.toLowerCase();
    return queryWords.some(word => knowledgeLower.includes(word));
  });
}

// Embedding function with Hugging Face + fallback
async function getEmbedding(text) {
  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: text,
          options: { wait_for_model: true },
        }),
      }
    );

    if (response.ok) {
      const embedding = await response.json();
      return Array.isArray(embedding[0]) ? embedding[0] : embedding;
    }
  } catch (error) {
    console.warn('⚠️ Hugging Face API not available, using fallback embedding.');
  }

  // Fallback: simple hash embedding
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

// Retrieve relevant context with Pinecone + fallback
async function retrieveContext(query, topK = 3) {
  try {
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

    const queryEmbedding = await getEmbedding(query);

    const searchResponse = await index.query({
      vector: queryEmbedding,
      topK: topK,
      includeMetadata: true,
    });

    const contexts = searchResponse.matches
      .filter(match => match.score > 0.5)
      .map(match => match.metadata?.text || '')
      .filter(Boolean);

    return contexts.join('\n\n');
  } catch (error) {
    console.error('⚠️ Error retrieving context from Pinecone:', error);

    // Fallback to static knowledge
    const fallbackKnowledge = [
      "Suresh Beekhani is an experienced AI developer specializing in machine learning, deep learning, and AI system architecture.",
      "Suresh offers AI services including chatbot development, computer vision, NLP, and predictive modeling.",
      "He has worked on projects in healthcare, legal tech, e-commerce, and fintech industries.",
      "You can contact Suresh through his website contact form or LinkedIn.",
    ];

    const relevantKnowledge = findRelevantContext(query, fallbackKnowledge);
    return relevantKnowledge.join('\n\n');
  }
}

// Generate response with Groq
async function generateResponse(query, context) {
  const systemPrompt = `
You are Suresh's AI Assistant, representing AI developer and consultant Suresh Beekhani.  

CONTEXT:  
${context}

INSTRUCTIONS:  
- Use the context to answer questions about Suresh’s work, projects, and services.  
- If context is missing or irrelevant, give general but accurate AI/ML insights.  
- Be professional, approachable, and concise.  
- Always stay in character as Suresh’s AI Assistant.  

FORMAT:  
Answer: [clear response]  
Context Used: [summary or “No relevant context”]  
Next Steps: [optional suggestions]  
`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query },
      ],
      model: 'llama-3.1-70b-versatile',
      temperature: 0.2,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || 
      'I encountered an issue generating a response. Please try again.';
  } catch (error) {
    console.error('⚠️ Error generating response with Groq:', error);
    return "I'm having trouble generating a response right now. Please try again shortly.";
  }
}

// Serverless handler
export const handler = async (event) => {
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
    const { message } = JSON.parse(event.body);

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    const context = await retrieveContext(message);
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
    console.error('⚠️ Server error:', error);
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
