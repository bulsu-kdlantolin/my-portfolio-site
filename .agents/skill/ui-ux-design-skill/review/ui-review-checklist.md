# UI Design Review Checklist

> **Evidence Classification:** `RECOMMENDATION` (Synthesis of visual principles into an audit checklist).

Use this checklist during Step 4–8 of the Review Pipeline to audit visual structure and aesthetic execution.

---

## 1. Visual Hierarchy & Focal Points
- [ ] **The 2x Entry Point:** Does the primary headline or metric measure ~2x the size of surrounding body text?
- [ ] **Weight & Contrast Separation:** Are headings bold (600–800) and 100% opacity, while body/descriptions sit at 55%–70% opacity?
- [ ] **Single Accent Currency:** Is saturated brand color reserved for the primary CTA and active selection, or is it splattered across non-critical elements?
- [ ] **The 90/10 Action Balance:** Does the primary action visually dominate secondary actions without a 50/50 click split?

---

## 2. Layout & Grid Discipline
- [ ] **12-Column Alignment:** Do all components snap cleanly to shared vertical column edges?
- [ ] **Responsive Breakpoints:** Does the grid collapse predictably (12 $\to$ 6 $\to$ 4 $\to$ 1) without horizontal layout overflow?
- [ ] **Gutter Mood:** Does gutter width match density requirements (8px dense dashboard, 24px clean SaaS, 40px editorial)?
- [ ] **Golden Ratio Proportions:** Are split views proportioned near 62% / 38% where applicable?

---

## 3. Spacing & Proximity
- [ ] **Systematic 8px Scale:** Are all margins and paddings snapped to systematic tokens (`4, 8, 12, 16, 24, 32, 40, 64px`)?
- [ ] **In-Group vs Between-Group Contrast:** Is the gap within a functional group noticeably smaller than the gap between sections?
- [ ] **Container Justification:** Can any bordered boxes or divider lines be deleted in favor of clean whitespace grouping?

---

## 4. Typography & Numbers
- [ ] **Tabular Figures:** Do all data tables, financial metrics, and timestamps use `font-variant-numeric: tabular-nums`?
- [ ] **Right-Aligned Numerical Data:** Are table numbers and dates aligned right to maintain vertical decimal tracking?
- [ ] **High-Density Calibration:** If evaluating a developer/productivity tool, is typography calibrated (13px, -1% tracking, 32px rows)?

---

## 5. Color, Dark Mode & Contrast
- [ ] **WCAG 4.5:1 Body Contrast:** Do all body text and secondary labels pass 4.5:1 contrast against their canvas?
- [ ] **Dual-Channel State Encoding:** Are errors, warnings, and successes paired with icons/text rather than color alone?
- [ ] **Dark Mode Near-Black:** Is the dark mode canvas near-black (`#121212`) rather than pure `#000000`?
- [ ] **Soft Off-White Text:** Is dark mode text softened from `#FFFFFF` down to off-white to eliminate glare?

---

## 6. Depth & Geometry
- [ ] **Concentric Border Radius:** Do nested containers obey $R_{\text{inner}} = R_{\text{outer}} - \text{Padding}$?
- [ ] **Radius Scale Hierarchy:** Do radii scale with element size (4px badge $\to$ 8px button $\to$ 16px card $\to$ 24px shell)?
- [ ] **Appropriate Depth Strategy:** Is depth achieved via **value stacking** (for dense tools) or a **3-shadow stack** (for floating overlays)?
