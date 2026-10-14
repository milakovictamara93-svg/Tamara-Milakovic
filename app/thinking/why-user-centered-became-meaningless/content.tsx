import RevealOnScroll from '@/components/RevealOnScroll';
import { UCDClaimVsRealityVisual, ResearchImpactVisual } from './visuals';
import styles from './content.module.css';

export default function UserCenteredContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every job description wants a user-centered designer. Nobody can tell me what that
        means.
      </p>

      <p>
        “User-centered design” is in almost every job description and design principles deck
        I’ve read in the last ten years. Nobody argues against it, and nobody defines it. At
        this point it means about as much as “we care about quality”.
      </p>

      <p>
        It used to mean something quite radical. When Don Norman and others were pushing it
        in the 80s, products were built around what was technically elegant, and people were
        expected to adapt. Saying “study people first and design around how they think” was
        a real fight.
      </p>

      <p>
        Then it turned into a checklist, and these days it’s mostly something you tick
        before doing what you were already going to do.
      </p>

      <RevealOnScroll><UCDClaimVsRealityVisual /></RevealOnScroll>

      <p>
        The uncomfortable part is how often research is used to confirm decisions instead of
        challenge them. It gets commissioned after the direction is set, and designers are
        brought in to validate rather than question.
      </p>

      <p>
        The version worth keeping is a simple question: what did we change because of what
        we learned? If the wireframes were finished before the interviews happened, the
        honest answer is nothing, and the research was decoration.
      </p>

      <RevealOnScroll><ResearchImpactVisual /></RevealOnScroll>

      <p>
        You can see this in portfolios too. Lots of them show the personas and the affinity
        maps. Very few show a decision that went differently because a real person said
        something inconvenient. That’s the bit I’d want to read.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Norman, D. &amp; Draper, S. (Eds.) (1986). <em>User Centered System Design: New
            Perspectives on Human-Computer Interaction.</em> Lawrence Erlbaum Associates.
          </li>
          <li>
            Martin, Y. (n.d.). User Centered Design Is Obsolete. UXDX.{' '}
            <a href="https://uxdx.com/blog/user-centered-design-is-obsolete/" target="_blank" rel="noopener noreferrer">
              uxdx.com
            </a>
          </li>
          <li>
            Pacheco, J. (2025). User-Centred Design Is Not So User-Centered. Medium.{' '}
            <a href="https://medium.com/@joshuapacheco/user-centred-design-is-not-so-user-centered-how-biased-is-it-1a41f4ac47c" target="_blank" rel="noopener noreferrer">
              medium.com
            </a>
          </li>
          <li>
            Nielsen Norman Group (2026). State of UX 2026: Design Deeper to Differentiate.{' '}
            <a href="https://www.nngroup.com/articles/state-of-ux-2026/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
