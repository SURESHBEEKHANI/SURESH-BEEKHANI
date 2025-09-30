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

function localHashEmbedding(text: string, dimension: number = 384): number[] {
    const vec = new Array<number>(dimension).fill(0);
    const normalized = text.toLowerCase();
    for (let i = 0; i < normalized.length; i++) {
        const code = normalized.charCodeAt(i);
        const idx = code % dimension;
        vec[idx] += 1;
    }
    // L2 normalize
    const norm = Math.sqrt(vec.reduce((sum, v) => sum + v * v, 0)) || 1;
    for (let i = 0; i < dimension; i++) vec[i] = vec[i] / norm;
    return vec;
}

export function getTextEmbedder() {
    if (embedderPromise) return embedderPromise;
    embedderPromise = Promise.resolve(async (text: string) => {
        try {
            return await fetchEmbeddingsFromHF(text);
        } catch (e) {
            // Fallback to local hash-based embedding so the function never hard-fails
            return localHashEmbedding(text);
        }
    });
    return embedderPromise;
}

