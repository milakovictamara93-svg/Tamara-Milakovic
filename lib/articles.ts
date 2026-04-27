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
