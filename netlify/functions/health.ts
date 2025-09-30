import type { Handler } from "@netlify/functions";
import { json } from "./_lib/env";

export const handler: Handler = async () => {
	return json(200, { status: "ok", timestamp: new Date().toISOString() });
};


