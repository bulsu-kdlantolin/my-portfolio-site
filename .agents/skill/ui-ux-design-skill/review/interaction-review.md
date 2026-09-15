# Interaction & Affordance Audit Checklist

> **Evidence Classification:** `RECOMMENDATION` (Structured checklist synthesizing interaction and navigation principles).

Use this checklist during Step 9 and Step 11 of the Review Pipeline to evaluate tactical micro-interactions, focus behavior, and transitions.

---

## 1. Affordance & Touch Boundaries
- [ ] **44px Touch Targets:** Do all interactive elements on mobile have minimum 44px x 44px hit bounds?
- [ ] **No Primary Hover Trap:** Are all primary actions accessible by direct tap/click, with hover reserved strictly for secondary extras?
- [ ] **`@media (hover: hover)` Gating:** Are hover styles gated behind pointer media queries to prevent sticky hover bugs on touchscreens?
- [ ] **Inline Edit Clues:** Does editable text whisper its affordance at rest (subtle pencil icon or soft tint on hover)?

---

## 2. Focus & Keyboard Accessibility
- [ ] **Visible Focus Rings:** Do all interactive elements show a 2px high-contrast outline with 2px offset on keyboard Tab?
- [ ] **`:focus-visible` Usage:** Does the focus ring trigger on keyboard navigation while staying clean on mouse clicks?
- [ ] **DOM Tab Order:** Does keyboard Tab navigation follow the visual layout without teleporting erratically across columns?
- [ ] **Modal Focus Trap:** Do open dialogs/modals trap keyboard Tab within the container and dismiss on Escape, restoring focus to the trigger?

---

## 3. Menus, Overlays & Traversal
- [ ] **Safe Triangle Hover Intent:** Do nested dropdowns and context menus draw an invisible safe triangle so diagonal cursor movement doesn't collapse the flyout?
- [ ] **Viewport Edge Flipping:** Do dropdowns, popovers, and tooltips flip position when near viewport edges to prevent clipping?
- [ ] **300ms Tooltip Debounce:** Do hover tooltips delay for 300ms before rendering?

---

## 4. Motion Physics & Timings
- [ ] **Entrances Under 300ms:** Do modal and panel entrances land between 200ms–300ms using a cubic ease-out curve?
- [ ] **Snappy Exits:** Do dismissals close faster than entrances (~150ms) using an ease-in curve?
- [ ] **No Cartoony Bounce:** In serious productivity tools, is motion crisp with zero spring overshoots?
- [ ] **Reduced Motion Support:** Does the stylesheet respect `@media (prefers-reduced-motion: reduce)`?
