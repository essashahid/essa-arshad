import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** URL segment: /projects/<slug>. Also the folder name under /public/videos. */
    slug: z.string().regex(/^[a-z0-9-]+$/, 'Use lowercase letters, numbers and dashes'),
    /** Leave out if the project has no ship date yet. */
    date: z.coerce.date().optional(),
    status: z.enum(['Live', 'Shipped', 'In progress']),
    /** True for builds modeled on a brief rather than done for a client. */
    isSampleBuild: z.boolean().default(false),
    summary: z.string(),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    /** Path without extension, e.g. /videos/<slug>/loop (.webm and .mp4 are added). */
    loopVideo: z.string().startsWith('/').optional(),
    /** e.g. /videos/<slug>/poster.webp */
    poster: z.string().startsWith('/').optional(),
    walkthroughYouTubeId: z.string().optional(),
    /** Length shown on the walkthrough placeholder until the video exists, e.g. "4:12". */
    walkthroughDuration: z.string().optional(),
    chapters: z
      .array(
        z.object({
          title: z.string(),
          /** m:ss or h:mm:ss. Leave out until the walkthrough is recorded. */
          start: z
            .string()
            .regex(/^(\d+:)?\d{1,2}:\d{2}$/, 'Use m:ss or h:mm:ss')
            .optional(),
        }),
      )
      .default([]),
    order: z.number(),

    // Extras beyond the core list, all optional.

    /** True removes the project from the whole site (no page, tile, résumé row, sitemap or llms.txt entry). */
    hidden: z.boolean().default(false),
    /** False keeps the project off the home grid; it is listed in the "Also:" line under it instead. */
    showInGrid: z.boolean().default(true),
    /** Short description for the "Also:" line. */
    tagline: z.string().optional(),
    /** Replaces the generated line under the case study title. */
    subtitle: z.string().optional(),

    /** Where the home tile links: the case study page (default) or straight to liveUrl. */
    tileLink: z.enum(['case-study', 'live']).default('case-study'),
    /** Which mock UI to draw until a loop video exists. */
    mock: z.enum(['scraper', 'chat', 'approval', 'document']).optional(),
    /** Caption and length shown under the loop on the case study page. */
    loopCaption: z.string().optional(),
    loopDuration: z.string().optional(),
    /** Extra links under the walkthrough, after Code and Live app. */
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects };
