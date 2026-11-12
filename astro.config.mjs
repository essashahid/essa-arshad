// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Where the site lives. Both are read from the environment so the same code
// deploys to GitHub Pages (sub-path) and Vercel (root) without edits.
//
//   SITE_URL   origin, e.g. https://essashahid.github.io
//              falls back to Vercel's production domain, then localhost
//   BASE_PATH  sub-path, e.g. /essa-arshad
//              falls back to / (root)
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: {
    // Write /resume.html rather than /resume/index.html, so /resume is served
    // without a trailing-slash redirect on both GitHub Pages and Vercel.
    format: 'file',
    // The whole stylesheet is a few KB, so inline it and skip a render-blocking request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
