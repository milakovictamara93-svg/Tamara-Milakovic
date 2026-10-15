# Tamara Milakovic portfolio

Next.js site deployed on Vercel from `main`. Every change gets checked in a production build (`npm run build && npx next start`) before it ships.

## Article visuals and interactive assets

These rules apply to every visual, diagram or interactive demo created for the Thinking articles (`app/thinking/<slug>/visuals.tsx`) or anywhere else on the site.

### 1. Research before building

Before designing any UI pattern in an asset (buttons, loading states, validation, empty states, modals and so on), check what the major design systems and usability research say:

- **Design systems:** IBM Carbon, Material Design, Apple HIG, Atlassian, GOV.UK, Shopify Polaris
- **Usability research:** Nielsen Norman Group, Baymard Institute
- **Accessibility:** WCAG 2.2 (color is never the only signal, AA contrast, keyboard access, screen reader announcements)

Follow the consensus. Where sources disagree or the brand calls for something different, say so and explain the trade-off. Tell Tamara which sources the decision is based on.

### 2. Show the real pattern

- Demo the pattern the way it works in a real product, not a simplified stand-in. For example, a save button shows Saving… and then Saved ✓ inside the same button, not as a separate label.
- **One idea per demo, inline.** Place each demo right after the sentence it illustrates, never in a big tabbed widget. The article text does the explaining.
- **Good and Bad are always two separate demos, Good first with Bad directly below.** Each has its own header: the word "Good" or "Bad" in bold, followed by a short description of what it does (for example "Good  The skeleton matches the table"). Each runs on its own with its own trigger or loop.
  - No sliders for these comparisons, and no toggles, side-by-side lanes, coloured verdict pills or "show me the fix" modes.
  - Give each demo a short plain-language readout of what just happened, with a little humour on the Bad one.
  - The pairs in `please-dont-let-it-sit-at-99` are the reference.
- Elements that change label or state keep a fixed size so nothing around them shifts.

### 3. Interaction states

Every interactive control needs:

- a **hover** state
- a **pressed** state (`:active`)
- a visible **keyboard focus** state (`:focus-visible`, 2px solid black outline)
- a **disabled** state where relevant

State changes are announced to screen readers (for example through a visually hidden `role="status"` region).

### 4. Brand and motion

- Colors: black `#000`, white, sun yellow `#FEC40A`, greys `#525252` and `#8a8a84`. Use semantic colors only where they carry meaning: green `#15803d` for success, which passes AA with white text.
- Fonts: `var(--font-heading)` (DM Sans) for titles, `var(--font-body)` (Inter) for everything else.
- Pill chips and tags use a black 1px outline, and the selected chip is filled black.
- All animation stops under `prefers-reduced-motion: reduce`.
- Assets must work at phone width.

### 5. Copy

No em dashes anywhere on the site. Copy should read like Tamara wrote it: plain and specific, with a little humour.
