# Essa Arshad — portfolio

Personal portfolio built with [Astro](https://astro.build) and Tailwind CSS v4. Static output, no client JavaScript unless a page has a video.

## Requirements

Node **22.23.4 or newer** (Astro 7 will not start on older versions). The repo has an `.nvmrc`, so with nvm:

```sh
nvm use        # switches to Node 24
```

## Install, dev, build

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks (astro check), then builds to dist/
npm run preview    # serves dist/ locally
```

## Deploy

**GitHub Pages.** Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to https://essashahid.github.io/essa-arshad/. The workflow sets `SITE_URL` and `BASE_PATH` for you. You can also run it by hand: **Actions → Deploy to GitHub Pages → Run workflow**.

**Vercel (when you're ready).** In Vercel: **Add New → Project**, pick the repo, and deploy. Vercel detects Astro; no settings to change. The site is served from the root there, and canonical URLs, the sitemap, `robots.txt` and `llms.txt` use your Vercel production domain automatically.

**How the two coexist.** `astro.config.mjs` reads two environment variables:

| Variable | Example | When it's missing |
| --- | --- | --- |
| `SITE_URL` | `https://essashahid.github.io` | Vercel's production domain, then `http://localhost:4321` |
| `BASE_PATH` | `/essa-arshad` | `/` (root) |

To preview the GitHub Pages build locally:

```sh
BASE_PATH=/essa-arshad npm run build && BASE_PATH=/essa-arshad npm run preview
# open http://localhost:4321/essa-arshad/
```

When you add an internal link or asset in a component, wrap the path in `withBase('/path')` from `src/lib/paths.ts` so it works under both.

## Where things live

| What | Where |
| --- | --- |
| Name, email, social links, Upwork and booking URLs, footer | `src/data/site.ts` |
| Home page copy (intro, Building, Now, Connect) | `src/data/home.ts` |
| Résumé page (experience, projects, education) | `src/data/resume.ts` |
| Projects and case studies | `src/content/projects/*.mdx` |
| Project schema | `src/content.config.ts` |
| Colors, font, case study text styles | `src/styles/global.css` |
| Résumé PDF | `public/resume.pdf` |
| Videos and poster images | `public/videos/<slug>/` |
| GitHub Pages deploy | `.github/workflows/deploy.yml` |

## Add a new project

Create one file, `src/content/projects/<slug>.mdx`. It appears on the home grid and gets a page at `/projects/<slug>`.

```mdx
---
title: My Project
slug: my-project              # URL and video folder name
date: 2026-10-01              # optional; leave out until it ships
status: Shipped               # Live | Shipped | In progress
isSampleBuild: false
summary: One or two sentences shown under the title.
stats:
  - label: Rows
    value: '1,200'
stack: [Python, Playwright]
liveUrl: https://example.com  # optional
repoUrl: https://github.com/essashahid/my-project   # optional
order: 5                      # position on the home grid
---

## The problem

Plain Markdown here.

## What I built

1. Numbered lists become the 01, 02, 03 step rows.

## Why these settings

**Bold lead.** Then the reason.
```

Optional fields:

| Field | What it does |
| --- | --- |
| `hidden: true` | Removes the project from the whole site: no page, tile, résumé row, sitemap or llms.txt entry. The file stays so you can bring it back |
| `showInGrid: false` | Keeps it off the home grid and lists it in the "Also:" line under the grid |
| `tagline` | Short description used in the "Also:" line |
| `subtitle` | Replaces the generated line under the case study title |
| `tileLink: live` | Home tile links straight to `liveUrl` instead of the case study |
| `mock` | Mock UI shown when there is no video or poster: `scraper`, `chat`, `approval` or `document` |
| `poster` | A screenshot (16:10, about 1200×750 WebP). Shown in the tile and case study when there is no loop video |
| `loopVideo` | Loop video (see below). Uses `poster` as its first frame |
| `loopCaption`, `loopDuration` | Caption and length under the loop on the case study |
| `walkthroughYouTubeId` | YouTube ID for the narrated walkthrough |
| `chapters` | List of `title` + `start` (`m:ss`) shown under the walkthrough |
| `links` | Extra links under the walkthrough, e.g. Sample CSV |

To show a project on the résumé page, add a row in `src/data/resume.ts` with its `slug`.

The home tile caption shows the month and year for `Shipped` projects, otherwise the status.

## Add videos

**Loop video (home tile and case study hero).** Put three files in `public/videos/<slug>/`:

- `loop.webm` and `loop.mp4`: 720p, 5–20 s, no audio, under 2 MB each
- `poster.webp`: first frame

Then add to the project's front matter:

```yaml
loopVideo: /videos/<slug>/loop
poster: /videos/<slug>/poster.webp
```

The video loads only when scrolled into view, pauses when it leaves, and does not autoplay for visitors with reduced motion turned on. `public/videos/README.md` has ffmpeg commands.

**Walkthrough (YouTube).** Add the ID and chapter times:

```yaml
walkthroughYouTubeId: abc123XYZ00
chapters:
  - title: The brief
    start: '0:00'
  - title: A live run
    start: '1:05'
```

The page shows a poster and play button; YouTube (`youtube-nocookie.com`) loads only after a click.

## Placeholders still on the site

Search the project for `[` to find them all.

**Links** (`src/data/site.ts`)

- `upworkUrl` is `#`. Until set, "Upwork" links go to the Connect section.
- `bookingUrl` is `#`. Until set, "book a call" goes to the Connect section.
- `pluginUrl` is `#` — this is the [PLUGIN URL] for the ChatGPT plugin row on the home page. Until set, that link goes to the Connect section.

**K-12 District Scraper** (`src/content/projects/k12-district-scraper.mdx`)

- `[X min]` — run time
- `[X%]` — share of rows sent to review
- `[DURATION]` — shown on the walkthrough until `walkthroughYouTubeId` is set
- Chapter start times (not set; chapters show as plain text until there is a video)
- "Sample CSV" and "QA report" links are `#`
- "Code" links to your GitHub profile, not a specific repo
- No loop video yet (mock UI is shown)

**Nook & Acre** (`nook-and-acre.mdx`)

- `[CLIENT OR SAMPLE BUILD]` and `[DATE]` — in `subtitle`
- `[PROBLEM]` — body copy
- `[METRIC]` / `[X]` — a headline number
- `[DURATION]` — walkthrough

**PSX Research Copilot** (`psx-research-copilot.mdx`)

- `[DATE]` — launch date (set `date`)
- `[STACK]` — the rest of the stack after Claude
- `[METRIC]` / `[X]` — a headline number
- `[PROBLEM: …]`, `[STEP 1]`–`[STEP 3]`, `[DECISION]`, `[REASON]` — body copy
- `[DURATION]` — walkthrough

**OpenClaw Deployment** (`openclaw-deployment.mdx`)

- `[STACK]`, `[METRIC]` / `[X]`
- `[PROBLEM: …]`, `[STEP 1]`–`[STEP 3]`, `[DECISION]`, `[REASON]`
- `[DURATION]`

**DismissalIQ** (`dismissaliq.mdx`)

- `[DURATION]` — walkthrough. No other placeholders; everything else is from your résumé.

**EvidenceOps** (`evidenceops.mdx`) — hidden, so none of these are visible on the site

- `[STACK]`, `[METRIC]` / `[X]`
- `[PROBLEM: …]`, `[STEP 1]`–`[STEP 3]`, `[DECISION]`, `[REASON]`
- `[DURATION]`
