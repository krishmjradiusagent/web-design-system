import React from "react";

/** Radius UI — Command palette. Searchable action list (⌘K). Pass groups of
 *  {label, items:[{label, icon, shortcut, onSelect}]}. */
export function Command({ groups = [], placeholder = "Type a command or search…", className = "" }) {
  const [q, setQ] = React.useState("");
  const filt = groups.map((g) => ({ ...g, items: g.items.filter((it) => String(it.label).toLowerCase().includes(q.toLowerCase())) })).filter((g) => g.items.length);
  return (
    <div className={["rds-command", className].filter(Boolean).join(" ")}>
      <div className="rds-command__search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></svg>
        <input autoFocus placeholder={placeholder} value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="rds-command__list">
        {filt.length ? filt.map((g, gi) => (
          <div key={gi}>
            {g.label && <div className="rds-command__group-label">{g.label}</div>}
            {g.items.map((it, ii) => (
              <div key={ii} className="rds-command__item" onClick={() => it.onSelect && it.onSelect()}>
                {it.icon}<span style={{ flex: 1 }}>{it.label}</span>{it.shortcut && <span className="rds-menu__shortcut">{it.shortcut}</span>}
              </div>
            ))}
          </div>
        )) : <div className="rds-command__empty">No results found.</div>}
      </div>
    </div>
  );
}
