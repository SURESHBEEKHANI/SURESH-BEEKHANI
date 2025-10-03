import os

class Config:
    PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
    PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
    
    # Model settings
    EMBEDDING_MODEL = "all-MiniLM-L6-v2"
    LLM_MODEL = "llama-3.3-70b-versatile"
    EMBEDDING_DIMENSION = 384
    
    # RAG settings
    TOP_K = 3
    SIMILARITY_THRESHOLD = 0.5
    MAX_CHUNK_SIZE = 500
    CHUNK_OVERLAP = 50
    
    # LLM settings
    TEMPERATURE = 0.2
    MAX_TOKENS = 300