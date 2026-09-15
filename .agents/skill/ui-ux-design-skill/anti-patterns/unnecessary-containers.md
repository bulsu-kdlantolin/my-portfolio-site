# Anti-Pattern: Unnecessary Containers & Nested Dividers

> **Evidence Classification:**
> - `DIRECT`: [`proximity-rule`](https://www.designmotionhq.com/patterns/proximity-rule).
> - `SYNTHESIZED`: Derived from [`proximity-rule`](https://www.designmotionhq.com/patterns/proximity-rule) and [`gestalt-laws`](https://www.designmotionhq.com/patterns/gestalt-laws).

---

## 1. Description & Symptoms
Inserting physical visual boundaries (lines, divider rules, gray container boxes) between elements that are already naturally separated by whitespace.

### Symptoms
- `<hr class="border-gray-200 my-8">` placed between sections that already have 40px of margin.
- Every form field wrapped in its own separate bordered box.
- Toolbars where every individual icon has an isolated border frame.

---

## 2. Why It Degrades the Interface
- **Visual Clutter:** Extra borders add visual noise without adding structural clarity.
- **Fragmented Focus:** Lines chop up the reading flow, preventing the eye from smoothly scanning down a continuous vertical axis.

---

## 3. The Refactoring Protocol
- **Let Whitespace Carry the Grouping:** Delete the divider lines. If two sections need separation, increase the gap from 16px to 32px–40px.
- **The Contrast Rule:** If the space between sections is at least 2.5x the space within sections, no border line or container is required.
- **When to Use Dividers:** Dividers are justified *only* in tight spaces (e.g. compact dropdown menus or 32px table rows) where expanding whitespace would sacrifice critical information density.
