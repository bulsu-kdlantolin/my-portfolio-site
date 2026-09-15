# Color, Contrast & Accessibility

> **Evidence Classification:**
> - `DIRECT`: [`color-accessibility`](https://www.designmotionhq.com/patterns/color-accessibility), [`dark-mode`](https://www.designmotionhq.com/patterns/dark-mode), [`gradient-design`](https://www.designmotionhq.com/patterns/gradient-design), [`color-picker-ux`](https://www.designmotionhq.com/patterns/color-picker-ux).
> - `SYNTHESIZED`: Single accent currency from [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy), [`de-ai-landing-hero`](https://www.designmotionhq.com/patterns/de-ai-landing-hero), and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Core Principle
Color is functional encoding, not decoration. An interface built on neutral foundations with a disciplined accent currency commands clarity and trust. Interfaces that splatter saturated hues across every card and badge create sensory overload and inevitably fail accessibility standards.

## 2. Key Rules & Metrics

### WCAG Contrast Thresholds [DIRECT: `color-accessibility`]
- **Regular Body Text (<18px bold or <24px regular):** Minimum **4.5:1** contrast against its immediate background.
- **Large Text (18px+ bold or 24px+ regular):** Minimum **3:1** contrast.
- **The #1 Silent Failure:** "Muted gray" secondary labels and navigation links routinely drop to 1.8:1–2.2:1. Always verify gray tokens with a live contrast check.

### Dual-Channel State Encoding [DIRECT: `color-accessibility`]
- **Never encode state with color alone.** Roughly 8% of male users experience color vision deficiency; red error text and green success badges collapse into identical muddy tones.
- Always pair color cues with a secondary signal: an icon (alert triangle, checkmark), explicit text label, or border pattern.

### Dark Mode Calibration [DIRECT: `dark-mode`]
- **No Pure Black Backgrounds:** Base dark mode on near-black `#121212` or `#0f172a`, not `#000000`. Pure black destroys surface elevation depth and hides shadows.
- **No Pure White Text:** Dim text from `#FFFFFF` down to an off-white (e.g. `rgba(255,255,255,0.92)` or `#ededed`) to eliminate glare and retinal fatigue.
- **Desaturate Accents by ~20%:** Full-saturation neon colors buzz and vibrate against dark surfaces.

### Disciplined Gradient Design [DIRECT: `gradient-design`]
- Limit hue travel to **within 60°** on the color wheel (e.g., teal to cyan). Opposing hues (orange to blue) pass through a muddy gray dead zone.
- Add 2%–3% subtle noise/grain to eliminate color banding on 8-bit monitors.
- Gradients belong in the background as ambiance, never directly under body copy where contrast becomes unpredictable.

## 3. Do / Don't

- **Do:** Check every text/background pair against WCAG 4.5:1.
- **Do:** Reserve your saturated brand accent for primary CTAs and active states.
- **Don't:** Rely on red-vs-green alone to differentiate status.
- **Don't:** Use pure `#000000` canvas backgrounds in dark mode.

## 4. Context & Exceptions
- **Disabled / Inactive Controls:** WCAG explicitly exempts inactive controls from 4.5:1 contrast requirements. However, as established in [`disabled-buttons`](https://www.designmotionhq.com/patterns/disabled-buttons), prefer keeping buttons active and autofocusing errors on click rather than stranding users with illegible disabled elements.
