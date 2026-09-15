# Visual Hierarchy

> **Evidence Classification:**
> - `DIRECT`: [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy), [`von-restorff`](https://www.designmotionhq.com/patterns/von-restorff).
> - `SYNTHESIZED`: Single accent currency & 90/10 action splits from [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy), [`de-ai-landing-hero`](https://www.designmotionhq.com/patterns/de-ai-landing-hero), and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Core Principle
Visual hierarchy directs the user's attention in order of importance, establishing a clear entry point, a natural scanning sequence, and an unambiguous next action. Without deliberate hierarchy, every element competes at equal volume, turning the interface into visual noise.

## 2. Key Rules & Metrics

### The 2x Entry Point Rule [DIRECT: `visual-hierarchy`]
- The primary headline or entry point must be roughly **twice the font size** of the surrounding body text (e.g., 32px–40px heading vs 16px body).
- Size alone does not carry a layout: combine size with font weight (800 for titles, 400 for body) and contrast (bold white vs 55–70% muted body copy).

### The Single Accent Currency [SYNTHESIZED: `visual-hierarchy`, `reverse-engineered-linear`]
- Treat saturated color as a finite currency. Keep the canvas and containers neutral; reserve one brand accent color for the single most important action or active selection.
- Avoid multi-color rainbow status tags; a subtle neutral icon often communicates state more deliberately than bright saturated pills.

### The 90/10 Action Weight Split [SYNTHESIZED: `de-ai-landing-hero`, `visual-hierarchy`]
- Avoid placing two identical filled buttons side-by-side (the 50/50 click split).
- Pair one solid primary button with a secondary ghost button or text link with an arrow, shifting visual weight to 90/10.

### The Von Restorff Isolation Effect [DIRECT: `von-restorff`]
- An element that breaks the pattern captures immediate focus. In pricing tiers or feature sets, isolate exactly **one** target tier using subtle scale (1.02x), an elevation badge ("Most Popular"), and border emphasis. Dim alternative choices slightly.
- *Caution:* Emphasizing multiple items cancels the effect completely.

## 3. Do / Don't

- **Do:** Give the single most important element noticeably more whitespace/padding than secondary elements.
- **Do:** Combine scale, weight, and opacity to establish reading order without adding decorative colors.
- **Don't:** Give two competing actions identical visual prominence.
- **Don't:** Highlight multiple cards or tiers simultaneously in the same view.

## 4. Context & Exceptions
- **Dense Data Dashboards:** Large display headlines (36px+) waste valuable screen real estate. In productivity dashboards, establish entry points through high-contrast metric values and structural column headers rather than marketing display fonts.
