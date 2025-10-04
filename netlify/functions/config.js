// Configuration for Netlify functions
export const config = {
    PINECONE_API_KEY: process.env.PINECONE_API_KEY,
    PINECONE_INDEX_NAME: process.env.PINECONE_INDEX_NAME,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,

    // Model settings
    EMBEDDING_MODEL: "all-MiniLM-L6-v2",
    LLM_MODEL: "llama-3.3-70b-versatile",
    EMBEDDING_DIMENSION: 384,

    // RAG settings
    TOP_K: 5,
    SIMILARITY_THRESHOLD: 0.5,
    MAX_CHUNK_SIZE: 500,
    CHUNK_OVERLAP: 50,

    // LLM settings
    TEMPERATURE: 0.2,
    MAX_TOKENS: 100,

    // Retry settings
    RETRY_MAX_ATTEMPTS: 2,
    RETRY_BASE_DELAY: 500,
    RETRY_MAX_DELAY: 5000,
    REQUEST_TIMEOUT: 30000,

    // HuggingFace settings
    HUGGINGFACE_API_URL: 'https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2'
};