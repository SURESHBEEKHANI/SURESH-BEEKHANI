import "dotenv/config";

let embedderPromise: Promise<(text: string) => Promise<number[]>> | null = null;

async function fetchEmbeddingsFromHF(text: string): Promise<number[]> {
    const token = process.env.HUGGING_FACE_HUB_TOKEN || process.env.HF_TOKEN;
    if (!token) {
        throw new Error("Missing HUGGING_FACE_HUB_TOKEN (or HF_TOKEN) for embeddings");
    }
    const response = await fetch(
        "https://api-inference.huggingface.co/pipeline/feature-extraction/Xenova/bge-small-en-v1.5",
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: text, options: { wait_for_model: true } }),
        }
    );
    if (!response.ok) {
        const detail = await response.text();
        throw new Error(`HF Inference API error: ${response.status} ${detail}`);
    }
    const data = await response.json();
    // API returns number[][] for a single input; pool by mean
    if (!Array.isArray(data) || !Array.isArray(data[0])) {
        throw new Error("Unexpected embeddings format from HF API");
    }
    const vectors: number[] = data[0];
    return vectors;
}

export function getTextEmbedder() {
    if (embedderPromise) return embedderPromise;
    embedderPromise = Promise.resolve(async (text: string) => {
        return await fetchEmbeddingsFromHF(text);
    });
    return embedderPromise;
}

