# Design System Tokens & Anti-Drift Architecture

> **Evidence Classification:**
> - `DIRECT`: [`design-tokens`](https://www.designmotionhq.com/patterns/design-tokens), [`design-system-kit`](https://www.designmotionhq.com/patterns/design-system-kit), Homepage UX Engine specification (`Design System New in 2.0`).
> - `SYNTHESIZED`: 3-layer token cascade from [`design-tokens`](https://www.designmotionhq.com/patterns/design-tokens) and [`design-system-kit`](https://www.designmotionhq.com/patterns/design-system-kit).

---

## 1. Core Principle
A design system is a project-wide contract. When developers and AI models eyeball pixels, hardcode raw hex values, or introduce a new button variant on every screen, the software experiences "visual drift." Design tokens maintain consistency, scale across rebrands, and make dark mode an effortless token swap rather than a manual stylesheet rewrite.

---

## 2. Key Rules & Metrics

### The 3-Tier Token Cascade [DIRECT: `design-tokens`]
Tokens must be structured in three strict layers, where each layer references the layer above:
1. **Tier 1: Primitives (Raw Values):**
   - Hex colors, base pixel values, raw curves.
   - `blue-500: #3b82f6;`, `gray-900: #121212;`, `space-4: 16px;`
2. **Tier 2: Semantic Tokens (Meaning & Role):**
   - Names describe role, not literal color or number.
   - `color-surface: var(--gray-900);`
   - `color-brand: var(--blue-500);`
   - `color-error: var(--red-600);`
   - `spacing-container: var(--space-4);`
3. **Tier 3: Component Tokens (Scoped Usage):**
   - Directly bound to a specific component.
   - `button-primary-bg: var(--color-brand);`
   - `card-padding: var(--spacing-container);`

### Prevent Silent Invention [DIRECT: Homepage UX Engine Specification]
- A screen should never invent a 3rd button style, a 7th gray, or an 11px padding gap in silence.
- Every CSS value in production must either reference an established token or be declared as an explicit, justified extension. Silent invention is where visual drift starts.

### Numbered Color Scales (100–900) [DIRECT: `design-system-kit`]
- Color palettes must be organized systematically in steps of 100 (from 100 lightest to 900 darkest) so that hover, active, and disabled states step up or down predictably (e.g. button hover = `brand-600` from `brand-500`).

### Semantic Naming Over Literal Values [DIRECT: `design-tokens`]
- Token names must describe intent, not appearance:
  - ✔️ `color-primary` (survives a rebrand from blue to teal)
  - ❌ `color-blue-500` (becomes a lie the moment brand color shifts)

### Dark Mode as a Token Swap [DIRECT: `design-tokens`, `dark-mode`]
- Dark mode is *not* inverting colors with CSS filters. Dark mode is swapping Tier 2 semantic token aliases:
  - Light mode: `--color-surface: var(--gray-50); --color-text: var(--gray-900);`
  - Dark mode: `--color-surface: var(--gray-900); --color-text: var(--gray-50);`
  - The component code never changes.

## 3. Do / Don't

- **Do:** Reference semantic tokens (`var(--color-surface)`) instead of raw hex values (`#1a1a1a`).
- **Do:** Audit for off-system values (e.g. `margin: 13px`) and collapse to the token scale (`12px` or `16px`).
- **Don't:** Name tokens by literal values (`spacing-16`, `color-blue`).
- **Don't:** Silently introduce arbitrary new component variants per screen.

## 4. Context & Exceptions
- **Legacy Codebases in Migration:** In large applications migrating incrementally to tokens, isolate untokenized legacy components with a declared wrapper class rather than blocking feature shipping, and maintain a dedicated migration burndown.
