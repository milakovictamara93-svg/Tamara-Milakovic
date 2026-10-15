import RevealOnScroll from '@/components/RevealOnScroll';
import { ClarityVsConfidenceVisual, ThreeIngredientsVisual } from './visuals';
import styles from '../article.module.css';

export default function DesigningForConfidenceContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Our users understood every chart perfectly, and then went and did absolutely nothing
        with it.
      </p>

      <p>
        My biggest fear with any dashboard is that people will understand it perfectly and
        then ignore it. It’s a weird way to fail, because nothing is broken.
      </p>

      <p>
        That was exactly the worry on a monetisation product I worked on at Pax8. Partners
        could open analytics and see how their products were doing. Then, to actually do
        something about it, they had to open a completely different tool and remember
        everything they’d just seen. I can barely remember why I opened the fridge, so I
        didn’t have high hopes.
      </p>

      <p>
        I kept joking that our analytics were turning into a museum. You could look at
        everything, but nobody was really supposed to touch it.
      </p>

      <p>
        For years I treated clarity as the finish line. I still care about it a lot, but a
        clear chart that leads nowhere is just a very well designed shrug.
      </p>

      <RevealOnScroll><ClarityVsConfidenceVisual /></RevealOnScroll>

      <p>
        So we built a bridge between the two, the Opportunity layer. It picks up a signal,
        say low impressions in one category, and turns it into a suggestion with a reason
        attached. Click it and the promo builder opens already filled in with whatever you
        were just looking at, so you don’t have to remember anything.
      </p>

      <p>
        Around the same time someone asked for benchmark toggles on every chart, so partners
        could see how they stacked up against everyone else. It sounds smart in a roadmap
        meeting, but in practice a five-person partner ends up comparing itself to a
        five-hundred-person partner and feeling either amazing or terrible, both for no good
        reason. I said no, which is not my favourite word to say to stakeholders, and parked
        it in the backlog until there’s enough data to make the comparison fair.
      </p>

      <p>
        The last bit is the one most products skip. Show people what happened. If you launch
        a promotion and the product just stays silent, you learn that your actions don’t
        matter, and why would you bother again? So the flow ends with “did it work?” and the
        answer feeds straight back into analytics.
      </p>

      <RevealOnScroll><ThreeIngredientsVisual /></RevealOnScroll>

      <p>
        Usability tests won’t show you any of this. People sail through every “can you find
        the number” task and still walk away with no idea what to do with it. You find out
        months later, when you see who keeps coming back.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
