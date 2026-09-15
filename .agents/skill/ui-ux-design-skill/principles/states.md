# State Completeness & Edge Cases

> **Evidence Classification:**
> - `DIRECT`: [`empty-states`](https://www.designmotionhq.com/patterns/empty-states), [`error-states`](https://www.designmotionhq.com/patterns/error-states), [`autosave-ux`](https://www.designmotionhq.com/patterns/autosave-ux), [`form-field-states`](https://www.designmotionhq.com/patterns/form-field-states), [`zeigarnik-effect`](https://www.designmotionhq.com/patterns/zeigarnik-effect).
> - `SYNTHESIZED`: The 6 Universal State Coverage Model derived from [`form-field-states`](https://www.designmotionhq.com/patterns/form-field-states), [`loading-states-system`](https://www.designmotionhq.com/patterns/loading-states-system), and [`empty-states`](https://www.designmotionhq.com/patterns/empty-states).

---

## 1. Core Principle
Amateur and AI-generated UIs design almost exclusively for the "ideal happy path," shipping screens that break visually when data is missing, pending, or interrupted. Professional software engineers specify and design all relevant states up front.

## 2. Key Rules & Metrics

### The 6 Universal States [SYNTHESIZED: Homepage, `form-field-states`, `error-states`]
Every interactive screen or data module must account for relevant states:
1. **Empty State:** When no records exist yet. Must include a supportive icon, human copy explaining the value, and an on-ramp primary CTA ("Create your first invoice").
2. **Loading State:** Skeletons matching final content shape (for >300ms loads) or localized spinners.
3. **Partial / Incomplete State:** Progress indicators, incomplete onboarding meters (Zeigarnik open loops), or indeterminate checkbox dashes.
4. **Error State:** Human-readable diagnosis, non-red-only signals, and an actionable exit (Retry, Support link, or Revert). Never dead-end on a lone "OK" button.
5. **Success State:** Clear confirmation anchored where the user's attention already rests.
6. **Offline / Degraded State:** Local edit queue, honest sync indicator ("Saving...", "Saved", "Offline - 3 edits queued"), and exit guards (`beforeunload`) on dirty forms.

### Autosave State Architecture [DIRECT: `autosave-ux`]
- Debounce writes: save after an ~800ms typing pause, not on every keystroke.
- Explicit status indicator: "Saving...", "Saved to cloud", "Offline — changes stored locally".
- When connection drops, push edits to a local queue (`IndexedDB` or `localStorage`) and replay in chronological order upon reconnect.
- Never overwrite concurrent multi-tab edits silently.

### Zeigarnik Open Loops [DIRECT: `zeigarnik-effect`]
- Unfinished tasks stay active in working memory. An 80% profile completion meter creates natural return pressure; an artificial 100% complete state removes motivation to engage.
- Leave an unchecked onboarding step visible to guide the user's return path.

## 3. Do / Don't

- **Do:** Provide an actionable "Create" or "Add" CTA on first-time empty states.
- **Do:** Give every error a concrete recovery action (Retry, Edit, Dismiss).
- **Don't:** Render a blank white canvas or raw database "0 records found" message.
- **Don't:** Silently discard offline user edits.

## 4. Context & Exceptions
- **Search Zero-Results vs First-Time Empty:** As established in [`search-experience-system`](https://www.designmotionhq.com/patterns/search-experience-system), when a search query yields no results, do *not* show a "Create" button; instead provide search recovery options: popular keywords, category filters, and spell-check suggestions.
