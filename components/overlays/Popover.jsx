import React from "react";

/** Radius UI — Popover. Click-to-open floating panel anchored to a trigger. */
export function Popover({ trigger, children, align = "start", className = "" }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex" }}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className={["rds-popover", className].filter(Boolean).join(" ")}
          style={{ position: "absolute", top: "calc(100% + 6px)", [align === "end" ? "right" : "left"]: 0, zIndex: 70 }} role="dialog">
          {children}
        </div>
      )}
    </div>
  );
}
