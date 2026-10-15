import styles from './ArticleDemo.module.css';

export { styles as demoStyles };

/** One demo in a Good/Bad pair. Header reads "✅ Good" or "❌ Bad" plus a short description. */
export function Demo({
  verdict,
  title,
  action,
  readout,
  children,
  figureRef,
}: {
  verdict: 'good' | 'bad';
  title: string;
  action?: React.ReactNode;
  readout?: React.ReactNode;
  children: React.ReactNode;
  figureRef?: React.Ref<HTMLElement>;
}) {
  return (
    <figure ref={figureRef} className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>
          <span className={styles.verdictWord}>{verdict === 'good' ? '✅ Good' : '❌ Bad'}</span>
          <span className={styles.headerLabel}>{title}</span>
        </span>
        {action}
      </div>
      <div className={styles.inlineDemo}>
        {children}
        {readout !== undefined && (
          <p className={styles.readout} aria-live="polite" aria-atomic="true">{readout || ' '}</p>
        )}
      </div>
    </figure>
  );
}

/** The same frame for demos that aren't a Good/Bad pair: explorables, quizzes. */
export function DemoFrame({
  title,
  action,
  readout,
  children,
  figureRef,
}: {
  title: string;
  action?: React.ReactNode;
  readout?: React.ReactNode;
  children: React.ReactNode;
  figureRef?: React.Ref<HTMLElement>;
}) {
  return (
    <figure ref={figureRef} className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.verdictWord}>{title}</span>
        {action}
      </div>
      <div className={styles.inlineDemo}>
        {children}
        {readout !== undefined && (
          <p className={styles.readout} aria-live="polite" aria-atomic="true">{readout || '\u00a0'}</p>
        )}
      </div>
    </figure>
  );
}

/** Stacks a Good demo with its Bad twin directly below. */
export function Pair({ children }: { children: React.ReactNode }) {
  return <div className={styles.pair}>{children}</div>;
}
