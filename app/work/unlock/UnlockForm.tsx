'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function UnlockForm() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get('next');
  // Only allow same-site paths, never "//host" or absolute URLs
  const next = nextParam?.startsWith('/') && !nextParam.startsWith('//') ? nextParam : '/work';

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      // Full page load so the server sees the new cookie; a client-side push can
      // reuse the cached redirect back to this page and hang on "Unlocking…"
      window.location.assign(next);
    } else {
      setError('Incorrect password. Try again.');
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="password"
        className={styles.input}
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
