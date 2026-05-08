import RevealOnScroll from '@/components/RevealOnScroll';
import { TranslationChainVisual, DesignerLevelsVisual } from './visuals';
import styles from './content.module.css';

export default function TheBriefContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The first brief I ever ignored was the best design decision I made that year. Not ignored
        carelessly. Ignored deliberately, after reading it three times and realising that what it
        described and what it was actually asking for were two different things.
      </p>

      <p>
        The brief said: improve the reporting flow. What it meant was: users don&rsquo;t trust the
        numbers they&rsquo;re seeing, and they don&rsquo;t know what to do with them. Those are not
        the same problem. One is a UI problem. The other is a product problem. And designing a
        better UI for a product problem produces a polished surface over a broken foundation.
      </p>

      <p>
        That gap &mdash; between the stated problem and the real one &mdash; is where most design
        work goes wrong. Not because designers are incapable of solving the real problem. Because
        they never stop to ask whether the brief has correctly identified it.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>Why briefs are almost always incomplete</h2>

      <p>
        A brief is a translation. Someone in the business &mdash; a PM, a stakeholder, a leadership
        team &mdash; has observed something: a metric dropping, a user complaint, a competitive gap,
        an internal frustration. They&rsquo;ve interpreted that observation through their own frame
        of reference, applied whatever constraints feel relevant, and produced a document that
        describes what they think the solution looks like.
      </p>

      <p>
        That chain &mdash; observation, interpretation, constraint, solution &mdash; introduces
        error at every step. The metric might be a symptom rather than the cause. The interpretation
        might reflect the stakeholder&rsquo;s mental model rather than the user&rsquo;s. The
        constraints might be assumed rather than real. And the described solution might be an answer
        to the interpreted problem rather than the observed one.
      </p>

      <RevealOnScroll><TranslationChainVisual /></RevealOnScroll>

      <p>
        By the time the brief reaches a designer, it has already made several decisions that nobody
        has examined. The designer who accepts those decisions uncritically isn&rsquo;t solving the
        problem. They&rsquo;re executing someone else&rsquo;s half-formed hypothesis.
      </p>

      <p>
        This isn&rsquo;t a criticism of the people who write briefs. It&rsquo;s a structural
        observation about how briefs are produced. Translation loses information. The further the
        brief travels from the original observation, the more of that information gets lost. A
        designer who goes back to the observation &mdash; to the actual user behaviour, the real
        metric, the specific moment where things break down &mdash; is doing the work the brief was
        supposed to do but couldn&rsquo;t, because briefs are written by people who aren&rsquo;t
        designers.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>What working upstream actually looks like</h2>

      <p>
        Working upstream of the brief isn&rsquo;t about ignoring the business context or
        redesigning the product on your own terms. It&rsquo;s about asking one question before any
        other: <em>is this the right problem to solve?</em>
      </p>

      <p>
        That question sounds obvious. In practice, it requires specific skills that design education
        rarely teaches explicitly.
      </p>

      <p>
        The first is reading the gap between what a brief describes and what the evidence shows. A
        brief that says &ldquo;users find the interface confusing&rdquo; is not the same as evidence
        that users find the interface confusing. One is an assertion. The other is a signal.
        Assertions need to be tested. Signals need to be interpreted. A designer who treats an
        assertion as evidence has already lost the thread.
      </p>

      <p>
        The second skill is distinguishing between the problem the business has and the problem the
        user has. These frequently overlap, but they are not identical, and the design solution that
        addresses one may actively worsen the other. A checkout flow that reduces cart abandonment
        at the cost of user trust is solving the business problem while creating a user problem that
        will show up as a different metric six months later. The brief usually describes the
        business problem. The user problem requires its own investigation.
      </p>

      <p>
        The third skill is knowing when the brief is right. Working upstream doesn&rsquo;t mean
        every brief is wrong. Some briefs are excellent &mdash; precise, evidence-based, correctly
        scoped. Treating every brief with suspicion is its own failure mode. The discipline is not
        scepticism for its own sake. It&rsquo;s the habit of verification before execution.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The moment the brief reveals itself</h2>

      <p>
        There&rsquo;s a specific moment in most projects where the real problem becomes visible. It
        usually happens during research &mdash; in a user session, in a support ticket analysis, in
        a stakeholder conversation where someone says something that doesn&rsquo;t fit the
        brief&rsquo;s framing and everyone moves past it too quickly.
      </p>

      <p>
        That moment is the most valuable thing research produces. Not the confirmation of what the
        brief already assumed. The anomaly that the brief didn&rsquo;t account for.
      </p>

      <p>
        In the project I mentioned at the start, the moment came in the third user session. A user
        looked at the reporting dashboard, read the numbers correctly, understood what they meant
        &mdash; and then didn&rsquo;t act. Not because they couldn&rsquo;t. Because they
        didn&rsquo;t believe the numbers warranted action yet. They were waiting for a signal that
        the product wasn&rsquo;t designed to give them.
      </p>

      <p>
        The brief had asked for a better reporting flow. What the user needed was a decision surface
        &mdash; a layer that converted performance data into actionable guidance. Those are
        structurally different problems with structurally different solutions. The brief would have
        produced a faster path to the wrong answer.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>Why this matters more at senior levels</h2>

      <RevealOnScroll><DesignerLevelsVisual /></RevealOnScroll>

      <p>
        Junior designers solve the problem they&rsquo;re given. Mid-level designers solve the
        problem well. Senior designers ask whether it&rsquo;s the right problem before they solve
        anything.
      </p>

      <p>
        That progression isn&rsquo;t just about skill. It&rsquo;s about accountability. A junior
        designer who executes a bad brief has done their job. A senior designer who executes a bad
        brief without questioning it has failed at theirs &mdash; because part of the job, at that
        level, is to catch the brief&rsquo;s errors before they become the product&rsquo;s errors.
      </p>

      <p>
        This is uncomfortable to say clearly, because it implies a kind of authority that design
        doesn&rsquo;t always formally hold. You don&rsquo;t always have the standing to reject a
        brief. You don&rsquo;t always have the time to go back to first principles. You won&rsquo;t
        always win the argument.
      </p>

      <p>
        But the habit &mdash; the instinct to pause before executing, to ask what the brief assumed
        and whether those assumptions have been tested &mdash; is what separates designers who make
        products better from designers who make products more polished. Polish is visible. Better is
        compounding.
      </p>

      <hr className={styles.divider} />

      <p>
        Before the first wireframe. Before the first sketch. Before the first conversation about
        components or flows or layouts.
      </p>

      <p>
        <em>Is this the right problem?</em>
      </p>

      <p>
        Not: is this an interesting problem. Not: is this a solvable problem. Is this the right one
        &mdash; for this user, at this moment, in this product?
      </p>

      <p>
        If you can&rsquo;t answer that question confidently, the brief hasn&rsquo;t done its job
        yet. And that&rsquo;s your job now.
      </p>

      <p>
        <em>The brief is the starting point. The problem is what you find when you look behind it.</em>
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Cross, N. (2011).{' '}
            <em>Design Thinking: Understanding How Designers Think and Work.</em>{' '}
            Berg Publishers.
          </li>
          <li>
            Dorst, K. (2015).{' '}
            <em>Frame Innovation: Create New Thinking by Design.</em>{' '}
            MIT Press.{' '}
            <a href="https://mitpress.mit.edu/9780262324274/frame-innovation/" target="_blank" rel="noopener noreferrer">
              mitpress.mit.edu
            </a>
          </li>
          <li>
            Rittel, H. &amp; Webber, M. (1973). Dilemmas in a General Theory of Planning.{' '}
            <em>Policy Sciences</em>, 4(2), 155&ndash;169.
          </li>
          <li>
            Nielsen Norman Group (2021). Discovery: What It Is and Why It Matters.{' '}
            <a href="https://www.nngroup.com/articles/discovery-phase/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Gothelf, J. &amp; Seiden, J. (2013).{' '}
            <em>Lean UX: Applying Lean Principles to Improve User Experience.</em>{' '}
            O&rsquo;Reilly Media.
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
