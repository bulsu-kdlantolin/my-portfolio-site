# Depth, Elevation & Concentric Geometry

> **Evidence Classification:**
> - `DIRECT`: [`border-radius`](https://www.designmotionhq.com/patterns/border-radius), [`shadow-elevation`](https://www.designmotionhq.com/patterns/shadow-elevation), [`depth-layers`](https://www.designmotionhq.com/patterns/depth-layers), [`perfect-card`](https://www.designmotionhq.com/patterns/perfect-card), [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear), [`z-index-mastery`](https://www.designmotionhq.com/patterns/z-index-mastery).
> - `SYNTHESIZED`: The Two Contextual Depth Paradigms (Value Stacking vs 3-Shadow Stacking) reconciled from [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear) and [`shadow-elevation`](https://www.designmotionhq.com/patterns/shadow-elevation).

---

## 1. Core Principle
Depth establishes physical spatial logic, separating background canvas, operational panels, and elevated overlays. Professional UI does not rely on arbitrary blurry drop shadows or mismatched corner curves; it applies mathematically concentric radii and selects depth strategies calibrated to the product's density requirements.

---

## 2. The Two Contextual Depth Strategies

DesignMotionHQ explicitly details two distinct, context-dependent paradigms for depth. The reviewer must apply the strategy that matches the interface type:

### Strategy A: Value Stacking for Dense Technical Applications [DIRECT: `reverse-engineered-linear`, `dark-mode`]
*Best for: Developer tools, IDEs, dense data dashboards, high-productivity software (e.g. Linear, GitHub, VS Code).*
- **Philosophy:** *"Depth comes from value, not blur. Kill the shadows and stack three background values separated by a 1px border at 8% white. Flat surfaces look engineered; shadows look decorated."*
- **Implementation:**
  - **Base Layer (Canvas):** Near-black `#121212` or `#0b0f17`.
  - **Surface 1 (Panels / Sidebars):** `#1a1a1a` (lightened gray step).
  - **Surface 2 (Raised Cards / Hover):** `#242424`.
  - **Separation:** `1px solid rgba(255, 255, 255, 0.08)`.
  - **Hover:** Changes the surface color value, not elevation/blur.
  - **Result:** Crisp, engineered density with zero shadow mud.

### Strategy B: 3-Layer Shadow Stacking for Floating & Consumer Components [DIRECT: `shadow-elevation`, `depth-layers`, `perfect-card`]
*Best for: Floating modals, popovers, dropdown flyouts, pricing cards, marketing hero cards.*
- **Philosophy:** *"Real depth comes from stacking multiple shadows, not one blur... Shadows aren't decoration. They encode hierarchy and depth."*
- **Implementation:**
  Stack three discrete shadow layers to simulate natural atmospheric light falloff:
  ```css
  /* The 3-Shadow Stack */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),         /* Layer 1: Tight Contact Shadow (anchors surface) */
    0 8px 16px -4px rgba(0, 0, 0, 0.16),   /* Layer 2: Mid-distance Form Shadow */
    0 24px 48px -12px rgba(0, 0, 0, 0.20); /* Layer 3: Soft Ambient Spread Shadow */
  ```
- **Hairline Border:** Add a subtle border (`rgba(255, 255, 255, 0.12)`) to define card boundaries against dark canvases.
- **Hover Lift:** Raise by `translateY(-8px)` with slight scale (1.02) and a deeper shadow to signal interactivity.

---

## 3. Concentric Border Radius Mathematics [DIRECT: `border-radius`]

When nesting a rounded element inside a padded container, their curves must share a center point. Using identical radii on nested elements creates awkward, distorted corners that subconsciously look broken.

### The Concentric Formula
$$R_{\text{inner}} = R_{\text{outer}} - \text{Padding}$$

```css
.outer-card {
  border-radius: 24px;
  padding: 16px;
}
.inner-container {
  /* 24px - 16px = 8px */
  border-radius: 8px;
}
```
*If padding exceeds outer radius ($P \ge R_{\text{outer}}$), inner radius clamps to 0px (sharp).*

### Systematic Radius Scale Hierarchy
Derive all project radii from a single disciplined scale mapped to component physical size:
- **Tooltips / Badges / Pills:** `4px`
- **Form Inputs / Buttons:** `8px`
- **Cards / Content Blocks:** `12px – 16px`
- **Modals / Dialogs:** `16px – 20px`
- **Main App Shell Panels:** `24px`

---

## 4. Z-Index Stacking Contexts [DIRECT: `z-index-mastery`]
- `z-index` does not function on `position: static` elements; elements require `position: relative`, `absolute`, `fixed`, or `sticky`.
- Avoid z-index arms races (`z-index: 99999`). Contain component stacking contexts cleanly using:
  ```css
  isolation: isolate;
  ```

## 5. Do / Don't

- **Do:** Calculate nested radii mathematically ($R_{\text{in}} = R_{\text{out}} - P$).
- **Do:** Use value stacking and hairline borders for dense technical dashboards.
- **Do:** Layer contact, mid, and ambient shadows for floating consumer cards and modals.
- **Don't:** Apply identical 16px border-radius to both a parent card and its internal child button.
- **Don't:** Scatter single, heavy, muddy drop shadows (`box-shadow: 0 10px 20px black`) across flat table rows.

## 6. Context & Exceptions
- **Brand Personality Calibration:** Sharp radii (2px–4px) project institutional, technical, or financial rigor. Rounder radii (12px–20px) project approachability and consumer warmth. Align the baseline scale with brand intent, then enforce concentric nesting throughout.
