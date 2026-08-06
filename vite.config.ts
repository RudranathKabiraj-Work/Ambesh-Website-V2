import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  css: { transformer: "lightningcss" },
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    // Explicitly pre-bundle these on startup so the first browser request is instant.
    // Do NOT add an `exclude` list — Nitro's SSR module runner needs to resolve all
    // packages and excluding them causes the vite:invoke/getBuiltins timeout.
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "lucide-react",
      "framer-motion",
      "embla-carousel-react",
      "sonner",
    ],
  },
  server: {
    host: true,
    port: 3000,
    // Pre-transform the hot-path files before the browser first requests them,
    // eliminating the waterfall delay on the first page load in dev.
    /*
    warmup: {
      clientFiles: [
        "./src/routes/__root.tsx",
        "./src/routes/index.tsx",
        "./src/routes/about.tsx",
        "./src/routes/services.tsx",
        "./src/routes/training.tsx",
        "./src/routes/contact.tsx",
        "./src/components/HomePageSections.tsx",
        "./src/components/SiteHeader.tsx",
        "./src/components/SiteFooter.tsx",
        "./src/components/Reveal.tsx",
        "./src/components/Marquee.tsx",
        "./src/components/CorePillars.tsx",
        "./src/components/ServiceCarousel.tsx",
        "./src/components/StrategyCallButton.tsx",
        "./src/components/MeshBackground.tsx",
        "./src/components/StickyCTABar.tsx",
        "./src/lib/seo.ts",
        "./src/lib/wa.ts",
        "./src/lib/ghl.ts",
        "./src/styles.css",
      ],
    },
    */
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    nitro({ preset: process.env.VERCEL ? "vercel" : "node-server" }),
    react(),
  ],
});
