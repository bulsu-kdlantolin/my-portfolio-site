# Anti-Pattern: Excessive Card Usage

> **Evidence Classification:**
> - `SYNTHESIZED`: Derived from [`proximity-rule`](https://www.designmotionhq.com/patterns/proximity-rule), [`gestalt-laws`](https://www.designmotionhq.com/patterns/gestalt-laws), and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Description & Symptoms
Wrapping every paragraph, metric, or navigation link in an isolated, floating, bordered card. This results in "card fatigue," where the screen becomes a mosaic of competing rectangular boxes.

### Symptoms
- Every section of a page is wrapped in a `<div class="rounded-xl border p-6 shadow-sm">`.
- Cards nested inside cards nested inside larger cards.
- Screen space is consumed by border lines, inner padding, and margins rather than actual data.

---

## 2. Why It Degrades the Interface
- **Visual Noise & Ink Waste:** Borders and drop shadows add non-functional visual ink. The brain is forced to process hundreds of boundary lines.
- **Fragmentation:** Instead of a cohesive, unified tool, the software feels like a collection of disjointed widgets.

---

## 3. The Refactoring Protocol
- **Let Spacing Group the Content:** Remove the container borders. Use spacing contrast (8px between related lines vs 32px between sections) to group elements via Gestalt proximity.
- **Use Surface Planes Instead of Boxes:** Group related sections on a single continuous background surface plane (`#1a1a1a`), separated by subtle 1px hairline dividers rather than floating cards.
- **When Cards ARE Justified:** Reserve bordered cards for distinct standalone entities that can be independently selected, dragged, or rearranged (e.g. Kanban tasks, e-commerce products, or isolated account settings groups).
