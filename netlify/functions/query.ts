import type { Handler } from "@netlify/functions";
import { json, jsonError } from "./_lib/env";
import { getPineconeIndex } from "./_lib/pinecone";
import { getTextEmbedder } from "./_lib/embeddings";
import { generateRAGAnswer } from "./_lib/groq";
import type { 
	RAGQuery, 
	RAGResponse, 
	RAGContext, 
	RAGConfig, 
	RAGPipelineState,
	RAGError,
	RAGAPIResponse 
} from "./_lib/rag-types";
import { 
	validateRAGQuery, 
	processContexts, 
	createPipelineState, 
	updatePipelineState, 
	calculateMetrics,
	createRAGError,
	DEFAULT_RAG_CONFIG 
} from "./_lib/rag-utils";

export const handler: Handler = async (event) => {
	const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	
	try {
		if (event.httpMethod !== "POST") {
			return json(405, { 
				error: true, 
				message: "Method Not Allowed",
				requestId 
			});
		}

		// Parse and validate input
		let input: Partial<RAGQuery> = {};
		try {
			input = event.body ? JSON.parse(event.body) : {};
		} catch (e: any) {
			return jsonError(400, "Invalid JSON body", { 
				detail: e?.message,
				requestId 
			});
		}

		// Validate query input
		const validation = validateRAGQuery(input);
		if (!validation.isValid) {
			return jsonError(400, "Invalid query parameters", {
				detail: validation.errors,
				requestId
			});
		}

		const userQuery = input.query!.trim();
		const namespace = input.namespace?.trim();
		const maxResults = input.maxResults || DEFAULT_RAG_CONFIG.retrieval.topK;
		const similarityThreshold = input.similarityThreshold || DEFAULT_RAG_CONFIG.retrieval.similarityThreshold;

		// Create RAG configuration
		const ragConfig: RAGConfig = {
			...DEFAULT_RAG_CONFIG,
			retrieval: {
				...DEFAULT_RAG_CONFIG.retrieval,
				topK: maxResults,
				similarityThreshold,
				namespace
			}
		};

		// Initialize pipeline state
		let pipelineState = createPipelineState(userQuery);
		pipelineState = updatePipelineState(pipelineState, 'embedding');

		// Step 1: Generate query embedding
		let queryEmbedding: number[] = [];
		try {
			const embed = await getTextEmbedder();
			queryEmbedding = await embed(userQuery);
			if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
				throw new Error("Empty embedding vector");
			}
		} catch (e: any) {
			const error = createRAGError(
				'EMBEDDING_FAILED',
				`Failed to generate embedding: ${e.message}`,
				'embedding',
				{ originalError: e.message }
			);
			return jsonError(500, "Embedding failed", { 
				detail: error,
				requestId 
			});
		}

		pipelineState = updatePipelineState(pipelineState, 'retrieval', { embedding: queryEmbedding });

		// Step 2: Retrieve relevant contexts from Pinecone
		let rawContexts: RAGContext[] = [];
		try {
			const index = getPineconeIndex();
			const queryRequest: any = {
				topK: maxResults,
				includeValues: false,
				includeMetadata: true,
				vector: queryEmbedding,
			};
			if (namespace) queryRequest.namespace = namespace;

			const results = await index.query(queryRequest);
			rawContexts = (results.matches || []).map((match: any) => ({
				text: String(match.metadata?.text || match.metadata?.content || ""),
				metadata: match.metadata || {},
				score: match.score || 0,
				chunkId: match.id,
				source: match.metadata?.source || 'pinecone'
			}));
		} catch (e: any) {
			// Log error but continue with empty context for graceful degradation
			console.warn(`Pinecone retrieval failed: ${e.message}`);
			rawContexts = [];
		}

		pipelineState = updatePipelineState(pipelineState, 'context_processing', { contexts: rawContexts });

		// Step 3: Process and filter contexts
		const processedContexts = processContexts(rawContexts, ragConfig);
		
		pipelineState = updatePipelineState(pipelineState, 'generation', { contexts: processedContexts });

		// Step 4: Generate answer using LLM
		let llmResponse;
		try {
			llmResponse = await generateRAGAnswer(userQuery, processedContexts, ragConfig);
		} catch (e: any) {
			const error = createRAGError(
				'LLM_GENERATION_FAILED',
				`Failed to generate answer: ${e.message}`,
				'generation',
				{ originalError: e.message }
			);
			return jsonError(500, "LLM generation failed", { 
				detail: error,
				requestId 
			});
		}

		pipelineState = updatePipelineState(pipelineState, 'postprocessing', { answer: llmResponse.text });

		// Step 5: Calculate metrics and create response
		const metrics = calculateMetrics(pipelineState);
		const response: RAGResponse = {
			answer: llmResponse.text,
			contexts: processedContexts,
			query: userQuery,
			metadata: {
				totalContexts: processedContexts.length,
				processingTimeMs: metrics.totalTime,
				embeddingModel: ragConfig.embedding.model,
				llmModel: llmResponse.model,
				namespace,
				similarityScores: processedContexts.map(ctx => ctx.score || 0)
			},
			timestamp: new Date().toISOString()
		};

		const apiResponse: RAGAPIResponse = {
			success: true,
			data: response,
			metadata: {
				requestId,
				timestamp: new Date().toISOString(),
				version: "2.0.0"
			}
		};

		return json(200, apiResponse);

	} catch (err: any) {
		const error = createRAGError(
			'UNEXPECTED_ERROR',
			err?.message || "Unexpected error occurred",
			'preprocessing',
			{ stack: err?.stack }
		);

		const errorResponse: RAGAPIResponse = {
			success: false,
			error,
			metadata: {
				requestId,
				timestamp: new Date().toISOString(),
				version: "2.0.0"
			}
		};

		return json(500, errorResponse);
	}
};


