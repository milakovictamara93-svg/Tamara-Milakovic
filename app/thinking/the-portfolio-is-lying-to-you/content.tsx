import RevealOnScroll from '@/components/RevealOnScroll';
import { PortfolioVsRealityVisual, WhatsMissingVisual } from './visuals';
import styles from './content.module.css';

export default function PortfolioContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every UX portfolio tells the same story. The designer received a brief. They empathized
        with users. They ran research. They found insights. They sketched, then wireframed, then
        prototyped, then tested. Iteration happened. The solution emerged, elegant and justified.
        Results followed. It&rsquo;s a compelling narrative. It&rsquo;s also, almost universally,
        fiction.
      </p>

      <p>
        Not deliberate fiction &mdash; the process happened, the decisions got made, the product
        shipped. But the clean linear story in the portfolio bears almost no resemblance to what
        the work actually felt like. The real version had a brief that changed three times. Research
        that contradicted the direction and got partially ignored. A stakeholder who arrived in week
        six with a completely different product in their head. Constraints that didn&rsquo;t exist
        at the start. Decisions made under time pressure with incomplete information, then
        reverse-engineered into a rationale that looked like strategy.
      </p>

      <RevealOnScroll><PortfolioVsRealityVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Matej Latin, who has reviewed over a thousand design portfolios, puts the observation
        bluntly: most UX and product design portfolios have two case studies that are the same
        &mdash; it&rsquo;s just the details that differ slightly. Many case studies read like
        school homework: the designer knew what the answer and the process were &ldquo;supposed to
        be&rdquo; according to the textbook, so they made up the story to fit [1].
      </p>

      <p>
        This pattern has a name in performance studies: <em>process theatre</em>. The post-hoc
        reconstruction of a messy, non-linear reality into a story with a clear beginning, middle,
        and resolution. The Double Diamond didn&rsquo;t drive the project &mdash; the project drove
        the project, and the Double Diamond got drawn on the slide afterward because that&rsquo;s
        what the format expected.
      </p>

      <p>
        The problem with process theatre isn&rsquo;t just dishonesty. It&rsquo;s that it sets a
        standard nobody can actually meet &mdash; and junior designers in particular spend enormous
        energy trying to recreate a process that doesn&rsquo;t exist in practice. If you&rsquo;re
        doing a good job, you rarely end up with anything remotely like you anticipated when you
        started out [1]. That&rsquo;s not a failure of process. That&rsquo;s evidence of real work.
      </p>

      <hr className={styles.divider} />

      <p>
        Here&rsquo;s what hiring managers who know what they&rsquo;re looking at are actually
        looking for: not the clean version of the work, but evidence that you can think through a
        problem honestly.
      </p>

      <p>
        The most interesting thing in a case study isn&rsquo;t the final design. It&rsquo;s the
        moment something went wrong &mdash; and what you did about it. The constraint that forced a
        better solution. The research finding that contradicted the assumption and what changed as a
        result. The decision you pushed back on and why. The thing you&rsquo;d do differently.
      </p>

      <RevealOnScroll><WhatsMissingVisual /></RevealOnScroll>

      <p>
        Those moments don&rsquo;t fit the template. They&rsquo;re also the only parts that reveal
        how a designer actually thinks.
      </p>

      <p>
        The sanitized portfolio protects you from looking imperfect. It also makes you look like
        everyone else. And in a hiring environment where the signal-to-noise ratio on portfolios is
        extremely low, &ldquo;looks like everyone else&rdquo; is not a safe position &mdash;
        it&rsquo;s an invisible one.
      </p>

      <hr className={styles.divider} />

      <p>
        The more honest version of a portfolio isn&rsquo;t a confession. You don&rsquo;t need to
        document every chaotic meeting or failed prototype. But you do need to show that real work
        happened &mdash; that decisions were contested, that constraints existed, that something
        surprised you and you adapted.
      </p>

      <p>
        That version is harder to write. It requires trusting that an honest account of difficult
        work is more compelling than a polished account of work that was never difficult.
      </p>

      <p>It almost always is.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Latin, M. (2024). 90% of Designers Are Unhirable?{' '}
            <a href="https://matejlatin.com/blog/90-percent-of-designers-are-unhirable/" target="_blank" rel="noopener noreferrer">
              matejlatin.com
            </a>
          </li>
          <li>
            Interaction Design Foundation. How to Write UX/UI Design Case Studies That Boost Your
            Portfolio.{' '}
            <a href="https://ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio" target="_blank" rel="noopener noreferrer">
              ixdf.org
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
