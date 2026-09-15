# Spacing & Proximity

> **Evidence Classification:**
> - `DIRECT`: [`proximity-rule`](https://www.designmotionhq.com/patterns/proximity-rule), [`design-system-kit`](https://www.designmotionhq.com/patterns/design-system-kit).
> - `SYNTHESIZED`: Whitespace-First Grouping derived from [`proximity-rule`](https://www.designmotionhq.com/patterns/proximity-rule), [`gestalt-laws`](https://www.designmotionhq.com/patterns/gestalt-laws), and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Core Principle
Distance alone communicates relationships. Elements placed close together are pre-attentively perceived as one group; elements spaced apart are perceived as distinct. Whitespace is active structure, not empty space. Relying on spacing contrast avoids container accumulation and visual clutter.

## 2. Key Rules & Metrics

### The 4px / 8px Spacing Scale [DIRECT: `design-system-kit`]
- Snap all padding, margins, and gaps to an 8px base scale (with a 4px half-step for dense controls):
  - `space-1 = 4px` (tight micro-gaps, icon-to-label)
  - `space-2 = 8px` (compact control padding)
  - `space-3 = 12px` (related form fields)
  - `space-4 = 16px` (standard card padding)
  - `space-6 = 24px` (container gap)
  - `space-8 = 32px` (section separation)
  - `space-10 = 40px` (major section break)
  - `space-16 = 64px` (page hero rhythm)

### The Proximity Contrast Ratio [SYNTHESIZED: `proximity-rule`, `gestalt-laws`]
- The gap **within** a functional group must be noticeably smaller than the gap **between** groups:
  - Form field label to input: `6px – 8px`
  - Field to adjacent field: `12px – 16px`
  - Fieldset/Section break: `32px – 40px`
- When in-group and between-group spacing are identical, hierarchy collapses and users are forced to parse every item sequentially.

### Spacing Over Containers [SYNTHESIZED: `proximity-rule`, `reverse-engineered-linear`]
- Prefer larger whitespace gaps over drawing unnecessary divider lines or enclosing every section in a bordered box. Spacing creates structure without adding ink or cognitive overhead.

## 3. Do / Don't

- **Do:** Group form controls, toolbar buttons, and sidebar items by functional meaning using spacing offsets.
- **Do:** Snap every arbitrary gap (e.g. 7px, 11px, 23px) onto the nearest systematic token (8px, 12px, 24px).
- **Don't:** Space every element equally down a page.
- **Don't:** Draw horizontal rule dividers between items that are already visually separated by 32px+ of whitespace.

## 4. Context & Exceptions
- **Loose or Heterogeneous Content:** As noted in [`gestalt-laws`](https://www.designmotionhq.com/patterns/gestalt-laws), when elements cannot be positioned close together physically (e.g., separate account settings cards or cross-column comparisons), bordered containers (Common Region) are necessary and justified.
