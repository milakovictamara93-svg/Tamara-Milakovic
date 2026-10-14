import RevealOnScroll from '@/components/RevealOnScroll';
import { TranslationChainVisual, DesignerLevelsVisual } from './visuals';
import styles from './content.module.css';

export default function TheBriefContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The best design decision I made that year was ignoring a brief. I’d like the record
        to show I read it three times first.
      </p>

      <p>
        It asked me to improve the reporting flow, which sounded perfectly clear right up
        until I looked at the reporting flow.
      </p>

      <p>
        The flow was fine. The problem was that people didn’t trust the numbers inside it
        and had no idea what to do with them. You can redesign that screen as many times as
        you like and nobody will trust those numbers one bit more. They’ll just distrust
        them in a nicer font.
      </p>

      <p>
        To be fair, whoever wrote it wasn’t doing anything wrong. That’s just how briefs get
        made. Someone sees a number drop and has a theory about why, and the theory becomes
        the brief. Nobody goes back to check it, because everyone’s busy, so by the time it
        reaches a designer, a hunch from a meeting has turned into a Jira ticket with a due
        date.
      </p>

      <RevealOnScroll><TranslationChainVisual /></RevealOnScroll>

      <p>
        So now I ask one annoying question before I touch Figma: is this even the right
        problem? In real life it looks a lot less heroic than it sounds.
      </p>

      <p>
        Mostly it’s me asking where a claim came from. “Users find this confusing.” Which
        users? Can I watch one being confused? Sometimes there’s a recording. Sometimes it
        turns out someone’s cousin said it at a family lunch.
      </p>

      <p>
        The rest is checking whether the business problem and the user problem are still
        holding hands. Usually they are. Sometimes they break up without telling anyone.
      </p>

      <p>
        Please don’t become the designer who interrogates every brief like it’s a suspect,
        though. Plenty of briefs are great. Ask, listen, and if it holds up, get to work.
      </p>

      <p>
        In the reporting project, it finally clicked in the third user session. A user read
        the dashboard, understood it, and then just sat there. They were waiting for some
        sign that the numbers were worth acting on, and the product never gave them one. I
        remember being relieved and a bit annoyed, because now I knew, and it was my
        problem.
      </p>

      <p>
        They needed help deciding. A prettier report would have let them wait in style.
      </p>

      <p>
        For me, that’s most of the jump to senior. At some point, checking the question
        becomes part of your job. You won’t always win that conversation, and sometimes
        nobody will invite you to it. Ask anyway. A slightly awkward meeting beats six weeks
        of gorgeous work on the wrong thing.
      </p>

      <RevealOnScroll><DesignerLevelsVisual /></RevealOnScroll>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Cross, N. (2011).{' '}
            <em>Design Thinking: Understanding How Designers Think and Work.</em>{' '}
            Berg Publishers.
          </li>
          <li>
            Dorst, K. (2015).{' '}
            <em>Frame Innovation: Create New Thinking by Design.</em>{' '}
            MIT Press.{' '}
            <a href="https://mitpress.mit.edu/9780262324274/frame-innovation/" target="_blank" rel="noopener noreferrer">
              mitpress.mit.edu
            </a>
          </li>
          <li>
            Rittel, H. &amp; Webber, M. (1973). Dilemmas in a General Theory of Planning.{' '}
            <em>Policy Sciences</em>, 4(2), 155&ndash;169.
          </li>
          <li>
            Nielsen Norman Group (2021). Discovery: What It Is and Why It Matters.{' '}
            <a href="https://www.nngroup.com/articles/discovery-phase/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Gothelf, J. &amp; Seiden, J. (2013).{' '}
            <em>Lean UX: Applying Lean Principles to Improve User Experience.</em>{' '}
            O&rsquo;Reilly Media.
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
