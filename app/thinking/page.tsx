import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FilterableArticleList from '@/components/FilterableArticleList';
import AnimatedLogos from '@/components/AnimatedLogos';
import Marquee from '@/components/Marquee';
import { articles } from '@/lib/articles';
import styles from './page.module.css';

export const metadata = {
  title: 'Thinking — Product Design Writing by Tamara Milakovic',
  description: 'Essays on product design, design systems, and UX craft. Clear thinking about the problems that hide inside design problems.',
  openGraph: {
    title: 'Thinking — Product Design Writing by Tamara Milakovic',
    description: 'Essays on product design, design systems, and UX craft. Clear thinking about the problems that hide inside design problems.',
    url: 'https://www.tamaramilakovic.com/thinking',
    type: 'website',
  },
  twitter: {
    title: 'Thinking — Product Design Writing by Tamara Milakovic',
    description: 'Essays on product design, design systems, and UX craft. Clear thinking about the problems that hide inside design problems.',
  },
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const activeTag = tag ?? null;
  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  const filtered = activeTag ? articles.filter((a) => a.tags.includes(activeTag)) : articles;

  return (
    <>
      <Nav />
      <main className={styles.main}>

        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} />
          </div>
        </div>

        <div className={styles.headingSection}>
          <div className={styles.headingInner}>
            <h1 className={styles.heading}>Thinking</h1>
          </div>
        </div>

        <div className={styles.list}>
          <FilterableArticleList
            articles={filtered}
            activeTag={activeTag}
            allTags={allTags}
          />
        </div>

        <Marquee text="Writing is thinking made visible. 💡 Thinking without writing is just vibes. 🌫️" />

      </main>
      <Footer />
    </>
  );
}
