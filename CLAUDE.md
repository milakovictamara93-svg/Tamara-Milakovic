# Tamara Milakovic portfolio

Next.js site deployed on Vercel from `main`. Every change gets checked in a production build (`npm run build && npx next start`) before it ships.

## Article visuals and interactive assets

These rules apply to every visual, diagram or interactive demo created for the Thinking articles (`app/thinking/<slug>/visuals.tsx`) or anywhere else on the site.

### 1. Deep research before building, for every detail

Do real, deep research before building or changing anything, and do it **before** showing Tamara a single screenshot. Never build from memory or taste and research afterwards.

- **Every detail gets researched, not just the main pattern.** List every element in the asset first (layout, hierarchy, titles, labels, units, legends, colours, icons, numbers and their formatting, tables, empty and placeholder states, buttons, hover/pressed/focus/disabled states, motion, copy, mobile layout). Then check the best practice for each one. If a detail wasn't researched, it isn't ready.
- **Research the context, not just the component.** A chart inside a report or dashboard means researching dashboards, KPI tiles, data tables and legends too, not only the chart.
- **Go to the primary sources:**
  - **Design systems:** IBM Carbon, Material Design, Apple HIG, Atlassian, GOV.UK, Shopify Polaris
  - **Usability research:** Nielsen Norman Group, Baymard Institute
  - **Data visualisation (for charts, tables, dashboards):** Datawrapper, FT Visual Vocabulary, Stephen Few, Alberto Cairo, ONS and government data guidance
  - **Accessibility:** WCAG 2.2 (color is never the only signal, AA contrast, keyboard access, screen reader announcements)
  - Use several searches, read the actual pages where possible, and don't stop at the first result. If a primary source can't be reached, say so instead of presenting a secondhand summary as the source.
- **Follow the consensus.** Where sources disagree or the brand calls for something different, say so and explain the trade-off.
- **Check the result against the research before showing it.** Screenshot it at desktop and phone width and go through the list of details again. Look for inconsistencies (sign formats, colours, spacing, wording) and fix them first.
- **Tell Tamara which sources each decision is based on,** with links.

### 2. Show the real pattern

- Demo the pattern the way it works in a real product, not a simplified stand-in. For example, a save button shows Saving… and then Saved ✓ inside the same button, not as a separate label.
- **One idea per demo, inline.** Place each demo right after the sentence it illustrates, never in a big tabbed widget. The article text does the explaining.
- **Good and Bad are always two separate demos, Good first with Bad directly below.** Each has its own header: "✅ Good" or "❌ Bad" in bold, followed by a short description of what it does (for example "✅ Good  The skeleton matches the table"). Each runs on its own with its own trigger.
  - Animated demos play **once** when they first scroll into view, then only replay when the reader presses Replay. Never loop them automatically.
  - No sliders for these comparisons, and no toggles, side-by-side lanes, coloured verdict pills or "show me the fix" modes.
  - Give each demo a short plain-language readout of what just happened. Keep it serious (see section 6).
  - Build them with `Demo` and `Pair` from `components/ArticleDemo.tsx` (shared frame, ✅/❌ headers, readout, chip/primary/link button styles), so every article looks the same.
  - Demos that need input play themselves once when scrolled into view (typing, loading), and readers can always take over and try it themselves.
  - The pairs in `please-dont-let-it-sit-at-99` and `when-should-a-form-tell-you-youre-wrong` are the reference.
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

### 5. Charts, dashboards and data examples

- Research dashboard and data-table patterns before building (KPI tiles, change indicators, legends, table layout), not just the chart itself.
- Data examples stay serious (see section 6).
- Change values: arrow + signed number (▲ +11%, ▼ −30%), coloured by whether the change is good for that metric (for emissions, down is good). Use the same sign format everywhere. Green and red are reserved for good and bad, never for series.
- Every coded symbol has a legend placed before the data it explains, showing the real coloured symbols, including the neutral or flat state and its threshold.
- Units go in the chart subtitle, not floating above the axis. The chart title sits directly above the chart. Label the start and end values.
- Tables run full width, numbers right-aligned with tabular figures, and must fit a 390px phone without sideways scrolling.

### 6. Copy and tone

No em dashes anywhere on the site. Copy should read like Tamara wrote it: plain and specific.

**Serious vs playful depends on what the asset is doing:**

- **Serious** whenever the asset shows how something should be designed: design patterns, Good/Bad demos, charts, dashboards, data examples, best practices. No jokes, emojis or cute placeholders in the example UI, its labels or its readouts. Plain, factual, professional.
- **Playful is fine** where the asset is about opinion, career or reflection rather than teaching a design practice, for example the quiz in "The Portfolio Is Lying to You". Humour, emojis and a cheeky score message all belong there.
- If it's unclear which one an asset is, ask Tamara before writing the copy.
