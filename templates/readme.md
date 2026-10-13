# Radius templates — how to start fast

**Rule of thumb:** copy the closest folder, rename the entry file, change the title, replace the body. Never start from a blank file.

## What's here

| Folder | Start here when you're building | Mode | Entry file | Edit first |
|---|---|---|---|---|
| `crm/` | **Reference screen.** Look, don't fork — the finished transactions workspace, dark/light, Mel. Use it to see what "done" looks like. | plain HTML | `index.html` (11.6k lines) | — |
| `crm-starter/` | Any CRM page: sidebar shell + one generic page (title · count · scope · CTA · tabs) with an empty body. | plain HTML | `index.html` | `.ptitle`, `#p1-tabseg`, `#p1-cta`, `.pbody` |
| `agent-profile/` | A profile / record-detail surface with a data panel. | Design Component | `AgentProfile.dc.html` | template markup at the top |
| `settings/` | Settings, forms, editors, tabbed config, Mel/AI panels. | Design Component | `Settings.dc.html` | template markup at the top |

## Which mode do I pick?

**Design Component (`.dc.html`)** — the default for anything new.
- Loads the real design system via `ds-base.js` (one line to repoint in a consuming project).
- Streams as you edit, tweakable in the panel, imports DS components with `<x-import component-from-global-scope="RadiusUIDesignSystem_c7220b.Button">`.
- Styling is **inline only** — no stylesheets, no classes.
- Use for: new screens, anything the DS already has components for, anything you'll iterate on.

**Plain HTML (`index.html`)** — the escape hatch.
- Self-contained, tokens pasted inline, no dependency on the compiled bundle.
- Costs you: ~2,000 lines of pasted tokens per file, and it drifts from `styles.css`.
- Use for: handing a single file to someone outside the system, or a throwaway.

## New screen in three steps (DC path)

1. Copy the nearest folder to `templates/<slug>/`, rename the entry to `<Slug>.dc.html`.
2. Update the first line: `<!-- @template name="…" description="…" -->`.
3. Keep `<helmet><script src="./ds-base.js"></script></helmet>`, then compose with the shell:

```html
<div class="rds-appshell">
  <x-import component-from-global-scope="RadiusUIDesignSystem_c7220b.Sidebar" hint-size="236px,100%"></x-import>
  <div class="rds-appshell__main">
    <div class="rds-appshell__scroll"><div class="rds-appshell__well">
      <x-import component-from-global-scope="RadiusUIDesignSystem_c7220b.PageHeader" hint-size="100%,600px">…your content…</x-import>
    </div></div>
  </div>
</div>
```

## The shell is now part of the system

The frame the big templates hand-roll is now **CSS classes + an extended `PageHeader`** — no new components to learn. See the **App frame** card in the Design System tab.

```html
<div class="rds-appshell" data-theme="dark">
  <aside class="rds-sidebar">…</aside>
  <div class="rds-appshell__main">
    <div class="rds-appshell__topbar"><div class="rds-appbar"><div class="rds-appbar__left">…</div><div class="rds-appbar__right">…</div></div></div>
    <div class="rds-appshell__scroll"><div class="rds-appshell__well"><!-- PageHeader --></div></div>
  </div>
</div>
```

```jsx
<PageHeader title="Transactions" count={24} actions={<Button>New deal</Button>}
            tabs={TABS} activeTab={tab} onTabChange={setTab}
            toolbar={<Filters/>} isEmpty={!rows.length} empty={<Empty …/>}>
  …body…
</PageHeader>
```

**Dark mode:** `data-theme="dark"` on `.rds-appshell` (or `<html>`, or any wrapper — the dark token block in `tokens/colors.css` is scoped to the attribute, so subtrees flip too). In the plain-HTML templates it's `document.body.classList.toggle('dark')`.

## Conventions

- First line of every template entry: the `@template` comment. Without it the template doesn't appear in the picker.
- One `ds-base.js` per template folder. Don't inline the bundle path anywhere else.
- Keep the folder self-contained: assets the template loads live in `templates/<slug>/assets/`.
- Sentence case everywhere. Numbers in the mono stack. No emoji.

## Housekeeping (waiting on your OK)

- `templates/settings/uploads/` holds ~90 source screenshots. Only `Icon.svg` and `Container.png` are actually referenced by `Settings.dc.html`; the rest are reference material that ships with the folder. **Say the word and I'll move them to `uploads/settings-source/`.**
- `crm-legacy/` is superseded by `crm/`. Kept until you say otherwise.
- `crm/` and `crm-starter/` share ~2,000 lines of duplicated token CSS. Both could be rebuilt on `AppShell`/`PageShell` and drop to a few hundred lines — say when.

## Planned starters (not built yet)

You picked these; they'll be added as thin `AppShell`-based folders on your go-ahead: blank CRM page · list/table page · record detail · settings/form · Mel panel · multi-step modal flow · client portal page · empty/loading/error set · dashboard.
