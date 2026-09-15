# UX Usability & Workflow Checklist

> **Evidence Classification:** `RECOMMENDATION` (Synthesis of interaction heuristics into an operational audit checklist).

Use this checklist during Step 1–3 and Step 9–10 of the Review Pipeline to evaluate workflow friction, usability, and cognitive load.

---

## 1. Intent Discovery & Task Clarity
- [ ] **Primary Task Alignment:** Can a first-time user identify the single primary action of this screen within 3 seconds?
- [ ] **Worst Mistake Safeguard:** Is the most catastrophic user mistake (e.g. deleting an account, dropping a database) guarded by friction?
- [ ] **Target Audience Fluency:** Does the terminology and density match user expertise (dense technical metrics for engineers vs guided simplicity for novices)?

---

## 2. Information Architecture & Scanning
- [ ] **Serial Position Bookending:** Are the brand identity and primary conversion CTA anchored at the beginning and end of menus/pages?
- [ ] **Data Table Distillation:** Is tabular data distilled to 4–5 scannable columns rather than exposing 12 raw database fields?
- [ ] **Search Prominence:** In data-heavy dashboards, is search elevated as a primary action rather than hidden in a filter drawer?

---

## 3. Cognitive Load & Forms
- [ ] **Permanent Labels:** Are field labels permanently visible above inputs rather than relying on disappearing placeholders?
- [ ] **Blur-Then-Live Validation:** Does form validation hold until blur on initial entry, then switch to live keystroke validation on error?
- [ ] **No Silent Disabled Buttons:** Does the submit button remain live, validate on click, and autofocus the first blocking error?
- [ ] **Input Masking State:** Are masked inputs (credit cards, phone numbers) displayed in scannable chunks but persisted as raw clean data?

---

## 4. Error Recovery & Safe Failure
- [ ] **Non-Destructive Execution:** Do routine delete/archive actions execute instantly accompanied by a 5–10 second draining undo toast?
- [ ] **Typed Confirmation on Irreversible Destruction:** Are permanent, irreversible actions quarantined in a danger zone requiring typed confirmation?
- [ ] **Explanatory Errors:** Do error states provide a concrete path out (Retry, Edit, Support) rather than a dead-end "OK" button?
