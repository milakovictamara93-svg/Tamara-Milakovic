import RevealOnScroll from '@/components/RevealOnScroll';
import { VariationTypesVisual, OverStandardisationSymptomsVisual } from './visuals';
import styles from './content.module.css';

export default function WhenToStandardiseContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The most dangerous moment in design systems work isn&rsquo;t when the system is too loose.
        It&rsquo;s when it&rsquo;s too tight. A system that standardises too little produces the
        problem everyone recognises: inconsistency, drift, the Frankenstein product where every
        module looks like it was designed by a different team in a different decade. A system that
        standardises too much produces a quieter, harder-to-diagnose problem: a product that looks
        consistent but feels wrong.
      </p>

      <p>
        Both failures are real. Only one of them gets discussed.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The standardisation instinct and why it overshoots</h2>

      <p>
        When a design system team sets out to fix inconsistency, the instinct is to standardise
        everything in sight. Every component gets a single approved version. Every interaction
        pattern gets documented and mandated. Every deviation becomes a violation to be corrected.
      </p>

      <p>
        This instinct comes from a good place. Inconsistency is genuinely costly &mdash; it
        increases cognitive load for users, slows decision-making in design reviews, and creates
        maintenance debt that compounds over time. The case for standardisation is real and
        well-evidenced.
      </p>

      <p>
        But the instinct to standardise everything treats all variation as the same problem. It
        doesn&rsquo;t. There are at least three kinds of variation in a product, and they require
        different responses.
      </p>

      <p>
        Accidental variation is the kind that happens when two designers solve the same problem
        independently and arrive at different answers. A filter interaction that works one way in
        the analytics module and a different way in the reporting module &mdash; not because the
        contexts are different, but because nobody compared notes. This variation is unambiguous.
        Standardise it.
      </p>

      <p>
        Contextual variation is the kind that reflects genuine differences in workflow, user type,
        or information density. A table component that works at one density for a summary view and
        a different density for a detailed analysis view isn&rsquo;t inconsistent &mdash; it&rsquo;s
        appropriate. Flattening it into a single standard produces a component that serves neither
        context well.
      </p>

      <p>
        Exploratory variation is the kind that appears when a team is working at the edge of what
        the system has addressed. They&rsquo;ve encountered a problem the system doesn&rsquo;t have
        an answer for, and they&rsquo;ve made a local decision. Sometimes that decision is wrong
        and should be standardised away. Sometimes it&rsquo;s right, and it should be promoted into
        the system as a new pattern.
      </p>

      <RevealOnScroll><VariationTypesVisual /></RevealOnScroll>

      <p>
        A design system that can&rsquo;t distinguish between these three kinds of variation will
        standardise the second and third as aggressively as the first. The result is a system
        that&rsquo;s technically consistent and experientially brittle.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The question that determines the answer</h2>

      <p>
        Before any standardisation decision, one question cuts through most of the noise:{' '}
        <em>Does this variation force the user to relearn, or does it reflect a difference in
        context that the user would reasonably expect?</em>
      </p>

      <p>
        Variation that forces relearning is a problem. A user who learns how filtering works in one
        module and then encounters a structurally identical filter that behaves differently in
        another module has to do cognitive work they shouldn&rsquo;t have to do. That work
        accumulates. It slows task completion, increases error rates, and erodes trust in the
        product&rsquo;s coherence [1]. Standardise it.
      </p>

      <p>
        Variation that reflects context is information. A dense analytical table and a summary card
        table are different surfaces serving different user needs. If they look and behave
        identically, one of them is wrong. The variation isn&rsquo;t the problem &mdash; treating
        it as a problem is.
      </p>

      <p>
        This question sounds simple. In practice, it requires the design team to have a shared,
        explicit understanding of what &ldquo;context&rdquo; means for each surface in the product.
        That understanding rarely exists by default. It has to be built &mdash; usually through the
        audit process that should precede any standardisation effort, not follow it.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The forward-only strategy</h2>

      <p>
        One of the most useful standardisation decisions is also one of the least glamorous:
        don&rsquo;t fix everything at once.
      </p>

      <p>
        Full retroactive standardisation &mdash; updating every existing surface to comply with the
        new system &mdash; is appealing in principle and destructive in practice. It pulls
        engineering resource away from shipping new value. It introduces regression risk across
        surfaces that were working. And it creates a false equivalence between surfaces that need
        urgent attention and surfaces that are fine as they are.
      </p>

      <p>
        The alternative is forward-only standardisation: new and modified surfaces follow the system
        from day one. Legacy surfaces converge progressively, prioritised by user impact rather than
        by proximity to the last design review.
      </p>

      <p>
        This strategy accepts short-term inconsistency in service of long-term coherence. It focuses
        the system&rsquo;s energy where it has the most leverage &mdash; on the surfaces that are
        actively being developed &mdash; rather than spreading it thinly across everything that
        exists. The psychological benefit is underrated. A team trying to standardise everything
        simultaneously is always behind. A team with a forward-only strategy has a clear, achievable
        definition of what &ldquo;done&rdquo; looks like for any given sprint.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>What over-standardisation actually costs</h2>

      <p>
        When a design system standardises too aggressively, the costs are diffuse and slow-moving.
        They don&rsquo;t show up in a single broken component or a failed usability test. They
        accumulate across thousands of micro-interactions where the system&rsquo;s answer was close
        but not right.
      </p>

      <RevealOnScroll><OverStandardisationSymptomsVisual /></RevealOnScroll>

      <p>
        The most common symptom is pattern mismatch: a component applied to a context the system
        wasn&rsquo;t designed for. The spacing is right. The colour is right. The behaviour is
        subtly wrong for this specific use case. The user can&rsquo;t articulate what&rsquo;s off.
        They just know something is.
      </p>

      <p>
        The second symptom is designer passivity. When a system is over-specified, designers stop
        making judgments and start checking compliance. The system becomes the answer to every
        question, including questions the system wasn&rsquo;t equipped to answer. Design reviews
        shift from evaluating whether something is right for the context to evaluating whether it
        follows the spec. Those are different conversations, and the second one is less useful.
      </p>

      <p>
        The third symptom is exception proliferation. When the system is too rigid, teams that
        encounter legitimate edge cases have two choices: force their use case into an inappropriate
        pattern, or request an exception. Over time, the exception list grows until it becomes a
        shadow system &mdash; undocumented and inconsistent in exactly the way the system was
        supposed to prevent [2].
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The system as a decision support layer</h2>

      <p>
        The most useful framing for a design system isn&rsquo;t a library of components. It&rsquo;s
        a decision support layer &mdash; a shared reference that helps teams make good decisions
        faster, in situations the system anticipated and in situations it didn&rsquo;t.
      </p>

      <p>
        That framing changes what the system needs to contain. Not just components and tokens, but
        reasoning. Not just what to use, but when and why. Not just the approved pattern, but the
        logic that produced it &mdash; so that when a designer encounters a context the system
        hasn&rsquo;t addressed, they have enough of the underlying thinking to make a judgment call
        that&rsquo;s consistent with the system&rsquo;s intent even if it isn&rsquo;t in the
        system&rsquo;s documentation.
      </p>

      <p>
        This is harder to build than a component library. It requires the system team to make their
        reasoning explicit, to document the cases they considered and rejected, to write guidance
        for the designer who&rsquo;s mid-problem under deadline rather than the designer who has
        time to study every page. But it&rsquo;s the only kind of system that survives contact with
        a complex, growing product. A system of components breaks at the edges. A system of
        reasoning extends.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The discipline of knowing when to stop</h2>

      <p>
        The best design systems teams have an answer to a question most teams never ask: what should
        this system <em>not</em> standardise?
      </p>

      <p>
        Not as an admission of incompleteness. As a deliberate boundary. Some variation is
        load-bearing. Some differences between surfaces reflect genuine differences in user need,
        workflow context, or information structure. Standardising them away doesn&rsquo;t improve
        consistency &mdash; it reduces fitness.
      </p>

      <p>
        Knowing where to stop is as important as knowing where to start. A system with clear
        boundaries is more trustworthy than a system that claims to cover everything, because the
        team that built it has already done the work of distinguishing legitimate variation from
        accidental drift.
      </p>

      <p>
        That distinction is the design system&rsquo;s most important contribution. Not the component
        library. Not the token architecture. The shared understanding of which problems have been
        solved, which differences are intentional, and which questions still require judgment.
      </p>

      <p>
        <em>A system that standardises everything is as broken as one that standardises nothing.
        The value is in knowing the difference.</em>
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Sweller, J. (1988). Cognitive Load During Problem Solving: Effects on Learning.{' '}
            <em>Cognitive Science</em>, 12(2), 257&ndash;285.
          </li>
          <li>
            UXPin (2026). <em>Design System Governance: A Guide to Prevent Drift.</em>{' '}
            <a href="https://www.uxpin.com/studio/blog/design-system-governance/" target="_blank" rel="noopener noreferrer">
              uxpin.com
            </a>
          </li>
          <li>
            Frost, B. (2016). <em>Atomic Design.</em> Brad Frost.{' '}
            <a href="https://atomicdesign.bradfrost.com" target="_blank" rel="noopener noreferrer">
              atomicdesign.bradfrost.com
            </a>
          </li>
          <li>
            Curtis, N. (2024). Team Models for Scaling a Design System. UX Planet.{' '}
            <a href="https://uxplanet.org/design-system-governance-models-f66a97367ad5" target="_blank" rel="noopener noreferrer">
              uxplanet.org
            </a>
          </li>
          <li>
            Nielsen Norman Group (2022). Design Systems 101.{' '}
            <a href="https://www.nngroup.com/articles/design-systems-101/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
