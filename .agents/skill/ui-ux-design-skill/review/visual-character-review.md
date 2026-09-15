# Visual Character & Lineup Audit Checklist

> **Evidence Classification:** `RECOMMENDATION` (Operational audit protocol executing the Lineup Test and 4-Axis Character Framework).

Use this checklist during Step 12 of the Review Pipeline to identify low-intent statistical averages and ensure the product projects deliberate identity.

---

## 1. The Lineup Test
> *"Would this screenshot be immediately recognizable among ten AI-generated interfaces for the exact same prompt?"*

- [ ] **Pass:** The interface features a distinctive typographic hierarchy, a disciplined accent currency, and an intentional density choice.
- [ ] **Fail:** The interface defaults to generic royal blue, blurry background gradient blobs, floating cards with pastel circle icons, and equal-weighted pill buttons.

---

## 2. The 4-Axis Character Audit

Verify that the interface has made one explicit, stated choice per design axis:

### Axis 1: Type
- [ ] **Intentional Selection:** Does the typography reflect product intent (e.g. geometric sans for consumer ease, high-density monospace-accented sans for engineering tools, high-contrast serif for editorial/luxury)?
- [ ] **Anti-Default Check:** Has the design avoided unstyled browser-default Inter without weight, tracking, or opacity calibration?

### Axis 2: Color
- [ ] **Single Accent Currency:** Is saturated color treated as scarce currency (reserved for primary CTA and active selection)?
- [ ] **Deep Neutral Foundations:** Is the background built on intentional neutral tones (`#121212` in dark mode) rather than pastel gradient washes?

### Axis 3: Space
- [ ] **Density Commitment:** Has the design committed to either high-density technical discipline (32px rows, 8px gutters) or relaxed editorial breathing room (48px+ padding)?
- [ ] **No Uncommitted Middle:** Has the layout avoided sloppy, eyeballed padding variations?

### Axis 4: Finish
- [ ] **Surface Discipline:** Has the design committed to either flat value-stacked planes with 1px hairline borders (`rgba(255,255,255,0.08)`), or physical tactile depth with 3-shadow stacking?
- [ ] **No Random Blur:** Has the design eliminated arbitrary diffuse drop shadows on flat panels?

---

## 3. AI Hero Tell Inspection
- [ ] No gradient headlines composed of generic adjectives ("Supercharge your workflow").
- [ ] No blurry ambient purple gradient blobs added for synthetic energy.
- [ ] No symmetrical 50/50 button splits.
- [ ] No fake social proof with 5 anonymous gray shapes.
- [ ] No 3-card feature rows with icons in circles; replaced by real product UI screenshots.
