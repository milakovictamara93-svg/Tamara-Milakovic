import RevealOnScroll from '@/components/RevealOnScroll';
import { FailureModeVisual } from './visuals';
import styles from './content.module.css';

export default function DesignSystemsContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every design system post-mortem sounds the same, and it’s rarely about the
        components.
      </p>

      <p>
        Every design system post-mortem I’ve read sounds roughly the same. The library was
        beautifully made and thoroughly documented, and teams kept doing their own thing
        anyway, very consistently.
      </p>

      <p>
        Usually the system was solving the wrong problem.
      </p>

      <p>
        Most systems are built to fix inconsistency: buttons that don’t match and several
        shades of blue that all claim to be the real one. That’s worth fixing. But
        inconsistency is usually a symptom. The cause is people making decisions without a
        shared reference, or a team that grew faster than its agreements, and you can’t fix
        either of those with a Figma file.
      </p>

      <p>
        I learned this the uncomfortable way at Scaler, where some of the inconsistency I
        had to fix was mine. What I built first was mostly written decisions, interaction
        rules that turned what was in my head into something the whole team could check. The
        components came after.
      </p>

      <p>
        The failure nobody talks about is the system built in isolation. A small team
        disappears for two quarters and comes back with something impressive. The teams who
        weren’t asked don’t feel any ownership. The teams whose edge cases were never
        considered find it doesn’t solve their most common problems. So they work around it,
        and six months later someone announces a brand new design system initiative.
      </p>

      <RevealOnScroll><FailureModeVisual /></RevealOnScroll>

      <p>
        What works is treating the system as an ongoing agreement between everyone who
        builds the product, about what’s been decided and how to extend it when you hit a
        case nobody anticipated. The Figma library is just where some of that gets written
        down.
      </p>

      <p>
        That’s slower to build than a library. You have to involve people before you have
        anything pretty to show them, and you have to write docs for the designer who’s
        mid-deadline and needs a quick answer they can trust. But it’s the part that makes
        everything else stick.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
