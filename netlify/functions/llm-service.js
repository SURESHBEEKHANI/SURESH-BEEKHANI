import Groq from 'groq-sdk';
import { config } from './config.js';
import { RetryHandler } from './retry-handler.js';
import { serviceHealth } from './service-health.js';

class LLMService {
  constructor() {
    this.client = null;
    if (config.GROQ_API_KEY) {
      this.client = new Groq({
        apiKey: config.GROQ_API_KEY,
      });
    }
  }

  getErrorMessage(errorType) {
    const messages = {
      configuration: "I'm sorry, I'm currently unable to connect to my AI services. Please try again later or contact Suresh directly through the contact form on this website.",
      temporary: "I'm experiencing a temporary issue. Please try again in a moment.",
      rate_limit: "I'm receiving a high volume of requests right now. Please try again in a few moments.",
      timeout: "The request is taking longer than expected. Please try again.",
      default: "I'm having trouble generating a response right now. Please try again shortly."
    };
    return messages[errorType] || messages.default;
  }

  getFallbackResponse(query) {
    return "I'm sorry, I'm currently unable to connect to my AI services. Please try again later or contact Suresh directly through the contact form on this website.";
  }

  async generateResponse(query, context) {
    if (!this.client) {
      console.error('Groq client not initialized - missing API key');
      return this.getErrorMessage('configuration');
    }

    const contextQuality = context && context.trim().length > 0 ? 'with context' : 'without context';
    
    const systemPrompt = `
You are Suresh Beekhani's AI assistant. Respond naturally and professionally, like a knowledgeable colleague.

CONTEXT:
${context || 'No specific context available.'}

STYLE:
- Keep responses short and conversational (2-4 sentences max)
- Be warm, professional, and human-like
- Use "I" when referring to Suresh's work (e.g., "I specialize in...")
- Skip formalities - get straight to the point
- No bullet points unless listing specific items
- No "Context Used" or "Next Steps" sections
- Sound natural, not robotic

CONTENT:
- Use the context provided to answer accurately
- If no context, provide brief general AI/ML insights
- Focus on what matters to the person asking
`;

    try {
      const response = await this.generateResponseWithRetry(systemPrompt, query);
      serviceHealth.recordSuccess('groq');
      console.log(`Generated response ${contextQuality}`);
      return response;
    } catch (error) {
      console.error('Error generating response with Groq:', error.message);
      serviceHealth.recordFailure('groq', error);
      
      // Determine error type and return appropriate message
      if (error.message.includes('API key')) {
        return this.getErrorMessage('configuration');
      } else if (error.message.includes('rate limit') || error.status === 429) {
        return this.getErrorMessage('rate_limit');
      } else if (error.message.includes('timeout')) {
        return this.getErrorMessage('timeout');
      } else {
        return this.getErrorMessage('temporary');
      }
    }
  }

  async generateResponseWithRetry(systemPrompt, query) {
    const operation = async () => {
      const completion = await this.client.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ],
        model: config.LLM_MODEL,
        temperature: config.TEMPERATURE,
        max_tokens: config.MAX_TOKENS
      });

      return completion.choices[0]?.message?.content ||
        "I encountered an issue generating a response. Please try again.";
    };

    return await RetryHandler.withRetry(operation, {
      maxRetries: 1,
      baseDelay: 300,
      maxDelay: 1000,
      timeout: 15000,
      onRetry: (attempt, error) => {
        console.log(`Retrying Groq LLM (attempt ${attempt}): ${error.message}`);
      }
    });
  }
}

export const llmService = new LLMService();