export interface Article {
  slug: string;
  title: string;
  seoTitle?: string;
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
    slug: 'when-to-standardise-and-when-to-leave-it-alone',
    title: 'When to Standardise and When to Leave It Alone',
    category: 'Design Systems',
    tags: ['Design Systems', 'Process'],
    date: 'May 8, 2026',
    readingTime: 7,
    standfirst:
      "The most dangerous moment in design systems work isn't when the system is too loose. It's when it's too tight. A system that standardises too much produces a quieter, harder-to-diagnose problem: a product that looks consistent but feels wrong.",
    marqueeText: 'Not all variation is drift. 🔀 Some of it is the system doing its job. 🧩',
    image: null,
  },
  {
    slug: 'designing-for-confidence-not-just-clarity',
    title: 'Designing for Confidence, Not Just Clarity',
    category: 'Product Design',
    tags: ['Product Design', 'Process'],
    date: 'May 5, 2026',
    readingTime: 6,
    standfirst:
      "Clarity is the wrong goal. Not because clarity doesn't matter — it does, enormously. But clarity is a threshold, not a destination. Once a user understands what they're looking at, clarity has done its job. What happens next is determined by something clarity alone can't produce.",
    marqueeText: 'Clarity tells users what they\'re looking at. 🔍 Confidence tells them it\'s safe to act. ✅',
    image: null,
  },
  {
    slug: 'the-brief-is-rarely-the-whole-problem',
    title: 'The Brief Is Rarely the Whole Problem',
    category: 'Process',
    tags: ['Process'],
    date: 'May 1, 2026',
    readingTime: 6,
    standfirst:
      "The first brief I ever ignored was the best design decision I made that year. Not ignored carelessly — ignored deliberately, after reading it three times and realising that what it described and what it was actually asking for were two different things.",
    marqueeText: "The brief is the starting point. 📄 The problem is what you find when you look behind it. 🔍",
    image: null,
  },
  {
    slug: 'modal-or-page',
    title: 'Modal or Page: The Question Nobody Asks Before Shipping',
    seoTitle: 'Modal or Page: A Decision Framework for Product Designers',
    category: 'Interaction Design',
    tags: ['Interaction Design', 'Process'],
    date: 'April 28, 2026',
    readingTime: 8,
    standfirst:
      "Every product designer has made this decision dozens of times. Someone says 'let's do it in a modal' or 'this needs its own page.' Nobody asks why. The decision gets made in thirty seconds and shipped six weeks later. Then the complaints come in.",
    marqueeText: "The container should follow the task. 📦 It almost never does. 🧠 Modal, page, or panel — the surface is a choice, not a default.",
    image: null,
  },
  {
    slug: 'loading-states-are-not-one-component',
    title: 'Loading States Are Not One Component',
    seoTitle: 'Loading States Are Not One Component — UX Design Guide',
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'April 24, 2026',
    readingTime: 5,
    standfirst:
      "Every design system has a spinner. Most have added a skeleton screen component at some point. Some have a progress bar. What almost none of them have is a clear decision rule for which one to use when — which means developers reach for whichever is easiest to implement and designers ship whatever ships fastest.",
    marqueeText: "Loading state is not a design afterthought. ⏳ It's the moment the product earns trust — or quietly loses it. 🔒",
    image: null,
  },
  {
    slug: 'form-validation-timing-is-not-a-detail',
    title: 'Form Validation Timing Is Not a Detail',
    seoTitle: 'Form Validation Timing Is Not a Detail — UX Best Practices',
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'April 21, 2026',
    readingTime: 5,
    standfirst:
      "Designers spend hours on the visual design of error messages — the red border, the icon, the copy. They spend almost no time on the question that determines whether those messages help or infuriate: when do they appear?",
    marqueeText: "The error message is the last resort. ⛔ Timing is what determines whether you need one at all. ⏰",
    image: null,
  },
  {
    slug: 'prompting-is-a-design-skill',
    title: 'Prompting Is a Design Skill',
    seoTitle: 'Prompting Is a Design Skill — AI for Product Designers',
    category: 'AI',
    tags: ['AI', 'Process'],
    date: 'April 17, 2026',
    readingTime: 4,
    standfirst:
      "Prompting is the act of translating intent into language precise enough for a system with no context, no taste, and no knowledge of your constraints to produce something useful. That translation is exactly the same cognitive work as writing a good brief or specifying interaction behavior precisely.",
    marqueeText: 'The quality of your output is a direct measure of the clarity of your thinking. 🎯',
    image: null,
  },
  {
    slug: 'the-design-problems-ai-creates',
    title: 'The Design Problems AI Creates',
    category: 'AI',
    tags: ['AI'],
    date: 'April 14, 2026',
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
    tags: ['Design Systems', 'AI'],
    date: 'April 10, 2026',
    readingTime: 4,
    standfirst:
      "Design systems work is the area of design practice most immediately and materially affected by AI — and also the area where the distinction between what AI can do and what it can't matters most.",
    marqueeText: 'AI can read your tokens. 📐 It cannot read the reasoning behind them. 🧩',
    image: null,
  },
  {
    slug: 'what-actually-works-in-ai-design-workflow',
    title: 'What Actually Works in an AI-Assisted Design Workflow',
    category: 'AI',
    tags: ['AI', 'Process'],
    date: 'April 7, 2026',
    readingTime: 4,
    standfirst:
      "I've tested a lot of AI tools in the last two years. Most of them don't save time. But some things actually work — not in the \"this will change everything\" sense, but in the sense that I now do them this way and wouldn't go back.",
    marqueeText: 'AI is a fast generator. ⚡ You are still the only thing with judgment. 🧠',
    image: null,
  },
  {
    slug: 'the-real-threat-isnt-replacement',
    title: "The Real Threat Isn't Replacement",
    category: 'AI',
    tags: ['AI', 'Career'],
    date: 'April 3, 2026',
    readingTime: 3,
    standfirst:
      "The actual threat isn't that AI replaces designers. It's more specific, more immediate, and almost nobody is talking about it: the junior role that used to mean \"write features\" is compressing. The senior role that means \"decide what to build and why\" is not.",
    marqueeText: "The threat isn't replacement. ⚠️ It's irrelevance at the execution layer while the judgment layer goes unfilled. 🎯",
    image: null,
  },
  {
    slug: 'empty-states-are-not-one-thing',
    title: 'Empty States Are Not One Thing',
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'March 31, 2026',
    readingTime: 5,
    standfirst:
      'Open almost any design system documentation and find the empty state component. It will have a spot illustration, a headline, a short body copy, and maybe a call-to-action button. One component. One pattern. This is the problem.',
    marqueeText: 'An empty state is not a gap to fill. 🧙 It\'s a moment to orient. 🧭',
    image: null,
  },
  {
    slug: 'why-user-centered-became-meaningless',
    title: 'Why "User-Centered" Became Meaningless',
    category: 'Process',
    tags: ['Process'],
    date: 'March 27, 2026',
    readingTime: 4,
    standfirst:
      "There's a phrase that appears in almost every UX job description, almost every design principles deck, almost every product strategy doc written in the last decade. User-centered design. It has become so ubiquitous that it functions as wallpaper. Nobody argues against it. Nobody defines it.",
    marqueeText: 'User-centered design is only as meaningful as what it costs you to do it. 💸',
    image: null,
  },
  {
    slug: 'the-portfolio-is-lying-to-you',
    title: 'The Portfolio Is Lying to You',
    category: 'Career',
    tags: ['Career'],
    date: 'March 24, 2026',
    readingTime: 4,
    standfirst:
      "Every UX portfolio tells the same story. The designer received a brief. They empathized with users. They ran research. They found insights. They sketched, then wireframed, then prototyped, then tested. Iteration happened. The solution emerged, elegant and justified. It's a compelling narrative. It's also, almost universally, fiction.",
    marqueeText: 'The case study that admits what went wrong is usually the most credible one in the room. 📋',
    image: null,
  },
  {
    slug: 'when-the-right-design-decision-is-to-do-nothing',
    title: 'When the Right Design Decision Is to Do Nothing',
    category: 'Process',
    tags: ['Process', 'Product Design'],
    date: 'March 20, 2026',
    readingTime: 4,
    standfirst:
      "There's a kind of design work that never makes it into a portfolio. No screens. No deliverables. No artifacts to show. Just the record of something that didn't get built — and the argument made for why it shouldn't.",
    marqueeText: "The best design decision you'll ever make might be the one that leaves no artifact. 🚫",
    image: null,
  },
  {
    slug: 'what-working-cross-functionally-actually-means',
    title: 'What "Working Cross-Functionally" Actually Means',
    category: 'Process',
    tags: ['Process', 'Career'],
    date: 'March 17, 2026',
    readingTime: 4,
    standfirst:
      "Every designer's CV says it. Cross-functional collaboration. Works effectively with engineering, product, and stakeholders. It's become so universal it's stopped meaning anything. The problem isn't that people are lying. It's that there are two completely different things hiding under that phrase — and only one of them is actually hard.",
    marqueeText: "Influence isn't what you say in the room. 🗣️ It's what gets decided differently because you were there. 🎯",
    image: null,
  },
  {
    slug: 'greenfield-work-is-accountability-with-no-precedent',
    title: 'Greenfield Work Is Accountability with No Precedent',
    category: 'Process',
    tags: ['Process', 'Product Design'],
    date: 'March 13, 2026',
    readingTime: 4,
    standfirst:
      "Everyone says they want to work on a blank slate. Build something from scratch. No legacy code, no inherited decisions, no one to blame for the constraints. It sounds like freedom. It isn't. It's accountability with nowhere to hide.",
    marqueeText: "The blank slate isn't a gift. 📄 It's a mandate. 🏗️",
    image: null,
  },
  {
    slug: 'the-brief-is-a-hypothesis',
    title: 'The Brief Is a Hypothesis, Not a Contract',
    category: 'Process',
    tags: ['Process'],
    date: 'March 10, 2026',
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
    date: 'March 6, 2026',
    readingTime: 4,
    standfirst:
      "Every design system post-mortem sounds the same. The components were well-crafted. The documentation was thorough. Someone spent three months building a Figma library with every state, every variant, every edge case covered. And then nobody used it.",
    marqueeText: 'A design system nobody uses is documentation. 📂 A design system that solves the right problem is infrastructure. 🏗️',
    image: null,
  },
  {
    slug: 'the-green-line-going-down',
    title: 'The Green Line Going Down',
    category: 'Product Design',
    tags: ['Product Design'],
    date: 'March 3, 2026',
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
    tags: ['Product Design'],
    date: 'February 27, 2026',
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
