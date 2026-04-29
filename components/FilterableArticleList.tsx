'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import type { Article } from '@/lib/articles';
import styles from './FilterableArticleList.module.css';

interface Props {
  articles: Article[];
}

export default function FilterableArticleList({ articles }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <>
      <div className={styles.chips}>
        <button
          className={`${styles.chip} ${activeTag === null ? styles.chipActive : ''}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.chip} ${activeTag === tag ? styles.chipActive : ''}`}
            onClick={() => setActiveTag(tag)}
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
