import styles from './ArticleDemo.module.css';

export { styles as demoStyles };

/**
 * What just happened. Before anything happens it shows a short hint instead of blank space.
 * Only the result is announced to screen readers, once, through its own live region.
 */
function Readout({ readout, hint, lines }: { readout?: React.ReactNode; hint?: string; lines?: number }) {
  return (
    <>
      <p
        className={`${styles.readout} ${readout ? '' : styles.readoutHint}`}
        aria-hidden="true"
        style={lines ? ({ '--readout-lines': lines } as React.CSSProperties) : undefined}
      >
        {readout || hint || '\u00a0'}
      </p>
      <span className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
        {readout}
      </span>
    </>
  );
}

/** One demo in a Good/Bad pair. Header reads "✅ Good" or "❌ Bad" plus a short description. */
export function Demo({
  verdict,
  title,
  action,
  readout,
  hint,
  readoutLines,
  children,
  figureRef,
}: {
  verdict: 'good' | 'bad';
  title: string;
  action?: React.ReactNode;
  readout?: React.ReactNode;
  /** Shown in the readout's place before anything has happened */
  hint?: string;
  /** Lines to keep for the readout on phones, where it wraps, so it appearing never moves the page */
  readoutLines?: number;
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
        {readout !== undefined && <Readout readout={readout} hint={hint} lines={readoutLines} />}
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
        {readout !== undefined && <Readout readout={readout} />}
      </div>
    </figure>
  );
}

/** Stacks a Good demo with its Bad twin directly below. */
export function Pair({ children }: { children: React.ReactNode }) {
  return <div className={styles.pair}>{children}</div>;
}
