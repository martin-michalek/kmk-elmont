// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: zmeňte na skutočnú doménu (používa sa pre sitemap, canonical URL a Open Graph).
// Musí sa zhodovať so SITE_URL v src/config.ts.
const SITE_URL = 'https://kmkelmont.sk';

// GitHub Pages BEZ vlastnej domény: nastavte na '/nazov-repozitara/'
// S vlastnou doménou (alebo Cloudflare Pages / Netlify) nechajte '/'
const BASE = '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
