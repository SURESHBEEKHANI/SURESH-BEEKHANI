# Design Document: Enhanced RAG Pipeline with Robust Error Handling

## Overview

This design enhances the existing RAG (Retrieval-Augmented Generation) pipeline by implementing comprehensive error handling, service health monitoring, retry logic, and graceful degradation across all three core services: Pinecone (vector store), HuggingFace (embeddings), and Groq (LLM). The system will maintain functionality even when individual services fail, providing users with the best possible experience.

### Current Architecture

```
User Query → Chat Handler → Vector Store (Pinecone) → Embedding Service (HuggingFace)
                                ↓
                          Context Retrieval
                                ↓
                          LLM Service (Groq) → Response
```

### Enhanced Architecture

```
User Query → Chat Handler → Service Health Check
                ↓
         Error Boundary Wrapper
                ↓
    ┌───────────┴───────────┐
    ↓                       ↓
Vector Store            LLM Service
(with retry)           (with retry)
    ↓                       ↓
Embedding Service      Response Generator
(with fallback)        (with fallback)
    ↓                       ↓
Context Retrieval ────→ Enhanced Response
    ↓
Fallback Context
```

## Architecture

### 1. Service Health Monitoring Layer

A new `ServiceHealthMonitor` class will track the health and availability of all external services.

**Responsibilities:**
- Check API key presence for all services
- Perform lightweight health checks on initialization
- Track success/failure rates for each service
- Provide service status information for debugging

**Key Methods:**
- `checkServiceHealth()` - Validates all service configurations
- `recordSuccess(serviceName)` - Tracks successful operations
- `recordFailure(serviceName, error)` - Tracks failures with error details
- `getServiceStatus()` - Returns current health status of all services

### 2. Retry Utility Layer

A reusable `RetryHandler` utility that implements exponential backoff for transient failures.

**Configuration:**
- Max retries: 2
- Initial delay: 500ms
- Backoff multiplier: 2
- Max delay: 5000ms
- Timeout: 30 seconds

**Error Classification:**
- Retryable: Network errors, timeouts, rate limits, 5xx errors
- Non-retryable: Authentication errors, 4xx errors (except 429), configuration errors

### 3. Enhanced Embedding Service

Upgrade the `EmbeddingService` to use HuggingFace API with proper error handling and fallback.

**Primary Strategy:** HuggingFace Inference API
- Model: `sentence-transformers/all-MiniLM-L6-v2`
- Dimension: 384
- Endpoint: `https://api-inference.huggingface.co/pipeline/feature-extraction`

**Fallback Strategy:** Simple hash-based embedding (current implementation)
- Used when HuggingFace is unavailable
- Maintains 384 dimensions for compatibility
- Logs warning when fallback is used

**Error Handling:**
- Retry on network failures
- Fall back to simple embeddings on persistent failures
- Validate embedding dimensions before returning
- Cache successful embeddings to reduce API calls

### 4. Enhanced Vector Store

Improve the `VectorStore` class with better connection handling and error recovery.

**Connection Management:**
- Lazy initialization of Pinecone client
- Connection validation before queries
- Automatic reconnection on connection loss

**Query Enhancement:**
- Retry failed queries with exponential backoff
- Validate embedding dimensions before search
- Filter results by similarity threshold
- Return empty array (not fallback) when no relevant results found

**Error Scenarios:**
- Missing API key → Log error, return empty results
- Connection failure → Retry, then return empty results
- Invalid response → Log error, return empty results
- Dimension mismatch → Log error, skip invalid results

### 5. Enhanced LLM Service

Improve the `LLMService` class with better error messages and retry logic.

**Error Message Templates:**
- Configuration error: "I'm currently unable to connect to my AI services. Please try again later or contact Suresh directly through the contact form on this website."
- Temporary failure: "I'm experiencing a temporary issue. Please try again in a moment."
- Rate limit: "I'm receiving a high volume of requests right now. Please try again in a few moments."
- Timeout: "The request is taking longer than expected. Please try again."

**Response Enhancement:**
- Include context quality indicators
- Provide fallback responses when LLM fails
- Add metadata about service status
- Implement streaming for long responses (future enhancement)

### 6. Enhanced Chat Handler

Update the main `chat.js` handler to orchestrate the enhanced pipeline.

**Request Flow:**
1. Validate input message
2. Check service health status
3. Attempt vector search with retry
4. Generate embeddings with fallback
5. Retrieve and filter context
6. Generate LLM response with retry
7. Return enhanced response with metadata

**Response Structure:**
```javascript
{
  response: string,           // The actual response text
  contextUsed: boolean,       // Whether context was available
  numContexts: number,        // Number of context chunks used
  serviceStatus: {            // Service health information
    vectorStore: 'healthy' | 'degraded' | 'unavailable',
    embeddings: 'healthy' | 'degraded' | 'unavailable',
    llm: 'healthy' | 'degraded' | 'unavailable'
  },
  timestamp: string,          // ISO timestamp
  fallbackUsed: boolean       // Whether fallback strategies were used
}
```

## Components and Interfaces

### ServiceHealthMonitor

```javascript
class ServiceHealthMonitor {
  constructor()
  async checkServiceHealth(): Promise<HealthStatus>
  recordSuccess(serviceName: string): void
  recordFailure(serviceName: string, error: Error): void
  getServiceStatus(): ServiceStatus
  getFailureCount(serviceName: string): number
  resetMetrics(serviceName: string): void
}

interface HealthStatus {
  pinecone: boolean
  huggingface: boolean
  groq: boolean
  timestamp: string
}

interface ServiceStatus {
  [serviceName: string]: {
    available: boolean
    successCount: number
    failureCount: number
    lastError: string | null
    lastSuccess: string | null
  }
}
```

### RetryHandler

```javascript
class RetryHandler {
  static async withRetry<T>(
    operation: () => Promise<T>,
    options: RetryOptions
  ): Promise<T>
  
  static isRetryableError(error: Error): boolean
  static getRetryDelay(attempt: number, baseDelay: number): number
}

interface RetryOptions {
  maxRetries: number
  baseDelay: number
  maxDelay: number
  timeout: number
  onRetry?: (attempt: number, error: Error) => void
}
```

### Enhanced EmbeddingService

```javascript
class EmbeddingService {
  constructor()
  async getEmbedding(text: string): Promise<number[]>
  async getEmbeddingWithHuggingFace(text: string): Promise<number[]>
  fallbackEmbedding(text: string): number[]
  validateEmbedding(embedding: number[]): boolean
}
```

### Enhanced VectorStore

```javascript
class VectorStore {
  constructor()
  async search(query: string, topK?: number): Promise<string[]>
  async searchWithRetry(query: string, topK: number): Promise<SearchResult[]>
  validateConnection(): boolean
  filterByRelevance(results: SearchResult[]): string[]
}

interface SearchResult {
  text: string
  score: number
  metadata: Record<string, any>
}
```

### Enhanced LLMService

```javascript
class LLMService {
  constructor()
  async generateResponse(query: string, context: string): Promise<string>
  async generateResponseWithRetry(query: string, context: string): Promise<string>
  getErrorMessage(errorType: string): string
  getFallbackResponse(query: string): string
}
```

## Data Models

### Error Types

```javascript
const ErrorTypes = {
  CONFIGURATION: 'configuration',
  NETWORK: 'network',
  AUTHENTICATION: 'authentication',
  RATE_LIMIT: 'rate_limit',
  TIMEOUT: 'timeout',
  VALIDATION: 'validation',
  UNKNOWN: 'unknown'
}
```

### Service Names

```javascript
const ServiceNames = {
  PINECONE: 'pinecone',
  HUGGINGFACE: 'huggingface',
  GROQ: 'groq',
  VECTOR_STORE: 'vector_store',
  EMBEDDINGS: 'embeddings',
  LLM: 'llm'
}
```

## Error Handling

### Error Classification Strategy

1. **Configuration Errors** (Non-retryable)
   - Missing API keys
   - Invalid configuration values
   - Action: Log error, use fallback, inform user

2. **Network Errors** (Retryable)
   - Connection timeouts
   - DNS failures
   - Socket errors
   - Action: Retry with exponential backoff

3. **Authentication Errors** (Non-retryable)
   - Invalid API keys
   - Expired tokens
   - Action: Log error, inform developer, use fallback

4. **Rate Limit Errors** (Retryable with delay)
   - 429 status codes
   - Action: Wait for specified time, then retry

5. **Service Errors** (Conditionally retryable)
   - 5xx errors: Retry
   - 4xx errors (except 429): Don't retry
   - Action: Based on error code

### Graceful Degradation Strategy

**Level 1: Full Functionality**
- All services operational
- Vector search with HuggingFace embeddings
- LLM responses with relevant context

**Level 2: Degraded Embeddings**
- Pinecone and Groq operational
- HuggingFace unavailable
- Use fallback embeddings for vector search
- LLM responses with context (lower quality)

**Level 3: No Vector Search**
- Groq operational
- Pinecone or embeddings unavailable
- LLM responses without context
- General AI/ML knowledge responses

**Level 4: Complete Fallback**
- All services unavailable
- Static fallback responses
- Contact information provided

### Logging Strategy

**Log Levels:**
- ERROR: Service failures, configuration issues
- WARN: Fallback usage, degraded performance
- INFO: Successful operations, health checks
- DEBUG: Detailed operation traces

**Log Format:**
```javascript
{
  timestamp: ISO string,
  level: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG',
  service: string,
  operation: string,
  message: string,
  error: Error object (if applicable),
  metadata: object
}
```

## Testing Strategy

### Unit Tests

1. **ServiceHealthMonitor Tests**
   - Test health check with all services available
   - Test health check with missing API keys
   - Test success/failure tracking
   - Test metrics reset

2. **RetryHandler Tests**
   - Test successful operation (no retry needed)
   - Test retry on transient failure
   - Test max retries exceeded
   - Test exponential backoff timing
   - Test timeout handling
   - Test error classification

3. **EmbeddingService Tests**
   - Test HuggingFace API success
   - Test HuggingFace API failure with fallback
   - Test embedding dimension validation
   - Test fallback embedding generation

4. **VectorStore Tests**
   - Test successful search with results
   - Test search with no results
   - Test connection failure with retry
   - Test relevance filtering
   - Test dimension validation

5. **LLMService Tests**
   - Test successful response generation
   - Test retry on failure
   - Test error message selection
   - Test fallback response generation

### Integration Tests

1. **Full RAG Pipeline**
   - Test end-to-end with all services healthy
   - Test with HuggingFace unavailable
   - Test with Pinecone unavailable
   - Test with Groq unavailable
   - Test with all services unavailable

2. **Error Recovery**
   - Test recovery after transient failure
   - Test graceful degradation
   - Test service status reporting

3. **Performance Tests**
   - Test response time under normal conditions
   - Test response time with retries
   - Test timeout handling

### Manual Testing Scenarios

1. Test with missing GROQ_API_KEY
2. Test with missing PINECONE_API_KEY
3. Test with missing HUGGINGFACE_API_KEY
4. Test with invalid API keys
5. Test with network disconnection
6. Test with rate limiting
7. Test with various user queries

## Implementation Notes

### Dependencies

No new dependencies required. The implementation uses existing packages:
- `@pinecone-database/pinecone` - Already installed
- `groq-sdk` - Already installed
- Native `fetch` API for HuggingFace - Built-in

### Configuration Changes

Add to `config.js`:
```javascript
// Retry settings
RETRY_MAX_ATTEMPTS: 2,
RETRY_BASE_DELAY: 500,
RETRY_MAX_DELAY: 5000,
REQUEST_TIMEOUT: 30000,

// HuggingFace settings
HUGGINGFACE_API_URL: 'https://api-inference.huggingface.co/pipeline/feature-extraction',
HUGGINGFACE_MODEL: 'sentence-transformers/all-MiniLM-L6-v2',
```

### Backward Compatibility

All changes are backward compatible. The existing API contracts remain unchanged:
- `vectorStore.search(query)` - Same signature
- `embeddingService.getEmbedding(text)` - Same signature
- `llmService.generateResponse(query, context)` - Same signature
- `handler(event, context)` - Same signature

Enhanced functionality is added internally without breaking existing integrations.

### Performance Considerations

1. **Caching Strategy** (Future Enhancement)
   - Cache embeddings for common queries
   - Cache vector search results with TTL
   - Reduce API calls and improve response time

2. **Parallel Operations**
   - Health checks can run in parallel
   - Multiple embedding requests can be batched

3. **Timeout Management**
   - Set appropriate timeouts for each service
   - Fail fast on non-retryable errors
   - Use circuit breaker pattern for repeated failures (future enhancement)

## Security Considerations

1. **API Key Protection**
   - Never log API keys
   - Validate API key format before use
   - Use environment variables only

2. **Error Message Sanitization**
   - Don't expose internal errors to users
   - Log detailed errors server-side only
   - Provide generic user-friendly messages

3. **Rate Limiting**
   - Respect service rate limits
   - Implement client-side rate limiting if needed
   - Handle 429 responses gracefully

4. **Input Validation**
   - Sanitize user queries
   - Limit query length
   - Prevent injection attacks
