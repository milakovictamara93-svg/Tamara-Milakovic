import RevealOnScroll from '@/components/RevealOnScroll';
import { ArtifactsVisual, FrankensteinVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        Design systems work is the area of design practice most immediately and materially affected
        by AI &mdash; and also the area where the distinction between what AI can do and what it
        can&rsquo;t matters most.
      </p>

      <p>
        The confusion comes from conflating two very different things: generating design system
        artifacts, and making design system decisions. AI can do the first at speed. The second is
        still entirely human work. Conflating them produces systems that look comprehensive but
        don&rsquo;t hold.
      </p>

      <hr className={styles.divider} />

      <p>
        Generating component variants is fast and mostly reliable. If you have an established
        pattern &mdash; a button with five states, a form field with three error conditions &mdash;
        AI can generate all the variants, apply consistent spacing and color tokens, and produce a
        first draft that&rsquo;s 80% of the way to production. The remaining 20% is edge case
        handling, accessibility review, and the judgment call about whether the pattern is actually
        correct. But 80% in twenty minutes is a real efficiency gain.
      </p>

      <p>
        Documentation follows the same pattern. AI writes serviceable first-pass documentation from
        component specifications. The output needs editing &mdash; it tends toward generic
        descriptions that don&rsquo;t explain the why behind a decision &mdash; but it&rsquo;s
        faster than starting from a blank page, and the editing process often surfaces gaps in the
        specification itself.
      </p>

      <p>
        Token naming and organisation is another genuine win. Given a set of design values, AI can
        suggest systematic naming conventions, identify inconsistencies, and propose hierarchies.
        This is tedious, rule-bound work that doesn&rsquo;t benefit from human creativity. AI does
        it reliably.
      </p>

      <RevealOnScroll><ArtifactsVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Deciding what to standardise is not automatable. The hardest question in design systems work
        isn&rsquo;t &ldquo;how do I build this component&rdquo; &mdash; it&rsquo;s &ldquo;should
        this be a component at all.&rdquo; That decision requires understanding which problems
        recur, which variations are genuinely distinct, which patterns are load-bearing, and which
        ones reflect the accumulated drift of a product built by too many people without enough
        shared agreements. AI has no knowledge of your product&rsquo;s history, your team&rsquo;s
        working patterns, or the dynamics that made certain decisions happen the way they did.
      </p>

      <p>
        Defining behavioral standards is also beyond what AI can reliably do. An AI can generate a
        specification for how a dropdown should look. It cannot generate the interaction contract
        that defines how filtering persists across surfaces, how drill interactions escalate, or what
        the empty state means in the context of the specific workflow this component lives inside.
        Those decisions require understanding the product deeply enough to have opinions about it.
      </p>

      <hr className={styles.divider} />

      <p>
        A design system that was generated quickly but not decided carefully produces a specific
        failure: visual consistency without behavioral coherence. The components look like they
        belong together. The interactions don&rsquo;t. Users experience the surface consistency as a
        product that looks polished but feels unreliable &mdash; because the visual layer was
        standardised and the behavioral layer wasn&rsquo;t.
      </p>

      <p>
        This is the Frankenstein problem &mdash; not visible components drifting, but invisible
        behavioral decisions made independently across modules. AI would have made the visual drift
        faster to fix and entirely missed the underlying problem.
      </p>

      <RevealOnScroll><FrankensteinVisual /></RevealOnScroll>

      <p>
        The lesson is not to avoid AI in design systems work. It&rsquo;s to be clear about what
        you&rsquo;re using it for. Generating artifacts: yes. Making the decisions that determine
        whether those artifacts are correct: no.
      </p>

      <p>
        AI can build the system faster. It cannot tell you what the system should be.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Standard Beagle Studio (2025).{' '}
            <em>AI-Assisted Design Workflows: A Strategic Guide for Product Teams.</em>{' '}
            <a href="https://standardbeagle.com/ai-assisted-design-workflows/" target="_blank" rel="noopener noreferrer">
              standardbeagle.com
            </a>
          </li>
          <li>
            Figma (2026).{' '}
            <em>How To Use AI for Product Design: 7 Use Cases.</em>{' '}
            <a href="https://www.figma.com/resource-library/ai-for-product-design/" target="_blank" rel="noopener noreferrer">
              figma.com
            </a>
          </li>
          <li>
            Netguru (2025).{' '}
            <em>Design System Adoption Pitfalls.</em>{' '}
            <a href="https://www.netguru.com/blog/design-system-adoption-pitfalls" target="_blank" rel="noopener noreferrer">
              netguru.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
