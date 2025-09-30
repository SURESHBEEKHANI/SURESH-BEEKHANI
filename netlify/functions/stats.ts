import type { Handler } from "@netlify/functions";
import { json, jsonError, getEnv } from "./_lib/env";
import { getPineconeClient, getPineconeIndex } from "./_lib/pinecone";

export const handler: Handler = async () => {
	try {
		const client = getPineconeClient();
		const index = getPineconeIndex();
		const { PINECONE_INDEX } = getEnv();

		// Index stats (namespaces, vector counts)
		const stats = await index.describeIndexStats({});

		// Index metadata (dimension, host, etc.)
		let dimension: number | undefined;
		try {
			// Newer SDK method
			const desc = await client.describeIndex({ indexName: PINECONE_INDEX });
			dimension = (desc?.dimension as number) || undefined;
		} catch {
			// Fallback: leave undefined
		}

		return json(200, {
			index: PINECONE_INDEX,
			dimension,
			namespaces: stats.namespaces || {},
			totalVectorCount: stats.totalRecordCount ?? stats.totalVectorCount ?? null,
			timestamp: new Date().toISOString(),
		});
	} catch (err: any) {
		return jsonError(500, err?.message || "Failed to get stats", { stack: err?.stack });
	}
};


