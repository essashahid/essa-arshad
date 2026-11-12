import type { APIRoute } from 'astro';
import { site, isPlaceholderUrl } from '../data/site';
import { home } from '../data/home';
import { resume } from '../data/resume';
import { getProjects, projectRoute } from '../lib/projects';
import { absoluteUrl } from '../lib/paths';

/** Plain-text summary of the site for AI agents. Built from the same data as the pages. */
export const GET: APIRoute = async ({ site: origin }) => {
  const url = (path: string) => absoluteUrl(path, origin);
  const projects = await getProjects();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.role} at ${site.employer.name}. ${home.intro}`,
    '',
    `${resume.headline}. ${resume.summary}`,
    '',
    '## Currently building',
    '',
    ...home.building.items.map((item) => `- ${item.name}: ${item.detail}`),
    '',
    `Now: ${home.now.text}`,
    '',
    '## Projects',
    '',
    ...projects.map((project) => {
      const { title, summary, status, stack, liveUrl } = project.data;
      const details = [
        `Status: ${status}`,
        stack.length ? `Stack: ${stack.join(', ')}` : '',
        liveUrl ? `Live: ${liveUrl}` : '',
      ].filter(Boolean);
      return `- [${title}](${url(projectRoute(project))}): ${summary} ${details.join('. ')}.`;
    }),
    '',
    '## Experience',
    '',
    ...resume.experience.map((job) => {
      const detail = job.bullets ? job.bullets.join('; ') : (job.text ?? '');
      return `- ${job.role}, ${job.company} (${job.period}): ${detail}`;
    }),
    '',
    '## Education',
    '',
    ...resume.education.map((item) => `- ${item.title}, ${item.period}. ${item.detail}`),
    '',
    '## Pages',
    '',
    `- [Home](${url('/')})`,
    `- [Résumé](${url('/resume')})`,
    `- [Résumé (PDF)](${url('/resume.pdf')})`,
    '',
    '## Contact',
    '',
    `- Email: ${site.email}`,
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    ...(isPlaceholderUrl(site.upworkUrl) ? [] : [`- Upwork: ${site.upworkUrl}`]),
    ...(isPlaceholderUrl(site.bookingUrl) ? [] : [`- Book a call: ${site.bookingUrl}`]),
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
