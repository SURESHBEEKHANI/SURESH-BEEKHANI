import Groq from 'groq-sdk';
import { config } from './config.js';
import { RetryHandler } from './retry-handler.js';

class LLMService {
  constructor() {
    this.client = null;
    if (config.GROQ_API_KEY) {
      this.client = new Groq({
        apiKey: config.GROQ_API_KEY,
      });
    }
  }

  async generateResponse(query, context = '') {
    if (!this.client) {
      console.error('Groq client not initialized - missing API key');
      throw new Error('API key not configured');
    }

    console.log('Generating response for query:', query.substring(0, 50) + '...');
    console.log('Context provided:', context ? 'Yes' : 'No');

    const systemPrompt = `
I'm Suresh Beekhani's Personal AI Assistant. I provide clear, confident guidance on AI, ML, Generative AI, NLP, Computer Vision, Predictive Analytics, and Chatbots across industries like HealthTech, FinTech, EdTech, GreenTech, Retail, and E-Commerce.

Notable projects include AI-Driven Law GPT, predictive diagnostics, intelligent chatbots, real-time fraud detection, and computer vision solutions.

FORMATTING: Use plain text only - no markdown, no asterisks, no bullet points. Write naturally like a human conversation.

${context ? `\n\nCONTEXT:\n${context}\n\nUse this context for accurate answers.` : ''}
`;

    try {
      const response = await this.generateResponseWithRetry(systemPrompt, query);
      console.log('✅ Generated response successfully');
      return response;
    } catch (error) {
      console.error('❌ Error generating response:', error.message);
      throw error;
    }
  }

  async generateResponseWithRetry(systemPrompt, query) {
    const operation = async () => {
      const chatCompletion = await this.client.chat.completions.create({
        messages: [
          { role: "user", content: systemPrompt + "\n\nUser: " + query }
        ],
        model: "deepseek-r1-distill-llama-70b",
        temperature: 0.6,
        max_completion_tokens: 4096,
        top_p: 0.95,
        stream: true,
        stop: null
      });

      let fullResponse = '';
      for await (const chunk of chatCompletion) {
        const content = chunk.choices[0]?.delta?.content || '';
        fullResponse += content;
      }

      // Remove <think> tags
      fullResponse = fullResponse.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
      fullResponse = fullResponse.replace(/<think>[\s\S]*$/g, '').trim();

      if (!fullResponse || fullResponse.length < 10) {
        throw new Error('Empty or too short response from model');
      }

      return fullResponse;
    };

    return await RetryHandler.withRetry(operation, {
      maxRetries: 2,
      baseDelay: 500,
      maxDelay: 2000,
      timeout: 60000,
      onRetry: (attempt, error) => {
        console.log(`🔄 Retrying (attempt ${attempt}): ${error.message}`);
      }
    });
  }
}

export const llmService = new LLMService();
