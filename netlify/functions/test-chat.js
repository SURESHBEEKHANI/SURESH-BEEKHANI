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

    // Enhanced response logic with better keyword matching
    let response = "Thanks for your message! I'm Suresh's AI Assistant. Feel free to ask about his AI services, projects, experience, or how to get in touch.";

    const lowerMessage = message.toLowerCase();

    // Experience and years
    if (lowerMessage.includes('year') || lowerMessage.includes('experience') || lowerMessage.includes('how long')) {
      response = "Suresh has over 5+ years of experience in AI and machine learning development. He's worked across multiple industries including healthcare, fintech, legal tech, and e-commerce, delivering successful AI solutions.";
    }
    // Portfolio and projects
    else if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work')) {
      response = "Suresh has worked on diverse AI projects including healthcare diagnostic tools, legal document analysis systems, e-commerce recommendation engines, and financial risk assessment models. Each project showcases his expertise in custom AI solutions.";
    }
    // Services and help
    else if (lowerMessage.includes('service') || lowerMessage.includes('help') || lowerMessage.includes('offer') || lowerMessage.includes('machine learning')) {
      response = "Suresh offers comprehensive AI services: custom machine learning model development, chatbot development, computer vision solutions, NLP systems, predictive analytics, and AI system integration. He specializes in creating tailored solutions for your specific business needs.";
    }
    // Contact information
    else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('number')) {
      response = "You can contact Suresh through the contact form on this website, connect with him on LinkedIn, or schedule a consultation call. He responds to inquiries within 24 hours and offers free initial consultations to discuss your AI project requirements.";
    }
    // Background and expertise
    else if (lowerMessage.includes('background') || lowerMessage.includes('about') || lowerMessage.includes('who')) {
      response = "Suresh Beekhani is an experienced AI developer and consultant specializing in machine learning, deep learning, and AI system architecture. He has a proven track record of delivering successful AI solutions across healthcare, fintech, e-commerce, and legal technology sectors.";
    }
    // Technologies and skills
    else if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('skill') || lowerMessage.includes('tool')) {
      response = "Suresh's technical expertise includes Python, TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, OpenAI APIs, LangChain, vector databases (Pinecone, Weaviate), cloud platforms (AWS, Google Cloud, Azure), and modern web technologies (React, Node.js, FastAPI).";
    }
    // Pricing and cost
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('pricing')) {
      response = "Suresh offers flexible pricing models including hourly consulting rates, fixed-price project quotes, and retainer agreements for ongoing development. He provides detailed project estimates after understanding your specific requirements and scope. Contact him for a personalized quote.";
    }
    // Industries
    else if (lowerMessage.includes('industry') || lowerMessage.includes('sector') || lowerMessage.includes('healthcare') || lowerMessage.includes('finance') || lowerMessage.includes('ecommerce')) {
      response = "Suresh has extensive experience across multiple industries: healthcare (diagnostic tools, patient risk assessment), fintech (fraud detection, risk modeling), e-commerce (recommendation systems, customer analytics), legal tech (document analysis), and more.";
    }
    // Timeline and delivery
    else if (lowerMessage.includes('time') || lowerMessage.includes('delivery') || lowerMessage.includes('timeline') || lowerMessage.includes('how long') || lowerMessage.includes('duration')) {
      response = "Project timelines vary by complexity: proof-of-concept solutions typically take 2-4 weeks, MVP development 6-12 weeks, and full-scale AI systems 3-6 months. Suresh provides regular updates and maintains transparent communication throughout the development process.";
    }
    // Greetings
    else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      response = "Hello! I'm Suresh's AI Assistant. I'm here to help you learn about his AI development services, portfolio projects, and expertise. What would you like to know about his work in artificial intelligence and machine learning?";
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