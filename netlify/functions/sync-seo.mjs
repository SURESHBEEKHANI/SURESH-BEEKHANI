export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const buildHookUrl = process.env.VITE_NETLIFY_BUILD_HOOK || process.env.NETLIFY_BUILD_HOOK;

  if (buildHookUrl) {
    try {
      await fetch(buildHookUrl, { method: "POST" });
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: true,
          message: "Netlify build triggered to regenerate static sitemap.xml and llms.txt.",
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      success: true,
      message: "Sync request received. In production, configure NETLIFY_BUILD_HOOK to auto-rebuild static files.",
    }),
  };
};
