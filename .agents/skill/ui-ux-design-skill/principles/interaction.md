# Interaction Design & Affordances

> **Evidence Classification:**
> - `DIRECT`: [`hover-trap`](https://www.designmotionhq.com/patterns/hover-trap), [`context-menu`](https://www.designmotionhq.com/patterns/context-menu), [`dropdown-design`](https://www.designmotionhq.com/patterns/dropdown-design), [`inline-editing`](https://www.designmotionhq.com/patterns/inline-editing), [`swipe-actions`](https://www.designmotionhq.com/patterns/swipe-actions), [`tooltip-design`](https://www.designmotionhq.com/patterns/tooltip-design), [`accordion-disclosure`](https://www.designmotionhq.com/patterns/accordion-disclosure).
> - `SYNTHESIZED`: Keyboard traversal standards from [`focus-states`](https://www.designmotionhq.com/patterns/focus-states), [`command-palette`](https://www.designmotionhq.com/patterns/command-palette), and [`data-table`](https://www.designmotionhq.com/patterns/data-table).

---

## 1. Core Principle
Interactive elements must explicitly broadcast their affordance (clickable looks clickable, editable looks editable) and behave predictably across both mouse and touch devices. Hidden controls, dead zones, and fragile hover states erode user confidence.

## 2. Key Rules & Metrics

### The Touch Target Minimum [DIRECT: `hover-trap`, `dropdown-design`]
- Mobile touch hit areas must measure at least **44px x 44px** (or 48px x 48px), even if the visible icon glyph is only 16px–20px.
- Use CSS padding or invisible pseudo-elements (`::after`) to expand hit bounds without inflating visual glyph size.

### Safe Hover Intent & Diagonal Traversal [DIRECT: `context-menu`]
- Submenus die when a user drifts diagonally toward the flyout. Context menus and navigation flyouts must implement an invisible "safe triangle" connecting the cursor position to the submenu bounds so diagonal mouse movement does not collapse the menu.

### Tooltip Discipline [DIRECT: `tooltip-design`]
- Always apply a **300ms hover delay** before rendering tooltips to prevent flashing during casual cursor grazing.
- Anchor with a pointer arrow; flip automatically when near viewport boundaries; dismiss on Escape, scroll, or focus-out.
- Never place critical primary instructions or links inside hover tooltips.

### Inline Editing Affordance [DIRECT: `inline-editing`]
- Editable text must whisper its affordance at rest (subtle pencil icon or soft background tint on hover).
- When swapped to an `<input>`, keep font size, weight, line-height, and padding pixel-identical so the layout does not jump. Enter commits, Escape cancels.

### Accordion Grid Transitions [DIRECT: `accordion-disclosure`]
- CSS cannot smoothly animate `height: auto`. Transition accordion expansion using CSS Grid:
  ```css
  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 250ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .accordion-content[data-open="true"] {
    grid-template-rows: 1fr;
  }
  ```
- Synchronize chevron rotation to the identical timing curve.

## 3. Do / Don't

- **Do:** Gate hover styles behind `@media (hover: hover)` so touch devices do not trigger sticky hover bugs.
- **Do:** Wire full keyboard control (Arrow keys navigate, Enter commits, Escape dismisses) on all custom menus, dropdowns, and palettes.
- **Don't:** Hide primary actions exclusively behind hover states.
- **Don't:** Fire tooltips instantly on cursor graze.

## 4. Context & Exceptions
- **Power-User Data Grids:** In high-density desktop software with mouse pointers, row action buttons may be revealed on hover to reduce visual clutter across 100+ visible rows, provided equivalent keyboard shortcuts (e.g. `C` for create, `E` for edit, `Delete` for remove) exist.
