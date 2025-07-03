import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-toast",
            "framer-motion",
            "lucide-react",
          ],
          "utils-vendor": [
            "axios",
            "clsx",
            "tailwind-merge",
            "react-helmet-async",
          ],

          // Large page chunks
          "home-page": ["./src/pages/Home.jsx"],
          "notification-page": ["./src/pages/Notification.jsx"],
          "large-table": ["./src/pages/BISFMProductTable.jsx.jsx"],

          // Manual component chunks
          "bis-components": [
            "./src/components/manual/BISFM.jsx",
            "./src/components/manual/BISCertification.jsx",
            "./src/components/manual/LMPC.jsx",
          ],
          "service-components": [
            "./src/components/manual/EPRService.jsx",
            "./src/components/manual/PlasticWaste.jsx",
            "./src/components/manual/LegalMetrology.jsx",
          ],
        },

        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId) {
            if (facadeModuleId.includes("pages/")) {
              return "pages/[name]-[hash].js";
            }
            if (facadeModuleId.includes("components/")) {
              return "components/[name]-[hash].js";
            }
          }
          return "chunks/[name]-[hash].js";
        },

        // Optimize entry and asset file names
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          // Separate fonts from other assets
          if (
            assetInfo.name &&
            assetInfo.name.match(/\.(woff|woff2|ttf|otf|eot)$/)
          ) {
            return "fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },

    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Enable source maps for debugging (disable in production)
    sourcemap: false,

    // Optimize minification
    minify: "esbuild",

    // Target modern browsers for better optimization
    target: "es2020",

    // Add CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "axios",
    ],
    exclude: [
      // Exclude large components from pre-bundling
      "./src/pages/BISFMProductTable.jsx.jsx",
      "./src/pages/Notification.jsx",
    ],
  },

  // Development server optimizations
  server: {
    fs: {
      // Allow serving files from one level up
      allow: [".."],
    },
  },
});
