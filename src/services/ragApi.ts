// Resolve RAG base URL with env-driven overrides for development
// Priority: VITE_RAG_BASE_URL -> VITE_RAG_PORT -> default dev port 5757
// In production, use Netlify redirect `/api`.
const DEFAULT_PROD_URL = '/api';
// In development, default to Netlify dev functions URL
const DEFAULT_DEV_NETLIFY = 'http://localhost:8888/.netlify/functions';

// Vite exposes envs via import.meta.env
const viteEnv = (typeof import.meta !== 'undefined' && (import.meta as any).env)
  ? (import.meta as any).env
  : {} as any;

const resolvedDevBase = viteEnv.VITE_RAG_BASE_URL
  || viteEnv.VITE_NETLIFY_DEV_URL
  || DEFAULT_DEV_NETLIFY;

const RAG_API_BASE_URL = (typeof process !== 'undefined' && process.env.NODE_ENV === 'production')
  ? DEFAULT_PROD_URL
  : resolvedDevBase;

export interface RAGResponse {
  answer: string;
  sourceDocuments: Array<{
    content: string;
    metadata: any;
  }>;
  processingTime: string;
  namespace?: string;
  timestamp: string;
}

export interface DatabaseInfo {
  connected: boolean;
  indexName: string;
  totalVectors: number;
  namespaces: string[];
  dimension: number;
  timestamp: string;
}

export interface RAGError {
  error: string;
  detail?: string;
}

class RAGApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = RAG_API_BASE_URL;
  }

  async query(question: string, namespace: string = "default"): Promise<RAGResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: question, namespace }),
      });

      if (!response.ok) {
        const errorData: RAGError = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: RAGResponse = await response.json();
      return data;
    } catch (error) {
      console.error('RAG API Error:', error);
      throw new Error(
        error instanceof Error 
          ? error.message 
          : 'Failed to get response from AI assistant'
      );
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      return response.ok;
    } catch {
      return false;
    }
  }

  async getStats() {
    try {
      const response = await fetch(`${this.baseUrl}/stats`);
      if (!response.ok) throw new Error('Failed to get stats');
      return await response.json();
    } catch (error) {
      console.error('Stats API Error:', error);
      return null;
    }
  }

  async detectDatabase(): Promise<DatabaseInfo | null> {
    try {
      const response = await fetch(`${this.baseUrl}/detect-database`);
      if (!response.ok) throw new Error('Failed to detect database');
      return await response.json();
    } catch (error) {
      console.error('Database detection error:', error);
      return null;
    }
  }
}

export const ragApi = new RAGApiService();
