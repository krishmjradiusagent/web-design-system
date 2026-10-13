import React from "react";

/** Radius UI — Tooltip. Hover-reveal label on a foreground chip. Wrap a trigger. */
export function Tooltip({ label, children, className = "", ...rest }) {
  return (
    <span className={["rds-tooltip", className].filter(Boolean).join(" ")} {...rest}>
      {children}
      <span className="rds-tooltip__content" role="tooltip">{label}</span>
    </span>
  );
}
