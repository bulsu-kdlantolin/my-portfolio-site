# Motion, Transitions & Micro-Interactions

> **Evidence Classification:**
> - `DIRECT`: [`animation-timing`](https://www.designmotionhq.com/patterns/animation-timing), [`easing-curves`](https://www.designmotionhq.com/patterns/easing-curves), [`card-hover-anatomy`](https://www.designmotionhq.com/patterns/card-hover-anatomy), [`scroll-driven-animations`](https://www.designmotionhq.com/patterns/scroll-driven-animations).
> - `SYNTHESIZED`: Fluid timing physics derived from [`animation-timing`](https://www.designmotionhq.com/patterns/animation-timing) and [`reverse-engineered-linear`](https://www.designmotionhq.com/patterns/reverse-engineered-linear).

---

## 1. Core Principle
Interface motion is communication, not decoration. Motion explains spatial origins, confirms physical interactions, and conveys gravity and intent. Bouncy, sluggish, or gratuitous animations slow down productivity and feel amateur.

## 2. Key Rules & Metrics

### Asymmetric Duration Standards [DIRECT: `animation-timing`]
- **Entrances (Modal / Drawer Open):** **200ms – 300ms** with a cubic ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`). This feels responsive while giving the brain time to register the arrival.
- **Exits (Dismissal / Close):** **150ms – 200ms** with an ease-in curve. Exits must be faster than entrances; users want dismissed items out of their way immediately.
- **Micro-Interactions (Hover, Button Press):** **80ms – 150ms**. Transitions over 150ms on buttons feel sluggish and laggy.
- **Strict Limit:** Never stretch operational transitions past 300ms.

### Easing Curve Physics [DIRECT: `easing-curves`]
- **Ease-Out:** Default for entering elements (decelerates smoothly into place).
- **Ease-In:** Default for exiting elements (accelerates out of view).
- **Linear Easing:** Reserved *strictly* for continuous looping animations (spinners, marquee tickers). Applying linear easing to starting/stopping UI feels stiff, robotic, and cheap.
- **No Bounce / Overshoot in Productivity Tools [DIRECT: `reverse-engineered-linear`]:** Avoid cartoonish bouncing or spring overshoots on serious technical tools; motion should stop crisply.

### Card Hover Weight [DIRECT: `card-hover-anatomy`]
- Lift cards with weight: translate **~8px upward** and simultaneously stretch the ambient shadow over **200ms ease-out**.
- *Prohibition:* Never scale the whole card container on a multi-card grid. Scaling shifts neighboring cards and introduces jarring grid misalignment.

### CSS Scroll-Driven Animations [DIRECT: `scroll-driven-animations`]
- Tie scroll progress natively to CSS using `animation-timeline: scroll()` and `view()`. Eliminate heavy JavaScript scroll listeners and `getBoundingClientRect()` loops.

## 3. Do / Don't

- **Do:** Make exits snappier (~150ms) than entrances (~250ms).
- **Do:** Lift interactive cards slightly with `translateY` while keeping dimensions fixed on the grid.
- **Don't:** Use linear easing for opening or closing modals.
- **Don't:** Let transitions drag beyond 300ms during routine workflows.

## 4. Context & Exceptions
- **Reduced Motion Accessibility:** Always respect user system preferences:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
