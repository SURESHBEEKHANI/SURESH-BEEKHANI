import type { Handler } from "@netlify/functions";
import { json, jsonError } from "./_lib/env";
import { getPineconeIndex } from "./_lib/pinecone";
import { getTextEmbedder } from "./_lib/embeddings";
import { generateAnswer } from "./_lib/groq";

type QueryInput = {
	query?: string;
	namespace?: string;
};

export const handler: Handler = async (event) => {
	try {
		if (event.httpMethod !== "POST") {
			return json(405, { error: true, message: "Method Not Allowed" });
		}

		let input: QueryInput = {};
		try {
			input = event.body ? JSON.parse(event.body) : {};
		} catch (e: any) {
			return jsonError(400, "Invalid JSON body", { detail: e?.message });
		}
		const userQuery = (input.query || "").trim();
		const namespace = input.namespace?.trim();
		if (!userQuery) {
			return jsonError(400, "Missing 'query' in request body");
		}

		let queryEmbedding: number[] = [];
		try {
			const embed = await getTextEmbedder();
			queryEmbedding = await embed(userQuery);
			if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
				throw new Error("Empty embedding vector");
			}
		} catch (e: any) {
			return jsonError(500, "Embedding failed", { detail: e?.message || String(e) });
		}

		let contexts: Array<{ text: string }> = [];
		try {
            const index = getPineconeIndex();
            const queryRequest: any = {
                topK: 5,
                includeValues: false,
                includeMetadata: true,
                vector: queryEmbedding,
            };
            if (namespace) queryRequest.namespace = namespace;

            const results = await index.query(queryRequest);
            contexts = (results.matches || []).map((m: any) => ({
                text: String(m.metadata?.text || m.metadata?.content || ""),
            })).filter((c: any) => c.text.length > 0);
        } catch (e: any) {
            // Degrade gracefully: continue with empty context so user still gets an answer
            contexts = [];
        }

		try {
			const answer = await generateAnswer(userQuery, contexts);
			return json(200, { answer, timestamp: new Date().toISOString() });
		} catch (e: any) {
			return jsonError(500, "LLM generation failed", { detail: e?.message || String(e) });
		}
	} catch (err: any) {
		return jsonError(500, err?.message || "Unexpected error", { stack: err?.stack });
	}
};


