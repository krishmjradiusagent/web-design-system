import React from "react";

/** Radius UI — HoverCard. Reveals a rich preview panel on hover of the trigger. */
export function HoverCard({ trigger, children, className = "" }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {trigger}
      {open && (
        <div className={["rds-hovercard", className].filter(Boolean).join(" ")}
          style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 70 }}>
          {children}
        </div>
      )}
    </span>
  );
}
