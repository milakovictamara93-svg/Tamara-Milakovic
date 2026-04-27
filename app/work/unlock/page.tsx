import { Suspense } from 'react';
import Nav from '@/components/Nav';
import AnimatedLogos from '@/components/AnimatedLogos';
import UnlockForm from './UnlockForm';
import styles from './page.module.css';

export const metadata = {
  title: 'View Work — Tamara Milakovic',
};

export default function UnlockPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.inner}>
          <AnimatedLogos size={80} />
          <div className={styles.text}>
            <h1 className={styles.heading}>This work is confidential</h1>
            <p className={styles.sub}>
              Enter the password to view selected case studies.
            </p>
          </div>
          <Suspense>
            <UnlockForm />
          </Suspense>
        </div>
      </main>
    </>
  );
}
