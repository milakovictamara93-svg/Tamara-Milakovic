import RevealOnScroll from '@/components/RevealOnScroll';
import { AssumptionStackVisual } from './visuals';
import styles from './content.module.css';

export default function BriefContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Someone hands you a brief. It says: <em>redesign the onboarding flow. Users are dropping
        off.</em> Most designers open Figma. The smarter move is to pause for thirty seconds and
        ask: <em>how do we know that&rsquo;s the problem?</em>
      </p>

      <p>
        Briefs feel like answers. They arrive with confidence &mdash; sometimes with a deadline
        attached, sometimes with wireframes already sketched out by whoever wrote them. They have
        the structure of a solved problem. But underneath most briefs is a stack of assumptions that
        nobody has tested, and sometimes hasn&rsquo;t even named out loud.
      </p>

      <p>
        The drop-off might not be an onboarding problem. It might be a targeting problem &mdash; the
        wrong users arriving in the first place. It might be a product-market fit problem dressed up
        as a UX problem. It might be something the data simply can&rsquo;t tell you without talking
        to a human being first. Designing a better onboarding flow for the wrong root cause
        doesn&rsquo;t fix anything. It just ships faster.
      </p>

      <hr className={styles.divider} />

      <p>
        This isn&rsquo;t an argument against briefs. It&rsquo;s an argument about what they
        actually are.
      </p>

      <p>
        Jeff Gothelf and Josh Seiden, authors of <em>Lean UX</em>, frame it cleanly: a brief
        isn&rsquo;t a set of requirements, it&rsquo;s a starting hypothesis. &ldquo;We start with
        assumptions instead of requirements. We create and test hypotheses. Our goal is not to
        create a deliverable &mdash; it&rsquo;s to change something in the world.&rdquo; [1] That
        shift sounds small. In practice it changes everything about how you begin a project.
      </p>

      <p>
        If the brief is a hypothesis, your first job isn&rsquo;t to execute it. It&rsquo;s to
        pressure-test it. What would have to be true for this brief to be correct? What&rsquo;s the
        fastest way to find out if it is? What would change about the solution if it isn&rsquo;t?
      </p>

      <p>
        The Nielsen Norman Group describes discovery as the phase that exists precisely because
        moving forward on only assumptions is risky &mdash; the team may end up solving a problem
        that doesn&rsquo;t really matter, wasting time, money, and effort [2]. Discovery isn&rsquo;t
        a luxury. It&rsquo;s the thing that determines whether the work you&rsquo;re about to do is
        the right work.
      </p>

      <RevealOnScroll><AssumptionStackVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        In practice, this looks less dramatic than it sounds.
      </p>

      <p>
        It doesn&rsquo;t mean ignoring the brief or starting a three-month research phase every
        time someone asks for a new filter. It means asking &mdash; quickly, often informally
        &mdash; <em>what assumption is load-bearing here?</em> Every brief has one. The assumption
        that the problem exists where we think it does. The assumption that fixing this will move
        the metric we care about. The assumption that users experience this the way we imagine
        they do.
      </p>

      <p>
        Name the assumption. Then decide how much it costs to be wrong about it.
      </p>

      <p>
        On small bets, you proceed and adjust. On large ones &mdash; the kind where the wrong
        answer means six engineers building the wrong thing for a quarter &mdash; you spend a week
        finding out before you commit.
      </p>

      <p>
        The most useful question isn&rsquo;t <em>what should we design?</em> It&rsquo;s an earlier
        one: <em>what would have to be true for this design to succeed?</em> That question surfaces
        the assumptions hiding inside the brief without requiring a formal research plan, a
        stakeholder workshop, or anyone&rsquo;s permission.
      </p>

      <hr className={styles.divider} />

      <p>
        The designers who do this well aren&rsquo;t contrarian. They don&rsquo;t push back on
        everything. They just treat the brief as the beginning of a conversation rather than the end
        of one &mdash; and they&rsquo;ve developed a quiet habit of asking the question that nobody
        else thought to ask before the work started.
      </p>

      <p>
        Most products have a design problem and a problem upstream of it. The brief usually describes
        the first one. The job is to find the second one before you start solving.
      </p>

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
