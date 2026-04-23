'use client';

import { useEffect, useRef } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export default function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.setAttribute('data-init', 'true');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.reveal}
      style={delay ? ({ '--delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
