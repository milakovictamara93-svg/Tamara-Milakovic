import RevealOnScroll from '@/components/RevealOnScroll';
import { VaguePreciseVisual, FramingQuestionVisual } from './visuals';
import styles from './content.module.css';

export default function GreenfieldContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Everyone says they want to work on a blank slate. Build something from scratch. No legacy
        code, no inherited decisions, no one to blame for the constraints. It sounds like freedom.
        It isn&rsquo;t. It&rsquo;s accountability with nowhere to hide.
      </p>

      <p>
        When there&rsquo;s no existing system to reference, every decision you make <em>is</em>{' '}
        the system. Every pattern you introduce becomes the convention. Every call you defer becomes
        someone else&rsquo;s problem to fix later &mdash; usually at three times the cost.
        Greenfield work feels open until you realize the openness is the challenge. There&rsquo;s
        no floor. There&rsquo;s no ceiling. There&rsquo;s just you, a blank Figma file, and the
        question of where to even start.
      </p>

      <hr className={styles.divider} />

      <p>
        Most designers approach greenfield work like they approach any other project: define the
        problem, sketch solutions, iterate. The issue is that approach assumes a stable problem to
        iterate on. In greenfield contexts, the problem itself is often contested. Stakeholders have
        different versions of what&rsquo;s being built in their heads. There&rsquo;s no existing
        product to point to when someone&rsquo;s interpretation conflicts with another. You
        can&rsquo;t resolve a disagreement about direction by looking at what already exists
        &mdash; nothing does yet.
      </p>

      <p>
        Research on design teams confirms what this feels like from the inside: successful design
        teams harness interpersonal conflicts to reduce uncertainty, while in unsuccessful teams,
        uncertainty rises after conflict [4]. The difference isn&rsquo;t whether disagreement
        happens &mdash; it always does &mdash; but whether the team has a shared model visible
        enough to make disagreements resolvable. Without that shared model, every stakeholder
        meeting risks generating more uncertainty than it resolves.
      </p>

      <p>
        This is why the first design deliverable in a greenfield project is almost never a screen.
        It&rsquo;s a shared question. A model. A framework that gives everyone something concrete
        enough to disagree with specifically. The goal isn&rsquo;t to have the answer &mdash;
        it&rsquo;s to convert vague disagreement into precise disagreement. Precise disagreements
        are solvable. Vague ones compound.
      </p>

      <RevealOnScroll><VaguePreciseVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        There&rsquo;s a cognitive dimension to this worth naming. Kahneman&rsquo;s work on
        decision-making under uncertainty shows that when people lack clear reference points, they
        anchor on whatever comes first &mdash; the first wireframe, the first framing of the
        problem, the first stakeholder who speaks with confidence [1]. In greenfield work, the
        designer who defines the frame first has disproportionate influence over everything that
        follows. That&rsquo;s not a warning. It&rsquo;s a reason to invest in the framing before
        anything else is visible.
      </p>

      <p>
        On the Pax8 monetization project, I spent the first weeks not designing &mdash; but
        establishing a single question that forced alignment across five stakeholders who each had
        a different product in their head: <em>what does success look like for a partner who uses
        this in their first week?</em> That question became the design spine for everything that
        followed. It didn&rsquo;t answer what to build. It made every subsequent disagreement about
        building answerable.
      </p>

      <RevealOnScroll><FramingQuestionVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Greenfield work also means you&rsquo;re setting standards in real time with no
        organisational memory to draw from. There&rsquo;s no existing interaction pattern to
        inherit. No one to ask how edge cases were handled before. You&rsquo;re building the product
        and the conventions and the shared understanding simultaneously &mdash; and the decisions
        you make in the first phase don&rsquo;t just affect the first release. They compound into
        every surface that comes after.
      </p>

      <p>
        Designers working in this mode need to move away from the view of design as problem-solving
        with clear, fixed goals toward a more flexible, adaptive approach that embraces ambiguity
        &mdash; while still producing something stable enough for a team to build from [3]. In
        greenfield work, the goal isn&rsquo;t certainty. It&rsquo;s a model that&rsquo;s clear
        enough to move forward and honest enough to revise when you learn something new.
      </p>

      <p>
        The transferable lesson isn&rsquo;t a technique. It&rsquo;s an orientation. Greenfield
        work rewards the designers who treat the absence of constraints not as freedom to go
        anywhere, but as responsibility to establish the right constraints early &mdash; because
        the constraints you set will outlast the first version of the product by years.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Kahneman, D. (2011). <em>Thinking, Fast and Slow.</em> Farrar, Straus and Giroux. On
            anchoring bias and decision-making under uncertainty.
          </li>
          <li>
            Lebiere, C. &amp; Anderson, J.R. (2011). Cognitive Constraints on Decision Making
            under Uncertainty. <em>Frontiers in Psychology</em>, 2, 305.{' '}
            <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2011.00305/full" target="_blank" rel="noopener noreferrer">
              frontiersin.org
            </a>
          </li>
          <li>
            Youn, N. et al. (2023). Navigating Design, Data, and Decision in an Age of Uncertainty.{' '}
            <em>Design Studies</em>, 88.{' '}
            <a href="https://www.sciencedirect.com/science/article/pii/S2405872623000448" target="_blank" rel="noopener noreferrer">
              sciencedirect.com
            </a>
          </li>
          <li>
            Eris, O. &amp; Badke-Schaub, P. (2017). The Dynamics of Micro-Conflicts and
            Uncertainty in Successful and Unsuccessful Design Teams. <em>Design Studies</em>, 50,
            200&ndash;228.{' '}
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0142694X17300133" target="_blank" rel="noopener noreferrer">
              sciencedirect.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
