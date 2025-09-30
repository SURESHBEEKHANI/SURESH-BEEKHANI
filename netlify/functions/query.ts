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

		const input: QueryInput = event.body ? JSON.parse(event.body) : {};
		const userQuery = (input.query || "").trim();
		const namespace = input.namespace?.trim();
		if (!userQuery) {
			return jsonError(400, "Missing 'query' in request body");
		}

		const embed = await getTextEmbedder();
		const queryEmbedding = await embed(userQuery);

		const index = getPineconeIndex();
		const queryRequest: any = {
			topK: 5,
			includeValues: false,
			includeMetadata: true,
			vector: queryEmbedding,
		};
		if (namespace) queryRequest.namespace = namespace;

		const results = await index.query(queryRequest);
		const contexts = (results.matches || []).map((m: any) => ({
			text: String(m.metadata?.text || m.metadata?.content || ""),
		})).filter((c: any) => c.text.length > 0);

		const answer = await generateAnswer(userQuery, contexts);

		return json(200, { answer, timestamp: new Date().toISOString() });
	} catch (err: any) {
		return jsonError(500, err?.message || "Unexpected error", { stack: err?.stack });
	}
};


