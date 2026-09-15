# Design Principles Public Source Map

This document maps the design principles, formulas, anti-patterns, and heuristics used by the **Senior UI/UX Design Reviewer Skill** directly back to their publicly accessible sources on [DesignMotionHQ](https://www.designmotionhq.com/).

---

## Evidence Classification Taxonomy

- **DIRECT:** The principle, numeric threshold, CSS formula, or interaction rule is explicitly stated or demonstrated in a published public pattern article by DesignMotionHQ.
- **SYNTHESIZED:** A broader design-engineering law derived by cross-referencing multiple complementary DesignMotionHQ patterns (e.g., unifying `proximity-rule` and `gestalt-laws` into a Whitespace-First Grouping rule).
- **RECOMMENDATION:** Operational guidelines, severity grading models, and audit frameworks developed for this AI reviewer skill that reflect senior industry practice and are NOT attributed to DesignMotionHQ.

---

## Complete Corpus Source Mapping (76 Patterns)

| # | Pattern Name | Category | Classification | Verified Design Principle & Takeaway | Source URL |
| :-: | :--- | :---: | :---: | :--- | :--- |
| 1 | **Accordion Disclosure** | `interaction` | `DIRECT` | One accordion glides open, the other jumps. Four small rules separate them. | [accordion-disclosure](https://www.designmotionhq.com/patterns/accordion-disclosure) |
| 2 | **Animation Timing** | `motion` | `DIRECT` | Same modal, two timings: one feels premium, one feels broken. It's all milliseconds. | [animation-timing](https://www.designmotionhq.com/patterns/animation-timing) |
| 3 | **Autosave** | `forms` | `DIRECT` | Saved. It wasn't. Your wifi died mid-word. | [autosave-ux](https://www.designmotionhq.com/patterns/autosave-ux) |
| 4 | **Behind the Button** | `interaction` | `DIRECT` | Six things happen before the spinner stops. | [behind-the-button](https://www.designmotionhq.com/patterns/behind-the-button) |
| 5 | **Border Radius** | `visual` | `DIRECT` | Same card. One looks off, one looks expensive. The gap is one CSS rule. | [border-radius](https://www.designmotionhq.com/patterns/border-radius) |
| 6 | **Bottom Sheets** | `interaction` | `DIRECT` | Your thumb can't reach that menu. | [bottom-sheets](https://www.designmotionhq.com/patterns/bottom-sheets) |
| 7 | **Bulk Actions** | `interaction` | `DIRECT` | Bulk actions are a system, not a lone checkbox. | [bulk-actions](https://www.designmotionhq.com/patterns/bulk-actions) |
| 8 | **Card Hover Anatomy** | `motion` | `DIRECT` | Same card. One feels alive, three stay dead. Four rules separate them. | [card-hover-anatomy](https://www.designmotionhq.com/patterns/card-hover-anatomy) |
| 9 | **Charts That Lie** | `visual` | `DIRECT` | Same data, opposite stories: how you draw a chart decides which truth people see. | [charts-that-lie](https://www.designmotionhq.com/patterns/charts-that-lie) |
| 10 | **Color Accessibility** | `visual` | `DIRECT` | Same text, same color: one is invisible. The contrast ratio nobody checks. | [color-accessibility](https://www.designmotionhq.com/patterns/color-accessibility) |
| 11 | **Color Picker UX** | `interaction` | `DIRECT` | Pick a color. Your whole UI answers. | [color-picker-ux](https://www.designmotionhq.com/patterns/color-picker-ux) |
| 12 | **Command Palette** | `interaction` | `DIRECT` | ⌘K is a system, not a search box. | [command-palette](https://www.designmotionhq.com/patterns/command-palette) |
| 13 | **Context Menu** | `interaction` | `DIRECT` | A context menu is a system, not just a list of actions. | [context-menu](https://www.designmotionhq.com/patterns/context-menu) |
| 14 | **CSS Has Selector** | `interaction` | `DIRECT` | One line of CSS. The whole card reacts to its own checkbox. | [css-has-selector](https://www.designmotionhq.com/patterns/css-has-selector) |
| 15 | **Dark Mode** | `visual` | `DIRECT` | Same app, one inverts colors. The other feels premium. | [dark-mode](https://www.designmotionhq.com/patterns/dark-mode) |
| 16 | **Data Table** | `interaction` | `DIRECT` | Your data table feels cheap because it's a grid of divs, not a system. | [data-table](https://www.designmotionhq.com/patterns/data-table) |
| 17 | **Date Pickers** | `forms` | `DIRECT` | Same date. Six clicks. Or one. The picker that respects your users' time. | [date-pickers](https://www.designmotionhq.com/patterns/date-pickers) |
| 18 | **De-AI Landing Hero** | `visual` | `DIRECT` | Your landing page looks AI-made. Five tells. Five fixes. | [de-ai-landing-hero](https://www.designmotionhq.com/patterns/de-ai-landing-hero) |
| 19 | **Depth Layers** | `visual` | `DIRECT` | Same layout, same colors: three properties turn flat cards into real depth. | [depth-layers](https://www.designmotionhq.com/patterns/depth-layers) |
| 20 | **Design System Kit** | `visual` | `DIRECT` | Random hex and eyeballed pixels don't scale. A token system does. | [design-system-kit](https://www.designmotionhq.com/patterns/design-system-kit) |
| 21 | **Design Tokens** | `visual` | `DIRECT` | 47 changes, or just one. Design tokens change everything. | [design-tokens](https://www.designmotionhq.com/patterns/design-tokens) |
| 22 | **Destructive Actions** | `interaction` | `DIRECT` | Dangerous actions are a design language, not just a red button. | [destructive-actions](https://www.designmotionhq.com/patterns/destructive-actions) |
| 23 | **Disabled Buttons** | `interaction` | `DIRECT` | The button is disabled, and nobody tells you why. | [disabled-buttons](https://www.designmotionhq.com/patterns/disabled-buttons) |
| 24 | **Doherty Threshold** | `feedback` | `DIRECT` | Cross 400ms and your user checks out. Perceived speed is a design choice. | [doherty-threshold](https://www.designmotionhq.com/patterns/doherty-threshold) |
| 25 | **Drag and Drop** | `interaction` | `DIRECT` | The board does the thinking: moving a card is moving state. | [drag-and-drop](https://www.designmotionhq.com/patterns/drag-and-drop) |
| 26 | **Dropdown Design** | `interaction` | `DIRECT` | Your dropdown is broken. Five rules separate cheap from premium. | [dropdown-design](https://www.designmotionhq.com/patterns/dropdown-design) |
| 27 | **Easing Curves** | `motion` | `DIRECT` | Same distance, different feel: the easing curve is what decides how motion reads. | [easing-curves](https://www.designmotionhq.com/patterns/easing-curves) |
| 28 | **Empty States** | `content` | `DIRECT` | Your empty state is your first impression. Most apps waste it. | [empty-states](https://www.designmotionhq.com/patterns/empty-states) |
| 29 | **Error States** | `feedback` | `DIRECT` | Same error. Better recovery. | [error-states](https://www.designmotionhq.com/patterns/error-states) |
| 30 | **File Upload UX** | `forms` | `DIRECT` | Same file. One upload feels broken. One feels safe. | [file-upload-ux](https://www.designmotionhq.com/patterns/file-upload-ux) |
| 31 | **Filter Chips** | `interaction` | `DIRECT` | 200 results. Three taps. 12 left. | [filter-chips](https://www.designmotionhq.com/patterns/filter-chips) |
| 32 | **Focus States** | `navigation` | `DIRECT` | Press Tab. Where did the focus go? | [focus-states](https://www.designmotionhq.com/patterns/focus-states) |
| 33 | **Form Field States** | `forms` | `DIRECT` | Six field states, one system. Miss one and you ship a bug. | [form-field-states](https://www.designmotionhq.com/patterns/form-field-states) |
| 34 | **Form Validation Timing** | `forms` | `DIRECT` | The error fires while you're still typing. | [form-validation-timing](https://www.designmotionhq.com/patterns/form-validation-timing) |
| 35 | **Gestalt Laws** | `visual` | `DIRECT` | Same elements. One is chaos. The other clicks instantly. | [gestalt-laws](https://www.designmotionhq.com/patterns/gestalt-laws) |
| 36 | **Golden Ratio** | `visual` | `DIRECT` | One layout looks cheap, the other expensive. The difference is 1.618. | [golden-ratio](https://www.designmotionhq.com/patterns/golden-ratio) |
| 37 | **Gradient Design** | `visual` | `DIRECT` | Why your gradients look cheap | [gradient-design](https://www.designmotionhq.com/patterns/gradient-design) |
| 38 | **Grid System** | `visual` | `DIRECT` | Align everything to a 12-column grid, then break it on purpose. | [grid-system](https://www.designmotionhq.com/patterns/grid-system) |
| 39 | **Hover Trap** | `interaction` | `DIRECT` | Hover works on your laptop but is dead on mobile. | [hover-trap](https://www.designmotionhq.com/patterns/hover-trap) |
| 40 | **Icon Design Rules** | `visual` | `DIRECT` | Your icons look cheap. 5 rules turn them premium. | [icon-design-rules](https://www.designmotionhq.com/patterns/icon-design-rules) |
| 41 | **Inline Editing** | `interaction` | `DIRECT` | Click the title. It's an input now, and nothing moved. | [inline-editing](https://www.designmotionhq.com/patterns/inline-editing) |
| 42 | **Input Masking** | `forms` | `DIRECT` | Type 16 digits. Watch them become a card. | [input-masking](https://www.designmotionhq.com/patterns/input-masking) |
| 43 | **Landing Page Skeleton** | `content` | `DIRECT` | Every landing page that converts follows the same 5-section skeleton. | [landing-page-skeleton](https://www.designmotionhq.com/patterns/landing-page-skeleton) |
| 44 | **Live Cursors** | `interaction` | `DIRECT` | Three cursors land on your canvas. None of them are yours. | [live-cursors](https://www.designmotionhq.com/patterns/live-cursors) |
| 45 | **Loading States System** | `feedback` | `DIRECT` | Stop using skeletons for everything. Loading is a system, not a default. | [loading-states-system](https://www.designmotionhq.com/patterns/loading-states-system) |
| 46 | **Microcopy** | `content` | `DIRECT` | Same form. Different words. One converts. | [microcopy](https://www.designmotionhq.com/patterns/microcopy) |
| 47 | **Modal Hierarchy** | `interaction` | `DIRECT` | 5 overlays. Most apps pick the wrong one. | [modal-hierarchy](https://www.designmotionhq.com/patterns/modal-hierarchy) |
| 48 | **Navigation Patterns** | `navigation` | `DIRECT` | Five nav patterns, one system: mobile = tabs, desktop = sidebar. | [navigation-patterns](https://www.designmotionhq.com/patterns/navigation-patterns) |
| 49 | **Notification System** | `feedback` | `DIRECT` | Notifications are a system. Pick the wrong surface and users tune out. | [notification-system](https://www.designmotionhq.com/patterns/notification-system) |
| 50 | **Optimistic UI** | `feedback` | `DIRECT` | Click like. One waits. One feels instant. | [optimistic-ui](https://www.designmotionhq.com/patterns/optimistic-ui) |
| 51 | **OTP Input** | `forms` | `DIRECT` | Your OTP input is a system, not six boxes. | [otp-input](https://www.designmotionhq.com/patterns/otp-input) |
| 52 | **Pagination** | `navigation` | `DIRECT` | Add one row and your pagination breaks. | [pagination](https://www.designmotionhq.com/patterns/pagination) |
| 53 | **Password Field UX** | `forms` | `DIRECT` | Eight characters, one symbol: still weak. Strength lives in real-time feedback. | [password-field-ux](https://www.designmotionhq.com/patterns/password-field-ux) |
| 54 | **Peak-End Rule** | `interaction` | `DIRECT` | Users don't average an experience. They remember its peak and its end. | [peak-end-rule](https://www.designmotionhq.com/patterns/peak-end-rule) |
| 55 | **Perfect Card** | `visual` | `DIRECT` | One card looks free. The other costs $1000. Four CSS changes. | [perfect-card](https://www.designmotionhq.com/patterns/perfect-card) |
| 56 | **Proximity Rule** | `visual` | `DIRECT` | Close = related, far = separate: spacing alone groups your UI, no borders needed. | [proximity-rule](https://www.designmotionhq.com/patterns/proximity-rule) |
| 57 | **Range Sliders** | `forms` | `DIRECT` | Drag to 47. Or 48? Your finger can't tell. | [range-sliders](https://www.designmotionhq.com/patterns/range-sliders) |
| 58 | **Reverse-Engineered Linear** | `visual` | `DIRECT` | Why does Linear feel expensive? Five decisions. None need a designer. | [reverse-engineered-linear](https://www.designmotionhq.com/patterns/reverse-engineered-linear) |
| 59 | **Scroll-Driven Animations** | `motion` | `DIRECT` | Same scroll: one feels dead, the other comes alive. Pure CSS, zero JavaScript. | [scroll-driven-animations](https://www.designmotionhq.com/patterns/scroll-driven-animations) |
| 60 | **Search Experience System** | `interaction` | `DIRECT` | Search is a system. Five parts. Most apps skip them. | [search-experience-system](https://www.designmotionhq.com/patterns/search-experience-system) |
| 61 | **Serial Position** | `content` | `DIRECT` | Strongest first, strongest last: people forget the middle | [serial-position](https://www.designmotionhq.com/patterns/serial-position) |
| 62 | **Settings System** | `forms` | `DIRECT` | Your settings page is harmless until the last section. Settings is a system. | [settings-system](https://www.designmotionhq.com/patterns/settings-system) |
| 63 | **Shadow Elevation** | `visual` | `DIRECT` | Shadows aren't decoration. They encode hierarchy and depth. | [shadow-elevation](https://www.designmotionhq.com/patterns/shadow-elevation) |
| 64 | **Skeleton Loading** | `feedback` | `DIRECT` | Your loading spinner is making the wait feel longer | [skeleton-loading](https://www.designmotionhq.com/patterns/skeleton-loading) |
| 65 | **Star Rating** | `interaction` | `DIRECT` | Five stars looks trivial. Hover, half-fills, and honest averages are where it breaks. | [star-rating](https://www.designmotionhq.com/patterns/star-rating) |
| 66 | **Stepper Wizard** | `forms` | `DIRECT` | Twelve fields, one wall. Four steps, one path. | [stepper-wizard](https://www.designmotionhq.com/patterns/stepper-wizard) |
| 67 | **Swipe Actions** | `interaction` | `DIRECT` | Your swipe actions are killing your UX | [swipe-actions](https://www.designmotionhq.com/patterns/swipe-actions) |
| 68 | **Tabs System** | `navigation` | `DIRECT` | Tabs aren't a widget. They're a system. Stop letting them jump. | [tabs-system](https://www.designmotionhq.com/patterns/tabs-system) |
| 69 | **Toast Notifications** | `feedback` | `DIRECT` | Toasts done right: five rules for notifications that inform without blocking. | [toast-notifications](https://www.designmotionhq.com/patterns/toast-notifications) |
| 70 | **Toggle Anatomy** | `forms` | `DIRECT` | Two toggles. One snaps. One morphs, and the difference is everything. | [toggle-anatomy](https://www.designmotionhq.com/patterns/toggle-anatomy) |
| 71 | **Tooltip Design** | `interaction` | `DIRECT` | Your tooltip is annoying. Five rules that make it feel premium. | [tooltip-design](https://www.designmotionhq.com/patterns/tooltip-design) |
| 72 | **Undo UX** | `feedback` | `DIRECT` | Deleted. You have five seconds. | [undo-ux](https://www.designmotionhq.com/patterns/undo-ux) |
| 73 | **Visual Hierarchy** | `visual` | `DIRECT` | Five rules that decide what your users see first, and what they skip. | [visual-hierarchy](https://www.designmotionhq.com/patterns/visual-hierarchy) |
| 74 | **Von Restorff Effect** | `visual` | `DIRECT` | Three identical pricing cards, nobody clicks. Isolate one: 3× more conversions. | [von-restorff](https://www.designmotionhq.com/patterns/von-restorff) |
| 75 | **Z-Index Mastery** | `visual` | `DIRECT` | z-index lies: a bigger number won't win if the element isn't positioned. | [z-index-mastery](https://www.designmotionhq.com/patterns/z-index-mastery) |
| 76 | **Zeigarnik Effect** | `feedback` | `DIRECT` | Your brain forgets what's finished, and won't stop nagging about what's not. | [zeigarnik-effect](https://www.designmotionhq.com/patterns/zeigarnik-effect) |

---

## Core Site & Structural Sources

| Source Entity | Classification | Principle & Takeaway | Source URL |
| :--- | :---: | :--- | :--- |
| **Homepage (`/`)** | `DIRECT` | **The Lineup Test:** Distinct visual character vs statistically safest AI default look. **Schema Browser Diagnosis:** 12-column database dumps vs distilled task-focused dashboards. | [designmotionhq.com](https://www.designmotionhq.com/) |
| **About Page (`/about`)** | `DIRECT` | **Anti-AI Design Mandate:** Tools and breakdowns designed so that interfaces built with AI do not look built by AI. Plain-text knowledge preservation. | [designmotionhq.com/about](https://www.designmotionhq.com/about) |
| **Reviewer Severity Rubric** | `RECOMMENDATION` | **4-Tier Severity Model:** Critical (Blocker/Data Loss), High (Hierarchy/State Failure), Medium (Inconsistency/Friction), Low (Polish/Math Calibration). | Internal Skill Framework |
| **Lineup Audit Methodology** | `RECOMMENDATION` | **The 4-Axis Inspection:** Type, Color, Space, Finish evaluated against low-intent statistical averages. | Internal Skill Framework |

---

*Preserved for auditability, future maintenance, and verification against original research.*
