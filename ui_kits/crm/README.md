# Radius CRM — UI kit

A high-fidelity, interactive recreation of the **Radius** agent workspace, composed entirely from the design-system primitives (`Button`, `Badge`, `Avatar`, `Card`, `Table`, `Tabs`, `Input`, `Icon`, `DropdownMenu`, `Progress`, `Separator`, `Alert`, `Empty`, `Tooltip`). It is a recreation for reference and prototyping — cosmetic, not production data-wiring.

## Screens (switch via the sidebar)
- **Dashboard** — pipeline stat cards (mono numerics), a dense pipeline table with status badges and row actions, today's task checklist, and a **Mel daily-brief** card with the glow-border treatment.
- **Transactions** — segmented side tabs (All / Buyer / Seller / Lease), a dense transactions table (client + address, side, stage, TC avatar, close date, price, GCI), column/export tools.
- **Clients → Client profile** — Follow-Up-Boss-style layout: quick actions (call/email/text/log) at the top, an activity timeline with icon markers, and side panels (transaction module + Mel suggestion).
- Other nav items resolve to honest **empty states**.

## Patterns demonstrated
- App shell: fixed 236px sidebar (Radius mark, grouped nav with counts, user row) + 56px topbar (title, search, **Ask Mel** capsule, notifications, primary "New deal").
- Density: ~32px controls, 44px table rows, compact stat cards, quiet 1px borders.
- Color with intent: neutral chrome; status carried by badge tints; dark primary CTAs; indigo reserved for Mel.
- Selected states are always obvious (segmented tabs, active nav).

## Run / reuse
Open `index.html`. It links `../../styles.css` and `../../_ds_bundle.js` and mounts from `window.RadiusUIDesignSystem_c7220b`. Copy a screen's JSX out to seed a new surface, or use it as a Starting Point.
