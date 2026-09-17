var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// scripts/seo-generator-core.mjs
var seo_generator_core_exports = {};
__export(seo_generator_core_exports, {
  END_MARKER: () => END_MARKER,
  SITE_URL: () => SITE_URL,
  START_MARKER: () => START_MARKER,
  encodeBlogUrl: () => encodeBlogUrl,
  escapeXml: () => escapeXml,
  fetchPublishedBlogs: () => fetchPublishedBlogs,
  replaceLlmsSection: () => replaceLlmsSection,
  replaceSitemapSection: () => replaceSitemapSection,
  updateSeoFiles: () => updateSeoFiles
});
import "file:///D:/SURESH-BEEKHANI/node_modules/dotenv/config.js";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
var __vite_injected_original_import_meta_url, __filename, __dirname2, SITE_URL, START_MARKER, END_MARKER, defaultLlmsPath, defaultSitemapPath, escapeXml, encodeBlogUrl, replaceSitemapSection, replaceLlmsSection, fetchPublishedBlogs, updateSeoFiles;
var init_seo_generator_core = __esm({
  "scripts/seo-generator-core.mjs"() {
    __vite_injected_original_import_meta_url = "file:///D:/SURESH-BEEKHANI/scripts/seo-generator-core.mjs";
    __filename = fileURLToPath(__vite_injected_original_import_meta_url);
    __dirname2 = path.dirname(__filename);
    SITE_URL = "https://velnixsolutions.com";
    START_MARKER = "<!-- GENERATED BLOG LINKS:START -->";
    END_MARKER = "<!-- GENERATED BLOG LINKS:END -->";
    defaultLlmsPath = path.resolve(__dirname2, "../public/llms.txt");
    defaultSitemapPath = path.resolve(__dirname2, "../public/sitemap.xml");
    escapeXml = (value) => String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
    encodeBlogUrl = (id) => `${SITE_URL}/blogs?article=${encodeURIComponent(id)}`;
    replaceSitemapSection = (content, section) => {
      const block = `  ${START_MARKER}
${section}
  ${END_MARKER}`;
      const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "m");
      if (markerPattern.test(content)) {
        return content.replace(markerPattern, block);
      }
      if (content.includes("</urlset>")) {
        return content.replace("</urlset>", `${block}
</urlset>`);
      }
      return `${content.trimEnd()}

${block}
`;
    };
    replaceLlmsSection = (content, section) => {
      const block = `${START_MARKER}
${section}
${END_MARKER}`;
      const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "m");
      if (markerPattern.test(content)) {
        return content.replace(markerPattern, block);
      }
      return `${content.trimEnd()}

${block}
`;
    };
    fetchPublishedBlogs = async () => {
      const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://korkozxilsxaslokckif.supabase.co";
      const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_BXMg1byim0l_O05rABw1OQ_54gNQW1Z";
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Missing Supabase environment variables");
      }
      const endpoint = new URL("/rest/v1/blogs", supabaseUrl);
      endpoint.searchParams.set("select", "id,title,created_at,slug");
      endpoint.searchParams.set("status", "eq.published");
      endpoint.searchParams.set("order", "created_at.desc");
      const response = await fetch(endpoint, {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`
        }
      });
      if (!response.ok) {
        throw new Error(`Supabase returned ${response.status}`);
      }
      return response.json();
    };
    updateSeoFiles = async ({
      llmsPath = defaultLlmsPath,
      sitemapPath = defaultSitemapPath
    } = {}) => {
      const blogs = await fetchPublishedBlogs();
      const llmsSection = [
        "## Blog Articles",
        "",
        ...blogs.map((blog) => `- [${blog.title.trim()}](${encodeBlogUrl(blog.id)})`)
      ].join("\n");
      const sitemapSection = blogs.map((blog) => {
        const lastmod = blog.created_at || (/* @__PURE__ */ new Date()).toISOString();
        return `  <url>
    <loc>${escapeXml(encodeBlogUrl(blog.id))}</loc>
    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`;
      }).join("\n\n");
      const [llmsContent, sitemapContent] = await Promise.all([
        readFile(llmsPath, "utf8"),
        readFile(sitemapPath, "utf8")
      ]);
      const updatedLlms = replaceLlmsSection(llmsContent, llmsSection);
      const updatedSitemap = replaceSitemapSection(sitemapContent, sitemapSection);
      await Promise.all([
        writeFile(llmsPath, updatedLlms, "utf8"),
        writeFile(sitemapPath, updatedSitemap, "utf8")
      ]);
      return {
        count: blogs.length,
        blogs,
        updatedLlms,
        updatedSitemap
      };
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///D:/SURESH-BEEKHANI/node_modules/vite/dist/node/index.js";
import react from "file:///D:/SURESH-BEEKHANI/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path2 from "path";
var __vite_injected_original_dirname = "D:\\SURESH-BEEKHANI";
var seoSyncPlugin = () => ({
  name: "seo-sync-plugin",
  configureServer(server) {
    server.middlewares.use("/api/sync-seo", async (req, res) => {
      if (req.method === "POST") {
        try {
          const mod = await Promise.resolve().then(() => (init_seo_generator_core(), seo_generator_core_exports));
          const result = await mod.updateSeoFiles();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true, count: result.count }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message }));
        }
      } else {
        res.statusCode = 405;
        res.end("Method Not Allowed");
      }
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use("/api/sync-seo", async (req, res) => {
      if (req.method === "POST") {
        try {
          const mod = await Promise.resolve().then(() => (init_seo_generator_core(), seo_generator_core_exports));
          const result = await mod.updateSeoFiles();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true, count: result.count }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message }));
        }
      } else {
        res.statusCode = 405;
        res.end("Method Not Allowed");
      }
    });
  }
});
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: Number(process.env.VITE_DEV_PORT || 5173)
  },
  plugins: [
    react(),
    seoSyncPlugin()
  ],
  resolve: {
    alias: {
      "@": path2.resolve(__vite_injected_original_dirname, "./src"),
      "react": path2.resolve(__vite_injected_original_dirname, "./node_modules/react"),
      "react-dom": path2.resolve(__vite_injected_original_dirname, "./node_modules/react-dom")
    },
    dedupe: ["react", "react-dom"]
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".");
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext || "")) {
            return "assets/images/[name]-[hash][extname]";
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext || "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    },
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    reportCompressedSize: false,
    target: "esnext"
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode)
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2NyaXB0cy9zZW8tZ2VuZXJhdG9yLWNvcmUubWpzIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcU1VSRVNILUJFRUtIQU5JXFxcXHNjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFNVUkVTSC1CRUVLSEFOSVxcXFxzY3JpcHRzXFxcXHNlby1nZW5lcmF0b3ItY29yZS5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1NVUkVTSC1CRUVLSEFOSS9zY3JpcHRzL3Nlby1nZW5lcmF0b3ItY29yZS5tanNcIjtpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XG5cbmV4cG9ydCBjb25zdCBTSVRFX1VSTCA9ICdodHRwczovL3ZlbG5peHNvbHV0aW9ucy5jb20nO1xuZXhwb3J0IGNvbnN0IFNUQVJUX01BUktFUiA9ICc8IS0tIEdFTkVSQVRFRCBCTE9HIExJTktTOlNUQVJUIC0tPic7XG5leHBvcnQgY29uc3QgRU5EX01BUktFUiA9ICc8IS0tIEdFTkVSQVRFRCBCTE9HIExJTktTOkVORCAtLT4nO1xuXG5jb25zdCBkZWZhdWx0TGxtc1BhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vcHVibGljL2xsbXMudHh0Jyk7XG5jb25zdCBkZWZhdWx0U2l0ZW1hcFBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vcHVibGljL3NpdGVtYXAueG1sJyk7XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVYbWwgPSAodmFsdWUpID0+XG4gIFN0cmluZyh2YWx1ZSB8fCAnJylcbiAgICAucmVwbGFjZUFsbCgnJicsICcmYW1wOycpXG4gICAgLnJlcGxhY2VBbGwoJzwnLCAnJmx0OycpXG4gICAgLnJlcGxhY2VBbGwoJz4nLCAnJmd0OycpXG4gICAgLnJlcGxhY2VBbGwoJ1wiJywgJyZxdW90OycpXG4gICAgLnJlcGxhY2VBbGwoXCInXCIsICcmYXBvczsnKTtcblxuZXhwb3J0IGNvbnN0IGVuY29kZUJsb2dVcmwgPSAoaWQpID0+IGAke1NJVEVfVVJMfS9ibG9ncz9hcnRpY2xlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gO1xuXG5leHBvcnQgY29uc3QgcmVwbGFjZVNpdGVtYXBTZWN0aW9uID0gKGNvbnRlbnQsIHNlY3Rpb24pID0+IHtcbiAgY29uc3QgYmxvY2sgPSBgICAke1NUQVJUX01BUktFUn1cXG4ke3NlY3Rpb259XFxuICAke0VORF9NQVJLRVJ9YDtcbiAgY29uc3QgbWFya2VyUGF0dGVybiA9IG5ldyBSZWdFeHAoYCR7U1RBUlRfTUFSS0VSfVtcXFxcc1xcXFxTXSo/JHtFTkRfTUFSS0VSfWAsICdtJyk7XG5cbiAgaWYgKG1hcmtlclBhdHRlcm4udGVzdChjb250ZW50KSkge1xuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UobWFya2VyUGF0dGVybiwgYmxvY2spO1xuICB9XG4gIGlmIChjb250ZW50LmluY2x1ZGVzKCc8L3VybHNldD4nKSkge1xuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoJzwvdXJsc2V0PicsIGAke2Jsb2NrfVxcbjwvdXJsc2V0PmApO1xuICB9XG4gIHJldHVybiBgJHtjb250ZW50LnRyaW1FbmQoKX1cXG5cXG4ke2Jsb2NrfVxcbmA7XG59O1xuXG5leHBvcnQgY29uc3QgcmVwbGFjZUxsbXNTZWN0aW9uID0gKGNvbnRlbnQsIHNlY3Rpb24pID0+IHtcbiAgY29uc3QgYmxvY2sgPSBgJHtTVEFSVF9NQVJLRVJ9XFxuJHtzZWN0aW9ufVxcbiR7RU5EX01BUktFUn1gO1xuICBjb25zdCBtYXJrZXJQYXR0ZXJuID0gbmV3IFJlZ0V4cChgJHtTVEFSVF9NQVJLRVJ9W1xcXFxzXFxcXFNdKj8ke0VORF9NQVJLRVJ9YCwgJ20nKTtcblxuICBpZiAobWFya2VyUGF0dGVybi50ZXN0KGNvbnRlbnQpKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShtYXJrZXJQYXR0ZXJuLCBibG9jayk7XG4gIH1cbiAgcmV0dXJuIGAke2NvbnRlbnQudHJpbUVuZCgpfVxcblxcbiR7YmxvY2t9XFxuYDtcbn07XG5cbi8qKlxuICogRmV0Y2ggcHVibGlzaGVkIGJsb2dzIGZyb20gU3VwYWJhc2UgUkVTVCBBUElcbiAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHVibGlzaGVkQmxvZ3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVklURV9TVVBBQkFTRV9VUkwgfHwgJ2h0dHBzOi8va29ya296eGlsc3hhc2xva2NraWYuc3VwYWJhc2UuY28nO1xuICBjb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5WSVRFX1NVUEFCQVNFX0FOT05fS0VZIHx8ICdzYl9wdWJsaXNoYWJsZV9CWE1nMWJ5aW0wbF9PMDVyQUJ3MU9RXzU0Z05RVzFaJztcblxuICBpZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZUFub25LZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgU3VwYWJhc2UgZW52aXJvbm1lbnQgdmFyaWFibGVzJyk7XG4gIH1cblxuICBjb25zdCBlbmRwb2ludCA9IG5ldyBVUkwoJy9yZXN0L3YxL2Jsb2dzJywgc3VwYWJhc2VVcmwpO1xuICBlbmRwb2ludC5zZWFyY2hQYXJhbXMuc2V0KCdzZWxlY3QnLCAnaWQsdGl0bGUsY3JlYXRlZF9hdCxzbHVnJyk7XG4gIGVuZHBvaW50LnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsICdlcS5wdWJsaXNoZWQnKTtcbiAgZW5kcG9pbnQuc2VhcmNoUGFyYW1zLnNldCgnb3JkZXInLCAnY3JlYXRlZF9hdC5kZXNjJyk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGFwaWtleTogc3VwYWJhc2VBbm9uS2V5LFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3N1cGFiYXNlQW5vbktleX1gLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFN1cGFiYXNlIHJldHVybmVkICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgc2VjdGlvbnMgYW5kIHdyaXRlIHRoZW0gdG8gcHVibGljL3NpdGVtYXAueG1sIGFuZCBwdWJsaWMvbGxtcy50eHQgb24gZGlza1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlU2VvRmlsZXMgPSBhc3luYyAoe1xuICBsbG1zUGF0aCA9IGRlZmF1bHRMbG1zUGF0aCxcbiAgc2l0ZW1hcFBhdGggPSBkZWZhdWx0U2l0ZW1hcFBhdGgsXG59ID0ge30pID0+IHtcbiAgY29uc3QgYmxvZ3MgPSBhd2FpdCBmZXRjaFB1Ymxpc2hlZEJsb2dzKCk7XG5cbiAgY29uc3QgbGxtc1NlY3Rpb24gPSBbXG4gICAgJyMjIEJsb2cgQXJ0aWNsZXMnLFxuICAgICcnLFxuICAgIC4uLmJsb2dzLm1hcCgoYmxvZykgPT4gYC0gWyR7YmxvZy50aXRsZS50cmltKCl9XSgke2VuY29kZUJsb2dVcmwoYmxvZy5pZCl9KWApLFxuICBdLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnN0IHNpdGVtYXBTZWN0aW9uID0gYmxvZ3NcbiAgICAubWFwKChibG9nKSA9PiB7XG4gICAgICBjb25zdCBsYXN0bW9kID0gYmxvZy5jcmVhdGVkX2F0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgIHJldHVybiBgICA8dXJsPlxcbiAgICA8bG9jPiR7ZXNjYXBlWG1sKGVuY29kZUJsb2dVcmwoYmxvZy5pZCkpfTwvbG9jPlxcbiAgICA8bGFzdG1vZD4ke25ldyBEYXRlKGxhc3Rtb2QpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfTwvbGFzdG1vZD5cXG4gICAgPGNoYW5nZWZyZXE+bW9udGhseTwvY2hhbmdlZnJlcT5cXG4gICAgPHByaW9yaXR5PjAuNzA8L3ByaW9yaXR5PlxcbiAgPC91cmw+YDtcbiAgICB9KVxuICAgIC5qb2luKCdcXG5cXG4nKTtcblxuICBjb25zdCBbbGxtc0NvbnRlbnQsIHNpdGVtYXBDb250ZW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICByZWFkRmlsZShsbG1zUGF0aCwgJ3V0ZjgnKSxcbiAgICByZWFkRmlsZShzaXRlbWFwUGF0aCwgJ3V0ZjgnKSxcbiAgXSk7XG5cbiAgY29uc3QgdXBkYXRlZExsbXMgPSByZXBsYWNlTGxtc1NlY3Rpb24obGxtc0NvbnRlbnQsIGxsbXNTZWN0aW9uKTtcbiAgY29uc3QgdXBkYXRlZFNpdGVtYXAgPSByZXBsYWNlU2l0ZW1hcFNlY3Rpb24oc2l0ZW1hcENvbnRlbnQsIHNpdGVtYXBTZWN0aW9uKTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgd3JpdGVGaWxlKGxsbXNQYXRoLCB1cGRhdGVkTGxtcywgJ3V0ZjgnKSxcbiAgICB3cml0ZUZpbGUoc2l0ZW1hcFBhdGgsIHVwZGF0ZWRTaXRlbWFwLCAndXRmOCcpLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIGNvdW50OiBibG9ncy5sZW5ndGgsXG4gICAgYmxvZ3MsXG4gICAgdXBkYXRlZExsbXMsXG4gICAgdXBkYXRlZFNpdGVtYXAsXG4gIH07XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTVVJFU0gtQkVFS0hBTklcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFNVUkVTSC1CRUVLSEFOSVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU1VSRVNILUJFRUtIQU5JL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBzZW9TeW5jUGx1Z2luID0gKCkgPT4gKHtcbiAgbmFtZTogXCJzZW8tc3luYy1wbHVnaW5cIixcbiAgY29uZmlndXJlU2VydmVyKHNlcnZlcjogYW55KSB7XG4gICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShcIi9hcGkvc3luYy1zZW9cIiwgYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCAoaW1wb3J0KFwiLi9zY3JpcHRzL3Nlby1nZW5lcmF0b3ItY29yZS5tanNcIikgYXMgYW55KTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2QudXBkYXRlU2VvRmlsZXMoKTtcbiAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHJlc3VsdC5jb3VudCB9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnIubWVzc2FnZSB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICAgICAgICByZXMuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBjb25maWd1cmVQcmV2aWV3U2VydmVyKHNlcnZlcjogYW55KSB7XG4gICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShcIi9hcGkvc3luYy1zZW9cIiwgYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCAoaW1wb3J0KFwiLi9zY3JpcHRzL3Nlby1nZW5lcmF0b3ItY29yZS5tanNcIikgYXMgYW55KTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2QudXBkYXRlU2VvRmlsZXMoKTtcbiAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHJlc3VsdC5jb3VudCB9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnIubWVzc2FnZSB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICAgICAgICByZXMuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlZJVEVfREVWX1BPUlQgfHwgNTE3MyksXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHNlb1N5bmNQbHVnaW4oKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIFwicmVhY3RcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL25vZGVfbW9kdWxlcy9yZWFjdFwiKSxcbiAgICAgIFwicmVhY3QtZG9tXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tXCIpLFxuICAgIH0sXG4gICAgZGVkdXBlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWU/LnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvPy5baW5mby5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljb3x3ZWJwfGF2aWYvaS50ZXN0KGV4dCB8fCBcIlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XG4gICAgICAgICAgfSBlbHNlIGlmICgvd29mZnx3b2ZmMnxlb3R8dHRmfG90Zi9pLnRlc3QoZXh0IHx8IFwiXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJhc3NldHMvZm9udHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gXCJhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXVwiO1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNTAwLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBcInByb2Nlc3MuZW52Lk5PREVfRU5WXCI6IEpTT04uc3RyaW5naWZ5KG1vZGUpLFxuICB9LFxufSkpO1xuIl0sCiAgIm1h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VSxnQkFBZ0Isa0JBQWtCO0FBQ2hELGNBQUksSUFBSSxLQUFLLFVBQVUsRUFBRSxPQUFPLElBQUksUUFBUSxDQUFDLENBQUM7QUFBQSxRQUNoRDtBQUFBLE1BQ0YsT0FBTztBQUNMLFlBQUksYUFBYTtBQUNqQixZQUFJLElBQUksb0JBQW9CO0FBQUEsTUFDOUI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU0sT0FBTyxRQUFRLElBQUksaUJBQWlCLElBQUk7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLQyxNQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3BDLFNBQVNBLE1BQUssUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxNQUN2RCxhQUFhQSxNQUFLLFFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsSUFDakU7QUFBQSxJQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLEdBQUc7QUFDdEMsZ0JBQU0sTUFBTSxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ2xDLGNBQUksNENBQTRDLEtBQUssT0FBTyxFQUFFLEdBQUc7QUFDL0QsbUJBQU87QUFBQSxVQUNULFdBQVcsMEJBQTBCLEtBQUssT0FBTyxFQUFFLEdBQUc7QUFDcEQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHVCQUF1QjtBQUFBLElBQ3ZCLG1CQUFtQjtBQUFBLElBQ25CLGNBQWM7QUFBQSxJQUNkLHNCQUFzQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTix3QkFBd0IsS0FBSyxVQUFVLElBQUk7QUFBQSxFQUM3QztBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbIl9fZGlybmFtZSIsICJwYXRoIiwgInBhdGgiXQp9Cg==
