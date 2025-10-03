// Groq configuration and utilities
export const groqConfig = {
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  model: "llama-3.1-70b-versatile", // Fast and capable model
  temperature: 0.2,
  maxTokens: 100,
  topP: 0.9,
};

export const isGroqConfigured = (): boolean => {
  return Boolean(groqConfig.apiKey && groqConfig.apiKey.trim() !== '');
};

export const getGroqStatus = (): { configured: boolean; message: string } => {
  if (!groqConfig.apiKey) {
    return {
      configured: false,
      message: 'VITE_GROQ_API_KEY not found in environment variables'
    };
  }
  
  if (groqConfig.apiKey.trim() === '') {
    return {
      configured: false,
      message: 'VITE_GROQ_API_KEY is empty'
    };
  }
  
  return {
    configured: true,
    message: 'Groq is properly configured'
  };
};