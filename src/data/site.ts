import { withBase } from '../lib/paths';

/** Site-wide constants. Edit here and every page picks it up. */
export const site = {
  name: 'Essa Arshad',
  firstName: 'Essa',
  email: 'eessashahid@gmail.com',
  github: 'https://github.com/essashahid',
  linkedin: 'https://www.linkedin.com/in/essaarshad/',

  upworkUrl: 'https://www.upwork.com/freelancers/~01c68334e196c35176?mp_source=share',
  /** Placeholder. Replace `#` with your booking link (Cal.com, Calendly…). */
  bookingUrl: '#',

  /** ImportYeti's listing in ChatGPT's app directory. */
  pluginUrl: 'https://chatgpt.com/plugins/plugin_asdk_app_6ab67eb502508191a4656c0f7eb48dce',

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
