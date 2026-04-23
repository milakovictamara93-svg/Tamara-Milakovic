'use client';
import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

export default function FitWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;

    const fit = () => {
      el.style.fontSize = '100px';
      const parentWidth = el.parentElement!.offsetWidth;
      const textWidth = el.scrollWidth;
      if (!parentWidth || !textWidth) return;
      el.style.fontSize = `${(parentWidth / textWidth) * 100}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement!);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.wordmark}>
      Tamara Milakovic
    </div>
  );
}
