import 'dotenv/config';
import { readFile, writeFile } from 'node:fs/promises';

const siteUrl = 'https://velnixsolutions.com';
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const llmsPath = new URL('../public/llms.txt', import.meta.url);
const sitemapPath = new URL('../public/sitemap.xml', import.meta.url);
const startMarker = '<!-- GENERATED BLOG LINKS:START -->';
const endMarker = '<!-- GENERATED BLOG LINKS:END -->';

const replaceGeneratedSection = (content, section) => {
  const block = `${startMarker}\n${section}\n${endMarker}`;
  const markerPattern = new RegExp(
    `${startMarker}[\\s\\S]*?${endMarker}`,
    'm',
  );

  return markerPattern.test(content)
    ? content.replace(markerPattern, block)
    : `${content.trimEnd()}\n\n${block}\n`;
};

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const encodeBlogUrl = (id) => `${siteUrl}/blogs?article=${encodeURIComponent(id)}`;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('SEO files: Supabase environment variables are unavailable; existing blog links were preserved.');
  process.exit(0);
}

try {
  const endpoint = new URL('/rest/v1/blogs', supabaseUrl);
  endpoint.searchParams.set('select', 'id,title,created_at');
  endpoint.searchParams.set('status', 'eq.published');
  endpoint.searchParams.set('order', 'created_at.desc');

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
  const llmsSection = [
    '## Blog Articles',
    '',
    ...blogs.map((blog) => `- [${blog.title}](${encodeBlogUrl(blog.id)})`),
  ].join('\n');
  const sitemapSection = blogs.map((blog) => {
    const lastmod = blog.created_at;
    return `  <url>\n    <loc>${escapeXml(encodeBlogUrl(blog.id))}</loc>\n    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.70</priority>\n  </url>`;
  }).join('\n\n');

  const [llms, sitemap] = await Promise.all([
    readFile(llmsPath, 'utf8'),
    readFile(sitemapPath, 'utf8'),
  ]);

  await Promise.all([
    writeFile(llmsPath, replaceGeneratedSection(llms, llmsSection), 'utf8'),
    writeFile(sitemapPath, replaceGeneratedSection(sitemap, sitemapSection), 'utf8'),
  ]);

  console.log(`SEO files: generated ${blogs.length} published blog link(s).`);
} catch (error) {
  console.warn(`SEO files: could not refresh blog links; existing files were preserved. ${error.message}`);
}