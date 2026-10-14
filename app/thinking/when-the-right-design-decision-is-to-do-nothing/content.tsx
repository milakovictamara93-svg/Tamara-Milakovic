import RevealOnScroll from '@/components/RevealOnScroll';
import { FeatureCostVisual, BenchmarkDecisionVisual } from './visuals';
import styles from './content.module.css';

export default function DoNothingContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Some of my best design work has no screens. It’s the record of something I talked
        people out of building.
      </p>

      <p>
        Some of the most useful design work never makes it into a portfolio, because there’s
        nothing to show except a feature that didn’t get built and the argument for why. Try
        putting that on Dribbble.
      </p>

      <p>
        Products pile up features, and each one makes sense on its own. Together they make
        everything harder to use. The pressure only goes one way, too. Nobody gets praised
        in the quarterly review for the feature they stopped.
      </p>

      <RevealOnScroll><FeatureCostVisual /></RevealOnScroll>

      <p>
        Barry Schwartz’s research on choice is useful here. More options tend to make people
        less satisfied and slower to decide, even when every option is good. In product
        terms, a dashboard with twenty filters tells the user that twenty things might
        matter, and then leaves them to work out which.
      </p>

      <p>
        At Pax8, a request came in for benchmark toggles on every analytics chart, so
        partners could compare themselves to platform averages. In the meeting it sounded
        completely sensible, and I said no. Partners were still learning to read their own
        numbers. A comparison would have turned “what’s happening with my business” into
        “how do I compare”, which is a different task the product wasn’t built for yet. It
        went into the backlog with a clear condition for when to revisit it.
      </p>

      <RevealOnScroll><BenchmarkDecisionVisual /></RevealOnScroll>

      <p>
        Saying no in that meeting is uncomfortable, and “let’s keep it simple” never works,
        because it sounds lazy. What works is being specific about which task the feature
        interrupts and what would need to be true for it to belong.
      </p>

      <p>
        That means you need a clear enough picture of what the product is for to judge a
        feature by what it costs, and most teams don’t have that written down anywhere.
        Writing it down is design work too, even if it never becomes a screen.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Schwartz, B. (2004).{' '}<em>The Paradox of Choice: Why More Is Less.</em>{' '}Ecco.
          </li>
        </ol>
      </div>
    </div>
  );
}
