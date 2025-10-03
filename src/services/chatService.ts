import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { groqConfig, getGroqStatus } from '../config/groq';
import { ragConfig, getRagStatus } from '../config/rag';

// RAG System prompt for Suresh Beekhani AI Assistant
const RAG_PROMPT = `You are **Suresh Beekhani AI Assistant**, a helpful and knowledgeable system connected to a retrieval engine. Your job is to provide **clear, direct, and context-based answers** using the retrieved documents.

Guidelines:
- Always ground your answers in the retrieved context.
- Do not give vague, default, or filler responses.
- If the context lacks the answer, respond with: "No relevant information found in the documents."
- Be concise but include important details.
- Maintain a professional yet approachable tone.

User Question: {query}
Retrieved Documents: {context}
Final Answer:`;

export interface ChatResponse {
    answer: string;
    suggestions?: string[];
    vectorSearchUsed?: boolean;
    contextLength?: number;
}

export interface RagChatOptions {
    useVectorSearch?: boolean;
    topK?: number;
    temperature?: number;
    maxTokens?: number;
}

// System prompt for Suresh's RAG
function createSystemPrompt(): string {
    return `You are Suresh Beekhani’s personal RAG system. 
Respond professionally, accurately, and engagingly without external retrieval.

Profile: AI/ML Engineer, 4+ yrs experience, 25+ projects, 40+ models. 
Expertise: ML (predictive analytics, optimization), DL (NLP, CV), Generative AI, Automation. 
Industries: healthcare, finance, retail, e-commerce, education, green tech, legal tech. 
Portfolio: Law GPT, Diagnostics AI, Fraud Detection, Radiology Generator, Legal Analyzer, Solar Forecasting. 

Guidelines: 
- Reflect Suresh’s expertise and achievements. 
- Give clear, practical, business-relevant answers. 
- Use real-world examples when helpful. 
- Tone: professional yet approachable. 
- Greetings: concise. 
- Detailed answers: 100-50 words.`;
}

// Initialize Groq client
const initializeGroq = () => {
    const status = getGroqStatus();

    if (!status.configured) {
        console.warn(`Groq not configured: ${status.message}. Using fallback responses.`);
        return null;
    }

    try {
        return new ChatGroq({
            apiKey: groqConfig.apiKey,
            model: groqConfig.model,
            temperature: groqConfig.temperature,
            maxTokens: groqConfig.maxTokens,
            topP: groqConfig.topP,
        });
    } catch (error) {
        console.error('Failed to initialize Groq client:', error);
        return null;
    }
};

// Fallback responses when Groq is not available
const fallbackResponses: Record<string, string> = {
    "hello": "Hello! I'm Suresh's RAG. I'm here to help you learn about his AI/ML expertise and services. What would you like to know?",
    "hi": "Hi there! How can I assist you with information about Suresh's AI/ML work today?",
    "services": "Suresh offers comprehensive AI/ML services including Machine Learning solutions, Natural Language Processing, Computer Vision, and AI Chatbot development. He's delivered 25+ projects across healthcare, finance, retail, and more. Which area interests you most?",
    "experience": "Suresh has 4+ years of experience in AI/ML engineering, having built 40+ AI models and delivered solutions across healthcare, finance, retail, e-commerce, education, green tech, and legal tech industries.",
    "portfolio": "Suresh's portfolio includes impressive projects like Law GPT, Diagnostics AI, Fraud Detection systems, Radiology Report Generator, Personalized Learning AI, AI Legal Contract Analyzer, and Solar Forecasting. Want to know more about any specific project?",
    "contact": "You can reach Suresh through the contact form on this website or connect via LinkedIn. He's always open to discussing AI/ML opportunities and potential collaborations.",
    "skills": "Suresh specializes in Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, Python, TensorFlow, PyTorch, React, Node.js, and cloud platforms like AWS and Azure.",
    "projects": "Recent projects include AI-powered diagnostic systems, real-time fraud detection, personalized learning platforms, legal document analysis, and solar energy forecasting systems.",
    "testimonials": "Suresh has received excellent feedback from clients across various industries. His AI/ML solutions have helped businesses improve efficiency, reduce costs, and drive innovation. Clients particularly appreciate his technical expertise, clear communication, and ability to deliver practical AI solutions that solve real business problems.",
    "clients": "Suresh has worked with clients in healthcare, finance, retail, e-commerce, education, legal tech, and green energy sectors. His solutions range from diagnostic AI systems to fraud detection, personalized learning platforms, and solar forecasting systems.",
    "default": "I have access to comprehensive information about Suresh's AI/ML expertise, projects, and services. Could you be more specific about what you'd like to know? For example, you can ask about his experience, specific projects, technologies he uses, or client testimonials."
};

const groqClient = initializeGroq();

export const chatService = {
    // Enhanced method with RAG support
    async getResponse(question: string, options: RagChatOptions = {}): Promise<ChatResponse> {
        const {
            useVectorSearch = true, // Always use RAG
            topK = ragConfig.topK,
            temperature = ragConfig.temperature,
            maxTokens = ragConfig.maxTokens
        } = options;

        try {
            // Try RAG chat function first if RAG is enabled and vector search is requested
            if (ragConfig.enabled && useVectorSearch) {
                try {
                    const ragResponse = await this.getRagResponse(question, {
                        useVectorSearch,
                        topK,
                        temperature,
                        maxTokens
                    });

                    return {
                        answer: ragResponse.answer,
                        suggestions: generateSmartSuggestions(question),
                        vectorSearchUsed: ragResponse.vectorSearchUsed,
                        contextLength: ragResponse.contextLength
                    };
                } catch (ragError) {
                    console.error('RAG function failed:', ragError);
                    // Log the specific error for debugging
                    if (ragError instanceof Error) {
                        console.error('RAG Error Details:', ragError.message);
                    }
                    // Continue to fallback responses
                }
            }

            // If RAG fails, throw error to use fallback responses
            throw new Error('RAG service unavailable');
        } catch (error) {
            console.error('Chat service error:', error);
            // Fall through to fallback responses
        }

        // Final fallback to predefined responses
        const lowerQuestion = question.toLowerCase();
        let answer = fallbackResponses.default;

        // Enhanced keyword matching for fallback
        for (const [key, response] of Object.entries(fallbackResponses)) {
            if (lowerQuestion.includes(key)) {
                answer = response;
                break;
            }
        }

        // Special handling for testimonials/client feedback
        if (lowerQuestion.includes('testimonial') || lowerQuestion.includes('client') || lowerQuestion.includes('feedback') || lowerQuestion.includes('review')) {
            answer = fallbackResponses.testimonials;
        }

        return {
            answer,
            suggestions: generateSmartSuggestions(question),
            vectorSearchUsed: false
        };
    },

    // Direct RAG function call
    async getRagResponse(question: string, options: RagChatOptions = {}): Promise<ChatResponse> {
        const response = await fetch('/.netlify/functions/rag-chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: question,
                useVectorSearch: options.useVectorSearch ?? true,
                topK: options.topK ?? 5,
                temperature: options.temperature ?? 0.7,
                maxTokens: options.maxTokens ?? 1000,
            }),
        });

        if (!response.ok) {
            throw new Error(`RAG function error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return {
            answer: data.response,
            vectorSearchUsed: data.vectorSearchUsed,
            contextLength: data.contextLength
        };
    },

    // Legacy method for backward compatibility
    async getResponseLegacy(question: string): Promise<ChatResponse> {
        return this.getResponse(question, { useVectorSearch: true });
    }
};

// Generate contextual suggestions based on the question
function generateSmartSuggestions(question: string): string[] {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio')) {
        return [
            "Tell me about Law GPT",
            "What's the Diagnostics AI project?",
            "Show me fraud detection work"
        ];
    }

    if (lowerQuestion.includes('service') || lowerQuestion.includes('offer')) {
        return [
            "What's your experience in healthcare AI?",
            "Do you build custom chatbots?",
            "Can you help with computer vision?"
        ];
    }

    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology')) {
        return [
            "What's your experience with TensorFlow?",
            "Do you work with cloud platforms?",
            "Tell me about your NLP expertise"
        ];
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire')) {
        return [
            "What's your project turnaround time?",
            "Do you offer consultation services?",
            "What industries do you specialize in?"
        ];
    }

    // Default suggestions
    return [
        "Tell me about your AI projects",
        "What services do you offer?",
        "How can I contact you?"
    ];
}