import React from "react";

/** Radius UI — Collapsible. Show/hide a region behind a chevron trigger. */
export function Collapsible({ label, defaultOpen = false, children, className = "" }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={["rds-collapsible", className].filter(Boolean).join(" ")} data-open={open}>
      <button className="rds-collapsible__trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {open && <div className="rds-collapsible__panel">{children}</div>}
    </div>
  );
}
