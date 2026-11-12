import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './paths';

export type Project = CollectionEntry<'projects'>;

/** Every visible project, in `order`. Projects with `hidden: true` are left out everywhere. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.hidden);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Projects shown as tiles on the home page. */
export const inGrid = (project: Project): boolean => project.data.showInGrid;

/** Site-relative path to a project page, without the base path. */
export const projectRoute = (project: Project): string => `/projects/${project.data.slug}`;

/** Link to a project page, including the base path. */
export const projectPath = (project: Project): string => withBase(projectRoute(project));

const formatDate = (date: Date, month: 'short' | 'long'): string =>
  date.toLocaleDateString('en-US', { month, year: 'numeric', timeZone: 'UTC' });

/** Right-hand caption on a home tile: "Sep 2026" once shipped, otherwise the status. */
export function tileCaption(project: Project): string {
  const { status, date } = project.data;
  return status === 'Shipped' && date ? formatDate(date, 'short') : status;
}

/** Line under the case study title, e.g. "Sample build · September 2026". */
export function caseStudySubtitle(project: Project): string {
  const { status, date, isSampleBuild, subtitle } = project.data;
  if (subtitle) return subtitle;
  const lead = isSampleBuild ? 'Sample build' : status;
  if (date) return `${lead} · ${formatDate(date, 'long')}`;
  // Nothing has shipped yet, so there is no date to show.
  if (status === 'In progress') return lead;
  return `${lead} · [DATE]`;
}

/** "1:23" or "1:02:03" to seconds. */
export function timestampToSeconds(timestamp: string): number {
  return timestamp
    .split(':')
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);
}
