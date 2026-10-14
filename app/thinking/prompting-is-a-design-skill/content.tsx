import RevealOnScroll from '@/components/RevealOnScroll';
import { PromptAnatomyVisual, ThinkingShiftVisual } from './visuals';
import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Most people who want better prompts actually need a better brief.
      </p>

      <p>
        Most disappointing AI output starts with a one-line prompt like “write error
        messages for a signup form” and a lot of optimism.
      </p>

      <p>
        And the model does exactly what it was asked. You get “Invalid email address” and
        “This field is required”, the same two messages every form on the internet already
        has.
      </p>

      <p>
        Now try it with what you actually know. The users are technical, so skip the
        friendly filler. Keep each message under eight words and tell people what to do
        instead of what they did wrong. This time you get “Enter a work email address.” It’s
        the same model. The only difference is that the thinking happened before anyone hit
        enter.
      </p>

      <RevealOnScroll><PromptAnatomyVisual /></RevealOnScroll>

      <p>
        That’s why I think prompting is a design skill, and a pretty old one. It’s the same
        work as writing a good brief or explaining to an engineer exactly what should happen
        when a filter returns nothing. You take something that’s clear in your head and make
        it clear on the page, for someone who wasn’t in any of your meetings.
      </p>

      <p>
        The model knows nothing about your product. It doesn’t know your users are
        compliance analysts on a deadline, or that you already tried the cheerful tone and
        nobody liked it. Whatever you leave out, it fills in with the most average answer it
        can find. Most bad output I see comes from missing context that felt too obvious to
        mention.
      </p>

      <p>
        It also changes when the thinking happens. When I design by hand, I work out what I
        want while I’m making it, and the file and my opinion grow up together. With a model
        I have to know what I want before I start typing, or I get something confidently
        generic and spend the afternoon arguing with it.
      </p>

      <RevealOnScroll><ThinkingShiftVisual /></RevealOnScroll>

      <p>
        The people who are good at this don’t treat it as one shot. They read the output,
        notice what they don’t want, change one thing and run it again. It’s basically
        sketching, with more typing.
      </p>

      <p>
        So if you want to get better at prompting, I wouldn’t buy anyone’s list of fifty
        magic prompts. I’d start by writing sharper briefs and deciding what you care about
        before you open any tool.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>
    </div>
  );
}
