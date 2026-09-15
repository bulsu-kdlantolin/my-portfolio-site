# State Completeness Audit Checklist

> **Evidence Classification:** `RECOMMENDATION` (Structured audit derived from the 6 Universal States model).

Use this checklist during Step 10 of the Review Pipeline to audit whether all relevant edge cases and dynamic states are fully designed.

---

## 1. The 6-State Completeness Matrix

For every interactive module, verify which states apply and whether they have been intentionally specced:

| State | Applicable? | Handled? | Evaluation Criteria |
| :--- | :---: | :---: | :--- |
| **Empty State** | [ ] | [ ] | Features a supportive icon, human-readable copy, and an on-ramp primary CTA to create the first item. (Search empty states offer query recovery instead). |
| **Loading State** | [ ] | [ ] | Sub-300ms loads show nothing; 300ms–2s loads show layout-mirroring skeletons; >3s loads show progress bars. |
| **Partial / Incomplete** | [ ] | [ ] | Checkboxes show indeterminate dashes; onboarding shows completion meters (Zeigarnik loop); paginated tables show row counts. |
| **Error State** | [ ] | [ ] | Non-color-only alert with human guidance and a clear recovery action (Retry button, inline error message). |
| **Success State** | [ ] | [ ] | Confirmation message anchored where the user's attention already rests (inside field or localized notification). |
| **Offline / Degraded** | [ ] | [ ] | Edits queued locally in chronological order; honest sync status badge; `beforeunload` warning on dirty forms. |

---

## 2. Common State Traps to Flag
- [ ] **The Jumping Skeleton Trap:** Flag any skeleton screen whose dimensions or aspect ratios mismatch incoming data, causing CLS on load.
- [ ] **The "0 Results" Void:** Flag tables that display completely empty white canvases or raw `"Result set: 0 rows"` database strings.
- [ ] **The Multi-Tab Overwrite Trap:** Flag autosaving forms that overwrite concurrent edits without conflict warnings or field merging.
- [ ] **The Flash-of-Loading Glitch:** Flag applications that render loading spinners for requests resolving in under 300ms.
