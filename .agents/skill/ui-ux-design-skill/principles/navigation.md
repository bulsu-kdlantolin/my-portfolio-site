# Navigation & Orientation

> **Evidence Classification:**
> - `DIRECT`: [`navigation-patterns`](https://www.designmotionhq.com/patterns/navigation-patterns), [`tabs-system`](https://www.designmotionhq.com/patterns/tabs-system), [`focus-states`](https://www.designmotionhq.com/patterns/focus-states), [`pagination`](https://www.designmotionhq.com/patterns/pagination).
> - `SYNTHESIZED`: Platform-native navigation mapping derived from [`navigation-patterns`](https://www.designmotionhq.com/patterns/navigation-patterns) and [`bottom-sheets`](https://www.designmotionhq.com/patterns/bottom-sheets).

---

## 1. Core Principle
Navigation gives users spatial orientation and effortless access to high-value destinations. Effective navigation reflects platform constraints (thumb reach vs keyboard traversal) and structural information depth, rather than arbitrary stylistic choices.

## 2. Key Rules & Metrics

### Platform-Native Navigation [DIRECT: `navigation-patterns`]
- **Mobile Standard:** Bottom navigation tabs (3–5 destinations) placed permanently within thumb reach. Burying primary mobile links inside a hamburger drawer reduces engagement by 40%–56%.
- **Desktop Standard:** Persistent vertical sidebar for complex software (5+ primary modules). Avoid auto-collapsing sidebars by default, as collapsing impairs discoverability.
- **Breadcrumb Depth:** Breadcrumbs earn their space only when navigation runs deeper than 2 hierarchical levels (`Home > Project > Settings > Billing`). On flat 1–2 level structures, breadcrumbs add visual clutter without orientation value.

### Focus Rings & Keyboard Order [DIRECT: `focus-states`]
- **Never remove `outline` without an explicit replacement.** Setting `outline: none` without providing an alternative is an instant accessibility blocker.
- **The 2px/2px Focus Ring Standard:**
  ```css
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  ```
- Focus must strictly match visual DOM order. Reordering columns via `order` in flexbox/grid without syncing DOM order causes focus to teleport erratically.
- Provide a skip link as the very first focusable DOM element, hidden until focused.

### Sliding Tabs System [DIRECT: `tabs-system`]
- Active indicators must **slide smoothly** between tabs using a spring or ease-out curve; teleporting indicator boxes feels mechanical and unpolished.
- When tabs overflow mobile screens, scroll horizontally with subtle edge gradient fades; **never wrap tab rows onto a second line**.
- Focus ring and active state must use distinct visual treatments so keyboard navigators can distinguish "where focus currently sits" from "what tab is selected."

### Cursor Pagination Over Offset Pagination [DIRECT: `pagination`]
- Use cursor-based pagination for frequently updated data to prevent row-skipping or duplicates when items are inserted during browsing.
- Keep active page state in the URL query string (`?page=3`) so reloads and shared links preserve context.

## 3. Do / Don't

- **Do:** Use `:focus-visible` to display focus rings for keyboard users while keeping mouse clicks clean.
- **Do:** Place 3–5 primary mobile destinations in bottom navigation within thumb reach.
- **Don't:** Hide primary desktop navigation inside a hamburger menu.
- **Don't:** Wrap overflowing tabs onto a second vertical row.

## 4. Context & Exceptions
- **Immersive / Full-Screen Experiences:** Media viewers, presentation modes, or drawing canvases may auto-hide navigation bars to maximize focus on content, provided simple pointer movement or top-edge hover summons the controls.
