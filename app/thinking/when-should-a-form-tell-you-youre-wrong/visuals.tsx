'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Demo, Pair, demoStyles } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v);

/**
 * Types `text` into a field one character at a time, once, the first time the figure scrolls
 * into view (instantly under reduced motion). Calls onType for every character so each demo
 * reacts exactly as it would to a person typing, then blurs the field.
 */
function useAutoType(text: string, onType: (value: string) => void, onBlur: () => void, start = '', pauseBeforeBlur = 500) {
  const ref = useRef<HTMLElement>(null);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const handlers = useRef({ onType, onBlur });
  useEffect(() => {
    handlers.current = { onType, onBlur };
  });

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = instant ? 0 : 110;
    setTyping(true);
    handlers.current.onType(start);
    for (let i = start.length + 1; i <= text.length; i++) {
      timers.current.push(setTimeout(() => handlers.current.onType(text.slice(0, i)), (i - start.length) * step));
    }
    timers.current.push(
      setTimeout(() => {
        setTyping(false);
        handlers.current.onBlur();
      }, (text.length - start.length) * step + (instant ? 0 : pauseBeforeBlur)),
    );
  }, [text, start, pauseBeforeBlur]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        play();
        observer.disconnect();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, [play]);

  const stop = () => {
    timers.current.forEach(clearTimeout);
    setTyping(false);
  };

  return { ref, typing, play, stop };
}

function Field({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  valid,
  type = 'text',
  prefix,
  inputMode,
  readOnly,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: string | null;
  valid?: boolean;
  type?: string;
  prefix?: string;
  inputMode?: 'numeric' | 'email' | 'text';
  readOnly?: boolean;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <span className={`${styles.inputWrap} ${error ? styles.inputError : ''} ${valid ? styles.inputValid : ''}`}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          className={styles.input}
          type={type}
          value={value}
          inputMode={inputMode}
          readOnly={readOnly}
          aria-invalid={!!error}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {valid && <span className={styles.tick} aria-label="Looks good">✓</span>}
      </span>
      {/* Fixed-height slot, so a message appearing never pushes anything around */}
      <span className={styles.message}>{error ? `⚠ ${error}` : ' '}</span>
    </label>
  );
}

function ReplayButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button type="button" className={demoStyles.chip} onClick={onClick} disabled={disabled}>
      Type it again
    </button>
  );
}

/* ── 1. When to check ──────────────────────────────────────────── */

const EMAIL = 'tamara@pax8.com';
const EMAIL_ERROR = 'Enter an email like name@company.com';

function TimingGood() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);
  // An error is only raised when you leave the field, and drops the moment the value is fixed
  const [flagged, setFlagged] = useState(false);
  const change = (v: string) => {
    setValue(v);
    if (isEmail(v)) setFlagged(false);
  };
  const leave = (v: string) => {
    setFocused(false);
    setTouched(true);
    setFlagged(!!v && !isEmail(v));
  };
  const auto = useAutoType(EMAIL, (v) => { setFocused(true); change(v); }, () => leave(EMAIL));

  const valid = isEmail(value);
  return (
    <Demo
      verdict="good"
      title="Checks when you leave the field"
      figureRef={auto.ref}
      action={<ReplayButton onClick={() => { setTouched(false); setFlagged(false); auto.play(); }} disabled={auto.typing} />}
      readout={auto.typing || focused ? 'Typing… and it’s letting you get on with it.' : touched ? (valid ? 'Not a peep until you were done. Then a tick.' : 'You left the field, so now it’s a fair time to mention it.') : ''}
    >
      <Field
        label="Email"
        value={value}
        onChange={(v) => { auto.stop(); change(v); }}
        onFocus={() => setFocused(true)}
        onBlur={() => leave(value)}
        error={flagged ? EMAIL_ERROR : null}
        valid={touched && !focused && valid}
        inputMode="email"
      />
    </Demo>
  );
}

function TimingBad() {
  const [value, setValue] = useState('');
  const [nags, setNags] = useState(0);
  const update = (v: string) => {
    setValue(v);
    if (v && !isEmail(v)) setNags((n) => n + 1);
  };
  const auto = useAutoType(EMAIL, update, () => {});

  const valid = isEmail(value);
  const error = value && !valid ? EMAIL_ERROR : null;
  return (
    <Demo
      verdict="bad"
      title="Checks on every keystroke"
      figureRef={auto.ref}
      action={<ReplayButton onClick={() => { setNags(0); auto.play(); }} disabled={auto.typing} />}
      readout={nags > 0 ? `Told you that you were wrong ${nags} time${nags === 1 ? '' : 's'} while you were still typing.` : ''}
    >
      <Field label="Email" value={value} onChange={(v) => { auto.stop(); update(v); }} error={error} valid={valid} inputMode="email" />
    </Demo>
  );
}

export function ValidationTimingVisual() {
  return (
    <Pair>
      <TimingGood />
      <TimingBad />
    </Pair>
  );
}

/* ── 2. Reward early, validate late ───────────────────────────── */

const PASSWORD = 'sunflower7';
const RULES = [
  { id: 'length', label: 'At least 8 characters', test: (v: string) => v.length >= 8 },
  { id: 'number', label: 'Includes a number', test: (v: string) => /\d/.test(v) },
];
const PASSWORD_ERROR = 'Use at least 8 characters, including a number';
const passwordOk = (v: string) => RULES.every((r) => r.test(v));

function RewardGood() {
  const [value, setValue] = useState('');
  const [left, setLeft] = useState(false);
  const auto = useAutoType(PASSWORD, (v) => { setLeft(false); setValue(v); }, () => setLeft(true), '', 1400);
  const met = RULES.filter((r) => r.test(value)).length;
  return (
    <Demo
      verdict="good"
      title="Good news straight away, bad news only once you’ve left"
      figureRef={auto.ref}
      action={<ReplayButton onClick={auto.play} disabled={auto.typing} />}
      readout={
        passwordOk(value)
          ? 'Each rule ticked itself off the moment you met it. Nothing went red.'
          : left && value
            ? 'You left with a rule still unmet, so now that one turns red.'
            : met > 0
              ? 'One down, while you were still typing.'
              : ''
      }
    >
      <div className={styles.passwordBlock}>
        <Field
          label="New password"
          value={value}
          onChange={(v) => { auto.stop(); setLeft(false); setValue(v); }}
          onBlur={() => setLeft(true)}
          valid={passwordOk(value)}
        />
        <ul className={styles.rules}>
          {RULES.map((r) => {
            const ok = r.test(value);
            const missed = !ok && left && value.length > 0;
            return (
              <li key={r.id} className={`${styles.rule} ${ok ? styles.ruleOk : ''} ${missed ? styles.ruleMissed : ''}`}>
                <span className={styles.ruleIcon} aria-hidden="true">{ok ? '✓' : missed ? '✕' : '○'}</span>
                {r.label}
                <span className={demoStyles.srOnly}>{ok ? ' (done)' : missed ? ' (missing)' : ''}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Demo>
  );
}

function RewardBad() {
  const [value, setValue] = useState('');
  const [left, setLeft] = useState(false);
  const auto = useAutoType(PASSWORD, (v) => { setLeft(false); setValue(v); }, () => setLeft(true), '', 1400);
  const ok = passwordOk(value);
  return (
    <Demo
      verdict="bad"
      title="Bad news straight away, good news only once you’ve left"
      figureRef={auto.ref}
      action={<ReplayButton onClick={auto.play} disabled={auto.typing} />}
      readout={
        left && ok
          ? 'Red the whole way through. The good news only arrived once you’d left.'
          : ok
            ? 'The password is fine. The form hasn’t noticed yet.'
            : value
              ? 'Still typing, already in trouble.'
              : ''
      }
    >
      <div className={styles.passwordBlock}>
        <Field
          label="New password"
          value={value}
          onChange={(v) => { auto.stop(); setLeft(false); setValue(v); }}
          onBlur={() => setLeft(true)}
          // Errors fire on every keystroke, but the tick waits until you leave
          error={value && !(left && ok) ? PASSWORD_ERROR : null}
          valid={left && ok}
        />
      </div>
    </Demo>
  );
}

export function RewardValidatePrincipleVisual() {
  return (
    <Pair>
      <RewardGood />
      <RewardBad />
    </Pair>
  );
}

/* ── 3. Validate when they commit ──────────────────────────────── */

const MIN_BUDGET = 500;
const BUDGET = '1200';
const budgetError = (v: string) => (v && Number(v) < MIN_BUDGET ? `Budget must be at least $${MIN_BUDGET}` : null);

function CommitGood() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [previewed, setPreviewed] = useState(false);
  const auto = useAutoType(BUDGET, setValue, () => {});
  const error = checked ? budgetError(value) : null;
  return (
    <Demo
      verdict="good"
      title="Checks when you hit preview"
      figureRef={auto.ref}
      action={<ReplayButton onClick={() => { setChecked(false); setPreviewed(false); auto.play(); }} disabled={auto.typing} />}
      readout={previewed ? (error ? 'You asked, so it told you.' : 'Checked once, when you were ready. Looks good.') : value ? 'Try a few numbers. Nothing will shout at you until you preview.' : ''}
    >
      <div className={styles.row}>
        <Field
          label="Campaign budget"
          prefix="$"
          inputMode="numeric"
          value={value}
          onChange={(v) => { auto.stop(); setPreviewed(false); setValue(v.replace(/\D/g, '')); }}
          error={error}
        />
        <button
          type="button"
          className={`${demoStyles.primary} ${styles.inlineButton}`}
          onClick={() => { setChecked(true); setPreviewed(true); }}
        >
          Preview campaign
        </button>
      </div>
    </Demo>
  );
}

function CommitBad() {
  const [value, setValue] = useState('');
  const [warnings, setWarnings] = useState(0);
  const update = (v: string) => {
    setValue(v);
    if (budgetError(v)) setWarnings((n) => n + 1);
  };
  const auto = useAutoType(BUDGET, update, () => {});
  return (
    <Demo
      verdict="bad"
      title="Warns while you’re still exploring"
      figureRef={auto.ref}
      action={<ReplayButton onClick={() => { setWarnings(0); auto.play(); }} disabled={auto.typing} />}
      readout={warnings > 0 ? `${warnings} warning${warnings === 1 ? '' : 's'} about money before you’d finished typing a number.` : ''}
    >
      <div className={styles.row}>
        <Field
          label="Campaign budget"
          prefix="$"
          inputMode="numeric"
          value={value}
          onChange={(v) => { auto.stop(); update(v.replace(/\D/g, '')); }}
          error={budgetError(value)}
        />
        <button type="button" className={`${demoStyles.primary} ${styles.inlineButton}`}>
          Preview campaign
        </button>
      </div>
    </Demo>
  );
}

export function CommitValidationVisual() {
  return (
    <Pair>
      <CommitGood />
      <CommitBad />
    </Pair>
  );
}

/* ── 4. Clear the error once it’s fixed ────────────────────────── */

const BROKEN = 'tamara@pax8';

function FixGood() {
  const [value, setValue] = useState(BROKEN);
  const auto = useAutoType(EMAIL, setValue, () => {}, BROKEN);
  const valid = isEmail(value);
  return (
    <Demo
      verdict="good"
      title="The error goes the moment it’s fixed"
      figureRef={auto.ref}
      action={<ReplayButton onClick={auto.play} disabled={auto.typing} />}
      readout={valid ? 'Fixed, and the form agrees. One signal, no arguments.' : 'Missing the end of the address. Watch what happens when it’s fixed.'}
    >
      <Field label="Email" value={value} onChange={(v) => { auto.stop(); setValue(v); }} error={valid ? null : EMAIL_ERROR} valid={valid} inputMode="email" />
    </Demo>
  );
}

function FixBad() {
  const [value, setValue] = useState(BROKEN);
  const [stale, setStale] = useState(true);
  const auto = useAutoType(EMAIL, setValue, () => {}, BROKEN);
  const valid = isEmail(value);
  return (
    <Demo
      verdict="bad"
      title="The error hangs around after it’s fixed"
      figureRef={auto.ref}
      action={<ReplayButton onClick={() => { setStale(true); auto.play(); }} disabled={auto.typing} />}
      readout={valid ? 'Green tick, red message. Now you have to work out which one is lying.' : 'Missing the end of the address. Watch what happens when it’s fixed.'}
    >
      <Field
        label="Email"
        value={value}
        onChange={(v) => { auto.stop(); setStale(true); setValue(v); }}
        // The message only refreshes on submit, so it lingers next to a valid value
        error={stale ? EMAIL_ERROR : null}
        valid={valid}
        inputMode="email"
      />
    </Demo>
  );
}

export function ErrorClearsVisual() {
  return (
    <Pair>
      <FixGood />
      <FixBad />
    </Pair>
  );
}
