/**
 * The site can be served from a sub-path (GitHub Pages: /essa-arshad) or from
 * the root (Vercel). Every internal link and asset goes through `withBase`
 * so both work. The base comes from BASE_PATH in astro.config.mjs.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a site-relative path with the base path. External URLs and #anchors pass through. */
export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Full URL for a site-relative path, e.g. for canonical links and sitemaps. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site).href;
}
