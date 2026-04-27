export interface Article {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  standfirst: string;
  marqueeText: string;
  image?: string | null;
}

export const articles: Article[] = [
  {
    slug: 'the-real-threat-isnt-replacement',
    title: 'The Real Threat Isn’t Replacement',
    category: 'AI & Design',
    tags: ['AI & Design', 'Career'],
    date: 'April 8, 2026',
    standfirst:
      'The actual threat isn’t that AI replaces designers. It’s more specific, more immediate, and almost nobody is talking about it: the junior role that used to mean “write features” is compressing. The senior role that means “decide what to build and why” is not.',
    marqueeText: 'The threat isn’t replacement. ⚠️ It’s irrelevance at the execution layer while the judgment layer goes unfilled. 🎯',
    image: null,
  },
  {
    slug: 'empty-states-are-not-one-thing',
    title: 'Empty States Are Not One Thing',
    category: 'Design Systems',
    tags: ['Design Systems', 'Patterns'],
    date: 'April 1, 2026',
    standfirst:
      'Open almost any design system documentation and find the empty state component. It will have a spot illustration, a headline, a short body copy, and maybe a call-to-action button. One component. One pattern. This is the problem.',
    marqueeText: 'An empty state is not a gap to fill. 🫙 It\'s a moment to orient. 🧭',
    image: null,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
