import RevealOnScroll from '@/components/RevealOnScroll';
import { DensityExperimentVisual, SignalNoiseVisual } from './visuals';
import styles from './content.module.css';

export default function DashboardContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        We tested the cleanest, airiest table layout against denser ones. The pretty one
        lost.
      </p>

      <p>
        Picture a sustainability analyst who opens a big spreadsheet every morning to hunt
        for something specific, like a number that doesn’t add up or a supplier who’s gone
        quiet.
      </p>

      <p>
        Now someone “modernises” it into a dashboard, with summary tiles on top and cards
        instead of rows. It looks cleaner and friendlier, and it’s slower to use.
      </p>

      <p>
        UX has a healthy obsession with reducing cognitive load, and the research behind it
        is real. Miller’s famous 1956 paper on the limits of working memory has shaped how
        designers think about density for decades. The catch is the word unnecessary. In a
        consumer app, most complexity is unnecessary, and simplifying makes things better.
        In a professional analytics tool, a lot of the complexity is there because the work
        is complex and the people doing it are experts.
      </p>

      <p>
        Remove it and the load just moves somewhere else, usually into three extra clicks to
        rebuild the picture one good table would have shown them.
      </p>

      <p>
        There’s a name for part of this. Pirolli and Card called it information scent: the
        cues that tell people they’re getting closer to what they need. Summary cards and
        collapsed sections hide those cues, so experts spend their time hunting instead of
        working. The screen looks simpler while the person using it does more of the
        thinking.
      </p>

      <p>
        At Scaler I ran evaluation sessions comparing table densities, using realistic
        datasets instead of a tidy demo version. The sparsest layout, with the most
        whitespace and the most “designed” look, had the lowest accuracy on column-scanning
        tasks and needed the most scrolling. The densest one was bad for scan speed. A
        medium-high density with deliberate spacing rules won on everything we measured.
      </p>

      <RevealOnScroll><DensityExperimentVisual /></RevealOnScroll>

      <p>
        Experts and beginners aren’t the same user, and research on expert analysts points
        the same way: hiding data in the name of simplicity makes experts slower and less
        accurate, even when it helps beginners.
      </p>

      <p>
        In sustainability work, the details that get hidden first are often the ones that
        matter most. Whether a figure is Scope 2 or Scope 3, or whether a supplier number
        was verified or self-reported, can decide whether a compliance filing is right.
      </p>

      <p>
        None of this means simplifying is wrong. Decoration and pointless repetition are
        noise, and they should go. Alberto Cairo argues in The Truthful Art that the job is
        to make complexity navigable, not to pretend it isn’t there, and I think that’s the
        right test for any expert tool.
      </p>

      <RevealOnScroll><SignalNoiseVisual /></RevealOnScroll>

      <p>
        So before cutting anything, I ask whether it’s noise or signal. Simple means fewer
        things on screen. Legible means the right things, arranged so people can find them
        and act on them. For expert work, those two often pull in opposite directions.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Miller, G.A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on Our
            Capacity for Processing Information. <em>Psychological Review</em>, 63(2), 81&ndash;97.{' '}
            <a href="https://psychclassics.yorku.ca/Miller/" target="_blank" rel="noopener noreferrer">
              psychclassics.yorku.ca
            </a>
          </li>
          <li>
            Pirolli, P. &amp; Card, S. (1999). Information Foraging.{' '}
            <em>Psychological Review</em>, 106(4), 643&ndash;675. Foundational paper on information
            scent and navigation in complex data environments.
          </li>
          <li>
            Dull, R.B. &amp; Tegarden, D.P. (1999). A Comparison of Three Visual Representations
            of Complex Multidimensional Accounting Information.{' '}
            <em>Journal of Information Systems</em>, 13(2), 117&ndash;131.
          </li>
          <li>
            Cairo, A. (2016).{' '}
            <em>The Truthful Art: Data, Charts, and Maps for Communication</em>. New Riders.
          </li>
        </ol>
      </div>
    </div>
  );
}
