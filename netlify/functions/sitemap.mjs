const SITE_URL = "https://velnixsolutions.com";
const START_MARKER = "<!-- GENERATED BLOG LINKS:START -->";
const END_MARKER = "<!-- GENERATED BLOG LINKS:END -->";

const escapeXml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

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

    const blogEntries = blogs.map((blog) => {
      const lastmod = blog.created_at ? new Date(blog.created_at).toISOString().slice(0, 10) : "2026-09-08";
      return `  <url>\n    <loc>${escapeXml(encodeBlogUrl(blog.id))}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.70</priority>\n  </url>`;
    }).join("\n\n");

    // Fetch the base static sitemap
    let baseXml = "";
    try {
      const baseRes = await fetch(`${SITE_URL}/sitemap.xml`);
      if (baseRes.ok) {
        baseXml = await baseRes.text();
      }
    } catch (_) {}

    if (baseXml && baseXml.includes("<urlset")) {
      const block = `  ${START_MARKER}\n${blogEntries}\n  ${END_MARKER}`;
      const pattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "m");
      let fullXml = pattern.test(baseXml)
        ? baseXml.replace(pattern, block)
        : baseXml.replace("</urlset>", `${block}\n</urlset>`);

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=60, s-maxage=300",
        },
        body: fullXml,
      };
    }

    // Fallback minimal valid sitemap if base not fetched
    const minimalXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${blogEntries}\n</urlset>`;
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300",
      },
      body: minimalXml,
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
