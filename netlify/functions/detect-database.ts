import type { Handler } from "@netlify/functions";
import { json, jsonError, getEnv } from "./_lib/env";
import { getPineconeClient } from "./_lib/pinecone";

export const handler: Handler = async () => {
	try {
		const { PINECONE_INDEX } = getEnv();
		const client = getPineconeClient();
		let dimension: number | undefined;
		let namespaces: string[] = [];
		let totalVectorCount: number | null = null;
		try {
			const desc = await client.describeIndex(PINECONE_INDEX);
			dimension = (desc?.dimension as number) || undefined;
			// Stats for namespaces and counts
			const index = client.index(PINECONE_INDEX);
			const stats = await index.describeIndexStats();
			namespaces = stats?.namespaces ? Object.keys(stats.namespaces) : [];
			totalVectorCount = (stats as any).totalRecordCount ?? (stats as any).totalVectorCount ?? null;
		} catch (e) {
			return json(200, { connected: false, error: (e as any)?.message || "Describe failed" });
		}
		return json(200, { connected: true, indexName: PINECONE_INDEX, dimension, namespaces, totalVectorCount });
	} catch (err: any) {
		return jsonError(500, err?.message || "Failed to detect database", { stack: err?.stack });
	}
};


