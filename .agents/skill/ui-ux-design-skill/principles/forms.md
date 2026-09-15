# Forms & Progressive Validation

> **Evidence Classification:**
> - `DIRECT`: [`form-field-states`](https://www.designmotionhq.com/patterns/form-field-states), [`form-validation-timing`](https://www.designmotionhq.com/patterns/form-validation-timing), [`disabled-buttons`](https://www.designmotionhq.com/patterns/disabled-buttons), [`input-masking`](https://www.designmotionhq.com/patterns/input-masking), [`otp-input`](https://www.designmotionhq.com/patterns/otp-input), [`password-field-ux`](https://www.designmotionhq.com/patterns/password-field-ux), [`stepper-wizard`](https://www.designmotionhq.com/patterns/stepper-wizard).
> - `SYNTHESIZED`: Blur-Then-Live Validation Model from [`form-validation-timing`](https://www.designmotionhq.com/patterns/form-validation-timing) and [`form-field-states`](https://www.designmotionhq.com/patterns/form-field-states).

---

## 1. Core Principle
Forms are the primary point of user friction and conversion failure. A form should behave as a collaborative assistant, validating progressively, forgiving formatting variations, preserving entered state, and providing clear paths to correction.

## 2. Key Rules & Metrics

### The 6 Mandatory Field States [DIRECT: `form-field-states`]
Every text input requires an explicit, intentional design for all six states:
1. **Default / Rest:** Clean border, permanent label above.
2. **Focus:** High-contrast focus ring (minimum 3:1 contrast ratio against canvas).
3. **Error:** Combined red border + alert icon + explicit guidance message below.
4. **Success:** Green check confirmation inside the field.
5. **Disabled:** Grayscale fill with `cursor: not-allowed`.
6. **Loading:** Inline spinner blocking input during async validation.

### Permanent Labels Over Placeholders [DIRECT: `form-field-states`, `microcopy`]
- Placeholders vanish the moment typing begins, leaving users unable to verify field meaning. Labels must sit permanently **above** the input. Placeholders are reserved for formatting hints (e.g., `jane@company.com`).

### Blur-Then-Live Validation Model [SYNTHESIZED: `form-validation-timing`]
- **Initial Entry:** Do *not* validate on keystroke. Premature error banners while a user is mid-word cause irritation. Validate on **blur** (when the user leaves the field).
- **Post-Error Entry:** Once a field is in an error state, switch to **live keystroke validation** for that field so the error clears the exact instant the mistake is corrected.

### Never Disable the Submit Button in Silence [DIRECT: `disabled-buttons`]
- Keep submit buttons enabled. When clicked, validate all fields, highlight blocking errors, and automatically shift keyboard focus to the first invalid input.
- A disabled submit button drops out of keyboard tab order, kills hover tooltips, and fails WCAG contrast, stranding users who cannot locate their mistake.

### Input Masking Discipline [DIRECT: `input-masking`]
- Chunk long numerical runs into scannable blocks (e.g., credit cards in 4-4-4-4 format).
- **Store Raw, Display Formatted:** Present grouped characters to the user, but persist clean unformatted digits in state.
- Clean and accept pasted inputs with spaces or dashes without throwing errors.

## 3. Do / Don't

- **Do:** Validate fields on blur initially, then switch to live keystroke validation on error.
- **Do:** Place field labels permanently above the input.
- **Don't:** Disable submit buttons without providing reachable, announced error feedback.
- **Don't:** Fire aggressive red validation banners on the first keystroke of a new field.

## 4. Context & Exceptions
- **Real-Time Password Strength Meters:** As established in [`password-field-ux`](https://www.designmotionhq.com/patterns/password-field-ux), password creation is an exception to blur-only validation. Live character requirement checklists (length, number, symbol) should update dynamically as the user types to provide immediate constructive coaching.
