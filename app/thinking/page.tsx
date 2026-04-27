import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import AnimatedLogos from '@/components/AnimatedLogos';
import Marquee from '@/components/Marquee';
import RevealOnScroll from '@/components/RevealOnScroll';
import { articles } from '@/lib/articles';
import styles from './page.module.css';

export const metadata = {
  title: 'Thinking — Tamara Milakovic',
  description: 'Writing on design systems, UX, and the decisions that happen upstream of the brief.',
};

export default function ArticlesPage() {
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
          {articles.map((article, i) => (
            <RevealOnScroll key={article.slug} delay={i * 80}>
              <ArticleCard article={article} />
            </RevealOnScroll>
          ))}
        </div>

        <Marquee text="Writing is thinking made visible. 💡 Thinking without writing is just vibes. 🌫️" duration={60} />

      </main>
      <Footer />
    </>
  );
}
