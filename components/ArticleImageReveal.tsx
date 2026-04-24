'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ArticleImageReveal.module.css';

export default function ArticleImageReveal({ src, alt, small }: { src: string; alt: string; small?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    );
    requestAnimationFrame(() => requestAnimationFrame(() => observer.observe(el)));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={small ? `${styles.wrap} ${styles.small}` : styles.wrap}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.img}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) calc(100vw - 260px), 988px"
      />
    </div>
  );
}
