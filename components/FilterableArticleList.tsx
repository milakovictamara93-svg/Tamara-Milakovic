import ArticleCard from '@/components/ArticleCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import FilterChips from '@/components/FilterChips';
import type { Article } from '@/lib/articles';

interface Props {
  articles: Article[];
  activeTag: string | null;
  allTags: string[];
}

export default function FilterableArticleList({ articles, activeTag, allTags }: Props) {
  return (
    <>
      <FilterChips allTags={allTags} activeTag={activeTag} />
      <div>
        {articles.map((article, i) => (
          <RevealOnScroll key={article.slug} delay={i * 80}>
            <ArticleCard article={article} />
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
