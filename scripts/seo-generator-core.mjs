import 'dotenv/config';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const SITE_URL = 'https://velnixsolutions.com';
export const START_MARKER = '<!-- GENERATED BLOG LINKS:START -->';
export const END_MARKER = '<!-- GENERATED BLOG LINKS:END -->';

const defaultLlmsPath = path.resolve(__dirname, '../public/llms.txt');
const defaultSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

export const escapeXml = (value) =>
  String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const encodeBlogUrl = (id) => `${SITE_URL}/blogs?article=${encodeURIComponent(id)}`;

export const replaceSitemapSection = (content, section) => {
  const block = `  ${START_MARKER}\n${section}\n  ${END_MARKER}`;
  const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, 'm');

  if (markerPattern.test(content)) {
    return content.replace(markerPattern, block);
  }
  if (content.includes('</urlset>')) {
    return content.replace('</urlset>', `${block}\n</urlset>`);
  }
  return `${content.trimEnd()}\n\n${block}\n`;
};

export const replaceLlmsSection = (content, section) => {
  const block = `${START_MARKER}\n${section}\n${END_MARKER}`;
  const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, 'm');

  if (markerPattern.test(content)) {
    return content.replace(markerPattern, block);
  }
  return `${content.trimEnd()}\n\n${block}\n`;
};

/**
 * Fetch published blogs from Supabase REST API
 */
export const fetchPublishedBlogs = async () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://korkozxilsxaslokckif.supabase.co';
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_BXMg1byim0l_O05rABw1OQ_54gNQW1Z';

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  const endpoint = new URL('/rest/v1/blogs', supabaseUrl);
  endpoint.searchParams.set('select', 'id,title,created_at,slug');
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

  return response.json();
};

/**
 * Generate sections and write them to public/sitemap.xml and public/llms.txt on disk
 */
export const updateSeoFiles = async ({
  llmsPath = defaultLlmsPath,
  sitemapPath = defaultSitemapPath,
} = {}) => {
  const blogs = await fetchPublishedBlogs();

  const llmsSection = [
    '## Blog Articles',
    '',
    ...blogs.map((blog) => `- [${blog.title.trim()}](${encodeBlogUrl(blog.id)})`),
  ].join('\n');

  const sitemapSection = blogs
    .map((blog) => {
      const lastmod = blog.created_at || new Date().toISOString();
      return `  <url>\n    <loc>${escapeXml(encodeBlogUrl(blog.id))}</loc>\n    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.70</priority>\n  </url>`;
    })
    .join('\n\n');

  const [llmsContent, sitemapContent] = await Promise.all([
    readFile(llmsPath, 'utf8'),
    readFile(sitemapPath, 'utf8'),
  ]);

  const updatedLlms = replaceLlmsSection(llmsContent, llmsSection);
  const updatedSitemap = replaceSitemapSection(sitemapContent, sitemapSection);

  await Promise.all([
    writeFile(llmsPath, updatedLlms, 'utf8'),
    writeFile(sitemapPath, updatedSitemap, 'utf8'),
  ]);

  return {
    count: blogs.length,
    blogs,
    updatedLlms,
    updatedSitemap,
  };
};
