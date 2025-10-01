import { Pinecone } from "@pinecone-database/pinecone";
import { getEnv } from "./env";

let singletonClient: Pinecone | null = null;

export function getPineconeClient(): Pinecone {
	if (singletonClient) return singletonClient;

	try {
		const { PINECONE_API_KEY } = getEnv();
		singletonClient = new Pinecone({ apiKey: PINECONE_API_KEY });
		return singletonClient;
	} catch (e: any) {
		throw new Error(`Pinecone client failed to initialize: ${e.message}`);
	}
}

export function getPineconeIndex() {
	try {
		const client = getPineconeClient();
		const { PINECONE_INDEX } = getEnv();
		return client.index(PINECONE_INDEX);
	} catch (e: any) {
		throw new Error(`Pinecone index failed to initialize: ${e.message}`);
	}
}

