CRM — the real Radius CRM product frame.

## Components
`CrmShell`

**Intentional addition.** `CrmShell` is named after no Figma kit family on purpose: the file ships this frame as `Blocks / CRM` screens rather than a named component set. Ported 1:1 from `templates/crm-starter/`.

## Rules
- Brand-tinted inset rail (240px, `--rcs-brand`, white text) wrapping a white content card — the rail colour is per-team, set inline on `CrmShell`.
- Rail contents in order: wordmark + collapse toggle, Mel Copilot pill (`--mel-gradient` glow border), grouped nav with counts, agent card pinned to the bottom.
- Content card carries a compact page head (title, search, actions), a tab row, then the table or zero-state.
- One primary CTA per surface: indigo `#5A5FF2` (`--primary`), white text, light and dark mode alike.
- The Mel ask bar sits fixed at the bottom of the content card over a white fade; its send button is `--primary`.
- Density is the product default: 32px controls, 44px table rows, quiet 1px `--border` dividers, sentence case throughout.
