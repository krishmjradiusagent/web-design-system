import React from "react";

/** Radius UI — NavigationMenu. Horizontal top-nav with hover/click flyout panels.
 *  Pass items as {label, href} or {label, content}. */
export function NavigationMenu({ items = [], className = "" }) {
  const [open, setOpen] = React.useState(null);
  return (
    <nav className={["rds-navmenu", className].filter(Boolean).join(" ")} onMouseLeave={() => setOpen(null)}>
      {items.map((it, i) => (
        <div key={i} style={{ position: "relative" }} onMouseEnter={() => it.content && setOpen(i)}>
          {it.content ? (
            <button className="rds-navmenu__trigger" onClick={() => setOpen(open === i ? null : i)}>
              {it.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          ) : (
            <a className="rds-navmenu__trigger" href={it.href}>{it.label}</a>
          )}
          {it.content && open === i && (
            <div className="rds-popover" style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 70, minWidth: 260 }}>{it.content}</div>
          )}
        </div>
      ))}
    </nav>
  );
}
