import React from "react";

/** Radius UI — Sidebar. App navigation rail: brand slot, grouped items with
 *  optional counts, and a footer slot. Compose items as {id,label,icon,count}. */
export function Sidebar({ brand = null, groups = [], active, onSelect, footer = null, className = "", style = {} }) {
  return (
    <aside className={["rds-sidebar", className].filter(Boolean).join(" ")} style={style}>
      {brand}
      {groups.map((g, gi) => (
        <React.Fragment key={gi}>
          {g.label && <div className="rds-sidebar__section">{g.label}</div>}
          {g.items.map((it) => (
            <button key={it.id} className="rds-sidebar__item" data-active={active === it.id} onClick={() => onSelect && onSelect(it.id)}>
              {it.icon}<span>{it.label}</span>{it.count != null && <span className="count">{it.count}</span>}
            </button>
          ))}
        </React.Fragment>
      ))}
      {footer && <div style={{ marginTop: "auto" }}>{footer}</div>}
    </aside>
  );
}
