'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface NavItem {
  id: string;
  label: string;
}

export default function ArticleSidebar({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>On this page</p>
      <nav className={styles.sidebarNav}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.sidebarLink}${activeId === item.id ? ` ${styles.sidebarLinkActive}` : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
