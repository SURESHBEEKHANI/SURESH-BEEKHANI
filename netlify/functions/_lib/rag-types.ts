/**
 * Comprehensive TypeScript types for Retrieval-Augmented Generation (RAG) system
 */

// Core RAG input/output types
export interface RAGQuery {
	query: string;
	namespace?: string;
	maxResults?: number;
	similarityThreshold?: number;
	includeMetadata?: boolean;
}

export interface RAGContext {
	text: string;
	metadata?: Record<string, any>;
	score?: number;
	source?: string;
	chunkId?: string;
}

export interface RAGResponse {
	answer: string;
	contexts: RAGContext[];
	query: string;
	metadata: RAGMetadata;
	timestamp: string;
}

export interface RAGMetadata {
	totalContexts: number;
	processingTimeMs: number;
	embeddingModel: string;
	llmModel: string;
	namespace?: string;
	similarityScores: number[];
}


// LLM generation types
export interface LLMGenerationConfig {
	model: string;
	temperature: number;
	maxTokens?: number;
	topP?: number;
	topK?: number;
}

export interface LLMResponse {
	text: string;
	model: string;
	usage?: {
		promptTokens: number;
		completionTokens: number;
		totalTokens: number;
	};
	processingTimeMs: number;
}

// RAG pipeline configuration
export interface RAGConfig {
	embedding: {
		model: string;
		dimension: number;
		timeout: number;
	};
	retrieval: {
		topK: number;
		similarityThreshold: number;
		namespace?: string;
	};
	generation: LLMGenerationConfig;
	context: {
		maxContextLength: number;
		contextOverlap: number;
		includeSource: boolean;
	};
}

// Error types
export interface RAGError {
	code: string;
	message: string;
	details?: any;
	timestamp: string;
	stage: RAGStage;
}


// RAG pipeline stages
export type RAGStage = 'preprocessing' | 'embedding' | 'retrieval' | 'context_processing' | 'generation' | 'postprocessing' | 'unknown';

export interface RAGPipelineState {
	stage: RAGStage;
	query: string;
	embedding?: number[];
	contexts?: RAGContext[];
	answer?: string;
	error?: RAGError;
	startTime: number;
	stageTimes: Record<RAGStage, number>;
}

// API response types
export interface RAGAPIResponse {
	success: boolean;
	data?: RAGResponse;
	error?: RAGError;
	metadata: {
		requestId: string;
		timestamp: string;
		version: string;
	};
}


// Performance metrics
export interface RAGMetrics {
	totalTime: number;
	embeddingTime: number;
	retrievalTime: number;
	generationTime: number;
	contextCount: number;
	answerLength: number;
	tokenCount?: number;
}
