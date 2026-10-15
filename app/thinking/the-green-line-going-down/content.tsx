import RevealOnScroll from '@/components/RevealOnScroll';
import { ChartContextVisual, RatingsDivergenceVisual } from './visuals';
import styles from '../article.module.css';

export default function GreenLineContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The green line going down in your sustainability report is rarely telling you what
        you think.
      </p>

      <p>
        You’ve seen the chart. A line trending down, usually green, sometimes with a leaf
        somewhere nearby. It looks like evidence of progress.
      </p>

      <p>
        What it almost never tells you is which year it started from, or whether emissions
        actually fell or just grew more slowly than revenue. Take those away and all the
        line really says is that someone wanted you to feel good.
      </p>

      <p>
        I worked on an ESG analytics platform where nobody was reading glossy reports. Users
        were preparing regulatory filings and checking supplier emissions against targets
        with legal deadlines attached. For them, a mislabelled metric was a legal risk.
      </p>

      <p>
        Most misleading sustainability charts aren’t made by liars. Alberto Cairo makes this
        point in How Charts Lie: they’re usually made by people who never stopped to ask
        what the chart is actually telling someone. A squashed y-axis turns a small
        improvement into a dramatic one. An intensity metric, like emissions per euro of
        revenue, can show lovely progress while total emissions go up.
      </p>

      <RevealOnScroll><ChartContextVisual /></RevealOnScroll>

      <p>
        So the question I ask of every chart is whether it helps someone understand what’s
        happening, or just helps them feel like things are going well.
      </p>

      <p>
        This matters even more because the data underneath is shaky. A 2022 study by Berg,
        Kölbel and Rigobon found that ratings for the same company from different agencies
        can correlate as weakly as 0.38. In 2023, Chevron was rated high-risk by
        Sustainalytics and fairly near the top by MSCI at the same time. If your product
        shows a number like that with no sign of the uncertainty, it’s presenting confidence
        it doesn’t have.
      </p>

      <RevealOnScroll><RatingsDivergenceVisual /></RevealOnScroll>

      <p>
        The fix isn’t technically hard. Make the baseline year obvious, and put absolute and
        intensity numbers side by side so people can see how they relate. Show uncertainty
        ranges instead of hiding them, and say plainly what’s missing and how the data was
        collected. Xaquín G.V., who writes about ethics in data visualisation, makes the
        point that disclosing scope and limitations is part of the chart itself. I’d go
        further and call it interface design. It just takes someone willing to ship the
        honest chart over the reassuring one.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Cairo, A. (2019). <em>How Charts Lie: Getting Smarter about Visual Information</em>.
            W. W. Norton &amp; Company.
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
        </ol>
      </div>
    </div>
  );
}
