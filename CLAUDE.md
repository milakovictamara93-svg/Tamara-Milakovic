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
- Show bad examples **story style**: the demo opens on the usual (bad) version, with a short, funny yellow note pointing at what went wrong. A yellow "Show me the fix →" button then replays it the right way in the same window, and "↺ Show me the usual way" goes back. Keep one demo with one set of controls. Don't use toggles or checkboxes, side-by-side Do/Don't lanes, or red/green verdict pills. The page-jump demo in `please-dont-let-it-sit-at-99` is the reference for tone.
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
