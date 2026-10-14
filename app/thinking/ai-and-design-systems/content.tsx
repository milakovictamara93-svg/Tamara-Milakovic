import RevealOnScroll from '@/components/RevealOnScroll';
import { ArtifactsVisual, FrankensteinVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        AI can give you a beautifully consistent design system that still behaves like
        several different products.
      </p>

      <p>
        If you work on design systems, AI is already in your job, and nobody asked you
        first. Annoyingly, it’s great at some of it.
      </p>

      <p>
        Give it a button with five states and it’ll produce every variant with the right
        tokens in minutes, most of the way to production. The rest is edge cases and
        deciding whether the pattern was right in the first place, which is where the real
        time goes. It drafts documentation too. The drafts are generic and never explain why
        anything was decided, but editing a bad draft beats staring at an empty page. Naming
        tokens and spotting inconsistent values is rule-following work, and it does that
        reliably.
      </p>

      <RevealOnScroll><ArtifactsVisual /></RevealOnScroll>

      <p>
        The trouble starts when people treat making artifacts and making decisions as the
        same job.
      </p>

      <p>
        The hardest question in systems work is whether something should be a component at
        all. That depends on what keeps coming up in your product, and on which differences
        are real and which are just drift from people working without agreements. A model
        has no idea about any of that. It wasn’t there when your team made those calls, and
        it doesn’t know which ones were compromises or which ones exist because someone
        senior really liked purple.
      </p>

      <p>
        It can’t write the rules for how things behave either. It can tell you what a
        dropdown looks like. It can’t decide how filters should persist when someone
        switches views, or what an empty state should say halfway through a compliance
        workflow. You only know that from living with the product.
      </p>

      <p>
        At Scaler I saw what happens when a system is built without those decisions.
        Navigation looked the same in every module and behaved slightly differently in each
        one. It all looked polished and felt unreliable, and users are very good at noticing
        the second part. AI would have tidied up the visual side even faster and never
        noticed the rest.
      </p>

      <RevealOnScroll><FrankensteinVisual /></RevealOnScroll>

      <p>
        So I use it for the artifacts and keep the decisions with people. That split has
        saved me a lot of time, and a few arguments.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Standard Beagle Studio (2025).{' '}
            <em>AI-Assisted Design Workflows: A Strategic Guide for Product Teams.</em>{' '}
            <a href="https://standardbeagle.com/ai-assisted-design-workflows/" target="_blank" rel="noopener noreferrer">
              standardbeagle.com
            </a>
          </li>
          <li>
            Figma (2026).{' '}
            <em>How To Use AI for Product Design: 7 Use Cases.</em>{' '}
            <a href="https://www.figma.com/resource-library/ai-for-product-design/" target="_blank" rel="noopener noreferrer">
              figma.com
            </a>
          </li>
          <li>
            Netguru (2025).{' '}
            <em>Design System Adoption Pitfalls.</em>{' '}
            <a href="https://www.netguru.com/blog/design-system-adoption-pitfalls" target="_blank" rel="noopener noreferrer">
              netguru.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
