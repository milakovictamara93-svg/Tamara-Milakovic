'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSlider.module.css';

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({ before, after, beforeAlt = 'Before', afterAlt = 'After' }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(96, Math.max(4, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) updatePosition(e.touches[0].clientX); };
    const stop = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stop);
    };
  }, [updatePosition]);

  const startDrag = useCallback((clientX: number) => {
    dragging.current = true;
    updatePosition(clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    >
      {/* After image — full width underneath */}
      <div className={styles.layer}>
        <Image src={after} alt={afterAlt} fill className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) calc(100vw - 260px), 988px" />
      </div>

      {/* Before image — clipped to left of divider */}
      <div className={styles.layer} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) calc(100vw - 260px), 988px" />
      </div>

      {/* Divider line */}
      <div className={styles.divider} style={{ left: `${position}%` }}>
        <div className={styles.handle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 6M6 10L2 14M6 10H14M14 10L18 6M14 10L18 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className={styles.labelBefore}>Before</span>
      <span className={styles.labelAfter}>After</span>
    </div>
  );
}
