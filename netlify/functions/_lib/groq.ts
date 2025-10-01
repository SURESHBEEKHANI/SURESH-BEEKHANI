import { ChatGroq } from "@langchain/groq";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { getEnv } from "./env";
import type { 
	RAGContext, 
	RAGConfig, 
	LLMResponse, 
	LLMGenerationConfig,
	RAGError 
} from "./rag-types";
import { formatContextsForLLM, createRAGError } from "./rag-utils";

let modelSingleton: ChatGroq | null = null;

function getModel(config: LLMGenerationConfig): ChatGroq {
	if (modelSingleton) return modelSingleton;
	const { GROQ_API_KEY } = getEnv();
    modelSingleton = new ChatGroq({
        apiKey: GROQ_API_KEY,
        model: config.model,
        temperature: config.temperature,
        maxTokens: config.maxTokens
    });
	return modelSingleton;
}

/**
 * Enhanced RAG answer generation with better context handling
 */
export async function generateRAGAnswer(
	query: string, 
	contexts: RAGContext[], 
	config: RAGConfig
): Promise<LLMResponse> {
	const startTime = Date.now();
	
	try {
		// Format contexts for better LLM consumption
		const formattedContexts = formatContextsForLLM(contexts, config);
		
		// Create enhanced prompt for better RAG responses
		const prompt = ChatPromptTemplate.fromMessages([
			["system", createSystemPrompt()],
			["human", createHumanPrompt()]
		]);

		const model = getModel(config.generation);
		const chain = prompt.pipe(model).pipe(new StringOutputParser());
		
		const response = await chain.invoke({ 
			question: query, 
			context: formattedContexts,
			contextCount: contexts.length
		});

		const processingTime = Date.now() - startTime;

		return {
			text: response,
			model: config.generation.model,
			processingTimeMs: processingTime
		};
	} catch (error: any) {
		throw createRAGError(
			'LLM_GENERATION_FAILED',
			`Failed to generate answer: ${error.message}`,
			'generation',
			{ originalError: error.message }
		);
	}
}

/**
 * Legacy function for backward compatibility
 */
export async function generateAnswer(query: string, contexts: Array<{ text: string }>): Promise<string> {
	const ragContexts: RAGContext[] = contexts.map(ctx => ({
		text: ctx.text,
		score: 0.8, // Default score for legacy calls
		metadata: {}
	}));
	
	const response = await generateRAGAnswer(query, ragContexts, {
		embedding: { model: 'Xenova/bge-small-en-v1.5', dimension: 384, timeout: 10000 },
		retrieval: { topK: 5, similarityThreshold: 0.7 },
		generation: { model: 'llama-3.1-8b-instant', temperature: 0.1, maxTokens: 600 },
		context: { maxContextLength: 3000, contextOverlap: 100, includeSource: false }
	});
	
	return response.text;
}

/**
 * Create enhanced system prompt for RAG
 */
function createSystemPrompt(): string {
	return `You are Suresh Beekhani's AI assistant, an expert in AI/ML technologies and solutions. Your role is to provide comprehensive, helpful, and engaging responses based on the provided context.

About Suresh Beekhani:
- AI/ML Engineer with expertise in Machine Learning, Deep Learning, NLP, Computer Vision, and Predictive Modeling
- Specializes in building AI solutions for various industries including healthcare, finance, e-commerce, and legal tech
- Has developed projects like Law GPT, Diagnostics AI, Fraud Detection systems, Personalized Learning platforms, and more
- Experienced in both technical implementation and business applications of AI

Key Guidelines:
- Use the provided context to answer questions accurately and comprehensively
- Highlight Suresh's relevant AI/ML skills, projects, and experience
- Provide detailed technical insights when appropriate
- Give practical examples and real-world applications
- If context doesn't contain relevant information, provide general helpful information about AI/ML topics
- Maintain a professional yet approachable tone
- Focus on both technical accuracy and practical business value
- Aim for 150-300 words for detailed responses, shorter for simple greetings

Context Information:
- You have access to {contextCount} context chunks about Suresh's work and expertise
- Use the most relevant information from these contexts
- If multiple contexts provide different perspectives, synthesize them coherently
- Always relate answers back to Suresh's capabilities and experience when possible`;
}

/**
 * Create enhanced human prompt template
 */
function createHumanPrompt(): string {
	return `Question: {question}

Context Information about Suresh's work and expertise:
{context}

Instructions:
- Answer the question comprehensively using the provided context
- If the context contains relevant information about Suresh's work, highlight his specific experience and projects
- If the context doesn't contain relevant information, provide helpful general information about the topic
- Always mention how Suresh's expertise relates to the question when possible
- Include specific examples, technologies, or methodologies when relevant
- Make your response engaging and informative
- If it's a greeting or simple question, keep it friendly but still mention Suresh's capabilities

Answer:`;
}



