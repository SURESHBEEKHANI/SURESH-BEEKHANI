export const config = {
  // API Keys
  GROQ_API_KEY: process.env.GROQ_API_KEY || '',
  PINECONE_API_KEY: process.env.PINECONE_API_KEY || '',
  PINECONE_INDEX_NAME: process.env.PINECONE_INDEX_NAME || 'towering',
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY || '',

  // LLM settings - tuned for short, human-like answers
  LLM_MODEL: process.env.LLM_MODEL || "deepseek-r1-distill-llama-70b",
  SUMMARY_MODEL: process.env.SUMMARY_MODEL || "llama-3-8b-instruct",  // ✅ smaller, cheaper model for summarization
  TEMPERATURE: Number(process.env.TEMPERATURE) || 0.7,
  TOP_P: Number(process.env.TOP_P) || 0.9,
  MAX_COMPLETION_TOKENS: Number(process.env.MAX_COMPLETION_TOKENS) || 200,
  MAX_CONTEXT_TOKENS: Number(process.env.MAX_CONTEXT_TOKENS) || 300,

  // Embedding settings
  EMBEDDING_MODEL: "all-MiniLM-L6-v2",
  EMBEDDING_DIMENSION: 384,
  HUGGINGFACE_API_URL: 'https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-MiniLM-L6-v2',

  // RAG settings
  TOP_K: 5,
  SIMILARITY_THRESHOLD: 0.15,

  // Context handling
  AUTO_SUMMARIZE_CONTEXT: process.env.AUTO_SUMMARIZE_CONTEXT === 'true' || false,

  // Retry settings
  RETRY_MAX_ATTEMPTS: Number(process.env.RETRY_MAX_ATTEMPTS) || 2,
  RETRY_BASE_DELAY: Number(process.env.RETRY_BASE_DELAY) || 500,
  RETRY_MAX_DELAY: Number(process.env.RETRY_MAX_DELAY) || 5000,
  REQUEST_TIMEOUT: Number(process.env.REQUEST_TIMEOUT) || 30000,
};
