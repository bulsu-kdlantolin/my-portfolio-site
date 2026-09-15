# Feedback & Latency-Tiered Systems

> **Evidence Classification:**
> - `DIRECT`: [`doherty-threshold`](https://www.designmotionhq.com/patterns/doherty-threshold), [`loading-states-system`](https://www.designmotionhq.com/patterns/loading-states-system), [`skeleton-loading`](https://www.designmotionhq.com/patterns/skeleton-loading), [`toast-notifications`](https://www.designmotionhq.com/patterns/toast-notifications), [`optimistic-ui`](https://www.designmotionhq.com/patterns/optimistic-ui).
> - `SYNTHESIZED`: Unified 4-tier latency loading engine from [`doherty-threshold`](https://www.designmotionhq.com/patterns/doherty-threshold) and [`loading-states-system`](https://www.designmotionhq.com/patterns/loading-states-system).

---

## 1. Core Principle
Perceived speed is a deliberate design decision. Human cognitive engagement degrades rapidly when system response exceeds 400ms. Interfaces must provide immediate feedback calibrated to the operation's duration, shape, and risk level.

## 2. Key Rules & Metrics

### The 400ms Doherty Threshold [DIRECT: `doherty-threshold`]
- Any user action must acknowledge receipt within **400ms**. Operations under 200ms feel instant; 200ms–400ms are acceptable; exceeding 400ms breaks user flow and causes repeated clicking.

### The 4-Tier Latency Loading Engine [SYNTHESIZED: `loading-states-system`, `skeleton-loading`]
1. **< 300ms (Fast Response):** **Show nothing.** Flashing a skeleton or spinner for a fraction of a second reads as an annoying visual glitch.
2. **300ms – 2s (Moderate Wait, Known Shape):** **Display an animated skeleton screen.** The skeleton must mirror the exact layout geometry (avatar circle, title bar, content lines) of incoming data to prevent Cumulative Layout Shift (CLS).
3. **2s – 3s (Short Wait, Unknown Shape):** **Display an inline spinner.** Keep the spinner localized to the button or section loading; never freeze the whole screen.
4. **> 3s (Long Operation):** **Display a determinate progress bar** with numeric percentage and estimated time remaining.

### Optimistic UI Rules [DIRECT: `optimistic-ui`, `behind-the-button`]
- Update the UI instantly (on frame 0) for low-stakes, reversible operations: likes, bookmark toggles, reordering list items.
- If the server rejects the request, roll back state gracefully, restore previous values, and display an explanatory error toast.
- **Strict Prohibition:** *Never* use optimistic UI for payments, financial transfers, account deletion, or irreversible data operations. These must hold a busy state until server confirmation.

### Notification Toast Rules [DIRECT: `toast-notifications`]
- **Positioning:** Anchor to bottom-right on desktop; top edge on mobile. Never obscure the center of the viewport.
- **Queue Limits:** Cap visible toasts at **3**. Older toasts stack or queue.
- **Timing:** Auto-dismiss routine success alerts in 4s–7s. Pause the countdown while the user hovers. Never auto-dismiss critical errors.

## 3. Do / Don't

- **Do:** Mirror exact final content dimensions with skeleton placeholders.
- **Do:** Pause toast auto-dismiss timers on mouse hover.
- **Don't:** Flash a loading spinner for requests that resolve under 300ms.
- **Don't:** Apply optimistic UI to credit card charges or irreversible writes.

## 4. Context & Exceptions
- **Batch Processing / Background Jobs:** When operations take minutes (e.g. video rendering or CSV importing), dismiss the loading modal and route updates to a persistent background notification badge, freeing the user to navigate the rest of the application.
