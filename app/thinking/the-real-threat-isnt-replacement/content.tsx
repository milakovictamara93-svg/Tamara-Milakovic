import RevealOnScroll from '@/components/RevealOnScroll';
import { OnRampVisual, DivideVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Everyone’s arguing about whether AI will replace designers. Meanwhile, the junior
        job is disappearing.
      </p>

      <p>
        The AI and design debate goes round in circles. AI will replace us. No it won’t,
        creativity is human. Some jobs are already gone. Seniors are safe. I’ve heard it so
        many times I could argue both sides on my own.
      </p>

      <p>
        I think everyone’s arguing about the wrong thing. AI is mostly eating the bottom
        rung of the career ladder.
      </p>

      <p>
        The work going first is execution: banner ads, social templates, presentation
        graphics, first-pass wireframes. That used to be how juniors learned. You did
        production work for a couple of years, got told your spacing was off a hundred
        times, and somewhere in there you developed taste. It was how you learned to see
        when something wasn’t working.
      </p>

      <p>
        Now a tool makes a decent first wireframe from a prompt in seconds, and it’s hard to
        argue for paying someone to spend three days on it. But reviewing twenty
        AI-generated variations still requires knowing what good looks like, and that
        knowledge used to come from exactly the work that’s disappearing. That’s the part
        that worries me.
      </p>

      <RevealOnScroll><OnRampVisual /></RevealOnScroll>

      <p>
        The skills that protect you have changed. Being fast and willing to do production
        work used to keep a junior employed. Now it’s judgment, the ability to look at AI
        output and see what’s wrong with it.
      </p>

      <RevealOnScroll><DivideVisual /></RevealOnScroll>

      <p>
        Seniors are mostly fine, because their value was always upstream of the file.
        Mid-level designers need to move toward strategy sooner than they planned, and stop
        assuming that being brilliant in Figma is their edge. Juniors have the hardest
        version. They need judgment without the path that used to build it, and honestly, I
        don’t think our industry has worked out how to give them one yet.
      </p>

      <p>
        If you hire juniors, that’s partly your problem too. Give them real critique and
        messy problems, instead of only the production tasks AI hasn’t taken yet.
      </p>

      <p>
        I don’t think design is dying. There’s more of it than ever, on more surfaces. The
        work that’s left is the work that was always hardest.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
