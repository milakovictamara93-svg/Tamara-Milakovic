'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './FilterableArticleList.module.css';

interface Props {
  allTags: string[];
  activeTag: string | null;
}

export default function FilterChips({ allTags, activeTag }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function selectTag(tag: string | null) {
    const params = new URLSearchParams();
    if (tag) params.set('tag', tag);
    router.replace(tag ? `${pathname}?${params.toString()}` : pathname, { scroll: false });
  }

  return (
    <div className={styles.chips}>
      <button
        className={`${styles.chip} ${activeTag === null ? styles.chipActive : ''}`}
        onClick={() => selectTag(null)}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          className={`${styles.chip} ${activeTag === tag ? styles.chipActive : ''}`}
          onClick={() => selectTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
