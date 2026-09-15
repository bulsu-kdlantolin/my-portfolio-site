# Visual Character & The Anti-AI Lineup Test

> **Evidence Classification:**
> - `DIRECT`: Homepage UX Engine specification (`Visual Character New in 2.0`), [`de-ai-landing-hero`](https://www.designmotionhq.com/patterns/de-ai-landing-hero), [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).
> - `RECOMMENDATION`: The 4-Axis Character Audit Protocol.

---

## 1. Core Principle
Large language models and UI generators gravitate toward a "statistically safest aesthetic" — a bland, interchangeable look characterized by generic purple gradients, floating rounded cards, Lucide icons in pastel circles, and equal-weighted buttons. Visual character is the result of making **one explicit, deliberate choice per design axis** rather than accepting default model outputs.

---

## 2. The Lineup Test [DIRECT: Homepage UX Engine Specification]

> *"Would this screenshot be recognizable among ten AI-generated UIs for the exact same prompt?"*

If the answer is no, the interface lacks intentional character and relies on low-intent statistical averages.

### The 4 Axes of Visual Character [DIRECT: Homepage UX Engine Specification]
Every high-grade interface must make an explicit, stated commitment across four foundational axes:
1. **Type Axis:** An intentional typeface choice (e.g. geometric sans for consumer tech, high-density monospace-accented sans for developer tooling, or high-contrast serif for luxury/editorial). Not browser-default generic Inter without weight or letter-spacing tuning.
2. **Color Axis:** A single deliberate accent hue used as currency (e.g. Linear's focused indigo, Stripe's electric violet), grounded on deeply neutral canvas foundations. Not decorative multi-color pastel washes.
3. **Space Axis:** A deliberate density choice: either high-density technical discipline (32px rows, 8px gutters) or relaxed editorial breathing room (48px+ padding, 40px gutters). Not an uncommitted middle ground.
4. **Finish Axis:** A consistent surface treatment: either engineered flat value stacking with 1px hairline borders (`rgba(255,255,255,0.08)`), or physical tactile depth with 3-layer contact shadows. Not random blur effects.

---

## 3. The 5 Verified AI Hero Tells [DIRECT: `de-ai-landing-hero`]

When reviewing landing pages or marketing sections, audit for these 5 tells:
1. **Gradient Headline Full of Adjectives:** *"Supercharge your workflow with AI."* $	o$ Fix: Replace with concrete product outcome + target audience.
2. **The Ambient Purple Blob:** Giant blurry neon gradient smear behind the canvas. $	o$ Fix: Neutral canvas; accent color on product UI and primary CTA only.
3. **The 50/50 Button Split:** Two identical primary buttons ("Get Started" and "Learn More"). $	o$ Fix: 1 filled button + 1 text link with arrow (90/10 ratio).
4. **Fake Social Proof:** *"Trusted by 10,000+ users"* above 5 unrecognizable gray shapes. $	o$ Fix: One verified quote with real name, role, and a measured outcome with units.
5. **The 3-Feature Card Row:** Three cards with icons in circles labeled "Fast", "Secure", "Easy". $	o$ Fix: Replace with one actual product screenshot annotated with 3 functional pointers.

## 4. Do / Don't

- **Do:** Define an explicit stance on Type, Color, Space, and Finish.
- **Do:** Swap decorative background blobs for genuine product screenshots.
- **Don't:** Rely on adjective buzzwords in place of naming what the software does.
- **Don't:** Ship three generic icon cards when a product screenshot would prove the claim.

## 5. Context & Exceptions
- **Utility / Internal Backoffice Tools:** Internal tools built for a 5-person team do not need distinctive consumer marketing character. However, they *do* require structural intentionality: high density, clear keyboard affordances, and zero schema-browser chaos.
