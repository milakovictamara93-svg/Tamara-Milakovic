import RevealOnScroll from '@/components/RevealOnScroll';
import { PortfolioVsRealityVisual, WhatsMissingVisual } from './visuals';
import styles from './content.module.css';

export default function PortfolioContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every portfolio tells the same tidy story, and almost none of them happened that
        way.
      </p>

      <p>
        Every UX portfolio tells the same story. Brief, empathy, research, insights,
        sketches, wireframes, prototype, testing, a bit of iteration, and then a beautiful
        solution with results attached.
      </p>

      <p>
        It’s a lovely story. It almost never happened like that.
      </p>

      <p>
        In the real project, the brief changed a few times and the research contradicted the
        direction and got half ignored. Someone senior showed up in week six with a
        different product in their head. Decisions got made under pressure and were
        explained afterwards as if they’d been strategy all along.
      </p>

      <RevealOnScroll><PortfolioVsRealityVisual /></RevealOnScroll>

      <p>
        Matej Latin, who has reviewed more than a thousand portfolios, says most case
        studies read like school homework. The designer knew what the process was supposed
        to look like and wrote the story to match.
      </p>

      <p>
        I don’t blame anyone for doing it, because the format practically asks you to. But
        it causes real damage. Junior designers try to copy a process that doesn’t exist and
        feel like they’re failing. And everyone ends up looking the same, which, to a hiring
        manager going through a pile of portfolios, means invisible.
      </p>

      <p>
        The most interesting part of any case study is the moment something went wrong and
        what you did about it. So is the decision you pushed back on, and why. Those don’t
        fit the template, and they’re the only parts that show how a designer actually
        thinks.
      </p>

      <RevealOnScroll><WhatsMissingVisual /></RevealOnScroll>

      <p>
        You don’t need to confess every chaotic meeting. You just need to show that real
        work happened, that people disagreed and something surprised you. My Scaler case
        study opens with me realising part of the mess was my fault. I’d take that over a
        tidy process diagram any day.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

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
