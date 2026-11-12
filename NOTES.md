# Notes

Choices I made where the brief or the design left room. Each is small and easy to change.

## Setup

- **Node version.** Astro 7 (latest stable) needs Node 22.23.4+. Your default Node is 22.18, which is too old, so I added `.nvmrc` (Node 24, which you already have in nvm). Run `nvm use` before `npm run dev`. Vercel uses a new enough Node by default.
- **Project location.** The Astro project is at the top of `Essa-portfolio-site/`. Your original design files are untouched in `Essa-Arshad-Portfolio/` and are excluded from the Vercel upload (`.vercelignore`).
- **Site URL and base path.** Nothing is hard-coded. `SITE_URL` and `BASE_PATH` come from the environment: the GitHub Pages workflow sets them (it asks GitHub for the Pages URL, so a custom domain later needs no edits), Vercel falls back to its production domain at the root, and local builds use `http://localhost:4321`.
- **`vercel.json`.** Added for clean URLs without trailing slashes (`/resume`, not `/resume/`) and long-lived caching of fonts. No dashboard settings needed. Kept as is for the later Vercel setup.

## Copy

- **Home page title.** "Essa Arshad — AI agent developer", confirmed by you.
- **Placeholder links.** In the design, the home "Upwork" and "book a call" links point at the Connect section. I kept that behavior for as long as `upworkUrl` / `bookingUrl` are `#`, on every page, so there are no dead links.
- **OpenClaw and EvidenceOps tiles** linked to the K-12 page in the design (a stand-in). They now link to their own case study pages.
- **Case studies 2–4.** Only facts already in your files are used: the titles, statuses, the PSX live URL, "Portfolio tracking with a Claude copilot", "An OpenClaw reference deployment" (from your Now line) and "Document extraction with provenance". Everything else is a `[PLACEHOLDER]`. All three are marked `isSampleBuild: false`, so the "sample build modeled on an Upwork posting" sentence appears only on K-12. Flip the flag if any of them is a sample build.
- **K-12 "Code" link** goes to your GitHub profile, as in the design.

## Schema

All the fields you listed are there. Differences and additions:

- `date` is optional, because three projects have no ship date and I didn't want to invent one.
- Chapter `start` is optional for the same reason (no walkthrough is recorded yet).
- `loopVideo` is a path without the extension (`/videos/<slug>/loop`); `.webm` and `.mp4` are added.
- Added optional fields: `tileLink` (PSX uses `live` to link straight to the app), `mock` (which mock UI to show), `loopCaption`, `loopDuration`, and `links` (Sample CSV, QA report).

## Design details

- **44px touch targets.** The résumé section links and the walkthrough chapter links were about 40–42px tall in the design. They are now 44px tall with the spacing between them unchanged, so the layout still matches the screenshots.
- **Hero mock for projects 2–4.** Only K-12 has a large hero mock in the design. The other case studies show their home-tile mock, centered in the same gray frame.
- **Walkthrough placeholder.** With no video ID, the play button is decorative rather than a button that does nothing, and chapters are plain text rather than links to `#`.
- **Additions that are not visible in the layout:** a "Skip to content" link (appears only on keyboard focus), hover color on gray links, screen-reader-only section headings on the résumé page, and a share image (`public/og.png`, name and role on white) so links preview properly. Case studies use their `poster` as the share image once one exists.
- **YouTube facade.** I wrote a small one (about 25 lines) instead of adding `lite-youtube-embed`, so chapter links can start the player at a timestamp. The poster comes from YouTube's thumbnail server (`i.ytimg.com`); the player itself loads from `youtube-nocookie.com` only on click. The script ships only on pages that have a video ID.
- **Arrows (← ↗).** These are not in Inter's Latin subset, so they render in the system font, the same as in your screenshots.

## Checks I ran

- `npm run build`: 0 errors, 0 warnings, 0 hints.
- Compared every page against your screenshots at 1440px and 390px.
- Lighthouse (mobile, local preview): 100 for Performance, Accessibility, Best Practices and SEO on home, K-12 case study, résumé and one placeholder case study. Scores on the deployed site can differ slightly with real network conditions.
- Page weight (HTML with inlined CSS): 21–29 KB per page. Inter (Latin) is one 48 KB font file.
- Tested the loop video and YouTube paths with a temporary clip and a public video ID, then removed them.

## Round 2 (publishing and content changes)

- **Page files.** The build now writes `/resume.html` instead of `/resume/index.html`. Both GitHub Pages and Vercel then serve `/resume` directly, with no trailing-slash redirect. URLs are unchanged.
- **Base path.** All internal links and assets go through `withBase()` in `src/lib/paths.ts`. I built with `BASE_PATH=/essa-arshad`, crawled every page in preview, and checked all 20 internal URLs (pages, fonts, favicon, share image, poster, sitemap, résumé PDF): none broken, none pointing outside the base path. On GitHub Pages `robots.txt` lives at `/essa-arshad/robots.txt`; crawlers only read it at the domain root, so it takes effect once the site is on Vercel or a custom domain.
- **Hidden projects.** `hidden: true` is filtered in one place (`getProjects()`), which every page, the sitemap and `llms.txt` use. Résumé rows are now tied to a project by `slug`, so the EvidenceOps row disappears with it and comes back when you remove the flag.
- **Nook & Acre stack.** Confirmed from the live site: Next.js response headers and `/_next/` assets, served by Netlify, images from Supabase storage. Listed as "Next.js, Netlify, Supabase".
- **Nook & Acre "Cities: 6"** is a stat I derived from your list of six cities. The "What I built" list is your feature list, reworded only to fit the rows. There is no "Why these settings" section because you gave no facts for one.
- **Nook & Acre tile.** The hero screenshot (1440px wide, saved as a 1200×750 WebP, 85 KB) sits as a rounded card inside the gray tile, like the mock UIs, rather than filling it edge to edge. Say if you'd prefer full-bleed.
- **Nook & Acre on the résumé page.** Not added, since you didn't ask. Add a row with `slug: 'nook-and-acre'` in `src/data/resume.ts` if you want it.
- **DismissalIQ.** Status is "In progress" (your résumé says Sep 2024 – present). I skipped "The problem" rather than invent one. The walkthrough placeholder still shows, as on every case study.
- **"Also:" line.** Any visible project with `showInGrid: false` is listed there, so it works for future side projects too.
- **ChatGPT plugin link.** The name is a link driven by `pluginUrl` in `src/data/site.ts`. While that is `#`, it goes to the Connect section like the other placeholder links. I did not print "[PLUGIN URL]" on the page.
- **`.gitignore`** also excludes `Essa-Arshad-Portfolio-Design.pdf` at the top level, since it is a copy of the design export.
- **Lighthouse (mobile, local preview, with the base path):** 100 across the board on home, K-12, Nook & Acre, DismissalIQ and résumé.
- **Repo visibility.** GitHub Pages isn't available for private repos on your plan, so with your go-ahead I made `essashahid/essa-arshad` public and enabled Pages (source: GitHub Actions).
- **First deploy is blocked by GitHub billing.** The workflow run stops before it starts with "your account is locked due to a billing issue". Fix that at https://github.com/settings/billing, then re-run the workflow (Actions → Deploy to GitHub Pages → Run workflow). Nothing in the repo needs to change.
