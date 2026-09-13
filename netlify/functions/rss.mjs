import { createClient } from '@supabase/supabase-js';

const SITE_URL = 'https://velnixsolutions.com';
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

function escapeXml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRFC822(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export const handler = async () => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return { statusCode: 500, body: 'Missing Supabase credentials' };
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id, title, meta_description, category, created_at, image_url, slug')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    return { statusCode: 500, body: `Supabase error: ${error.message}` };
  }

  const items = (blogs || []).map((b) => {
    const url = `${SITE_URL}/blogs?article=${b.id}`;
    return `
    <item>
      <title>${escapeXml(b.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRFC822(b.created_at)}</pubDate>
      <description>${escapeXml(b.meta_description || '')}</description>
      <category>${escapeXml(b.category || 'AI Insights')}</category>
      <dc:creator>Velnix Solutions</dc:creator>
      ${b.image_url ? `<enclosure url="${escapeXml(b.image_url)}" type="image/jpeg" length="0"/>` : ''}
    </item>`;
  }).join('\n');

  const now = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Velnix Solutions — Blog &amp; Insights</title>
    <link>${SITE_URL}/blogs</link>
    <description>AI development insights, agentic AI, machine learning, and intelligent automation from the Velnix Solutions team.</description>
    <language>en-us</language>
    <copyright>© 2026 Velnix Solutions. All rights reserved.</copyright>
    <managingEditor>info@velnixsolutions.com (Velnix Solutions)</managingEditor>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>1440</ttl>
    <image>
      <url>${SITE_URL}/image/logo/url%20logo.png</url>
      <title>Velnix Solutions</title>
      <link>${SITE_URL}</link>
    </image>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
    body: xml,
  };
};
