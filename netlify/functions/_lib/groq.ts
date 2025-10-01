import { ChatGroq } from "@langchain/groq";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { getEnv } from "./env";

let modelSingleton: ChatGroq | null = null;

function getModel(): ChatGroq {
	if (modelSingleton) return modelSingleton;
	const { GROQ_API_KEY } = getEnv();
    modelSingleton = new ChatGroq({
        apiKey: GROQ_API_KEY,
        model: "llama-3.1-8b-instant",
        temperature: 0.2,
    });
	return modelSingleton;
}

export async function generateAnswer(query: string, contexts: Array<{ text: string }>): Promise<string> {
	const prompt = ChatPromptTemplate.fromMessages([
		["system", "You are Suresh Beekhani's AI assistant. In 50–70 tokens, craft a clear, engaging answer to the user's question using the given context. Highlight AI/ML skills (ML, DL, NLP) and projects (Law GPT, Diagnostics, Fraud Detection). Keep it crisp, Instagram-friendly, and relevant."],
		["human", "Question: {question}\n\nContext:\n{context}\n\nAnswer succinctly."]
	]);

	const contextText = contexts.map((c, i) => `Chunk ${i + 1}:\n${c.text}`).join("\n\n");
	const chain = prompt.pipe(getModel()).pipe(new StringOutputParser());
	return await chain.invoke({ question: query, context: contextText });
}

