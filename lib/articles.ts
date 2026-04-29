export interface Article {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: number;
  standfirst: string;
  marqueeText: string;
  image?: string | null;
}

export const articles: Article[] = [
  {
    slug: 'prompting-is-a-design-skill',
    title: 'Prompting Is a Design Skill',
    category: 'AI & Design',
    tags: ['AI & Design', 'Craft'],
    date: 'May 6, 2026',
    readingTime: 4,
    standfirst:
      "Prompting is the act of translating intent into language precise enough for a system with no context, no taste, and no knowledge of your constraints to produce something useful. That translation is exactly the same cognitive work as writing a good brief or specifying interaction behavior precisely.",
    marqueeText: 'The quality of your output is a direct measure of the clarity of your thinking. 🎯',
    image: null,
  },
  {
    slug: 'the-design-problems-ai-creates',
    title: 'The Design Problems AI Creates',
    category: 'AI & Design',
    tags: ['AI & Design', 'Research'],
    date: 'April 29, 2026',
    readingTime: 5,
    standfirst:
      "Most articles about AI and design focus on what AI fixes. This one is about what it breaks — the problems that are real, underexamined, and increasingly showing up in products built with good intentions and the wrong assumptions.",
    marqueeText: 'AI generates confidence faster than it generates understanding. ⚡ Know the difference. 🧠',
    image: null,
  },
  {
    slug: 'ai-and-design-systems',
    title: 'AI and Design Systems',
    category: 'Design Systems',
    tags: ['Design Systems', 'AI & Design'],
    date: 'April 22, 2026',
    readingTime: 4,
    standfirst:
      "Design systems work is the area of design practice most immediately and materially affected by AI — and also the area where the distinction between what AI can do and what it can't matters most.",
    marqueeText: 'AI can read your tokens. 📐 It cannot read the reasoning behind them. 🧩',
    image: null,
  },
  {
    slug: 'what-actually-works-in-ai-design-workflow',
    title: 'What Actually Works in an AI-Assisted Design Workflow',
    category: 'AI & Design',
    tags: ['AI & Design', 'Workflow'],
    date: 'April 15, 2026',
    readingTime: 4,
    standfirst:
      "I've tested a lot of AI tools in the last two years. Most of them don't save time. But some things actually work — not in the “this will change everything” sense, but in the sense that I now do them this way and wouldn't go back.",
    marqueeText: 'AI is a fast generator. ⚡ You are still the only thing with judgment. 🧠',
    image: null,
  },
  {
    slug: 'the-real-threat-isnt-replacement',
    title: 'The Real Threat Isn’t Replacement',
    category: 'AI & Design',
    tags: ['AI & Design', 'Career'],
    date: 'April 8, 2026',
    readingTime: 3,
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
    readingTime: 5,
    standfirst:
      'Open almost any design system documentation and find the empty state component. It will have a spot illustration, a headline, a short body copy, and maybe a call-to-action button. One component. One pattern. This is the problem.',
    marqueeText: 'An empty state is not a gap to fill. 🧙 It\'s a moment to orient. 🧭',
    image: null,
  },
  {
    slug: 'what-working-cross-functionally-actually-means',
    title: 'What “Working Cross-Functionally” Actually Means',
    category: 'Design Process',
    tags: ['Design Process', 'Leadership'],
    date: 'February 25, 2026',
    readingTime: 4,
    standfirst:
      "Every designer's CV says it. Cross-functional collaboration. Works effectively with engineering, product, and stakeholders. It's become so universal it's stopped meaning anything. The problem isn't that people are lying. It's that there are two completely different things hiding under that phrase — and only one of them is actually hard.",
    marqueeText: "Influence isn't what you say in the room. 🗣️ It's what gets decided differently because you were there. 🎯",
    image: null,
  },
  {
    slug: 'greenfield-work-is-accountability-with-no-precedent',
    title: 'Greenfield Work Is Accountability with No Precedent',
    category: 'Design Process',
    tags: ['Design Process', 'Product Design'],
    date: 'February 18, 2026',
    readingTime: 4,
    standfirst:
      "Everyone says they want to work on a blank slate. Build something from scratch. No legacy code, no inherited decisions, no one to blame for the constraints. It sounds like freedom. It isn't. It's accountability with nowhere to hide.",
    marqueeText: "The blank slate isn't a gift. 📄 It's a mandate. 🏗️",
    image: null,
  },
  {
    slug: 'the-brief-is-a-hypothesis',
    title: 'The Brief Is a Hypothesis, Not a Contract',
    category: 'Design Process',
    tags: ['Design Process', 'Research'],
    date: 'March 11, 2026',
    readingTime: 4,
    standfirst:
      "Someone hands you a brief. It says: redesign the onboarding flow. Users are dropping off. Most designers open Figma. The smarter move is to pause for thirty seconds and ask: how do we know that's the problem?",
    marqueeText: 'The brief is where the work begins. 📋 Not where the thinking ends. 🧠',
    image: null,
  },
  {
    slug: 'design-systems-dont-fail-because-of-bad-components',
    title: "Design Systems Don't Fail Because of Bad Components",
    category: 'Design Systems',
    tags: ['Design Systems', 'Process'],
    date: 'March 4, 2026',
    readingTime: 4,
    standfirst:
      "Every design system post-mortem sounds the same. The components were well-crafted. The documentation was thorough. Someone spent three months building a Figma library with every state, every variant, every edge case covered. And then nobody used it.",
    marqueeText: 'A design system nobody uses is documentation. 📂 A design system that solves the right problem is infrastructure. 🏗️',
    image: null,
  },
  {
    slug: 'the-green-line-going-down',
    title: 'The Green Line Going Down',
    category: 'Data Visualization',
    tags: ['Data Visualization', 'Ethics'],
    date: 'March 25, 2026',
    readingTime: 5,
    standfirst:
      "There's a chart in almost every sustainability report. You've seen it. A line, trending downward. Usually green. Sometimes a leaf somewhere nearby. It looks like evidence. It isn't, necessarily.",
    marqueeText: 'Design the uncertainty, not just the trend. 📉',
    image: null,
  },
  {
    slug: 'why-your-dashboard-might-be-making-things-harder',
    title: 'Why Your Dashboard Might Be Making Things Harder',
    category: 'Product Design',
    tags: ['Product Design', 'Research'],
    date: 'March 18, 2026',
    readingTime: 5,
    standfirst:
      "Picture a spreadsheet. Hundreds of rows. Emissions data, supplier records, compliance deadlines. A sustainability analyst opens it every morning and has to find something specific — a missing disclosure, a number that doesn't add up, a supplier who hasn't responded in six weeks.",
    marqueeText: 'Legibility is not the same as simplicity. 📊 Know which one you need. 🧠',
    image: null,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
