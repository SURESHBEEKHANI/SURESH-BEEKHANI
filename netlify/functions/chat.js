import { llmService } from './llm-service.js';
import { vectorStore } from './vector-store.js';

export const handler = async (event, context) => {
  // CORS headers
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
    const body = JSON.parse(event.body);
    const message = body.message;
    const stream = body.stream || false; // Check if streaming is requested

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Retrieve relevant context from vector store (gracefully degrades if unavailable)
    let contexts = [];
    let vectorStoreStatus = 'unavailable';
    try {
      contexts = await vectorStore.search(message);
      vectorStoreStatus = contexts.length > 0 ? 'healthy' : 'degraded';
    } catch (error) {
      console.warn('Vector store search failed, continuing without context:', error.message);
      vectorStoreStatus = 'unavailable';
    }

    const contextText = contexts.join('\n\n');

    // Generate response with context
    let response;
    let llmStatus = 'healthy';
    try {
      response = await llmService.generateResponse(message, contextText);
    } catch (error) {
      console.error('LLM service failed:', error.message);
      console.error('Error type:', error.constructor.name);
      llmStatus = 'unavailable';
      
      // Provide specific error messages based on error type
      if (error.message.includes('API key') || error.message.includes('not configured')) {
        response = "I'm sorry, the AI service is not properly configured. Please contact the administrator.";
      } else if (error.message.includes('rate limit') || error.status === 429) {
        response = "I'm receiving a high volume of requests right now. Please try again in a few moments.";
      } else if (error.message.includes('timeout')) {
        response = "The request is taking longer than expected. Please try again.";
      } else {
        response = "I'm having trouble generating a response right now. Please try again shortly.";
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: response,
        contextUsed: contexts.length > 0,
        numContexts: contexts.length,
        serviceStatus: {
          vectorStore: vectorStoreStatus,
          llm: llmStatus
        },
        timestamp: new Date().toISOString()
      }),
    };

  } catch (error) {
    console.error('Chat error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: "I'm sorry, I'm currently unable to connect to my AI services. Please try again later or contact Suresh directly through the contact form on this website.",
      }),
    };
  }
};