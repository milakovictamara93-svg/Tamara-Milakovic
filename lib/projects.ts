export interface Project {
  slug: string;
  title: string;
  /** Shorter title for tight spaces like the footer */
  shortTitle: string;
  description: string;
  tags: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'pax8',
    title: 'Pax8: Building a Monetisation System from a PowerPoint Slide and a Prayer',
    shortTitle: 'Pax8: PowerPoint Slide and a Prayer',
    description: 'How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.',
    tags: 'B2B SaaS · Monetisation · 0→1',
    image: '/work/Pax8-hero.jpg',
    imageAlt: 'Pax8',
  },
  {
    slug: 'scaler',
    title: 'Scaler: When the Frankenstein Problem Is Partly Your Fault',
    shortTitle: 'Scaler: When the Problem Is Your Fault',
    description: 'A platform grew faster than its rules. Some of the mess was mine, so I built the system that stopped it.',
    tags: 'ESG Analytics · Design Systems · SaaS',
    image: '/work/scaler-hero.jpg',
    imageAlt: 'Scaler dashboard',
  },
  {
    slug: 'beyond',
    title: 'Beyond the Legacy: Restyling a Platform Without Losing It',
    shortTitle: 'Beyond the Legacy',
    description: 'A platform restyle that 85% of users switched to before anyone made them.',
    tags: 'B2B SaaS',
    image: '/work/Beyond hero.jpg',
    imageAlt: 'Beyond the Legacy',
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
