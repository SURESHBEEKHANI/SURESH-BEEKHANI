/**
 * RAG utility functions for context processing, text manipulation, and pipeline management
 */

import type { 
	RAGContext, 
	RAGConfig, 
	RAGPipelineState, 
	RAGStage, 
	RAGMetrics,
	RAGError 
} from './rag-types';

/**
 * Default RAG configuration
 */
export const DEFAULT_RAG_CONFIG: RAGConfig = {
	embedding: {
		model: 'Xenova/bge-small-en-v1.5',
		dimension: 384,
		timeout: 10000
	},
	retrieval: {
		topK: 5,
		similarityThreshold: 0.7,
		namespace: undefined
	},
	generation: {
		model: 'llama-3.1-8b-instant',
		temperature: 0.1,
		maxTokens: 800,
		topP: 0.9,
		topK: 40
	},
	context: {
		maxContextLength: 4000,
		contextOverlap: 200,
		includeSource: true
	}
};

/**
 * Process and clean contexts for better RAG performance
 */
export function processContexts(
	contexts: RAGContext[], 
	config: RAGConfig = DEFAULT_RAG_CONFIG
): RAGContext[] {
	return contexts
		.filter(ctx => ctx.text && ctx.text.trim().length > 0)
		.map(ctx => ({
			...ctx,
			text: cleanText(ctx.text),
			score: ctx.score || 0
		}))
		.filter(ctx => ctx.score >= config.retrieval.similarityThreshold)
		.sort((a, b) => (b.score || 0) - (a.score || 0))
		.slice(0, config.retrieval.topK);
}

/**
 * Clean and normalize text content
 */
export function cleanText(text: string): string {
	return text
		.replace(/\s+/g, ' ') // Normalize whitespace
		.replace(/\n\s*\n/g, '\n') // Remove empty lines
		.trim();
}

/**
 * Format contexts for LLM consumption
 */
export function formatContextsForLLM(
	contexts: RAGContext[], 
	config: RAGConfig = DEFAULT_RAG_CONFIG
): string {
	const maxLength = config.context.maxContextLength;
	let formattedContexts = '';
	let currentLength = 0;

	for (let i = 0; i < contexts.length; i++) {
		const ctx = contexts[i];
		const source = config.context.includeSource && ctx.source 
			? `[Source: ${ctx.source}]` 
			: '';
		
		const contextText = `${source}${ctx.text}`;
		
		if (currentLength + contextText.length > maxLength) {
			break;
		}
		
		formattedContexts += `Context ${i + 1}:\n${contextText}\n\n`;
		currentLength += contextText.length;
	}

	return formattedContexts.trim();
}

/**
 * Create RAG pipeline state
 */
export function createPipelineState(query: string): RAGPipelineState {
	const startTime = Date.now();
	return {
		stage: 'preprocessing',
		query,
		startTime,
		stageTimes: {
			preprocessing: 0,
			embedding: 0,
			retrieval: 0,
			context_processing: 0,
			generation: 0,
			postprocessing: 0,
			unknown: 0
		}
	};
}

/**
 * Update pipeline state with stage completion
 */
export function updatePipelineState(
	state: RAGPipelineState, 
	stage: RAGStage, 
	data?: Partial<RAGPipelineState>
): RAGPipelineState {
	const now = Date.now();
	const stageTime = now - (state.stageTimes[stage] || state.startTime);
	
	return {
		...state,
		...data,
		stage,
		stageTimes: {
			...state.stageTimes,
			[stage]: stageTime
		}
	};
}

/**
 * Calculate RAG metrics from pipeline state
 */
export function calculateMetrics(state: RAGPipelineState): RAGMetrics {
	const totalTime = Date.now() - state.startTime;
	
	return {
		totalTime,
		embeddingTime: state.stageTimes.embedding,
		retrievalTime: state.stageTimes.retrieval,
		generationTime: state.stageTimes.generation,
		contextCount: state.contexts?.length || 0,
		answerLength: state.answer?.length || 0
	};
}

/**
 * Create RAG error
 */
export function createRAGError(
	code: string, 
	message: string, 
	stage: RAGStage, 
	details?: any
): RAGError {
	return {
		code,
		message,
		details,
		timestamp: new Date().toISOString(),
		stage
	};
}

/**
 * Validate RAG query input
 */
export function validateRAGQuery(query: any): { isValid: boolean; errors: string[] } {
	const errors: string[] = [];
	
	if (!query || typeof query !== 'object') {
		errors.push('Query must be an object');
		return { isValid: false, errors };
	}
	
	if (!query.query || typeof query.query !== 'string' || query.query.trim().length === 0) {
		errors.push('Query text is required and must be a non-empty string');
	}
	
	if (query.namespace && typeof query.namespace !== 'string') {
		errors.push('Namespace must be a string if provided');
	}
	
	if (query.maxResults && (typeof query.maxResults !== 'number' || query.maxResults < 1 || query.maxResults > 50)) {
		errors.push('Max results must be a number between 1 and 50');
	}
	
	if (query.similarityThreshold && (typeof query.similarityThreshold !== 'number' || query.similarityThreshold < 0 || query.similarityThreshold > 1)) {
		errors.push('Similarity threshold must be a number between 0 and 1');
	}
	
	return {
		isValid: errors.length === 0,
		errors
	};
}




