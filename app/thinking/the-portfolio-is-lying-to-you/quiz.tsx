'use client';

import { useEffect, useRef, useState } from 'react';
import { DemoFrame, demoStyles } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

type Question = {
  moment: string;
  options: [string, string];
  real: 0 | 1;
  right: string;
  wrong: string;
};

const QUESTIONS: Question[] = [
  {
    moment: 'The brief changed halfway through.',
    options: [
      'Following stakeholder alignment, we iterated on the scope to better serve user needs.',
      'Six weeks in, the brief changed and half our research stopped applying. I kept what still held and told the PM which questions we’d now be guessing on.',
    ],
    real: 1,
    right: 'Yes. You know what broke and what they did about it.',
    wrong: 'That sentence has been in every portfolio since 2014. Nothing happens in it.',
  },
  {
    moment: 'The research disagreed with the plan.',
    options: [
      'Interviews showed people didn’t want a dashboard, they wanted one number emailed on Monday. We lost half that argument and shipped a dashboard that opens on that number.',
      'Research insights informed a user-centred dashboard experience.',
    ],
    real: 0,
    right: 'Yes. A finding, a fight, and a compromise. That’s a real project.',
    wrong: '“Insights informed” is what you write when you can’t remember what the insights were.',
  },
  {
    moment: 'Something went wrong.',
    options: [
      'Through iterative testing, we refined the solution.',
      'My first version tested badly. Four out of five people couldn’t find the export, which was the entire point of the feature.',
    ],
    real: 1,
    right: 'Yes. Admitting the miss is the most hireable sentence on the page.',
    wrong: '“Refined the solution” is doing a lot of heavy lifting for “it didn’t work”.',
  },
  {
    moment: 'Someone asked for the wrong thing.',
    options: [
      'Sales wanted a feature for one client. I showed it would break the flow for 300 others, and we built a setting instead.',
      'We collaborated cross-functionally to balance business and user goals.',
    ],
    real: 0,
    right: 'Yes. A real ask, a real pushback, and a reason. Hiring managers remember this one.',
    wrong: 'Everyone “collaborated cross-functionally”. Nobody remembers who wrote it.',
  },
];

function verdict(score: number) {
  if (score === QUESTIONS.length) return 'Four out of four. You’d make a great hiring manager. Or a very annoying portfolio reviewer.';
  if (score >= 2) return `${score} out of ${QUESTIONS.length}. Not bad. Some of those template lines are sneaky, they sound so professional.`;
  return `${score} out of ${QUESTIONS.length}. Either you’re testing the quiz, or you’ve read far too many case studies. Both are fair.`;
}

export function SpotTheRealOneQuiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const moved = useRef(false);

  // After moving on, put keyboard and screen reader focus on the new question
  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [index, done]);

  const q = QUESTIONS[index];
  const answered = picked !== null;
  const correct = picked === q.real;

  const pick = (i: number) => {
    if (answered) return;
    setPicked(i);
    if (i === q.real) setScore((s) => s + 1);
  };

  const next = () => {
    moved.current = true;
    if (index === QUESTIONS.length - 1) {
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  };

  const restart = () => {
    moved.current = true;
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <DemoFrame
      title="Which line would a hiring manager remember?"
      action={<span className={styles.quizProgress}>{done ? 'Done' : `${index + 1} of ${QUESTIONS.length}`}</span>}
    >
      {done ? (
        <div className={styles.quizResult}>
          <p ref={headingRef} tabIndex={-1} className={styles.quizScore}>
            {score === QUESTIONS.length ? '🏆' : score >= 2 ? '👏' : '🙈'} {score} / {QUESTIONS.length}
          </p>
          <p className={styles.quizVerdict} role="status">{verdict(score)}</p>
          <div>
            <button type="button" className={demoStyles.primary} onClick={restart}>Try again</button>
          </div>
        </div>
      ) : (
        <>
          <p ref={headingRef} tabIndex={-1} className={styles.quizMoment}>
            <span className={styles.quizMomentLabel}>The moment</span>
            {q.moment}
          </p>

          <div className={styles.quizOptions} role="group" aria-label="Pick the line you’d remember">
            {q.options.map((text, i) => {
              const isReal = i === q.real;
              const state = !answered ? '' : isReal ? styles.optionReal : i === picked ? styles.optionTemplate : styles.optionFaded;
              return (
                <button
                  key={i}
                  type="button"
                  className={`${styles.option} ${state}`}
                  onClick={() => pick(i)}
                  aria-disabled={answered}
                  aria-describedby={answered ? `quiz-tag-${index}-${i}` : undefined}
                >
                  <span className={styles.optionText}>“{text}”</span>
                  {answered && (isReal || i === picked) && (
                    <span id={`quiz-tag-${index}-${i}`} className={styles.optionTag}>
                      {isReal ? '✓ Real work happened here' : '✕ Template'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Reserved space, so the feedback appearing doesn't push the page around */}
          <div className={styles.quizFeedback}>
            <p className={styles.quizFeedbackText} role="status">
              {answered ? `${correct ? '✅' : '❌'} ${correct ? q.right : q.wrong}` : ''}
            </p>
            <button
              type="button"
              className={`${demoStyles.primary} ${styles.quizNext}`}
              onClick={next}
              disabled={!answered}
            >
              {index === QUESTIONS.length - 1 ? 'See my score' : 'Next one'}
            </button>
          </div>
        </>
      )}
    </DemoFrame>
  );
}
