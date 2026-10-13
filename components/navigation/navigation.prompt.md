Navigation — sidebar, header, tabs, breadcrumb, menus, pagination, steps.

## Components
`Sidebar` · `Header` · `Tabs` · `Breadcrumb` · `NavigationMenu` · `Menubar` · `DropdownMenu` · `Accordion` · `Pagination` · `Steps`

## Rules
- App shell is a fixed 240px `Sidebar` + 56px `Header`. Sidebar groups have a 12px medium label; items are 36px tall, 10px radius, sentence case, Lucide line icon at 16px.
- The selected state is always obvious: active nav gets a filled surface, active tab gets a white pill with `shadow-xs` (segmented) or a 2px `--primary` underline (underline variant). Never rely on color alone.
- One primary CTA per surface, indigo `#5A5FF2` (`--primary`) with white text, in both light and dark mode. Everything else is outline, ghost, or filled neutral.
- `Breadcrumb` shows at most 3 levels; collapse the middle with `…`. Last crumb is `--foreground` and not a link.
- `DropdownMenu` / `Menubar`: 10px radius, `shadow-md`, 6px/8px item padding, 14px text, destructive items in `--destructive`.
- `Pagination` is 32px controls, tabular numerals; disable rather than hide the ends.
- `Steps`: current marker is `--primary`, done is `--tint-green-fg`, upcoming is `--muted`.
- Mel entry points (sidebar pill, ask bar) carry `--mel-gradient` as a glow border — the only gradient allowed on navigation chrome.
