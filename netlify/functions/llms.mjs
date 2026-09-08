const SITE_URL = "https://velnixsolutions.com";
const START_MARKER = "<!-- GENERATED BLOG LINKS:START -->";
const END_MARKER = "<!-- GENERATED BLOG LINKS:END -->";

const encodeBlogUrl = (id) => `${SITE_URL}/blogs?article=${encodeURIComponent(id)}`;

export const handler = async () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://korkozxilsxaslokckif.supabase.co";
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_BXMg1byim0l_O05rABw1OQ_54gNQW1Z";

  try {
    const endpoint = new URL("/rest/v1/blogs", supabaseUrl);
    endpoint.searchParams.set("select", "id,title,created_at");
    endpoint.searchParams.set("status", "eq.published");
    endpoint.searchParams.set("order", "created_at.desc");

    const response = await fetch(endpoint, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Supabase returned ${response.status}`);
    }

    const blogs = await response.json();

    const blogList = [
      "## Blog Articles",
      "",
      ...blogs.map((b) => `- [${b.title.trim()}](${encodeBlogUrl(b.id)})`),
    ].join("\n");

    // Fetch base static llms.txt
    let baseText = "";
    try {
      const baseRes = await fetch(`${SITE_URL}/llms.txt`);
      if (baseRes.ok) {
        baseText = await baseRes.text();
      }
    } catch (_) {}

    if (baseText) {
      const block = `${START_MARKER}\n${blogList}\n${END_MARKER}`;
      const pattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "m");
      const fullText = pattern.test(baseText)
        ? baseText.replace(pattern, block)
        : `${baseText.trimEnd()}\n\n${block}\n`;

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=60, s-maxage=300",
        },
        body: fullText,
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300",
      },
      body: `${START_MARKER}\n${blogList}\n${END_MARKER}\n`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
