import RevealOnScroll from '@/components/RevealOnScroll';
import { VaguePreciseVisual, FramingQuestionVisual } from './visuals';
import styles from './content.module.css';

export default function GreenfieldContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        I spent the first few weeks of a brand-new Pax8 product without designing a single
        screen.
      </p>

      <p>
        Everyone says they want to build something from scratch. No legacy code and nobody
        else’s mess to work around. It sounds like freedom.
      </p>

      <p>
        Then you get one, and you realise every decision you make is about to become the
        system, and anything you put off will turn into someone else’s expensive problem
        later. There’s also nothing to point at when two people disagree, because nothing
        exists yet.
      </p>

      <p>
        That last part is the hard bit. On a normal project you can settle an argument by
        looking at what’s already there. On a greenfield one, every stakeholder has a
        different product in their head, and they’re all describing it with the same words.
      </p>

      <RevealOnScroll><VaguePreciseVisual /></RevealOnScroll>

      <p>
        The Pax8 monetisation work started with no brief and five stakeholders who each
        pictured something different. I didn’t design anything for the first few weeks. I
        spent them getting everyone to agree on one question: what does success look like
        for a partner using this in their first week?
      </p>

      <p>
        From then on, every argument about what to build could be checked against that
        question.
      </p>

      <RevealOnScroll><FramingQuestionVisual /></RevealOnScroll>

      <p>
        There’s research behind this. Successful design teams use disagreement to reduce
        uncertainty, while unsuccessful ones come out of every argument more confused than
        they went in. The difference is usually whether there’s a shared model concrete
        enough to disagree with.
      </p>

      <p>
        Kahneman’s work on anchoring matters here too. When there’s no reference point,
        people anchor on whatever comes first, like the first wireframe or the first
        confident person in the meeting. On a greenfield project, whoever frames the problem
        first has a huge amount of influence over everything after it. I’d rather that be
        the designer.
      </p>

      <p>
        The other thing nobody warns you about is how long your early decisions last. You’re
        building the product and its conventions at the same time, with no history to check
        against. The patterns you set in the first release will still be there years later,
        in screens nobody has imagined yet.
      </p>

      <p>
        So I treat a blank slate as a responsibility to set good constraints early, rather
        than permission to do anything I like.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Kahneman, D. (2011). <em>Thinking, Fast and Slow.</em> Farrar, Straus and Giroux. On
            anchoring bias and decision-making under uncertainty.
          </li>
          <li>
            Paletz, S.B.F., Chan, J. &amp; Schunn, C.D. (2017). Dynamics of Micro-Conflicts and Uncertainty in Successful and Unsuccessful Design Teams.{' '}<em>Design Studies</em>, 50, 39&ndash;69.{' '}
            <a href="https://doi.org/10.1016/j.destud.2017.02.002" target="_blank" rel="noopener noreferrer">
              doi.org
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
