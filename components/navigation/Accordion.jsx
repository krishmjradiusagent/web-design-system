import React from "react";

/** Radius UI — Accordion. Collapsible sections; chevron rotates on open. */
export function Accordion({ items = [], defaultOpen = [], multiple = false, className = "" }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => setOpen((prev) => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <div className={["rds-accordion", className].filter(Boolean).join(" ")}>
      {items.map((it, i) => (
        <div className="rds-accordion__item" key={i} data-open={open.has(i)}>
          <button className="rds-accordion__trigger" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
            <span>{it.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          {open.has(i) && <div className="rds-accordion__panel">{it.content}</div>}
        </div>
      ))}
    </div>
  );
}
