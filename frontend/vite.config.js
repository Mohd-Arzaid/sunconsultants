import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
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
    rollupOptions: {
      output: {
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
