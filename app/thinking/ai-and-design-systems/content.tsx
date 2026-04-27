import RevealOnScroll from '@/components/RevealOnScroll';
import { ReadabilityVisual, LinterVsGeneratorVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        Design systems exist to create consistency. AI generates from patterns. The instinct to
        combine them makes sense: feed the system in, get consistent outputs. Most teams doing this
        are finding it more complicated than it looks &mdash; and the complication is almost always
        the same one.
      </p>

      <p>
        The surface-level promise works. If your system has well-defined tokens &mdash; spacing,
        color, typography &mdash; AI can generate components that respect those tokens. If you have
        component documentation written in plain language, AI can answer &ldquo;how should I use
        this&rdquo; with reasonable accuracy. These are real gains, mostly in the direction of
        developer productivity.
      </p>

      <p>
        Where it breaks is rationale. Design systems don&rsquo;t just contain rules. They contain
        the reasoning behind those rules: why this spacing scale and not a different one, why this
        component exists as one thing and not two, why this pattern is deprecated and what replaced
        it. That reasoning is rarely documented. It lives in the heads of the people who made the
        decisions, in Slack threads that are three years old, in the memory of a conversation that
        no one wrote down.
      </p>

      <RevealOnScroll><ReadabilityVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        AI has no access to any of that. It works from what&rsquo;s written. If your design system
        documentation is sparse, AI fills the gaps with plausible defaults that may or may not match
        your actual decisions. The result is output that looks consistent with the tokens but makes
        choices the system would have rejected &mdash; and because it looks finished, nobody catches
        it until it&rsquo;s in production.
      </p>

      <p>
        Design system drift isn&rsquo;t new, but AI accelerates the mechanism. Before AI, drift
        happened because teams moved fast and didn&rsquo;t check. Now it happens because AI
        generates confidently from incomplete information and the output looks done enough that
        review gets skipped. The speed is a feature. The confidence is a problem.
      </p>

      <p>
        The practical implication is that the value of a design system increases with the quality of
        its documentation &mdash; not the quantity, the quality. Documentation that explains
        rationale, captures exceptions, and describes the edge cases where the rule doesn&rsquo;t
        apply is what makes AI output more trustworthy. That documentation is expensive to produce.
        Most systems don&rsquo;t have it, and AI generation is a strong incentive to keep not having it.
      </p>

      <hr className={styles.divider} />

      <p>
        The better use of AI with design systems is as a linter rather than a generator. Using AI to
        check new components against system rules &mdash; flag spacing that&rsquo;s off-token, catch
        color usage that violates contrast requirements, surface component patterns that duplicate
        something that already exists &mdash; is a different kind of task. It doesn&rsquo;t require
        the system to explain its reasoning. It just requires the system to have explicit rules,
        which most systems do.
      </p>

      <RevealOnScroll><LinterVsGeneratorVisual /></RevealOnScroll>

      <p>
        The linter use case also compounds in a way that generation doesn&rsquo;t. Catching drift
        early keeps the system tighter. A tighter system makes future AI generation more accurate.
        The generator use case runs in the opposite direction: generation without strong
        documentation produces drift, drift makes documentation less reliable, less reliable
        documentation makes the next round of generation worse.
      </p>

      <p>
        The teams that come out ahead are the ones that invest in documentation quality before they
        start relying on AI generation. Not to make AI work &mdash; to make their system work, which
        is a pre-existing problem that AI has just made more urgent to solve.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Supernova (2024).{' '}
            <em>The future of AI in design systems.</em>{' '}
            <a href="https://supernova.io/blog/the-future-of-ai-in-design-systems" target="_blank" rel="noopener noreferrer">
              supernova.io
            </a>
          </li>
          <li>
            Figma (2024).{' '}
            <em>AI in design: what's actually changing.</em>{' '}
            <a href="https://www.figma.com/blog/ai-in-design" target="_blank" rel="noopener noreferrer">
              figma.com
            </a>
          </li>
          <li>
            Nathan Curtis (2023).{' '}
            <em>Documenting design decisions in a design system.</em>{' '}
            <a href="https://medium.com/eightshapes-llc/documenting-design-decisions-1d9022a2c0a1" target="_blank" rel="noopener noreferrer">
              medium.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
