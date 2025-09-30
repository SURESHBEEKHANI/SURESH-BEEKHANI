import { env, pipeline } from "@xenova/transformers";

// Reduce logging and ensure model caching in tmp dir for serverless
env.allowLocalModels = true;
env.useBrowserCache = false;
env.backends.onnx.wasm.wasmPaths = undefined as unknown as string; // use default

let embedderPromise: Promise<(text: string) => Promise<number[]>> | null = null;

export function getTextEmbedder() {
	if (embedderPromise) return embedderPromise;
	embedderPromise = (async () => {
		const extractor: any = await pipeline("feature-extraction", "Xenova/bge-small-en-v1.5");
		return async (text: string) => {
			const output = await extractor(text, { pooling: "mean", normalize: true });
			const data: number[] = Array.from(output.data as Float32Array);
			return data;
		};
	})();
	return embedderPromise;
}

