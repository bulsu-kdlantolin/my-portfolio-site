# Layout & Grid Alignment

> **Evidence Classification:**
> - `DIRECT`: [`grid-system`](https://www.designmotionhq.com/patterns/grid-system), [`golden-ratio`](https://www.designmotionhq.com/patterns/golden-ratio).
> - `SYNTHESIZED`: Responsive column collapse derived from [`grid-system`](https://www.designmotionhq.com/patterns/grid-system) and [`navigation-patterns`](https://www.designmotionhq.com/patterns/navigation-patterns).

---

## 1. Core Principle
Layout structure provides predictable visual rhythm and alignment. Chaotic, floating, or arbitrarily placed components erode perceived software quality. A rigorous grid system allows layouts to reflow cleanly across screen sizes while permitting intentional, expressive grid-breaking for emphasis.

## 2. Key Rules & Metrics

### The 12-Column Standard [DIRECT: `grid-system`]
- Standardize on a 12-column grid. Because 12 divides evenly by 2, 3, 4, and 6, it maps naturally to any layout:
  - **4:8 Split:** Persistent sidebar plus wide content canvas.
  - **6:6 Split:** Equal comparison panels.
  - **3:9 Split:** Dense navigation beside a broad operational canvas.

### Gutter Width Sets Mood [DIRECT: `grid-system`]
- **8px Gutters:** Dense, technical, high-utility dashboards (IDEs, data tables).
- **24px Gutters:** Balanced, clean SaaS application standard.
- **40px Gutters:** Editorial, marketing, or premium luxury presentations.

### Responsive Breakpoint Collapse [DIRECT: `grid-system`]
- Step down column counts at standardized breakpoints:
  - Desktop (1200px+): **12 columns**
  - Tablet (768px–1024px): **6 columns**
  - Mobile (480px–767px): **4 columns**
  - Small Mobile (<480px): **1 column (stacked)**

### The Golden Ratio Split [DIRECT: `golden-ratio`]
- When structuring asymmetric split views, apply the 1.618 ratio: roughly **62% / 38%** width distribution.
- Assign the larger 62% pane to primary content and the 38% pane to secondary details or action panels.

### Intentional Grid Breaking [DIRECT: `grid-system`]
- Only break the grid once order is established. Bleeding a hero visual edge-to-edge or pulling a callout quote into the margin registers as intentional only against a disciplined underlying grid.

## 3. Do / Don't

- **Do:** Snap elements to shared vertical and horizontal column edges; alignment is invisible when correct and glaring when missed.
- **Do:** Right-align numeric values and dates; left-align text and identifiers.
- **Don't:** Pick arbitrary pixel widths (e.g. `width: 37%`) when a clean column ratio (e.g. 4:8 or 3:9) fits the grid.
- **Don't:** Let a grid collapse abruptly without responsive breakpoints.

## 4. Context & Exceptions
- **Freeform Canvas Tools:** Design tools (Figma, Miro) or flow diagram builders intentionally bypass column constraints within the canvas viewport while maintaining rigid grids in the surrounding chrome/panels.
