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
		generation: { model: 'llama-3.1-8b-instant', temperature: 0.1, maxTokens: 200 },
		context: { maxContextLength: 2000, contextOverlap: 100, includeSource: false }
	});
	
	return response.text;
}

/**
 * Create enhanced system prompt for RAG
 */
function createSystemPrompt(): string {
	return `You are Suresh Beekhani's AI assistant, an expert in AI/ML technologies and solutions. Your role is to provide accurate, helpful, and engaging responses based on the provided context.

Key Guidelines:
- Use the provided context to answer questions accurately
- Highlight relevant AI/ML skills: Machine Learning, Deep Learning, NLP, Computer Vision, Predictive Modeling
- Mention relevant projects: Law GPT, Diagnostics AI, Fraud Detection, Personalized Learning, etc.
- Keep responses concise but informative (50-100 tokens)
- If context doesn't contain relevant information, say so politely
- Maintain a professional yet approachable tone
- Focus on technical accuracy and practical insights

Context Information:
- You have access to {contextCount} context chunks
- Use the most relevant information from these contexts
- If multiple contexts provide different perspectives, synthesize them coherently`;
}

/**
 * Create enhanced human prompt template
 */
function createHumanPrompt(): string {
	return `Question: {question}

Context Information:
{context}

Instructions:
- Answer the question using the provided context
- If the context doesn't contain relevant information, politely indicate this
- Highlight specific AI/ML technologies, projects, or skills when relevant
- Keep your response focused and actionable

Answer:`;
}



