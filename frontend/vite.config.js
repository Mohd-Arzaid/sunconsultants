import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Plugin to make CSS load asynchronously
function asyncCssPlugin() {
  return {
    name: "async-css",
    transformIndexHtml: {
      enforce: "post",
      transform(html, ctx) {
        // Replace render-blocking CSS links with async loading
        return html.replace(
          /<link([^>]*rel=["']stylesheet["'][^>]*)>/gi,
          (match, attrs) => {
            // Skip if already has media attribute or is a font stylesheet
            if (
              attrs.includes("media=") ||
              attrs.includes("fonts.googleapis.com")
            ) {
              return match;
            }
            // Extract href for noscript fallback
            const hrefMatch = attrs.match(/href=["']([^"']+)["']/);
            const href = hrefMatch ? hrefMatch[1] : "";

            // Convert to async loading using media="print" trick
            const asyncLink = `<link${attrs} media="print" onload="this.media='all'" />`;

            // Add noscript fallback for browsers without JavaScript
            if (href) {
              return `${asyncLink}<noscript><link${attrs} /></noscript>`;
            }
            return asyncLink;
          }
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    cssCodeSplit: true,
    cssMinify: true,
    // Cache busting configuration
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Add hash to all output files for cache busting
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-toast",
            "@radix-ui/react-scroll-area",
          ],
          "vendor-icons": ["lucide-react", "react-icons"],
          "vendor-utils": ["axios", "clsx", "tailwind-merge", "framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
