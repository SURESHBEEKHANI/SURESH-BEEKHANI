// Resolve RAG base URL with env-driven overrides for development
// Priority: VITE_RAG_BASE_URL -> VITE_RAG_PORT -> default dev port 5757
// In production, use Netlify redirect `/api`.
const DEFAULT_PROD_URL = '/.netlify/functions';
// In development, default to Netlify dev functions URL
const DEFAULT_DEV_NETLIFY = 'http://localhost:8888/.netlify/functions';

// Vite exposes envs via import.meta.env
const viteEnv = (typeof import.meta !== 'undefined' && (import.meta as any).env)
  ? (import.meta as any).env
  : {} as any;

const isProd = !!viteEnv?.PROD;

const resolvedDevBase = viteEnv.VITE_RAG_BASE_URL
  || viteEnv.VITE_NETLIFY_DEV_URL
  || DEFAULT_DEV_NETLIFY;

const RAG_API_BASE_URL = isProd
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
  private readonly defaultRetries: number = 3;
  private readonly defaultBackoffMs: number = 350;

  constructor() {
    this.baseUrl = RAG_API_BASE_URL;
  }

  private async fetchWithRetry(input: RequestInfo | URL, init: RequestInit = {}, retries = this.defaultRetries, backoffMs = this.defaultBackoffMs): Promise<Response> {
    let attempt = 0;
    let lastError: unknown = null;
    while (attempt <= retries) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        const resp = await fetch(input, { ...init, signal: controller.signal });
        clearTimeout(timeout);
        // Retry on 429/5xx
        if (resp.status === 429 || (resp.status >= 500 && resp.status < 600)) {
          throw new Error(`HTTP ${resp.status}`);
        }
        return resp;
      } catch (err) {
        lastError = err;
        if (attempt === retries) break;
        const jitter = Math.floor(Math.random() * 100);
        const delay = backoffMs * Math.pow(2, attempt) + jitter;
        await new Promise((r) => setTimeout(r, delay));
        attempt += 1;
      }
    }
    throw lastError instanceof Error ? lastError : new Error("Network error");
  }

  private async parseJsonSafe(response: Response): Promise<any> {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return await response.json();
    }
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(text.slice(0, 500) || `HTTP ${response.status}`);
    }
  }

  async query(question: string, namespace: string = "default"): Promise<RAGResponse> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: question, namespace }),
      });

      if (!response.ok) {
        const errorData: RAGError = await this.parseJsonSafe(response);
        throw new Error(errorData.error || (errorData.detail as string) || `HTTP error! status: ${response.status}`);
      }

      const data: RAGResponse = await this.parseJsonSafe(response);
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
      const response = await this.fetchWithRetry(`${this.baseUrl}/health`, {}, 1);
      return response.ok;
    } catch {
      return false;
    }
  }

  async getStats() {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/stats`);
      if (!response.ok) throw new Error('Failed to get stats');
      return await response.json();
    } catch (error) {
      console.error('Stats API Error:', error);
      return null;
    }
  }

  async detectDatabase(): Promise<DatabaseInfo | null> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/detect-database`);
      if (!response.ok) throw new Error('Failed to detect database');
      const raw = await this.parseJsonSafe(response);
      const normalized: DatabaseInfo = {
        connected: Boolean(raw?.connected),
        indexName: String(raw?.indexName || ''),
        totalVectors: Number(raw?.totalVectorCount ?? raw?.totalVectors ?? 0) || 0,
        namespaces: Array.isArray(raw?.namespaces)
          ? (raw.namespaces as string[])
          : (raw && typeof raw.namespaces === 'object' && raw.namespaces !== null)
            ? Object.keys(raw.namespaces as Record<string, unknown>)
            : [],
        dimension: Number(raw?.dimension || 0) || 0,
        timestamp: String(raw?.timestamp || new Date().toISOString()),
      };
      return normalized;
    } catch (error) {
      console.error('Database detection error:', error);
      return null;
    }
  }
}

export const ragApi = new RAGApiService();
