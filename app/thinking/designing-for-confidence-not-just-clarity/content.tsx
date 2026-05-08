import RevealOnScroll from '@/components/RevealOnScroll';
import { ClarityVsConfidenceVisual, ThreeIngredientsVisual } from './visuals';
import styles from './content.module.css';

export default function DesigningForConfidenceContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Clarity is the wrong goal. Not because clarity doesn&rsquo;t matter &mdash; it does,
        enormously. But clarity is a threshold, not a destination. Once a user understands what
        they&rsquo;re looking at, clarity has done its job. What happens next &mdash; whether they
        act, hesitate, second-guess, or abandon &mdash; is determined by something clarity alone
        can&rsquo;t produce.
      </p>

      <p>
        That something is confidence. Confidence is the feeling that you understand not just what
        the data says but what it means for you, right now, and what you should do about it.
        It&rsquo;s the difference between a user who reads a dashboard and a user who acts on one.
        Between a partner who creates a promotion and one who stares at the analytics for twenty
        minutes and closes the tab.
      </p>

      <p>
        Most product designers optimise for clarity. The best ones optimise for confidence. The gap
        between those two goals produces different products.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>What clarity gets right &mdash; and where it stops</h2>

      <p>
        Clarity is well understood as a design goal. Reduce visual noise. Establish hierarchy. Use
        language that matches the user&rsquo;s mental model. Make the next action obvious. These are
        table stakes &mdash; the baseline below which a product becomes genuinely hard to use.
      </p>

      <p>
        The problem is that clarity optimises for comprehension. And comprehension is not the same
        as decision readiness. A user can comprehend a dashboard perfectly &mdash; read every number
        correctly, understand every label, follow every chart &mdash; and still not know what to do.
        The data is clear. The implication is not. And in products where the whole point is to help
        users make decisions &mdash; analytics tools, monetisation platforms, compliance dashboards,
        performance trackers &mdash; an experience that stops at comprehension has stopped short of
        the actual job.
      </p>

      <p>
        Decision-making research is useful here. Kahneman&rsquo;s work on System 1 and System 2
        thinking distinguishes between fast, intuitive judgment and slow, deliberate reasoning{' '}
        [1]. Most users in analytical products are trying to use System 2 &mdash; careful, effortful
        reasoning &mdash; but the cognitive load of navigating a dense interface is constantly
        pulling them back toward System 1 shortcuts: pattern-matching, satisficing, acting on the
        first plausible interpretation rather than the correct one. Clarity reduces the interface
        load. Confidence design reduces the decision load &mdash; which is the harder and more
        consequential problem.
      </p>

      <RevealOnScroll><ClarityVsConfidenceVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The three ingredients of confidence</h2>

      <p>
        Confidence in a product context isn&rsquo;t a feeling that appears by accident. It&rsquo;s
        produced by specific design decisions. Three ingredients matter most.
      </p>

      <p>
        The first is interpretive scaffolding. Raw data requires interpretation. Most products
        provide the data and leave interpretation to the user. Confidence design provides the
        scaffold &mdash; the contextual layer that helps users understand not just what a number is
        but whether it&rsquo;s good, bad, expected, or actionable. A metric without a benchmark is
        a fact. A metric with a benchmark and a direction is information. A metric with a benchmark,
        a direction, and a suggested response is decision support. The difference between those three
        levels is not complexity. It&rsquo;s intentionality.
      </p>

      <p>
        The second is continuity between insight and action. Confidence collapses at transitions. A
        user who understands what needs to change and then has to navigate to a completely separate
        surface to change it loses the thread. By the time they arrive at the action surface, the
        interpretive context they built on the analytical surface has faded. They&rsquo;re starting
        the decision from scratch with a diminished signal. This is the most common structural
        failure in decision-support products &mdash; analytics and action tools exist in separate
        destinations, connected by a navigation step that was never designed as a handoff.
      </p>

      <p>
        The third is outcome visibility. Confidence is partly retrospective. Users who can see that
        their previous actions produced results are more confident in their next action. Users who
        act and then see nothing &mdash; no confirmation, no outcome signal, no connection between
        what they did and what happened &mdash; develop a specific kind of learned helplessness: a
        sense that their actions don&rsquo;t reliably produce effects, which makes future action
        feel risky rather than purposeful. Closing the loop is one of the most underinvested design
        moves in analytical products. It&rsquo;s also one of the highest-leverage ones.
      </p>

      <RevealOnScroll><ThreeIngredientsVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>Why clarity-first design misses this</h2>

      <p>
        Clarity-first design optimises for the moment of comprehension. Confidence design optimises
        for the moment of action. These are different moments, and designing for one doesn&rsquo;t
        automatically serve the other.
      </p>

      <p>
        A clarity-first designer looks at a dashboard and asks: can the user read this? Is the
        hierarchy correct? Is the language precise? Is the visual noise reduced? These are the right
        questions. They&rsquo;re just not the only ones.
      </p>

      <p>
        A confidence designer asks additional questions: when the user finishes reading this, do
        they know what to do? Is the gap between insight and action designed or just assumed? If the
        user acts and nothing visible changes, will they know it worked? What does hesitation look
        like in this flow, and have we reduced its most common causes?
      </p>

      <p>
        The second set of questions is harder to answer because it requires understanding user
        intent, not just user comprehension. It requires knowing what the user is trying to decide,
        not just what they&rsquo;re trying to understand. That&rsquo;s a research problem as much
        as a design problem &mdash; which is why confidence design tends to appear more naturally in
        teams where design and research are genuinely integrated, rather than sequenced.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>Confidence as a product differentiator</h2>

      <p>
        In crowded product categories, clarity is table stakes. Most mature products in a space have
        solved the clarity problem reasonably well. The ones that pull ahead have solved the
        confidence problem.
      </p>

      <p>
        This is particularly true in analytics, monetisation, compliance, and any domain where the
        product&rsquo;s job is to help users make consequential decisions. In these contexts, a user
        who feels confident is a user who returns, who acts, who trusts the product enough to make
        it part of their workflow. A user who is merely clear on what the data says is a user who is
        one bad decision away from attributing the outcome to the tool.
      </p>

      <p>
        Confidence is harder to design for than clarity. It requires more research, more systems
        thinking, more attention to transitions and outcomes and the emotional texture of
        decision-making. It doesn&rsquo;t show up cleanly in usability tests, because a user can
        pass every comprehension task and still leave the session without the thing the product
        actually needs to give them.
      </p>

      <p>
        But it shows up in retention. In activation. In the qualitative signal that distinguishes a
        product users rely on from a product users tolerate.
      </p>

      <p>
        <em>Clarity tells users what they&rsquo;re looking at. Confidence tells them it&rsquo;s safe to act.</em>
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Kahneman, D. (2011).{' '}
            <em>Thinking, Fast and Slow.</em>{' '}
            Farrar, Straus and Giroux. On System 1 vs System 2 thinking and decision-making under cognitive load.
          </li>
          <li>
            Tversky, A. &amp; Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases.{' '}
            <em>Science</em>, 185(4157), 1124&ndash;1131.
          </li>
          <li>
            Nielsen Norman Group (2020). Confidence in Design: Building Trust Through UX.{' '}
            <a href="https://www.nngroup.com/articles/trustworthy-design/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Bandura, A. (1977). Self-efficacy: Toward a Unifying Theory of Behavioral Change.{' '}
            <em>Psychological Review</em>, 84(2), 191&ndash;215.
          </li>
          <li>
            Few, S. (2009).{' '}
            <em>Now You See It: Simple Visualization Techniques for Quantitative Analysis.</em>{' '}
            Analytics Press.
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
