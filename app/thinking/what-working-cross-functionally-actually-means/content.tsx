import RevealOnScroll from '@/components/RevealOnScroll';
import { CoordinationInfluenceVisual, TranslationVisual } from './visuals';
import styles from '../article.module.css';

export default function CrossFunctionalContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every designer’s CV says “cross-functional collaboration”. Most of them mean they
        went to the meetings.
      </p>

      <p>
        Every designer’s CV says it somewhere. “Works effectively with engineering, product
        and stakeholders.” The phrase covers two very different things, and only one of them
        is hard.
      </p>

      <p>
        The easy one is coordination. You go to the right meetings, hand over specs on time
        and take feedback well. That’s the minimum. It’s good, but nobody should hire you
        for it.
      </p>

      <p>
        The hard one is influence, which means changing the direction of something before
        it’s decided, like getting an engineer to care about a confusing flow. That’s what
        senior designers are hired for, and you almost never see it in a portfolio.
      </p>

      <RevealOnScroll><CoordinationInfluenceVisual /></RevealOnScroll>

      <p>
        The tricky part is that designers rarely have formal authority. We don’t own the
        roadmap or the engineering priorities, so anything that matters has to be won some
        other way.
      </p>

      <p>
        Decisions are almost never made in the meeting where they’re announced. They get
        made a few conversations earlier, in a Slack thread or a corridor, while someone is
        still unsure and the framing is still open. If you only show up to the official
        meeting, you’re usually too late.
      </p>

      <p>
        Translation helps more than anything. Engineers think in complexity and product
        people think in metrics, and if you can explain a user problem in their terms, they
        can actually act on it.
      </p>

      <RevealOnScroll><TranslationVisual /></RevealOnScroll>

      <p>
        It also helps to make disagreements visible early. Most misalignment is people with
        different pictures in their heads who think they agree, until a prototype shows up
        and everyone is surprised. On the Pax8 monetisation project, the most useful thing I
        made early on was a list of four questions the product had to answer, in order,
        every time a partner opened it. After that, every feature debate had something to
        point at.
      </p>

      <p>
        And you have to be willing to be wrong in the room. Influence without authority runs
        on trust, and people trust you more when you can say “I’m not sure” than when you
        defend every pixel.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
