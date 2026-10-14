import RevealOnScroll from '@/components/RevealOnScroll';
import { AssumptionStackVisual } from './visuals';
import styles from './content.module.css';

export default function BriefContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The brief says users are dropping off in onboarding. It doesn’t say how anyone knows
        that.
      </p>

      <p>
        Someone hands you a brief: redesign the onboarding flow, users are dropping off.
        Most designers open Figma. I’ve learned to wait about thirty seconds and ask how we
        know onboarding is the problem.
      </p>

      <p>
        Briefs arrive looking like answers, sometimes with wireframes already sketched by
        whoever wrote them, which is always a fun surprise. Underneath there’s usually a
        pile of assumptions nobody has tested.
      </p>

      <p>
        The drop-off might not be an onboarding problem at all. Maybe the wrong people are
        signing up in the first place. Maybe it’s the product, and onboarding is just where
        people notice. A beautiful new onboarding flow for the wrong cause just gets you to
        the same drop-off faster.
      </p>

      <p>
        So treat the brief as a hypothesis and poke at it a little. None of this needs a
        three-month research phase every time someone asks for a new filter. You just find
        the assumption the whole thing is resting on. There’s always one. Usually it’s that
        the problem is where everyone thinks it is, or that fixing it will move the number
        we care about.
      </p>

      <RevealOnScroll><AssumptionStackVisual /></RevealOnScroll>

      <p>
        Then decide how expensive it would be to be wrong. On small bets, go ahead and
        adjust as you learn. On big ones, where being wrong means several engineers building
        the wrong thing for a quarter, spend a week finding out first.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Gothelf, J. &amp; Seiden, J. (2016). <em>Lean UX: Designing Great Products with Agile
            Teams.</em> O&rsquo;Reilly Media.{' '}
            <a href="https://www.oreilly.com/library/view/designing-for-product/9781491971451/ch05.html" target="_blank" rel="noopener noreferrer">
              oreilly.com
            </a>
          </li>
          <li>
            Nielsen Norman Group (2024). Discovery: Definition.{' '}
            <a href="https://www.nngroup.com/articles/discovery-phase/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Nielsen Norman Group (2024). Problem Statements in UX Discovery.{' '}
            <a href="https://www.nngroup.com/articles/problem-statements/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
