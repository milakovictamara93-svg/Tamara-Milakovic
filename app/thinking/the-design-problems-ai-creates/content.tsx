import RevealOnScroll from '@/components/RevealOnScroll';
import { PlausibleNonsenseVisual, SynthesisVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The AI output that worries me most is the stuff that looks finished.
      </p>

      <p>
        I’ve read a lot of articles about everything AI fixes for designers, and I suspect a
        few of them were written by AI. The things it breaks get much less attention, mostly
        because they’re harder to spot.
      </p>

      <p>
        The one I run into most is plausible nonsense. AI makes polished work faster than
        anyone can review it, and polish is very convincing. A persona with a name and a
        stock photo looks like research, even when the only user involved was the model. A
        flow can make perfect sense on its own terms and still be built on a misreading of
        what people are trying to do.
      </p>

      <p>
        The annoying part is who falls for it. Juniors tend to be suspicious of AI output.
        Seniors on a deadline are the ones who let it skip a step they’d normally do
        themselves, because it looks like something they would have made.
      </p>

      <RevealOnScroll><PlausibleNonsenseVisual /></RevealOnScroll>

      <p>
        Everything also starts to look the same. Ask for “a professional dashboard for
        analytics users” and you get the average of every dashboard ever made, because
        averages are what these models are good at. Products that feel distinct usually come
        from someone who knows their users well enough to break a convention on purpose. A
        model trained on conventions won’t do that for you. I’m happy to use it for a
        starting direction, and then I go somewhere else with it.
      </p>

      <p>
        What bothers me most is research. AI can summarise thirty interviews in an
        afternoon, and the summary is useful. But it smooths things out. The phrase one user
        kept repeating that didn’t fit any theme disappears. So does the person who
        contradicted themselves in a way that told you more than their actual answer.
      </p>

      <p>
        If a team only ever reads the summary, they slowly know their users less well, and
        nobody notices until a big decision rests on a theme that turns out to be a
        statistical accident. It’s a kind of debt, and it tends to come due right before a
        launch.
      </p>

      <RevealOnScroll><SynthesisVisual /></RevealOnScroll>

      <p>
        I still use AI every day. I just check its work as carefully as anything else that
        lands on my desk, and a bit more carefully when it sounds very sure of itself.
      </p>

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
            UOC (2025).{' '}
            <em>How AI is changing professions like design, art, and the media.</em>{' '}
            <a href="https://www.uoc.edu/en/news/2025/ai-could-automate-creative-professions" target="_blank" rel="noopener noreferrer">
              uoc.edu
            </a>
          </li>
          <li>
            Creative Boom (2024).{' '}
            <em>Special report: how design agencies are actually using AI in 2024.</em>{' '}
            <a href="https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/" target="_blank" rel="noopener noreferrer">
              creativeboom.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
