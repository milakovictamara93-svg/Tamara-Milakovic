import RevealOnScroll from '@/components/RevealOnScroll';
import { PlausibleNonsenseVisual, SynthesisVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        Most articles about AI and design focus on what AI fixes. This one is about what it breaks.
        Not because AI is bad &mdash; it isn&rsquo;t &mdash; but because the problems it creates are
        real, underexamined, and increasingly showing up in products that were built with good
        intentions and the wrong assumptions.
      </p>

      <hr className={styles.divider} />

      <p>
        AI generates output that looks correct faster than any human could review it. This is useful
        when the output is mostly correct. It&rsquo;s dangerous when it isn&rsquo;t.
      </p>

      <p>
        The specific failure mode is plausible nonsense: content that has the structure and surface
        of something meaningful but is wrong in ways that aren&rsquo;t immediately visible. An
        AI-generated persona that synthesises no actual user research but reads like it did. A user
        flow that is technically coherent but based on a misunderstanding of what users are actually
        trying to do. Microcopy that sounds warm and clear but uses phrasing that means something
        different to the actual users.
      </p>

      <p>
        These failures are harder to catch than obvious errors because they look right. The artifact
        is professionally formatted, internally consistent, and syntactically correct. The problem is
        that it was generated from a model trained on general patterns, not from knowledge of this
        product, these users, and this context.
      </p>

      <p>
        The risk increases with seniority. Junior designers tend to treat AI output with appropriate
        scepticism. Senior designers, under deadline pressure, can slip into using AI output as a
        shortcut for the thinking they&rsquo;d normally do &mdash; and the output looks credible
        enough to pass review.
      </p>

      <RevealOnScroll><PlausibleNonsenseVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        When most designers in most teams are prompting the same models with similar prompts, the
        output converges. Products start to look like each other &mdash; not because teams are
        copying, but because they&rsquo;re all drawing from the same well of probabilistic
        recombination.
      </p>

      <p>
        The distinctive visual voice, the unusual interaction pattern, the design decision that
        reflects a specific deep understanding of a specific user group &mdash; these require the
        kind of deliberate departure from convention that AI, which learns from convention, cannot
        reliably generate.
      </p>

      <p>
        This isn&rsquo;t a reason to avoid AI. It&rsquo;s a reason to be more deliberate about
        where human judgment intervenes. If you&rsquo;re prompting for a &ldquo;professional
        dashboard for analytics users,&rdquo; you&rsquo;ll get back the centre of the distribution
        of what that looks like. If you&rsquo;re prompting for a direction and then departing from
        it based on actual knowledge of your specific users, you&rsquo;ll get something more
        defensible and more distinctive.
      </p>

      <hr className={styles.divider} />

      <p>
        AI can synthesise research fast. Thirty interviews become a summary in two hours. That
        summary is useful. It is not a substitute for reading the interviews yourself.
      </p>

      <p>
        The thing you lose when you delegate synthesis entirely to AI is the texture &mdash; the
        specific phrase a user repeated three times that doesn&rsquo;t fit any theme but clearly
        matters. The tension between what two users said that the AI smoothed over. The moment in an
        interview where someone contradicted themselves in a way that&rsquo;s more revealing than
        their explicit answer.
      </p>

      <p>
        Teams that use AI synthesis consistently build a progressively thinner understanding of
        their users. The speed gain compounds into a knowledge debt that shows up later, when a
        product decision is made on the basis of a theme that was a statistical artefact rather than
        a genuine signal.
      </p>

      <RevealOnScroll><SynthesisVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        None of this argues against using AI. It argues for using it with the same critical eye
        you&rsquo;d apply to any other source of design input &mdash; which is to say, not treating
        the confidence of the output as evidence of its quality.
      </p>

      <p>
        The problems AI creates are solvable. They require the same thing that most design problems
        require: asking the hard question before accepting the plausible answer.
      </p>

      <p>
        AI generates confidence faster than it generates understanding. Know the difference.
      </p>

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
            UOC (2025).{' '}
            <em>How AI is changing professions like design, art, and the media.</em>{' '}
            <a href="https://www.uoc.edu/en/news/2025/ai-could-automate-creative-professions" target="_blank" rel="noopener noreferrer">
              uoc.edu
            </a>
          </li>
          <li>
            Creative Boom (2024).{' '}
            <em>Special report: how design agencies are actually using AI in 2024.</em>{' '}
            <a href="https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/" target="_blank" rel="noopener noreferrer">
              creativeboom.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
