import type { Handler } from "@netlify/functions";
import { json, jsonError, getEnv } from "./_lib/env";
import { getPineconeClient } from "./_lib/pinecone";

export const handler: Handler = async () => {
	try {
		const { PINECONE_INDEX } = getEnv();
		const client = getPineconeClient();
		let dimension: number | undefined;
		try {
			const desc = await client.describeIndex({ indexName: PINECONE_INDEX });
			dimension = (desc?.dimension as number) || undefined;
		} catch (e) {
			return json(200, { connected: false, error: (e as any)?.message || "Describe failed" });
		}
		return json(200, { connected: true, indexName: PINECONE_INDEX, dimension });
	} catch (err: any) {
		return jsonError(500, err?.message || "Failed to detect database", { stack: err?.stack });
	}
};


