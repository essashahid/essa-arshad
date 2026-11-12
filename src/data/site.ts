import { withBase } from '../lib/paths';

/** Site-wide constants. Edit here and every page picks it up. */
export const site = {
  name: 'Essa Arshad',
  firstName: 'Essa',
  email: 'eessashahid@gmail.com',
  github: 'https://github.com/essashahid',
  linkedin: 'https://www.linkedin.com/in/essaarshad/',

  /** Placeholder. Replace `#` with your Upwork profile URL. */
  upworkUrl: '#',
  /** Placeholder. Replace `#` with your booking link (Cal.com, Calendly…). */
  bookingUrl: '#',

  /** Placeholder for [PLUGIN URL]. Replace `#` with the ChatGPT app directory listing. */
  pluginUrl: '#',

  role: 'AI Agent Developer',
  employer: { name: 'ImportYeti', url: 'https://www.importyeti.com' },

  /** Browser tab title and default description for the home page. */
  title: 'Essa Arshad — AI agent developer',
  description:
    'I build AI agents that run in production, with a person approving what matters. Full-time at ImportYeti, and a few freelance builds on the side.',

  /** Footer, on the home and case study pages. */
  footer: { line: 'Agents propose. People approve.', year: '2026' },

  /** "Who built this" card on case study pages. */
  whoBuiltThis: {
    bio: "I'm Essa, a software engineer building AI agents.",
    sampleBuildNote: 'This is a sample build modeled on a real Upwork posting, not client work.',
  },
} as const;

/**
 * While a URL is still the `#` placeholder, send people to the Connect
 * section on the home page instead of a dead link.
 */
export function hrefOrConnect(url: string, onHomePage = false): string {
  if (url && url !== '#') return url;
  return onHomePage ? '#connect' : `${withBase('/')}#connect`;
}

export const isPlaceholderUrl = (url: string | undefined): boolean => !url || url === '#';
