import { vectorStore } from './vector-store.js';
import { llmService } from './llm-service.js';
import { serviceHealth } from './service-health.js';

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

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Check service health
    const health = await serviceHealth.checkServiceHealth();
    console.log('Service health:', health);

    // Retrieve relevant context (gracefully degrades if unavailable)
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

    // Generate response (with retry and fallback)
    let response;
    let llmStatus = 'healthy';
    try {
      response = await llmService.generateResponse(message, contextText);
    } catch (error) {
      console.error('LLM service failed:', error.message);
      llmStatus = 'unavailable';
      response = "I'm sorry, I'm currently unable to connect to my AI services. Please try again later or contact Suresh directly through the contact form on this website.";
    }

    // Determine embedding service status
    const embeddingStatus = health.huggingface ? 'healthy' : 'degraded';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: response,
        contextUsed: contexts.length > 0,
        numContexts: contexts.length,
        serviceStatus: {
          vectorStore: vectorStoreStatus,
          embeddings: embeddingStatus,
          llm: llmStatus
        },
        timestamp: new Date().toISOString(),
        fallbackUsed: vectorStoreStatus === 'unavailable' || embeddingStatus === 'degraded'
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