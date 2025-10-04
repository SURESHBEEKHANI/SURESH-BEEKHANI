import { config } from './config.js';

export class ServiceHealthMonitor {
  constructor() {
    this.metrics = {
      pinecone: { successCount: 0, failureCount: 0, lastError: null, lastSuccess: null },
      huggingface: { successCount: 0, failureCount: 0, lastError: null, lastSuccess: null },
      groq: { successCount: 0, failureCount: 0, lastError: null, lastSuccess: null }
    };
  }

  async checkServiceHealth() {
    const health = {
      pinecone: !!config.PINECONE_API_KEY,
      huggingface: !!config.HUGGINGFACE_API_KEY,
      groq: !!config.GROQ_API_KEY,
      timestamp: new Date().toISOString()
    };

    // Log missing API keys
    if (!health.pinecone) {
      console.warn('Pinecone API key is missing');
    }
    if (!health.huggingface) {
      console.warn('HuggingFace API key is missing');
    }
    if (!health.groq) {
      console.error('Groq API key is missing - LLM service unavailable');
    }

    return health;
  }

  recordSuccess(serviceName) {
    if (this.metrics[serviceName]) {
      this.metrics[serviceName].successCount++;
      this.metrics[serviceName].lastSuccess = new Date().toISOString();
    }
  }

  recordFailure(serviceName, error) {
    if (this.metrics[serviceName]) {
      this.metrics[serviceName].failureCount++;
      this.metrics[serviceName].lastError = error.message;
      
      // Log critical alert if multiple consecutive failures
      if (this.metrics[serviceName].failureCount >= 3) {
        console.error(`CRITICAL: ${serviceName} has ${this.metrics[serviceName].failureCount} consecutive failures`);
      }
    }
  }

  getServiceStatus() {
    const status = {};
    for (const [serviceName, metrics] of Object.entries(this.metrics)) {
      status[serviceName] = {
        available: metrics.failureCount === 0 || metrics.successCount > metrics.failureCount,
        successCount: metrics.successCount,
        failureCount: metrics.failureCount,
        lastError: metrics.lastError,
        lastSuccess: metrics.lastSuccess
      };
    }
    return status;
  }

  getFailureCount(serviceName) {
    return this.metrics[serviceName]?.failureCount || 0;
  }

  resetMetrics(serviceName) {
    if (this.metrics[serviceName]) {
      this.metrics[serviceName] = {
        successCount: 0,
        failureCount: 0,
        lastError: null,
        lastSuccess: null
      };
    }
  }
}

export const serviceHealth = new ServiceHealthMonitor();
