import { Pinecone } from "@pinecone-database/pinecone";
import { getEnv } from "./env";

let singletonClient: Pinecone | null = null;

export function getPineconeClient(): Pinecone {
	if (singletonClient) return singletonClient;
	const { PINECONE_API_KEY } = getEnv();
	singletonClient = new Pinecone({ apiKey: PINECONE_API_KEY });
	return singletonClient;
}

export function getPineconeIndex() {
	const client = getPineconeClient();
	const { PINECONE_INDEX } = getEnv();
	return client.index(PINECONE_INDEX);
}

