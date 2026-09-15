# Typography & Numerical Data

> **Evidence Classification:**
> - `DIRECT`: [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy), [`golden-ratio`](https://www.designmotionhq.com/patterns/golden-ratio), [`data-table`](https://www.designmotionhq.com/patterns/data-table), [`microcopy`](https://www.designmotionhq.com/patterns/microcopy).
> - `SYNTHESIZED`: Opacity-based hierarchy from [`dark-mode`](https://www.designmotionhq.com/patterns/dark-mode), [`perfect-card`](https://www.designmotionhq.com/patterns/perfect-card), and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Core Principle
Typography communicates semantic hierarchy and structural reading order. It is the interface's primary vehicle for clarity. High-performance interfaces use strict typographic scales, tabular numerals for alignment, and opacity-driven secondary text rather than ad-hoc font styles.

## 2. Key Rules & Metrics

### Mathematical Type Scales [DIRECT: `golden-ratio`, `visual-hierarchy`]
- Base sizes on a proportional multiplier:
  - **Body text:** 16px (or 13px–14px for dense tools)
  - **Subheading:** 24px–26px
  - **Heading:** 38px–42px
  - **Display / Hero:** 64px–68px

### Hierarchy via Weight & Opacity [SYNTHESIZED: `perfect-card`, `dark-mode`]
- Rather than introducing new font sizes or colors for every element, control emphasis via weight and opacity:
  - **Primary Titles / Values:** Font-weight 600–800, 100% opacity.
  - **Body / Descriptive Text:** Font-weight 400, **55%–70% opacity**.
  - **Captions / Helper / Metadata:** Font-weight 300–400, **40%–50% opacity**.
  - *Result:* The eye lands cleanly on the headline without competing with the body.

### Tabular Numerals for Numerical Data [DIRECT: `data-table`]
- All financial metrics, timestamps, percentages, and table columns must use tabular figures:
  ```css
  font-variant-numeric: tabular-nums;
  ```
- Proportional numbers have variable glyph widths (a "1" is narrower than an "8"), causing numbers to jitter and misalign vertically. Tabular numbers enforce a monospace grid on digits while preserving proportional letterforms.

### Density Calibration [DIRECT: `reverse-engineered-linear`]
- High-density productivity UI: 13px text, -1% letter spacing (`letter-spacing: -0.01em`), 32px row heights. This allows a viewport to display 14 items without scrolling instead of 8.

## 3. Do / Don't

- **Do:** Right-align numerical data and column headers in data tables so decimal points and digits line up.
- **Do:** Label action buttons with the user's reward ("Create Workspace"), not the mechanical verb ("Submit").
- **Don't:** Render title and body copy at identical weight (400) and 100% opacity.
- **Don't:** Left-align numeric figures in tables.

## 4. Context & Exceptions
- **Marketing Display Headlines:** Letter-spacing should be tightened (`-0.02em` to `-0.03em`) on large display type (36px+) to keep words cohesive. On tiny uppercase captions (10px–11px), letter-spacing should instead be opened up (`+0.05em` to `+0.08em`) to preserve legibility.
