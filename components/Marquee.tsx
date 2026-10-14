'use client';

import { useState } from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  duration?: number;
}

export default function Marquee({ text, duration = 60 }: MarqueeProps) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const repeated = Array(4).fill(text).join('   ');
  const contentStyle = {
    animationDuration: `${duration}s`,
    animationPlayState: hovered || tapped ? 'paused' : 'running',
  } as const;

  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />
      <div
        className={styles.track}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
        onPointerUp={(e) => e.pointerType !== 'mouse' && setTapped((t) => !t)}
      >
        <span className={styles.content} aria-hidden="true" style={contentStyle}>{repeated}</span>
        <span className={styles.content} style={contentStyle}>{repeated}</span>
      </div>
      <div className={styles.divider} />
    </div>
  );
}
