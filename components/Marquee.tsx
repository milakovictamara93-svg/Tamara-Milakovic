'use client';

import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  duration?: number;
}

export default function Marquee({ text, duration = 45 }: MarqueeProps) {
  const repeated = Array(4).fill(text).join('   ');

  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />
      <div className={styles.track}>
        <span className={styles.content} aria-hidden="true" style={{ animationDuration: `${duration}s` }}>{repeated}</span>
        <span className={styles.content} style={{ animationDuration: `${duration}s` }}>{repeated}</span>
      </div>
      <div className={styles.divider} />
    </div>
  );
}
