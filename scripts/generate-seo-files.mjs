import 'dotenv/config';
import { updateSeoFiles } from './seo-generator-core.mjs';

try {
  const { count } = await updateSeoFiles();
  console.log(`SEO files: generated ${count} published blog link(s) in sitemap.xml and llms.txt.`);
} catch (error) {
  console.warn(`SEO files: could not refresh blog links; existing files were preserved. ${error.message}`);
}