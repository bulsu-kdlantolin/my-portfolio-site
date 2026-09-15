# Anti-Pattern: Poor Visual Hierarchy & Competing Weight

> **Evidence Classification:**
> - `DIRECT`: [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy), [`color-accessibility`](https://www.designmotionhq.com/patterns/color-accessibility).
> - `SYNTHESIZED`: 90/10 weight balance derived from [`visual-hierarchy`](https://www.designmotionhq.com/patterns/visual-hierarchy) and [`de-ai-landing-hero`](https://www.designmotionhq.com/patterns/de-ai-landing-hero).

---

## 1. Description & Symptoms
Failing to establish a dominant focal point on a screen. Every element speaks at the exact same visual decibel level.

### Symptoms
- Primary title, subtitles, and body text share identical font sizes or font weights (e.g. all 14px–16px, weight 400).
- Multiple high-contrast, saturated buttons competing within the same viewport.
- Secondary descriptions rendered at 100% full opacity, competing directly with headlines.
- Lack of whitespace separation around primary calls to action.

---

## 2. Why It Degrades the Interface
- **Analysis Paralysis:** The user's eye wanders erratically across the page without knowing where to look first or what action to take.
- **Slow Scanning:** Users cannot scan and comprehend page purpose in under 3 seconds.

---

## 3. The Refactoring Protocol
1. **Apply the 2x Rule:** Primary title must be ~2x the size of surrounding body text (e.g. 32px title vs 16px body).
2. **Use Opacity Tiers:**
   - Primary heading: Font-weight 600–800, 100% opacity.
   - Body copy: Font-weight 400, 55%–70% opacity.
   - Metadata / captions: Font-weight 300–400, 40%–50% opacity.
3. **Establish 90/10 Action Prominence:** One dominant solid accent button for the primary user goal; all other secondary options rendered as ghost buttons or subtle text links.
