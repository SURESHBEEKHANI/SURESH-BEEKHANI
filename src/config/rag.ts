// RAG Configuration
export interface RagConfig {
  enabled: boolean;
  useVectorSearch: boolean;
  topK: number;
  temperature: number;
  maxTokens: number;
  fallbackToGroq: boolean;
}

// Default RAG configuration - ENABLED
export const ragConfig: RagConfig = {
  enabled: true, // RAG functionality enabled
  useVectorSearch: true, // Vector search enabled
  topK: 5, // Number of documents to retrieve
  temperature: 0.7, // Response creativity
  maxTokens: 100, // Max response length
  fallbackToGroq: true, // Fallback to direct Groq if RAG fails
};

// Check if RAG is properly configured
export const isRagConfigured = (): boolean => {
  // Check for required environment variables
  const hasGroqKey = !!(process.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY);
  const hasPineconeKey = !!process.env.PINECONE_API_KEY;
  const hasPineconeIndex = !!process.env.PINECONE_INDEX_NAME;
  
  return ragConfig.enabled && hasGroqKey && hasPineconeKey && hasPineconeIndex;
};

// Get RAG status for debugging
export const getRagStatus = () => {
  const hasGroqKey = !!(process.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY);
  const hasPineconeKey = !!process.env.PINECONE_API_KEY;
  const hasPineconeIndex = !!process.env.PINECONE_INDEX_NAME;
  
  const issues: string[] = [];
  if (!hasGroqKey) issues.push('Missing Groq API key');
  if (!hasPineconeKey) issues.push('Missing Pinecone API key');
  if (!hasPineconeIndex) issues.push('Missing Pinecone index name');
  
  return {
    configured: isRagConfigured(),
    enabled: ragConfig.enabled,
    vectorSearch: ragConfig.useVectorSearch,
    embeddingModel: 'sentence-transformers/all-MiniLM-L6-v2',
    dimensions: 384,
    message: isRagConfigured() 
      ? 'RAG is configured and ready with Hugging Face embeddings' 
      : `RAG configuration issues: ${issues.join(', ')}`
  };
};