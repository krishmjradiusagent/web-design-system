import React from "react";

/** Radius UI — Progress. Determinate bar 0–100. */
export function Progress({ value = 0, max = 100, className = "", ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={["rds-progress", className].filter(Boolean).join(" ")} role="progressbar" aria-valuenow={value} aria-valuemax={max} {...rest}>
      <div className="rds-progress__bar" style={{ width: pct + "%" }} />
    </div>
  );
}
