import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const seoSyncPlugin = () => ({
  name: "seo-sync-plugin",
  configureServer(server: any) {
    server.middlewares.use("/api/sync-seo", async (req: any, res: any) => {
      if (req.method === "POST") {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mod = await (import("./scripts/seo-generator-core.mjs") as any);
          const result = await mod.updateSeoFiles();
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mod = await (import("./scripts/seo-generator-core.mjs") as any);
          const result = await mod.updateSeoFiles();
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
    port: Number(process.env.VITE_DEV_PORT || 5173),
  },
  plugins: [
    react(),
    seoSyncPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom")) return "vendor-react";
            if (id.includes("/react/") || id.includes("/react\\")) return "vendor-react";
            if (id.includes("react-router-dom") || id.includes("react-router/")) return "vendor-router";
            if (id.includes("@tanstack/react-query")) return "vendor-query";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("@radix-ui") || id.includes("next-themes")) return "vendor-ui";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("supabase")) return "vendor-supabase";
            return "vendor";
          }
        },
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
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    reportCompressedSize: false,
    target: "esnext",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
