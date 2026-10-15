import RevealOnScroll from '@/components/RevealOnScroll';
import {
  PageJumpVisual,
  SpinnerDelayVisual,
  StuckBarVisual,
  OptimisticLikeVisual,
} from './visuals';
import styles from '../article.module.css';

export default function LoadingStatesContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Our table loaded twenty rows behind a skeleton of three, and the whole page jumped.
      </p>

      <p>
        When I audited the Scaler platform, I expected the filters to be a mess, and they
        were. Loading turned out to be worse, though. It was broken in all six modules, and
        nobody had ever complained about it, because each case felt too small to bother
        with.
      </p>

      <p>
        In some modules the content area collapsed to nothing while data loaded, so the page
        jumped up and then dropped back down when the table arrived. Other modules had a
        skeleton, which sounds better, except a table of twenty rows would load behind a
        skeleton of three. It was the same jump, just with better manners.
      </p>

      <p>
        If you’re an analyst halfway through a compliance report, that jump is exactly how
        you lose your place. Then you scroll around looking for the row you were on, and the
        product starts to feel like it’s working against you a little.
      </p>

      <RevealOnScroll><PageJumpVisual /></RevealOnScroll>

      <p>
        We had all the usual loading components in the library. Nobody had written down when
        to use which one, so people grabbed whatever was quickest to build. I can’t really
        blame them.
      </p>

      <p>
        So now I start from the wait itself. If the screen has a predictable layout, like a
        table or a list of cards, use a skeleton that matches the real thing, with the same
        row count and the same column widths. For a single action, like a button after you
        submit, a spinner is fine, delayed by a couple of hundred milliseconds so it doesn’t
        flash when the response is quick. Anything long and measurable, like an export or an
        upload, gets a progress bar.
      </p>

      <RevealOnScroll><SpinnerDelayVisual /></RevealOnScroll>

      <p>
        Please don’t let that bar sit at 99%. Everyone has watched a progress bar do that,
        and nobody has fully trusted one since.
      </p>

      <RevealOnScroll><StuckBarVisual /></RevealOnScroll>

      <p>
        Sometimes the best loading state is none at all. If you like a post or tick off a
        task, just show it as done and deal with the rare failure. I wouldn’t do that for
        payments or deleting things, though. When money or someone’s data is involved, a
        second of visible “working on it” is reassuring, and people actually want it.
      </p>

      <RevealOnScroll><OptimisticLikeVisual /></RevealOnScroll>

      <p>
        The rule we wrote at Scaler was boring: the layout never collapses while something
        loads. It fixed more than any new component would have.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and complex interaction problems.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Nielsen Norman Group (2024). Skeleton Screens 101.{' '}
            <a href="https://www.nngroup.com/articles/skeleton-screens/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Nielsen Norman Group. Skeleton Screens vs. Progress Bars vs. Spinners (Video).{' '}
            <a href="https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
