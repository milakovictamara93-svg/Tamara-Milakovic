'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AnimatedLogos.module.css';

interface AnimatedLogosProps {
  size?: number;
}

export default function AnimatedLogos({ size = 150 }: AnimatedLogosProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-animate', 'true');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.logos}>
      <div className={styles.arrow}>
        <Image src="/logo-arrow.svg" alt="Arrow" width={size} height={size} />
      </div>
      <div className={styles.sun}>
        <Image src="/logo-sun.svg" alt="Sun" width={size} height={size} />
      </div>
    </div>
  );
}
