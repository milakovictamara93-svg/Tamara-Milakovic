import RevealOnScroll from '@/components/RevealOnScroll';
import { PromptAnatomyVisual, ThinkingShiftVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        There&rsquo;s a version of this conversation that goes: prompting is just writing better
        instructions. Anyone can do it. It&rsquo;s not really a skill.
      </p>

      <p>
        This is wrong, and it&rsquo;s wrong in a way that matters.
      </p>

      <p>
        Prompting is the act of translating intent into language precise enough for a system with no
        context, no taste, and no knowledge of your constraints to produce something useful. That
        translation &mdash; between what you mean and what a model can act on &mdash; is exactly the
        same cognitive work as writing a good brief, defining a design problem, or specifying
        interaction behavior clearly enough that an engineer can build it without a meeting.
      </p>

      <p>
        The designers who are good at AI prompting are, almost without exception, the designers who
        were already good at specifying problems precisely. AI prompting for designers is not a new
        skill &mdash; it&rsquo;s an existing one running on a new surface.
      </p>

      <hr className={styles.divider} />

      <p>
        The single most important thing is context. AI models have no knowledge of your product,
        your users, your constraints, or what you tried last week that didn&rsquo;t work. Every
        prompt that produces weak output is weak because the model was missing context that felt
        obvious to you.
      </p>

      <p>
        A prompt that says &ldquo;write error copy for an empty state&rdquo; will produce generic
        output. A prompt that says &ldquo;write error copy for an analytics dashboard used by
        compliance analysts at enterprise companies, where the empty state occurs because a server
        failed to return data &mdash; the tone should be direct and professional, not reassuring or
        playful, the copy should acknowledge what happened, rule out user error, and give a specific
        next action&rdquo; will produce something usable.
      </p>

      <p>
        The difference isn&rsquo;t creativity. It&rsquo;s specificity. And specificity is a design
        skill.
      </p>

      <RevealOnScroll><PromptAnatomyVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Good prompting is iterative &mdash; not because AI output is bad, but because you rarely
        know exactly what you want until you see what you don&rsquo;t want. The first output defines
        the problem more precisely. The second prompt is more informed. By the third, you&rsquo;re
        refining rather than redirecting.
      </p>

      <p>
        The designers who struggle with AI tools tend to treat prompting as a one-shot task: write
        the prompt, get the output, judge it as success or failure. The designers who get value out
        of them treat it as a conversation. Start with a broad task, review the output, and adjust
        one variable at a time. This experimental mindset echoes the design process &mdash; sketch,
        test, iterate.
      </p>

      <hr className={styles.divider} />

      <p>
        Here&rsquo;s the part that matters for how you develop this skill: the thinking doesn&rsquo;t
        go away. It moves earlier.
      </p>

      <p>
        When you design without AI, the thinking happens during the making. You discover what you
        mean by trying things, seeing what&rsquo;s wrong, and adjusting. The artifact and the
        thinking co-evolve.
      </p>

      <p>
        When you design with AI, the thinking has to happen before the making. If you don&rsquo;t
        know what you want before you prompt, the output will show you that immediately. The model
        has no intuition to fall back on. It needs your intent, expressed precisely, before it can
        be useful.
      </p>

      <p>
        This is why prompting correlates with seniority. Senior designers have more clearly
        articulated mental models of what good looks like &mdash; which means they can specify their
        intent more precisely &mdash; which means their prompts produce better output. It&rsquo;s
        not magic. It&rsquo;s the skill they&rsquo;ve been building for years applied to a new
        surface.
      </p>

      <RevealOnScroll><ThinkingShiftVisual /></RevealOnScroll>

      <p>
        The practical upshot: if you want to get better at prompting, get better at specifying
        design problems. Write clearer briefs. Define constraints more precisely. Name the things
        you care about before you open a tool. The prompting follows.
      </p>

      <p>
        The quality of your output is a direct measure of the clarity of your thinking.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            McKinsey &amp; Company (2025).{' '}
            <em>The state of AI in 2025.</em>{' '}
            <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer">
              mckinsey.com
            </a>
          </li>
          <li>
            UOC (2025).{' '}
            <em>How AI is changing professions like design, art, and the media.</em>{' '}
            <a href="https://www.uoc.edu/en/news/2025/ai-could-automate-creative-professions" target="_blank" rel="noopener noreferrer">
              uoc.edu
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
