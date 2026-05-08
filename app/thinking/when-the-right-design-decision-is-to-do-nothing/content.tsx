import RevealOnScroll from '@/components/RevealOnScroll';
import { FeatureCostVisual, BenchmarkDecisionVisual } from './visuals';
import styles from './content.module.css';

export default function DoNothingContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        There&rsquo;s a kind of design work that never makes it into a portfolio. No screens. No
        deliverables. No artifacts to show. Just the record of something that didn&rsquo;t get
        built &mdash; and the argument made for why it shouldn&rsquo;t.
      </p>

      <p>
        This is some of the most valuable design work that exists. It&rsquo;s also the hardest to
        defend in a room full of people who equate output with progress.
      </p>

      <hr className={styles.divider} />

      <p>
        Product teams accumulate features the way houses accumulate clutter. Each addition makes
        sense in isolation. Someone needed it. A competitor had it. A stakeholder wanted it. The
        cost at the time felt manageable. But features compound &mdash; in interface complexity, in
        engineering maintenance cost, in the cognitive load they place on users who now have one
        more thing to learn, one more option to consider, one more path to get lost in. Nearly 45%
        of software features are rarely or never used, yet they continue to consume development and
        maintenance resources [2].
      </p>

      <p>
        The pressure to add is structural. Roadmaps reward addition. Stakeholders feel heard when
        their request ships. Progress meetings track what got built. There is almost no
        organisational mechanism that rewards the decision not to build something &mdash; even when
        that decision is the correct one.
      </p>

      <p>
        Which means the designer who pushes back on addition is pushing against the current, every
        time, on principle, with the burden of proof always on them.
      </p>

      <RevealOnScroll><FeatureCostVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Barry Schwartz&rsquo;s research on the paradox of choice showed something
        counterintuitive: more options reliably reduce satisfaction and increase decision paralysis,
        even when each individual option is genuinely valuable [1]. The cognitive cost of
        evaluating ten things is not ten times the cost of evaluating one. It&rsquo;s an
        exponential tax &mdash; paid in attention, in confidence, in the feeling that maybe you
        made the wrong choice even after you chose.
      </p>

      <p>
        In product design, this plays out concretely. An interface that offers twelve actions asks
        the user to understand twelve things before they can act on one. An analytics dashboard
        with twenty filters implies twenty dimensions of possible importance &mdash; and leaves the
        user to determine which ones actually matter for their situation. The addition of each
        individually useful thing quietly degrades the usefulness of everything already there.
      </p>

      <p>
        On the Pax8 monetization project, a request came through to add benchmark toggles to every
        analytics chart &mdash; a feature that would let partners compare their performance against
        platform averages. On paper, reasonable. More context, better decisions.
      </p>

      <p>
        I killed it. Not because it was a bad idea, but because it was the wrong idea for this
        moment. Partners on the platform were still learning to interpret their own data. Introducing
        a comparison dimension before they had a baseline understanding of their own performance
        would have shifted the cognitive task from <em>understanding what I&rsquo;m doing</em> to{' '}
        <em>evaluating how I compare</em> &mdash; two fundamentally different modes that the product
        wasn&rsquo;t designed to support simultaneously. The benchmark toggle would have felt like
        a feature. It would have functioned as noise.
      </p>

      <RevealOnScroll><BenchmarkDecisionVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        The argument for doing nothing is rarely popular in the meeting where it&rsquo;s made. It
        requires specificity &mdash; not &ldquo;we should keep it simple&rdquo; (which sounds like
        laziness), but &ldquo;here is the precise cognitive task this feature interrupts, here is
        the user state where it creates confusion rather than clarity, here is what would need to
        be true for this to belong.&rdquo;
      </p>

      <p>
        Restraint isn&rsquo;t a compromise &mdash; it&rsquo;s the key to creating the right
        products [3]. The most focused products aren&rsquo;t the ones that said yes to the best
        features. They&rsquo;re the ones that said no to the good ones.
      </p>

      <p>
        That argument requires a clear model of what the product is trying to do and for whom
        &mdash; specific enough that you can evaluate a feature not just by what it adds, but by
        what it costs. Most teams don&rsquo;t have that model explicit enough to make the no
        legible. Making it explicit is the design work that precedes the decision not to build.
      </p>

      <p>
        The portfolio piece for that work isn&rsquo;t a screen. It&rsquo;s the reasoning. And the
        reasoning is, almost always, the most interesting part.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Schwartz, B. (2004). <em>The Paradox of Choice: Why More Is Less.</em> Harper Perennial.
          </li>
          <li>
            Sonin (2025). Feature Bloat: The Silent Product Killer.{' '}
            <a href="https://sonin.agency/insights/feature-bloat-the-silent-product-killer/" target="_blank" rel="noopener noreferrer">
              sonin.agency
            </a>
          </li>
          <li>
            Test Double (2025). The Art of Product Restraint: Why Less Delivers More.{' '}
            <a href="https://testdouble.com/insights/product-management-restraint-why-less-delivers-more" target="_blank" rel="noopener noreferrer">
              testdouble.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
