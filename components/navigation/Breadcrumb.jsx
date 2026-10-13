import React from "react";

/** Radius UI — Breadcrumb. Muted trail; current page in foreground weight. */
export function Breadcrumb({ items = [], separator = "/", className = "", ...rest }) {
  return (
    <nav className={["rds-breadcrumb", className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last || !it.href ? <span className={last ? "rds-breadcrumb__current" : undefined} aria-current={last ? "page" : undefined}>{it.label}</span>
              : <a href={it.href}>{it.label}</a>}
            {!last && <span className="rds-breadcrumb__sep" aria-hidden="true">{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
