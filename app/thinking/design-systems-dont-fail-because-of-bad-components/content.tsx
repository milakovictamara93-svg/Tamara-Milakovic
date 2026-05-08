import RevealOnScroll from '@/components/RevealOnScroll';
import { FailureModeVisual } from './visuals';
import styles from './content.module.css';

export default function DesignSystemsContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every design system post-mortem sounds the same. The components were well-crafted. The
        documentation was thorough. Someone spent three months building a Figma library with every
        state, every variant, every edge case covered. And then nobody used it.
      </p>

      <p>Not because it was bad. Because it solved the wrong problem.</p>

      <hr className={styles.divider} />

      <p>
        Here&rsquo;s what most design systems are built to fix: inconsistency. Buttons that
        don&rsquo;t match. Spacing that drifts. Color values that multiply across codebases until
        nobody knows which shade of blue is the real one.
      </p>

      <p>
        Those are real problems. Fixing them is valuable. But inconsistency is a symptom, not a
        cause &mdash; and building a component library treats the symptom while leaving the cause
        untouched.
      </p>

      <p>
        The cause is almost always one of two things: designers making independent decisions without
        a shared reference point, or a team that grew faster than the agreements holding it together.
        If there&rsquo;s one lesson that stands out across every design system implementation
        &mdash; successful or not &mdash; it&rsquo;s this: culture matters more than components [1].
        You can&rsquo;t fix an alignment problem with a Figma file.
      </p>

      <hr className={styles.divider} />

      <p>
        I know this firsthand. At Scaler, I was the designer who had created some of the
        inconsistency I later had to fix. Patterns I&rsquo;d introduced had been followed &mdash;
        just slightly wrong, because I&rsquo;d never written them down. The gap wasn&rsquo;t
        malicious. It wasn&rsquo;t even careless. It was the entirely predictable result of a team
        moving fast with shared understanding that existed only in one person&rsquo;s head.
      </p>

      <p>
        What I built in response wasn&rsquo;t primarily a component library. It was a set of
        documented decisions &mdash; interaction contracts that turned implicit knowledge into
        explicit shared agreements. The components followed. The documentation followed. But none of
        it would have held without first answering a harder question: <em>what are we actually
        trying to standardize, and why?</em>
      </p>

      <p>
        Adoption isn&rsquo;t simply a usage metric &mdash; it reflects how well the system
        integrates with real-world workflows. If it&rsquo;s not evolving based on those signals,
        adoption will stall and eventually regress [2]. A design system that doesn&rsquo;t fit the
        way teams actually work doesn&rsquo;t get used. And a design system that doesn&rsquo;t get
        used is documentation &mdash; well-organized, possibly beautiful, and completely inert.
      </p>

      <RevealOnScroll><FailureModeVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        The failure mode that nobody talks about is the system built in isolation. A small team
        disappears for two quarters, builds something comprehensive and technically impressive, then
        emerges and presents it to the rest of the organization. Without involving other teams
        earlier than feels necessary, you risk building tools they can&rsquo;t use [3]. The teams
        who were never consulted don&rsquo;t feel ownership. The teams who had edge cases that
        weren&rsquo;t considered find the system doesn&rsquo;t work for their most common problems.
        So they work around it. Then they stop referring to it. Then six months later someone
        announces a new design system initiative and the cycle starts again.
      </p>

      <p>
        The fix isn&rsquo;t more components. It&rsquo;s a different definition of what the system
        is for.
      </p>

      <p>
        A design system isn&rsquo;t a product you ship once. It&rsquo;s an ongoing agreement
        between everyone who builds the product &mdash; about what decisions have been made, why,
        and how to extend them when you hit a case the system didn&rsquo;t anticipate. You can&rsquo;t
        really buy a design system &mdash; it&rsquo;s as much process and culture as it is software
        [4]. The Figma library is the artifact. The agreement is the system.
      </p>

      <hr className={styles.divider} />

      <p>
        Building that agreement is harder than building the library. It requires conversations that
        feel slow when you&rsquo;re itching to make things. It requires involving people before
        you&rsquo;re ready to show them anything. It requires writing documentation for the designer
        who&rsquo;s mid-problem, under deadline, looking for a fast answer they can trust &mdash;
        not for the ideal reader who&rsquo;ll study every page.
      </p>

      <p>But it&rsquo;s the only part that makes the rest of it stick.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Netguru (2025). Design System Adoption Pitfalls.{' '}
            <a href="https://www.netguru.com/blog/design-system-adoption-pitfalls" target="_blank" rel="noopener noreferrer">
              netguru.com
            </a>
          </li>
          <li>
            Okoone (2025). Why Your Design System Isn&rsquo;t Taking Off.{' '}
            <a href="https://www.okoone.com/spark/product-design-research/why-your-design-system-isnt-taking-off/" target="_blank" rel="noopener noreferrer">
              okoone.com
            </a>
          </li>
          <li>
            Rangle.io (2020). Design Without the System: Why Design System Adoptions Fail.{' '}
            <a href="https://rangle.io/blog/design-without-the-system-why-design-system-adoptions-fail" target="_blank" rel="noopener noreferrer">
              rangle.io
            </a>
          </li>
          <li>
            Knapsack (2023). Why Design Systems Fail.{' '}
            <a href="https://www.knapsack.cloud/blog/why-design-systems-fail" target="_blank" rel="noopener noreferrer">
              knapsack.cloud
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
