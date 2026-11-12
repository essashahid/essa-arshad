# Temporary values

Everything below was invented to make the pages read naturally. None of it is measured or confirmed. Replace each value with the real one, then delete its `TEMP` marker.

Markers in the files: `# TEMP` in the front matter (YAML comments start with `#`, not `//`) and `{/* TEMP */}` in the page text. Neither shows on the site. To list what's left:

```sh
grep -rn TEMP src
```

Not invented, so not listed: the Upwork and ChatGPT plugin URLs (you supplied them), and anything from your résumé or the original design.

## K-12 District Scraper

| File and line | What | Temporary value |
| --- | --- | --- |
| [k12-district-scraper.mdx:14](src/content/projects/k12-district-scraper.mdx#L14) | Stat value (Run time) | 38 min |
| [k12-district-scraper.mdx:16](src/content/projects/k12-district-scraper.mdx#L16) | Stat value (Sent to review) | 7% |
| [k12-district-scraper.mdx:24](src/content/projects/k12-district-scraper.mdx#L24) | Walkthrough length | 4:12 |
| [k12-district-scraper.mdx:27](src/content/projects/k12-district-scraper.mdx#L27) | Chapter start (The brief) | 0:00 |
| [k12-district-scraper.mdx:29](src/content/projects/k12-district-scraper.mdx#L29) | Chapter start (A live run) | 0:45 |
| [k12-district-scraper.mdx:31](src/content/projects/k12-district-scraper.mdx#L31) | Chapter start (Review queue) | 2:10 |
| [k12-district-scraper.mdx:33](src/content/projects/k12-district-scraper.mdx#L33) | Chapter start (QA report) | 3:25 |

## Nook & Acre

| File and line | What | Temporary value |
| --- | --- | --- |
| [nook-and-acre.mdx:5](src/content/projects/nook-and-acre.mdx#L5) | Line under the title | Sample build · October 2026 |
| [nook-and-acre.mdx:14](src/content/projects/nook-and-acre.mdx#L14) | Stat label | Build time |
| [nook-and-acre.mdx:15](src/content/projects/nook-and-acre.mdx#L15) | Stat value (Build time) | 3 weeks |
| [nook-and-acre.mdx:23](src/content/projects/nook-and-acre.mdx#L23) | Walkthrough length | 3:40 |
| [nook-and-acre.mdx:29](src/content/projects/nook-and-acre.mdx#L29) | Problem | Listing sites bury well-designed homes under thousands of ordinary ones. And a home is only half the decision, because the neighborhood decides how it is to live there. |

## PSX Research Copilot

| File and line | What | Temporary value |
| --- | --- | --- |
| [psx-research-copilot.mdx:5](src/content/projects/psx-research-copilot.mdx#L5) | Launch date (shows as month and year) | 2026-06-01 |
| [psx-research-copilot.mdx:12](src/content/projects/psx-research-copilot.mdx#L12) | Stat value (Stack) — only Next.js, Postgres invented | Claude, Next.js, Postgres |
| [psx-research-copilot.mdx:13](src/content/projects/psx-research-copilot.mdx#L13) | Stat label | Median answer |
| [psx-research-copilot.mdx:14](src/content/projects/psx-research-copilot.mdx#L14) | Stat value (Median answer) | 6 s |
| [psx-research-copilot.mdx:20](src/content/projects/psx-research-copilot.mdx#L20) | Walkthrough length | 3:05 |
| [psx-research-copilot.mdx:26](src/content/projects/psx-research-copilot.mdx#L26) | Problem | Following a PSX portfolio means reading filings, announcements and price moves across several sites. And a chat answer without a source is worse than no answer, because someone trades on it. |
| [psx-research-copilot.mdx:30](src/content/projects/psx-research-copilot.mdx#L30) | Step 1 | Import holdings and track positions and dividends |
| [psx-research-copilot.mdx:31](src/content/projects/psx-research-copilot.mdx#L31) | Step 2 | Pull company announcements and filings into a searchable store |
| [psx-research-copilot.mdx:32](src/content/projects/psx-research-copilot.mdx#L32) | Step 3 | Answer questions with Claude, with a source on every claim |
| [psx-research-copilot.mdx:36](src/content/projects/psx-research-copilot.mdx#L36) | Decision and reason | **Sources on every answer.** Each claim links to the filing it came from. |

## OpenClaw Deployment

| File and line | What | Temporary value |
| --- | --- | --- |
| [openclaw-deployment.mdx:11](src/content/projects/openclaw-deployment.mdx#L11) | Stat value (Stack) — only Claude API, Langfuse invented | OpenClaw, Claude API, Langfuse |
| [openclaw-deployment.mdx:12](src/content/projects/openclaw-deployment.mdx#L12) | Stat label | Setup time |
| [openclaw-deployment.mdx:13](src/content/projects/openclaw-deployment.mdx#L13) | Stat value (Setup time) | 20 min |
| [openclaw-deployment.mdx:17](src/content/projects/openclaw-deployment.mdx#L17) | Walkthrough length | 3:30 |
| [openclaw-deployment.mdx:23](src/content/projects/openclaw-deployment.mdx#L23) | Problem | Agents that send email or change records are easy to demo and hard to trust. A team needs a setup where every outbound action waits for a person, and every step is logged. |
| [openclaw-deployment.mdx:27](src/content/projects/openclaw-deployment.mdx#L27) | Step 1 | Deploy OpenClaw with a read-only inbox tool and a draft-only send tool |
| [openclaw-deployment.mdx:28](src/content/projects/openclaw-deployment.mdx#L28) | Step 2 | Hold every outbound message in an approval queue |
| [openclaw-deployment.mdx:29](src/content/projects/openclaw-deployment.mdx#L29) | Step 3 | Log each step with a timestamp and trace every run |
| [openclaw-deployment.mdx:33](src/content/projects/openclaw-deployment.mdx#L33) | Decision and reason | **Approve before send.** Nothing leaves until a person clicks Approve. |

## DismissalIQ

| File and line | What | Temporary value |
| --- | --- | --- |
| [dismissaliq.mdx:21](src/content/projects/dismissaliq.mdx#L21) | Walkthrough length | 3:15 |

## EvidenceOps (hidden, not on the site)

| File and line | What | Temporary value |
| --- | --- | --- |
| [evidenceops.mdx:11](src/content/projects/evidenceops.mdx#L11) | Stat value (Stack) | Python, Claude API |
| [evidenceops.mdx:12](src/content/projects/evidenceops.mdx#L12) | Stat label | Fields per document |
| [evidenceops.mdx:13](src/content/projects/evidenceops.mdx#L13) | Stat value (Fields per document) | 12 |
| [evidenceops.mdx:16](src/content/projects/evidenceops.mdx#L16) | Walkthrough length | 2:50 |
| [evidenceops.mdx:23](src/content/projects/evidenceops.mdx#L23) | Problem | Pulling terms out of contracts by hand is slow. And an extracted value nobody can trace back to the page is hard to trust. |
| [evidenceops.mdx:27](src/content/projects/evidenceops.mdx#L27) | Step 1 | Parse each PDF page by page |
| [evidenceops.mdx:28](src/content/projects/evidenceops.mdx#L28) | Step 2 | Extract fields with a page reference on each one |
| [evidenceops.mdx:29](src/content/projects/evidenceops.mdx#L29) | Step 3 | Flag uncertain fields for a person to review |
| [evidenceops.mdx:33](src/content/projects/evidenceops.mdx#L33) | Decision and reason | **Page reference on every field.** A reviewer can jump to the source in one click. |

## Still placeholders (links left as `#`)

| File and line | What |
| --- | --- |
| [site.ts:13](src/data/site.ts#L13) | Booking link ("book a call" goes to the Connect section until set) |
| [k12-district-scraper.mdx:36](src/content/projects/k12-district-scraper.mdx#L36) | Sample CSV link |
| [k12-district-scraper.mdx:38](src/content/projects/k12-district-scraper.mdx#L38) | QA report link |

Also still to come: the K-12 "Code" link points at your GitHub profile rather than a repo, and no project has a loop video or walkthrough video yet.
