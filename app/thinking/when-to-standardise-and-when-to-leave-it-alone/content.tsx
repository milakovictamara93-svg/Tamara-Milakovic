import RevealOnScroll from '@/components/RevealOnScroll';
import { VariationTypesVisual, OverStandardisationSymptomsVisual } from './visuals';
import styles from './content.module.css';

export default function WhenToStandardiseContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        I found a bug in a colleague’s design. Then I found out the bug was me.
      </p>

      <p>
        I love a design review where I get to be right. This was not one of those.
      </p>

      <p>
        At Scaler I opened a colleague’s file and found a filter that was clearly mine. Or
        almost mine. The spacing was off, and the empty state did something I would never,
        ever do. I felt that little rush of being right and started typing a very “helpful”
        comment.
      </p>

      <p>
        Then I went looking for the documentation to link, and realised there wasn’t any.
        I’d used that filter all over my own modules and never documented it once.
      </p>

      <p>
        I deleted the comment and sat with that for a minute. It’s very hard to stay annoyed
        at someone for breaking a rule you never wrote down.
      </p>

      <p>
        Naturally, my next move was to overcorrect. I wanted to standardise everything, down
        to the tooltips. We were a tiny team with no time for that, so I did an audit
        instead and mapped every interaction across the modules to see where things didn’t
        match.
      </p>

      <p>
        Some of the differences were just mistakes. Our filters worked four different ways
        in four modules, for no better reason than different people having a Monday. That
        got fixed fast.
      </p>

      <p>
        The tables were different for a good reason. Analysts scanning thousands of rows of
        emissions data want tight, dense rows, and most other people need more space than
        that. If I’d forced one table on both, I’d have built something that disappoints two
        groups of users at once, which is efficient in the worst possible way.
      </p>

      <p>
        A few things were teams improvising because the system had nothing for them yet.
        Some I killed. A couple I stole and made official, and I’m only slightly sorry.
      </p>

      <RevealOnScroll><VariationTypesVisual /></RevealOnScroll>

      <p>
        My test for all of it was one question. Does this make someone relearn something
        they already learned somewhere else in the product? If it does, it goes. If the
        difference makes sense for that screen, it stays, and I write down why.
      </p>

      <p>
        We didn’t rebuild old screens either. New work followed the rules and old screens
        caught up whenever someone touched them. I’d love to call that strategy. Mostly, we
        just didn’t have the people.
      </p>

      <p>
        These days I get nervous when a design review turns into a checklist, and the only
        thing anyone asks is whether it matches the library. Nobody asks if it’s right for
        the person using it. The library can’t tell you that, and believe me, I’ve looked.
      </p>

      <RevealOnScroll><OverStandardisationSymptomsVisual /></RevealOnScroll>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Sweller, J. (1988). Cognitive Load During Problem Solving: Effects on Learning.{' '}
            <em>Cognitive Science</em>, 12(2), 257&ndash;285.
          </li>
          <li>
            UXPin (2026). <em>Design System Governance: A Guide to Prevent Drift.</em>{' '}
            <a href="https://www.uxpin.com/studio/blog/design-system-governance/" target="_blank" rel="noopener noreferrer">
              uxpin.com
            </a>
          </li>
          <li>
            Frost, B. (2016). <em>Atomic Design.</em> Brad Frost.{' '}
            <a href="https://atomicdesign.bradfrost.com" target="_blank" rel="noopener noreferrer">
              atomicdesign.bradfrost.com
            </a>
          </li>
          <li>
            Curtis, N. (2024). Team Models for Scaling a Design System. UX Planet.{' '}
            <a href="https://uxplanet.org/design-system-governance-models-f66a97367ad5" target="_blank" rel="noopener noreferrer">
              uxplanet.org
            </a>
          </li>
          <li>
            Nielsen Norman Group (2022). Design Systems 101.{' '}
            <a href="https://www.nngroup.com/articles/design-systems-101/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
