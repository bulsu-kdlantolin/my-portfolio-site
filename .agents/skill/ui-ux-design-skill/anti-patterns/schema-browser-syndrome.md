# Anti-Pattern: Schema Browser Syndrome

> **Evidence Classification:**
> - `DIRECT`: Homepage UX Engine specification (`Your AI ships admin panels that hurt to use...`), [`settings-system`](https://www.designmotionhq.com/patterns/settings-system).
> - `SYNTHESIZED`: Table distillation derived from [`data-table`](https://www.designmotionhq.com/patterns/data-table) and [`destructive-actions`](https://www.designmotionhq.com/patterns/destructive-actions).

---

## 1. Description & Diagnostic Symptoms
AI coding models (Claude Code, Cursor, Bolt, v0) and junior developers frequently output interfaces that are literal, unmediated visualizations of backend database schemas rather than task-oriented user products.

### The Warning Signs
- **The 12-Column Table Dump:** Displaying every database field (UUIDs, creation timestamps, raw foreign keys, internal status enums) across a horizontal scroll table.
- **Equal-Weighted Row Actions:** Placing "Edit" and "Delete" side-by-side on every row with equal visual prominence.
- **Filter-Hidden Search:** Hiding global search inside a secondary "Filters" dropdown rather than making it the primary focal action.
- **Raw Enum Exposure:** Displaying database enums directly (e.g. `STATUS_ACTIVE_V2`) rather than human-readable status pills with colorblind-safe icons.
- **Blank Row Failures:** When a filter returns 0 records, the table simply shows a blank, broken-looking empty grid.

---

## 2. Why It Degrades the Product
- **Severe Cognitive Friction:** The user must mentally parse internal technical database architecture rather than scanning for the 2–3 operational metrics required to make a decision.
- **Accidental Destruction:** Placing an unquarantined red "Delete" button next to "Edit" on high-frequency rows creates constant risk of catastrophic misclicks.

---

## 3. The Refactoring Protocol

```text
Database-Shaped Schema Browser               Task-Focused Product Dashboard
-------------------------------               ------------------------------
[ID] [UUID] [Created] [Status] [Actions]  →   [User / Entity] [Status Pill] [Last Active] [Actions]
Row 1: 12 cols, Edit / Delete side-by-side     5 columns: Identity + Metric + Overflow (...)
Search hidden in filter popover               Prominent global search bar (primary action)
```

### Actionable Corrections
1. **Distill Columns:** Collapse 12 columns to **4–5 essential fields**:
   - Column 1: Identity (Avatar + Name / Subtitle)
   - Column 2: Status (Colorblind-safe pill: icon + text label)
   - Column 3: Primary Metric (Right-aligned with tabular numerals)
   - Column 4: Relative Time ("2 hours ago")
   - Column 5: Overflow Actions (`...` trigger)
2. **Quarantine Destructive Actions:** Remove "Delete" from the row surface. Move it into an overflow menu (`...`) or a dedicated danger zone at the bottom of the page, gated behind typed confirmation.
3. **Elevate Search:** Make search the primary action on the page, with prefilled recent searches on focus.
