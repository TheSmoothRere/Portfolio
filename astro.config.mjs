// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://thesmoothrere-portfolio.pages.dev",
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
    robotsTxt(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
