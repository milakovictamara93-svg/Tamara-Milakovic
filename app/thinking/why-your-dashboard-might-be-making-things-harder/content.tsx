import RevealOnScroll from '@/components/RevealOnScroll';
import { DensityExperimentVisual, SignalNoiseVisual } from './visuals';
import styles from './content.module.css';

export default function DashboardContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Picture a spreadsheet. Hundreds of rows. Emissions data, supplier records, compliance
        deadlines. A sustainability analyst opens it every morning and has to find something specific
        &mdash; a missing disclosure, a number that doesn&rsquo;t add up, a supplier who
        hasn&rsquo;t responded in six weeks.
      </p>

      <p>
        Now picture someone redesigning that spreadsheet into a &ldquo;modern dashboard.&rdquo;
        Cards instead of rows. Summary tiles at the top. Progressive disclosure so you don&rsquo;t
        see the detail until you click for it. Cleaner. More approachable. Slower to actually use.
      </p>

      <p>
        This is the readability trap &mdash; and it&rsquo;s one of the most common ways enterprise
        software quietly fails the people who depend on it most.
      </p>

      <hr className={styles.divider} />

      <p>
        The UX industry has a well-earned obsession with reducing cognitive load. The research is
        real: unnecessary complexity tires users out, increases errors, drives people away. George
        Miller&rsquo;s foundational 1956 paper established that working memory can hold only around
        seven items at once &mdash; a finding that has shaped how designers think about information
        density for decades. The problem is the word <em>unnecessary</em>.
      </p>

      <p>
        In a consumer app, most complexity is unnecessary. Users are doing one thing, occasionally,
        with low stakes attached to mistakes. Simplify aggressively and things get measurably better.
      </p>

      <p>
        In professional analytical tools, complexity is often load-bearing. It&rsquo;s there because
        the domain is complex, the decisions are consequential, and the users are experts who need
        the data &mdash; not a curated summary of it. When you remove that complexity in the name of
        good UX, you don&rsquo;t reduce their cognitive load. You relocate it. Now they have to
        click through three screens to reconstruct the picture that one well-designed table would
        have shown them at a glance.
      </p>

      <p>
        This is what researchers call the &ldquo;information scent&rdquo; problem: when the cues
        that help users navigate toward the data they need are hidden behind progressive disclosure
        and summary cards, expert users spend more time hunting and less time working. The interface
        that looks simpler is actually doing more cognitive work to the person using it.
      </p>

      <hr className={styles.divider} />

      <p>
        When I was working on Scaler &mdash; an ESG analytics platform where users spend the
        majority of their time in dense, multi-dimensional data views &mdash; I ran evaluation
        sessions comparing different density configurations on realistic datasets. The kind of data
        users actually work with, not the sanitized version.
      </p>

      <RevealOnScroll><DensityExperimentVisual /></RevealOnScroll>

      <p>
        This finding is consistent with research on expert performance in data-intensive domains.
        Reducing visible data in the name of simplicity increased task completion time and error
        rates for expert users, even when novice users benefited from the same change. Experts and
        novices are not the same user. Designing for one often actively harms the other.
      </p>

      <hr className={styles.divider} />

      <p>
        The instinct to simplify is not wrong. It just needs a harder question attached to it: is
        the complexity I&rsquo;m removing noise, or signal?
      </p>

      <RevealOnScroll><SignalNoiseVisual /></RevealOnScroll>

      <p>
        Alberto Cairo frames this well in <em>The Truthful Art</em> (2016): the goal of a
        well-designed data display is not to simplify reality but to make complexity navigable.
        There is a difference between visual noise &mdash; decoration, redundancy, unnecessary
        variation &mdash; and substantive complexity that reflects the actual structure of the
        domain. The designer&rsquo;s job is to know which is which, and to be honest about the
        difference when stakeholders push for a cleaner screen.
      </p>

      <p>
        The difference between simple and legible is the whole game. Simple means fewer elements.
        Legible means the right elements, arranged so the user can find what they need, understand
        what it means, and act. For expert analytical work, those two things point in opposite
        directions.
      </p>

      <p>Design for the task, not the screenshot.</p>

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

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
