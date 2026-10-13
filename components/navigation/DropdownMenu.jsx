import React from "react";

/** Radius UI — Dropdown menu. Click-to-open menu on a trigger. Pass items as
 *  {label, icon, shortcut, danger, onSelect} or use separators/labels. */
export function DropdownMenu({ trigger, items = [], align = "start", className = "" }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex" }} className={className}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className="rds-menu" style={{ position: "absolute", top: "calc(100% + 6px)", [align === "end" ? "right" : "left"]: 0, zIndex: 60 }} role="menu">
          {items.map((it, i) =>
            it.type === "separator" ? <div key={i} className="rds-menu__sep" />
            : it.type === "label" ? <div key={i} className="rds-menu__label">{it.label}</div>
            : (
              <div key={i} role="menuitem" className={["rds-menu__item", it.danger && "rds-menu__item--danger"].filter(Boolean).join(" ")}
                   onClick={() => { setOpen(false); it.onSelect && it.onSelect(); }}>
                {it.icon}<span>{it.label}</span>{it.shortcut && <span className="rds-menu__shortcut">{it.shortcut}</span>}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
