import RevealOnScroll from '@/components/RevealOnScroll';
import { WorkflowWinsVisual, FitVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        I’ve spent two years testing AI tools. Most of them made my week longer.
      </p>

      <p>
        I’ve tested a lot of AI tools over the last two years, and most of them didn’t save
        me any time. They just moved the work around. Instead of designing, I was fixing
        what came back and explaining why the generated screen didn’t match our design
        system.
      </p>

      <p>
        A few things did stick, though, and I wouldn’t go back.
      </p>

      <p>
        Research synthesis is the big one. I give a model a stack of interview transcripts
        and ask for themes and anything that contradicts them. What used to take a couple of
        weeks takes a few days, because my job changes from finding the themes to checking
        them. And I do check them. Models will happily invent a pattern, or make the
        findings sound much tidier than the interviews were.
      </p>

      <p>
        It’s also great when I need lots of options quickly, like ten layout directions or
        five versions of a microcopy line to test. A day of exploring turns into about
        twenty minutes. I rarely ship any of them. I just get to the choosing part faster.
      </p>

      <p>
        First drafts of documentation help too. I edit them into my own voice, and the
        editing is often where I work out what I actually think.
      </p>

      <RevealOnScroll><WorkflowWinsVisual /></RevealOnScroll>

      <p>
        Where it wastes my time is anything that needs precision early on. The model doesn’t
        know my users, my product or the endless conversations that shaped the brief. Its
        output looks informed, so it takes a while to notice it isn’t, and by then fixing it
        costs more than starting over would have.
      </p>

      <p>
        Generated production UI is the other one. It drifts from the design system and
        leaves developers to reconcile the difference. I’ll use it to explore and then close
        the tab.
      </p>

      <p>
        The trap is iterating on whatever the AI gives you, because you end up stuck with
        its assumptions. I look at the options, figure out why the good ones work, and build
        from that in my own tools.
      </p>

      <p>
        My rough rule is that AI helps when the task is clear and I can hand over the
        context. It struggles when the problem is fuzzy or the important context is in
        someone’s head, which, in my experience, describes most of the interesting work.
      </p>

      <RevealOnScroll><FitVisual /></RevealOnScroll>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Startup House (2026).{' '}
            <em>The Future of Product Design: Building AI-Native Digital Services.</em>{' '}
            <a href="https://startup-house.com/blog/future-of-product-design-ai-workflows-2026" target="_blank" rel="noopener noreferrer">
              startup-house.com
            </a>
          </li>
          <li>
            Creative Boom (2024).{' '}
            <em>Special report: how design agencies are actually using AI in 2024.</em>{' '}
            <a href="https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/" target="_blank" rel="noopener noreferrer">
              creativeboom.com
            </a>
          </li>
          <li>
            Standard Beagle Studio (2025).{' '}
            <em>AI-Assisted Design Workflows: A Strategic Guide for Product Teams.</em>{' '}
            <a href="https://standardbeagle.com/ai-assisted-design-workflows/" target="_blank" rel="noopener noreferrer">
              standardbeagle.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
