/**
 * Comprehensive RAG Service - Main orchestrator for Retrieval-Augmented Generation
 */

import { getPineconeIndex } from "./pinecone";
import { getTextEmbedder } from "./embeddings";
import { generateRAGAnswer } from "./groq";
import type { 
	RAGQuery, 
	RAGResponse, 
	RAGContext, 
	RAGConfig, 
	RAGPipelineState,
	RAGError,
	RAGAPIResponse,
	RAGMetrics,
	RAGStage
} from "./rag-types";
import { 
	validateRAGQuery, 
	processContexts, 
	createPipelineState, 
	updatePipelineState, 
	calculateMetrics,
	createRAGError,
	DEFAULT_RAG_CONFIG
} from "./rag-utils";

export class RAGService {
	private config: RAGConfig;

	constructor(config: RAGConfig = DEFAULT_RAG_CONFIG) {
		this.config = config;
	}

	/**
	 * Main RAG query processing method
	 */
	async processQuery(query: RAGQuery, requestId: string): Promise<RAGAPIResponse> {
		try {
			// Validate input
			const validation = validateRAGQuery(query);
			if (!validation.isValid) {
				return this.createErrorResponse(
					'INVALID_QUERY',
					`Invalid query parameters: ${validation.errors.join(', ')}`,
					'preprocessing',
					requestId,
					{ validationErrors: validation.errors }
				);
			}

			// Initialize pipeline
			let pipelineState = createPipelineState(query.query!);
			pipelineState = updatePipelineState(pipelineState, 'embedding');

			// Step 1: Generate embedding
			const embedding = await this.generateEmbedding(query.query!);
			pipelineState = updatePipelineState(pipelineState, 'retrieval', { embedding });

			// Step 2: Retrieve contexts
			const rawContexts = await this.retrieveContexts(embedding, query);
			pipelineState = updatePipelineState(pipelineState, 'context_processing', { contexts: rawContexts });

			// Step 3: Process contexts
			const processedContexts = this.processContexts(rawContexts);
			pipelineState = updatePipelineState(pipelineState, 'generation', { contexts: processedContexts });

			// Step 4: Generate answer
			const llmResponse = await this.generateAnswer(query.query!, processedContexts);
			pipelineState = updatePipelineState(pipelineState, 'postprocessing', { answer: llmResponse.text });

			// Step 5: Create response
			const metrics = calculateMetrics(pipelineState);
			const response = this.createRAGResponse(
				query.query!,
				llmResponse.text,
				processedContexts,
				metrics,
				query.namespace
			);

			return this.createSuccessResponse(response, requestId);

		} catch (error: any) {
			return this.createErrorResponse(
				'RAG_PROCESSING_FAILED',
				error.message || 'RAG processing failed',
				'unknown',
				requestId,
				{ originalError: error.message, stack: error.stack }
			);
		}
	}



	/**
	 * Generate embedding for query
	 */
	private async generateEmbedding(query: string): Promise<number[]> {
		const embed = await getTextEmbedder();
		const embedding = await embed(query);
		
		if (!Array.isArray(embedding) || embedding.length === 0) {
			throw new Error("Empty embedding vector");
		}
		
		return embedding;
	}

	/**
	 * Retrieve contexts from Pinecone
	 */
	private async retrieveContexts(embedding: number[], query: RAGQuery): Promise<RAGContext[]> {
		try {
			const index = getPineconeIndex();
			const queryRequest: any = {
				topK: query.maxResults || this.config.retrieval.topK,
				includeValues: false,
				includeMetadata: true,
				vector: embedding,
			};
			
			if (query.namespace) {
				queryRequest.namespace = query.namespace;
			}

			const results = await index.query(queryRequest);
			return (results.matches || []).map((match: any) => ({
				text: String(match.metadata?.text || match.metadata?.content || ""),
				metadata: match.metadata || {},
				score: match.score || 0,
				chunkId: match.id,
				source: match.metadata?.source || 'pinecone'
			}));
		} catch (error: any) {
			console.warn(`Pinecone retrieval failed: ${error.message}`);
			return [];
		}
	}

	/**
	 * Process and filter contexts
	 */
	private processContexts(contexts: RAGContext[]): RAGContext[] {
		return processContexts(contexts, this.config);
	}

	/**
	 * Generate answer using LLM
	 */
	private async generateAnswer(query: string, contexts: RAGContext[]): Promise<any> {
		return await generateRAGAnswer(query, contexts, this.config);
	}

	/**
	 * Get contexts for a query (helper method)
	 */
	private async getContextsForQuery(query: RAGQuery): Promise<RAGContext[]> {
		const embedding = await this.generateEmbedding(query.query!);
		const rawContexts = await this.retrieveContexts(embedding, query);
		return this.processContexts(rawContexts);
	}

	/**
	 * Create RAG response object
	 */
	private createRAGResponse(
		query: string,
		answer: string,
		contexts: RAGContext[],
		metrics: RAGMetrics,
		namespace?: string
	): RAGResponse {
		return {
			answer,
			contexts,
			query,
			metadata: {
				totalContexts: contexts.length,
				processingTimeMs: metrics.totalTime,
				embeddingModel: this.config.embedding.model,
				llmModel: this.config.generation.model,
				namespace,
				similarityScores: contexts.map(ctx => ctx.score || 0)
			},
			timestamp: new Date().toISOString()
		};
	}

	/**
	 * Create success API response
	 */
	private createSuccessResponse(data: any, requestId: string): RAGAPIResponse {
		return {
			success: true,
			data,
			metadata: {
				requestId,
				timestamp: new Date().toISOString(),
				version: "2.0.0"
			}
		};
	}

	/**
	 * Create error API response
	 */
	private createErrorResponse(
		code: string,
		message: string,
		stage: RAGStage,
		requestId: string,
		details?: any
	): RAGAPIResponse {
		const error = createRAGError(code, message, stage, details);
		
		return {
			success: false,
			error,
			metadata: {
				requestId,
				timestamp: new Date().toISOString(),
				version: "2.0.0"
			}
		};
	}

	/**
	 * Update RAG configuration
	 */
	updateConfig(newConfig: Partial<RAGConfig>): void {
		this.config = { ...this.config, ...newConfig };
	}

	/**
	 * Get current configuration
	 */
	getConfig(): RAGConfig {
		return { ...this.config };
	}

}

// Export singleton instance
export const ragService = new RAGService();
