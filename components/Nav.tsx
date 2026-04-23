import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.link}>Tamara Milakovic</Link>
        <nav className={styles.links}>
          <Link href="/work" className={styles.link}>Work</Link>
          <Link href="/articles" className={styles.link}>Articles</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
