import type { HandlerResponse } from "@netlify/functions";

export type RequiredEnv = {
	PINECONE_API_KEY: string;
	PINECONE_INDEX: string;
	GROQ_API_KEY: string;
};

export function getEnv(): RequiredEnv {
	const { PINECONE_API_KEY, PINECONE_INDEX, GROQ_API_KEY } = process.env as Record<string, string | undefined>;
	const missing: string[] = [];
	if (!PINECONE_API_KEY) missing.push("PINECONE_API_KEY");
	if (!PINECONE_INDEX) missing.push("PINECONE_INDEX");
	if (!GROQ_API_KEY) missing.push("GROQ_API_KEY");
	if (missing.length) {
		throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
	}
	return {
		PINECONE_API_KEY: PINECONE_API_KEY!,
		PINECONE_INDEX: PINECONE_INDEX!,
		GROQ_API_KEY: GROQ_API_KEY!,
	};
}

export function json(statusCode: number, data: unknown): HandlerResponse {
	return {
		statusCode,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(data),
	};
}

export function jsonError(statusCode: number, message: string, details?: unknown): HandlerResponse {
	return json(statusCode, {
		error: true,
		message,
		details,
		timestamp: new Date().toISOString(),
	});
}

