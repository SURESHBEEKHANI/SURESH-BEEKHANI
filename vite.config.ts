import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const seoSyncPlugin = () => ({
  name: "seo-sync-plugin",
  configureServer(server: any) {
    server.middlewares.use("/api/sync-seo", async (req: any, res: any) => {
      if (req.method === "POST") {
        try {
          const { updateSeoFiles } = await import("./scripts/seo-generator-core.mjs");
          const result = await updateSeoFiles();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true, count: result.count }));
        } catch (err: any) {
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
  configurePreviewServer(server: any) {
    server.middlewares.use("/api/sync-seo", async (req: any, res: any) => {
      if (req.method === "POST") {
        try {
          const { updateSeoFiles } = await import("./scripts/seo-generator-core.mjs");
          const result = await updateSeoFiles();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true, count: result.count }));
        } catch (err: any) {
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
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    // Use a non-sensitive default port and allow override via env; avoid hardcoding typical PORT values
    port: Number(process.env.VITE_DEV_PORT || 5173),
  },
  plugins: [
    react(),
    seoSyncPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-toast'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext || '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  }
}));
