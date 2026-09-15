# Information Hierarchy & Scanning Patterns

> **Evidence Classification:**
> - `DIRECT`: [`serial-position`](https://www.designmotionhq.com/patterns/serial-position), [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear), [`data-table`](https://www.designmotionhq.com/patterns/data-table), [`landing-page-skeleton`](https://www.designmotionhq.com/patterns/landing-page-skeleton).
> - `SYNTHESIZED`: Intent-driven data distillation from [`data-table`](https://www.designmotionhq.com/patterns/data-table), [`settings-system`](https://www.designmotionhq.com/patterns/settings-system), and the Homepage UX Engine specification.

---

## 1. Core Principle
Information hierarchy dictates what users scan first, second, and ignore. Humans do not read web interfaces sequentially; they scan along predictable visual paths (F-patterns and Z-patterns) and remember the beginning and end of lists (serial position effect). The layout must prioritize high-value user tasks over database schema layouts.

## 2. Key Rules & Metrics

### The Serial Position Bookends [DIRECT: `serial-position`]
- Human recall is U-shaped: people retain the **first** (primacy) and **last** (recency) items of any sequence, forgetting the middle.
- **Navbar Layout:** Anchor the brand logo at the start (primacy) and the primary conversion CTA at the far right end (recency). Secondary links sit in the middle.
- **Landing Pages:** Open with the strongest unique value proposition in the hero; close with the strongest social proof or guarantee immediately above the final CTA.

### The 5-Section Landing Page Skeleton [DIRECT: `landing-page-skeleton`]
High-converting web pages follow a strict, proven 5-part anatomical sequence:
1. **Hero:** What you offer, who it is for, why they should care + primary CTA (evaluated in ~3 seconds).
2. **Proof:** Concrete customer metrics, real logos, or verified testimonial quote with a measurable outcome.
3. **Problem:** The operational pain point or spreadsheet chaos the user currently endures.
4. **Solution:** Concrete product screenshots with functional callouts demonstrating how the pain is resolved.
5. **Final CTA:** Low-friction closing proposition with pricing guarantee.

### Data Distillation: 5 Columns, Not 12 [SYNTHESIZED: Homepage, `data-table`]
- AI models frequently dump all 10–12 SQL database fields into a table. This turns products into raw "schema browsers."
- Distill data tables to **4–5 essential columns**:
  1. Identity (Name / Email + Avatar)
  2. Status (Icon + Label pill)
  3. Primary Metric (Right-aligned with tabular numerals)
  4. Timestamp (Relative: "3 hours ago")
  5. Action (Single primary action or overflow `...` menu)
- Move secondary metadata into expandable detail drawers or modal sheets.

## 3. Do / Don't

- **Do:** Anchor critical actions at the start and end of navigation sequences.
- **Do:** Distill complex records down to 4–5 scannable columns in list views.
- **Don't:** Expose raw database IDs, unformatted foreign keys, or internal schema columns to end users.
- **Don't:** Bury the primary conversion action in the low-recall middle of a navigation bar.

## 4. Context & Exceptions
- **Audit Logs & Compliance Tables:** Dedicated compliance and security logs genuinely require forensic timestamps, IP addresses, user-agent strings, and request hashes. In forensic views, preserve high column density, but provide sticky column freezing and column visibility toggles.
