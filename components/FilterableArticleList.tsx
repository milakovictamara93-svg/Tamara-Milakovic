'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import type { Article } from '@/lib/articles';
import styles from './FilterableArticleList.module.css';

interface Props {
  articles: Article[];
}

export default function FilterableArticleList({ articles }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialTag = searchParams.get('tag');
  const [activeTag, setActiveTag] = useState<string | null>(initialTag);

  useEffect(() => {
    setActiveTag(searchParams.get('tag'));
  }, [searchParams]);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  function selectTag(tag: string | null) {
    setActiveTag(tag);
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
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
      <div>
        {filtered.map((article, i) => (
          <RevealOnScroll key={article.slug} delay={i * 80}>
            <ArticleCard article={article} />
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
