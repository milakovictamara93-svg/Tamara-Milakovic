import RevealOnScroll from '@/components/RevealOnScroll';
import { WorkflowWinsVisual, FitVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        I&rsquo;ve tested a lot of AI tools in the last two years. Most of them don&rsquo;t save
        time. They create a different kind of work: prompt writing, output reviewing,
        direction-correcting, and explaining to stakeholders why the AI-generated thing isn&rsquo;t
        quite right. The overhead is real.
      </p>

      <p>
        But some things actually work. Not in the &ldquo;this will change everything&rdquo; sense
        that every tool launch promises &mdash; in the sense that I now do them this way and
        wouldn&rsquo;t go back.
      </p>

      <p>Here&rsquo;s what&rsquo;s actually useful, and where it reliably wastes your time.</p>

      <hr className={styles.divider} />

      <p>
        Research synthesis is genuinely faster with AI. Feeding twenty user interview transcripts
        into a language model and asking it to surface themes, contradictions, and unresolved
        questions compresses two weeks of synthesis work into two to three days. The researcher
        validates AI-generated themes rather than creating them from scratch. The important caveat:
        AI will occasionally hallucinate a pattern that isn&rsquo;t there, or flatten a nuanced
        finding into something neater than the data supports. Your job shifts from synthesis to
        verification &mdash; which is faster, but requires you to stay critical rather than trusting
        the output.
      </p>

      <p>
        Generating quantity at the early stage is also genuinely useful. When you need ten layout
        directions to show that you&rsquo;ve explored the space, AI produces them fast. When you
        need five versions of a microcopy line to test in research, AI produces them in seconds.
        The output is rarely what you ship. The value is the exploration that would have taken a
        day now taking twenty minutes &mdash; leaving more time for the judgment work of selecting
        and refining.
      </p>

      <p>
        Writing first drafts of documentation, design principles, and annotation copy is another
        real win. AI produces serviceable first drafts that you edit into your voice. That&rsquo;s
        faster than starting from a blank page, and the editing process is often where clarity
        emerges anyway.
      </p>

      <RevealOnScroll><WorkflowWinsVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Using AI for anything requiring precision or specificity early in a project wastes time.
        AI has no access to your users, your product context, your design system, your business
        constraints, or the seventeen conversations that shaped this brief. It generates
        plausible-looking outputs that look more informed than they are. The time you spend
        directing, correcting, and restarting often exceeds what you&rsquo;d have spent starting
        from scratch with your actual knowledge.
      </p>

      <p>
        Generating UI in production contexts is consistently slower than designing it yourself. The
        outputs drift from your design system, miss interaction context, and create work for the
        developer who has to reconcile them with what actually exists. For early exploration,
        useful. For anything that touches production, not.
      </p>

      <p>
        Treating AI output as a starting point when it should be a direction-setter is the most
        common mistake. Taking an AI-generated layout and trying to iterate from it anchors you to
        the AI&rsquo;s assumptions. Better to use AI to generate options, extract the principle
        behind the ones that feel right, and build from that principle in your own design
        environment.
      </p>

      <hr className={styles.divider} />

      <p>
        AI is most useful when the task is well-defined, the context is available, and speed of
        generation matters more than precision. It is least useful when the task is ambiguous, the
        context lives in your head, and precision matters.
      </p>

      <p>
        Most of the important work in design &mdash; defining the right problem, making the
        judgment call, pushing back on the brief &mdash; falls into the second category. The tools
        help most with the work that was never the hard part.
      </p>

      <p>
        AI assists with wireframe generation, placeholder copy, and user flow mapping. Human-led
        work covers design critique, brand alignment, usability, accessibility, and final
        decision-making. That division isn&rsquo;t a concession &mdash; it&rsquo;s the correct
        allocation.
      </p>

      <RevealOnScroll><FitVisual /></RevealOnScroll>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Startup House (2026).{' '}
            <em>The Future of Product Design: Building AI-Native Digital Services.</em>{' '}
            <a href="https://startup-house.com/blog/future-of-product-design-ai-workflows-2026" target="_blank" rel="noopener noreferrer">
              startup-house.com
            </a>
          </li>
          <li>
            Creative Boom (2024).{' '}
            <em>Special report: how design agencies are actually using AI in 2024.</em>{' '}
            <a href="https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/" target="_blank" rel="noopener noreferrer">
              creativeboom.com
            </a>
          </li>
          <li>
            Standard Beagle Studio (2025).{' '}
            <em>AI-Assisted Design Workflows: A Strategic Guide for Product Teams.</em>{' '}
            <a href="https://standardbeagle.com/ai-assisted-design-workflows/" target="_blank" rel="noopener noreferrer">
              standardbeagle.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
