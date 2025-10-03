// Simple test function to verify the setup works
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
    const { message } = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Simple response logic
    let response = "Thanks for your message! I'm Suresh's AI Assistant.";
    
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('project')) {
      response = "Suresh has worked on various AI projects including healthcare diagnostics, legal document analysis, e-commerce recommendations, and more. You can explore his portfolio section to see detailed case studies.";
    } else if (lowerMessage.includes('service') || lowerMessage.includes('help')) {
      response = "Suresh offers AI development, machine learning, chatbot development, computer vision, NLP, and predictive modeling services. He specializes in custom AI solutions for various industries.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      response = "You can contact Suresh through the contact form on this website, or connect with him on LinkedIn. He's always happy to discuss AI projects and potential collaborations.";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      response = "Suresh is an experienced AI developer with expertise in machine learning, deep learning, and AI system architecture. He has worked across healthcare, fintech, e-commerce, and other industries.";
    } else if (lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      response = "Suresh's technical expertise includes Python, TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, OpenAI APIs, LangChain, vector databases like Pinecone, and modern web technologies.";
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response,
        contextUsed: true,
        timestamp: new Date().toISOString(),
      }),
    };

  } catch (error) {
    console.error('Test chat error:', error);
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