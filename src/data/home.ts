import { site } from './site';

/** Copy for the home page. Links and names come from `site.ts`. */
export interface BuildingItem {
  name: string;
  detail: string;
  /** Optional link on the name. */
  href?: string;
}

const buildingItems: BuildingItem[] = [
  { name: 'Agent review queue', detail: '3,000+ traced runs a month' },
  { name: 'Outreach CRM', detail: 'API revenue up 15%' },
  // `href` turns the name into a link. This one uses `pluginUrl` from site.ts.
  { name: 'ChatGPT plugin', detail: "Live in ChatGPT's app directory", href: site.pluginUrl },
];

export const home = {
  intro:
    'I build AI agents that run in production, with a person approving what matters. Full-time at ImportYeti, and a few freelance builds on the side.',

  /** Rendered as: "Find me on GitHub, LinkedIn or Upwork." */
  findMe: { lead: 'Find me on', github: 'GitHub', linkedin: 'LinkedIn', upwork: 'Upwork' },

  building: {
    heading: 'Building',
    items: buildingItems,
  },

  projects: { heading: 'Projects', alsoLabel: 'Also:' },

  now: {
    heading: 'Now',
    text: 'Recording demos and building an OpenClaw reference deployment.',
  },

  /** Rendered as: "<email> or book a call. Full history in my résumé." */
  connect: {
    heading: 'Connect',
    or: 'or',
    bookLabel: 'book a call',
    resumeLead: 'Full history in my',
    resumeLabel: 'résumé',
  },
};
