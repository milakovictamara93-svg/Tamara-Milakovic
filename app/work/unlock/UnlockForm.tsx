'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

// Arrow dashes off to the right while the sun spins up to fill the screen.
// Resolves once the screen is covered, so navigation can start behind it.
async function playUnlockAnimation() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const arrow = document.querySelector<HTMLElement>('img[src*="logo-arrow"]');
  const sun = document.querySelector<HTMLImageElement>('img[src*="logo-sun"]');
  if (!sun) return;

  arrow?.animate(
    [
      { transform: 'translateX(0)', opacity: 1 },
      { transform: 'translateX(-12px)', opacity: 1, offset: 0.25 },
      { transform: 'translateX(100vw)', opacity: 1 },
    ],
    { duration: 600, easing: 'cubic-bezier(0.7, 0, 0.84, 0)', fill: 'forwards' },
  );

  const rect = sun.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  // The sun's solid core is roughly half its width; grow it until that core
  // reaches the farthest corner of the viewport.
  const farthest = Math.hypot(
    Math.max(cx, window.innerWidth - cx),
    Math.max(cy, window.innerHeight - cy),
  );
  const scale = (farthest / (rect.width * 0.25)) * 1.1;

  const overlay = sun.cloneNode() as HTMLImageElement;
  Object.assign(overlay.style, {
    position: 'fixed',
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    margin: '0',
    zIndex: '1000',
    pointerEvents: 'none',
  });
  document.body.appendChild(overlay);
  sun.style.visibility = 'hidden';

  await overlay.animate(
    [
      { transform: 'rotate(0deg) scale(1)' },
      { transform: 'rotate(90deg) scale(1.15)', offset: 0.3 },
      { transform: `rotate(360deg) scale(${scale})` },
    ],
    { duration: 1000, delay: 150, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'forwards' },
  ).finished;
}

export default function UnlockForm() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get('next');
  // Only allow same-site paths, never "//host" or absolute URLs
  const next = nextParam?.startsWith('/') && !nextParam.startsWith('//') ? nextParam : '/work';

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  // Coming Back from /work can restore this page mid-animation from the
  // back/forward cache; reload so it starts clean
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload();
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/work-unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      await playUnlockAnimation();
      // Full page load so the server sees the new cookie; a client-side push can
      // reuse the cached redirect back to this page and hang on "Unlocking…"
      window.location.assign(next);
    } else {
      setError('Incorrect password. Try again.');
      setShakeKey(k => k + 1);
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        key={shakeKey}
        type="password"
        className={`${styles.input} ${shakeKey ? styles.shake : ''}`}
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        autoFocus
        autoComplete="current-password"
      />
      {error && <p className={styles.error}>{error}</p>}
      <button
        type="submit"
        className={styles.button}
        disabled={loading || !password}
      >
        {loading ? 'Unlocking…' : 'View work'}
      </button>
    </form>
  );
}
