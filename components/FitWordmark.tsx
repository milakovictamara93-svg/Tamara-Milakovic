'use client';
import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

export default function FitWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;

    const fit = () => {
      const parentWidth = el.parentElement!.offsetWidth;
      if (!parentWidth) return;
      // Shrink to natural text width to measure it
      el.style.fontSize = '100px';
      el.style.width = 'max-content';
      const textWidth = el.offsetWidth;
      el.style.width = '';
      if (!textWidth) return;
      el.style.fontSize = `${(parentWidth / textWidth) * 100}px`;
    };

    fit();
    document.fonts.ready.then(fit);
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
