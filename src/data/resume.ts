/** Copy for the résumé page. */

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** Use `bullets` for a list or `text` for a single line. */
  bullets?: string[];
  text?: string;
  tags?: string[];
}

export interface ResumeProject {
  title: string;
  description: string;
  /**
   * Slug of the matching entry in src/content/projects. The row links to that
   * project page, and disappears if the project is hidden.
   */
  slug?: string;
  /** Full URL. Wins over the project page when set. */
  href?: string;
  /** Accessible name for the thumbnail link. */
  label: string;
}

export interface Education {
  period: string;
  title: string;
  detail: string;
}

export const resume = {
  pageTitle: 'Essa Arshad — résumé',
  headline: 'Software Engineer, AI Agents',
  summary: 'Production AI agents, with a human in the loop.',
  pdf: { href: '/resume.pdf', label: 'Full résumé (PDF)' },

  experience: [
    {
      period: 'Oct 2025 — Now',
      role: 'Software Engineer',
      company: 'ImportYeti',
      companyUrl: 'https://www.importyeti.com',
      bullets: [
        'AI ops platform on OpenClaw and the Claude API, with a CRM whose automated outreach grew API revenue 15%',
        'Human-in-the-loop agent review, tracing 3,000+ runs a month in Langfuse',
        'Tariff revision tracker that cut research time 60% and classification errors 30%',
      ],
      tags: ['Claude API', 'OpenClaw', 'Langfuse', 'MCP'],
    },
    {
      period: 'Sep — Oct 2025',
      role: 'Software Engineer Intern',
      company: 'Metal',
      text: "Built or redesigned 12 Webflow pages for the product's public launch.",
    },
    {
      period: 'Jun — Aug 2023',
      role: 'Software Engineer Intern',
      company: 'Arbisoft',
      text: '10+ production REST APIs across three microservices; backend test coverage raised to 85%.',
      tags: ['Django REST', 'Python'],
    },
  ] satisfies Experience[] as Experience[],

  projects: [
    {
      title: 'K-12 District Scraper',
      description: '500 districts, sourced and reviewed',
      slug: 'k12-district-scraper',
      label: 'K-12 District Scraper case study',
    },
    {
      title: 'PSX Research Copilot',
      description: 'Portfolio tracking with a Claude copilot',
      slug: 'psx-research-copilot',
      href: 'https://psx-portfolio-app.vercel.app',
      label: 'PSX Research Copilot live app',
    },
    {
      title: 'DismissalIQ',
      description: 'ODI wicket prediction from 3,300+ matches, 75% top-2 accuracy',
      slug: 'dismissaliq',
      label: 'DismissalIQ project',
    },
    {
      title: 'EvidenceOps',
      description: 'Document extraction with provenance',
      slug: 'evidenceops',
      label: 'EvidenceOps project',
    },
  ] satisfies ResumeProject[] as ResumeProject[],

  education: [
    {
      period: 'May 2025',
      title: 'BS Computer Science · LUMS',
      detail: 'GPA 3.56',
    },
  ] satisfies Education[] as Education[],
};
