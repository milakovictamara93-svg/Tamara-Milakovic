import RevealOnScroll from '@/components/RevealOnScroll';
import { ChartContextVisual, RatingsDivergenceVisual } from './visuals';
import styles from './content.module.css';

export default function GreenLineContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        There&rsquo;s a chart in almost every sustainability report. You&rsquo;ve seen it. A line,
        trending downward. Usually green. Sometimes a leaf somewhere nearby. It looks like evidence.
        It isn&rsquo;t, necessarily.
      </p>

      <p>
        Here&rsquo;s what that chart almost never shows: the baseline year it started from, whether
        the reduction is absolute or just relative to revenue, what happened to production volume
        over the same period, or whether the methodology changed halfway through. Strip those things
        out and the line doesn&rsquo;t tell you anything except that someone wanted you to feel good.
      </p>

      <p>
        This is the quiet problem at the center of sustainability data design. Not the data itself
        &mdash; the presentation of it. The decisions made before the chart reaches you: what to
        include, what to leave out, where to start the axis, which metric to foreground. Those
        decisions are almost never explained. And in a domain where the numbers are supposed to
        matter &mdash; where the whole premise is that measuring environmental performance will
        change behavior &mdash; unexplained decisions are a form of fiction.
      </p>

      <RevealOnScroll><ChartContextVisual /></RevealOnScroll>

      <p>
        I worked on an ESG analytics platform where the users weren&rsquo;t reading annual reports.
        They were doing compliance work. Preparing regulatory filings. Cross-referencing supplier
        emissions data against reduction targets with legal deadlines attached. For them, a
        mislabeled metric wasn&rsquo;t an embarrassment. It was a liability.
      </p>

      <p>
        What that experience made clear: most misleading sustainability visualizations aren&rsquo;t
        dishonest. They&rsquo;re just unconsidered. Alberto Cairo, one of the sharpest thinkers on
        data visualization, argues in <em>How Charts Lie</em> (2019) that most misleading charts
        come from oversight, not intent &mdash; that even well-meaning designers produce graphics
        that deceive, because they never stopped to ask what the chart was actually telling someone.
      </p>

      <p>
        The mechanism is usually structural. A compressed y-axis makes a modest improvement look
        dramatic &mdash; a well-documented manipulation tactic in which truncating the axis creates
        a deceptive visual-to-data ratio, making small changes appear far more significant than they
        are. Intensity-based metrics &mdash; emissions per dollar of revenue &mdash; can show
        &ldquo;progress&rdquo; while absolute emissions climb. A conveniently chosen baseline year
        makes a target look ambitious when it isn&rsquo;t. None of this requires bad faith. It just
        requires not asking the hard question out loud.
      </p>

      <hr className={styles.divider} />

      <p>
        The hard question is: does this chart help someone understand what&rsquo;s actually
        happening, or does it help someone feel like things are going well? Those are not the same
        product.
      </p>

      <p>
        There are now over 600 different ESG scoring systems worldwide, each using different
        indicators, different weights, different definitions of the same words. A landmark study by
        Berg, K&ouml;lbel, and Rigobon (2022), published in the <em>Review of Finance</em>, found
        that ratings for the same company from two different agencies can correlate as weakly as
        0.38 &mdash; barely better than a coin flip.
      </p>

      <RevealOnScroll><RatingsDivergenceVisual /></RevealOnScroll>

      <p>
        When you build a product on top of that fragmented foundation and don&rsquo;t surface the
        uncertainty to the user, you&rsquo;re not presenting analysis. You&rsquo;re presenting the
        appearance of certainty. That&rsquo;s a design choice. It&rsquo;s also an ethical one.
      </p>

      <p>
        The designers who get this right treat transparency as a feature, not a disclaimer.
        Methodology visible. Baseline year prominent. Absolute and intensity metrics side by side so
        users can see the relationship between them. Uncertainty ranges shown, not hidden. As data
        visualization ethicist Xaqu&iacute;n G.V. puts it: make the scope and limitations of your
        data clear &mdash; note missing data, biases, and assumptions that may affect
        interpretation. Disclose how data was collected, processed, and filtered. That&rsquo;s not
        a footnote. That&rsquo;s interface design.
      </p>

      <p>
        None of it is technically hard. All of it requires someone willing to ship the chart that
        communicates honestly over the chart that communicates confidently.
      </p>

      <p>The green line going down is easy to make. Making it mean something is the work.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Data-Nizant (2025). 7 Examples of Bad Data Visualization to Learn From.{' '}
            <a href="https://datanizant.com/examples-of-bad-data-visualization/" target="_blank" rel="noopener noreferrer">
              datanizant.com
            </a>
          </li>
          <li>
            CLEVER&deg;FRANKE (2024). ESG Needs Data Design, Part 1. Medium.{' '}
            <a href="https://medium.com/clever-franke/esg-needs-data-design-part-1-aa8eca5650c9" target="_blank" rel="noopener noreferrer">
              medium.com
            </a>
          </li>
          <li>
            Berg, F., K&ouml;lbel, J.F., Rigobon, R. (2022). Aggregate Confusion: The Divergence
            of ESG Ratings. <em>Review of Finance</em>, 26(6), 1315&ndash;1344.{' '}
            <a href="https://academic.oup.com/rof/article/26/6/1315/6590670" target="_blank" rel="noopener noreferrer">
              academic.oup.com
            </a>
          </li>
          <li>
            Pictet Asset Management (2023). Analysing Corporate ESG Ratings.{' '}
            <a href="https://am.pictet.com/us/en/investment-views/active-equity/2023/a-review-of-esg-ratings" target="_blank" rel="noopener noreferrer">
              am.pictet.com
            </a>
          </li>
          <li>
            Data Europa EU (2025). Honest Charts: Ethics and Integrity in Data Visualisation.
            Interview with Xaqu&iacute;n G.V.{' '}
            <a href="https://data.europa.eu/en/publications/datastories/honest-charts-ethics-and-integrity-data-visualisation" target="_blank" rel="noopener noreferrer">
              data.europa.eu
            </a>
          </li>
          <li>
            Cairo, A. (2019). <em>How Charts Lie: Getting Smarter about Visual Information</em>.
            W. W. Norton &amp; Company.
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
