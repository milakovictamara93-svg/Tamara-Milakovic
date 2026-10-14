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
    readingTime: 2,
    standfirst:
      "I found a bug in a colleague's design. Then I found out the bug was me.",
    marqueeText: 'A system that standardises everything is as broken as one that standardises nothing. 🧩 The value is in knowing the difference. 🔀',
    image: null,
  },
  {
    slug: 'clarity-was-never-the-finish-line',
    title: "Clarity Was Never the Finish Line",
    category: 'Product Design',
    tags: ['Product Design', 'Process'],
    date: 'May 5, 2026',
    readingTime: 2,
    standfirst:
      "Our users understood every chart perfectly, and then went and did absolutely nothing with it.",
    marqueeText: 'Clarity tells users what they\'re looking at. 🔍 Confidence tells them it\'s safe to act. ✅',
    image: null,
  },
  {
    slug: 'the-brief-is-rarely-the-whole-problem',
    title: 'The Brief Is Rarely the Whole Problem',
    category: 'Process',
    tags: ['Process'],
    date: 'May 1, 2026',
    readingTime: 2,
    standfirst:
      "The best design decision I made that year was ignoring a brief. I'd like the record to show I read it three times first.",
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
    readingTime: 2,
    standfirst:
      "Someone says \"let's just do it in a modal\" and nobody asks why. I say it myself, way too often.",
    marqueeText: "The container should follow the task. 📦",
    image: null,
  },
  {
    slug: 'please-dont-let-it-sit-at-99',
    title: "Please Don’t Let It Sit at 99%",
    seoTitle: 'Loading States Are Not One Component — UX Design Guide',
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'April 24, 2026',
    readingTime: 2,
    standfirst:
      "Our table loaded twenty rows behind a skeleton of three, and the whole page jumped.",
    marqueeText: "The best loading state is the one nobody notices. ⏳",
    image: null,
  },
  {
    slug: 'when-should-a-form-tell-you-youre-wrong',
    title: "When Should a Form Tell You You’re Wrong?",
    seoTitle: 'Form Validation Timing Is Not a Detail — UX Best Practices',
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'April 21, 2026',
    readingTime: 1,
    standfirst:
      "The form told me my email was invalid before I'd finished typing it. Technically, it was right.",
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
    readingTime: 2,
    standfirst:
      "Most people who want better prompts actually need a better brief.",
    marqueeText: 'The quality of your output is a direct measure of the clarity of your thinking. 🎯',
    image: null,
  },
  {
    slug: 'the-design-problems-ai-creates',
    title: 'The Design Problems AI Creates',
    category: 'AI',
    tags: ['AI'],
    date: 'April 14, 2026',
    readingTime: 2,
    standfirst:
      "The AI output that worries me most is the stuff that looks finished.",
    marqueeText: 'AI generates confidence faster than it generates understanding. ⚡ Know the difference. 🧠',
    image: null,
  },
  {
    slug: 'ai-and-design-systems',
    title: 'AI and Design Systems',
    category: 'Design Systems',
    tags: ['Design Systems', 'AI'],
    date: 'April 10, 2026',
    readingTime: 2,
    standfirst:
      "AI can give you a beautifully consistent design system that still behaves like several different products.",
    marqueeText: "AI can build the system faster. 📐 It cannot tell you what the system should be. 🧩",
    image: null,
  },
  {
    slug: 'what-actually-works-in-ai-design-workflow',
    title: 'What Actually Works in an AI-Assisted Design Workflow',
    category: 'AI',
    tags: ['AI', 'Process'],
    date: 'April 7, 2026',
    readingTime: 2,
    standfirst:
      "I've spent two years testing AI tools. Most of them made my week longer.",
    marqueeText: "AI is best at the work that was never the hard part. ⚡",
    image: null,
  },
  {
    slug: 'the-real-threat-isnt-replacement',
    title: "The Real Threat Isn't Replacement",
    category: 'AI',
    tags: ['AI', 'Career'],
    date: 'April 3, 2026',
    readingTime: 2,
    standfirst:
      "Everyone's arguing about whether AI will replace designers. Meanwhile, the junior job is disappearing.",
    marqueeText: "The question is whether your skills get more valuable as everything around them gets cheaper. ⚠️",
    image: null,
  },
  {
    slug: 'five-ways-a-screen-can-be-empty',
    title: "Five Ways a Screen Can Be Empty",
    category: 'Design Systems',
    tags: ['Design Systems'],
    date: 'March 31, 2026',
    readingTime: 2,
    standfirst:
      "Most design systems have one empty state component, and it's usually the wrong one.",
    marqueeText: "An empty screen still has a job to do. 🧙",
    image: null,
  },
  {
    slug: 'why-user-centered-became-meaningless',
    title: 'Why "User-Centered" Became Meaningless',
    category: 'Process',
    tags: ['Process'],
    date: 'March 27, 2026',
    readingTime: 1,
    standfirst:
      "Every job description wants a user-centered designer. Nobody can tell me what that means.",
    marqueeText: 'User-centered design is only as meaningful as what it costs you to do it. 💸',
    image: null,
  },
  {
    slug: 'the-portfolio-is-lying-to-you',
    title: 'The Portfolio Is Lying to You',
    category: 'Career',
    tags: ['Career'],
    date: 'March 24, 2026',
    readingTime: 1,
    standfirst:
      "Every portfolio tells the same tidy story, and almost none of them happened that way.",
    marqueeText: 'The case study that admits what went wrong is usually the most credible one in the room. 📋',
    image: null,
  },
  {
    slug: 'when-the-right-design-decision-is-to-do-nothing',
    title: 'When the Right Design Decision Is to Do Nothing',
    category: 'Process',
    tags: ['Process', 'Product Design'],
    date: 'March 20, 2026',
    readingTime: 1,
    standfirst:
      "Some of my best design work has no screens. It's the record of something I talked people out of building.",
    marqueeText: "The best design decision you'll ever make might be the one that leaves no artifact. 🚫",
    image: null,
  },
  {
    slug: 'what-working-cross-functionally-actually-means',
    title: 'What "Working Cross-Functionally" Actually Means',
    category: 'Process',
    tags: ['Process', 'Career'],
    date: 'March 17, 2026',
    readingTime: 2,
    standfirst:
      "Every designer's CV says \"cross-functional collaboration\". Most of them mean they went to the meetings.",
    marqueeText: "Influence is measured by what got decided differently because you were there. 🗣️",
    image: null,
  },
  {
    slug: 'everyone-wants-a-blank-slate-until-they-get-one',
    title: "Everyone Wants a Blank Slate Until They Get One",
    category: 'Process',
    tags: ['Process', 'Product Design'],
    date: 'March 13, 2026',
    readingTime: 2,
    standfirst:
      "I spent the first few weeks of a brand-new Pax8 product without designing a single screen.",
    marqueeText: "On a blank slate, every decision you make becomes the rule. 📄",
    image: null,
  },
  {
    slug: 'before-you-open-figma-ask-how-anyone-knows',
    title: "Before You Open Figma, Ask How Anyone Knows",
    category: 'Process',
    tags: ['Process'],
    date: 'March 10, 2026',
    readingTime: 1,
    standfirst:
      "The brief says users are dropping off in onboarding. It doesn't say how anyone knows that.",
    marqueeText: "Treat the brief as a first guess, then go and check it. 📋",
    image: null,
  },
  {
    slug: 'nobody-used-the-perfect-component-library',
    title: "Nobody Used the Perfect Component Library",
    category: 'Design Systems',
    tags: ['Design Systems', 'Process'],
    date: 'March 6, 2026',
    readingTime: 2,
    standfirst:
      "Every design system post-mortem sounds the same, and it's rarely about the components.",
    marqueeText: 'A design system nobody uses is documentation. 📂 A design system that solves the right problem is infrastructure. 🏗️',
    image: null,
  },
  {
    slug: 'the-green-line-going-down',
    title: 'The Green Line Going Down',
    category: 'Product Design',
    tags: ['Product Design'],
    date: 'March 3, 2026',
    readingTime: 2,
    standfirst:
      "The green line going down in your sustainability report is rarely telling you what you think.",
    marqueeText: "A chart that hides its uncertainty is just a mood. 📉",
    image: null,
  },
  {
    slug: 'why-your-dashboard-might-be-making-things-harder',
    title: 'Why Your Dashboard Might Be Making Things Harder',
    category: 'Product Design',
    tags: ['Product Design'],
    date: 'February 27, 2026',
    readingTime: 2,
    standfirst:
      "We tested the cleanest, airiest table layout against denser ones. The pretty one lost.",
    marqueeText: 'Legibility is not the same as simplicity. 📊 Know which one you need. 🧠',
    image: null,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
