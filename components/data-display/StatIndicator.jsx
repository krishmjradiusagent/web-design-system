import React from "react";

/** Radius UI — StatIndicator. Delta value with trend arrow (up/down/flat). */
export function StatIndicator({ value, trend = "up", size = "default", showIcon = true, className = "", ...rest }) {
  const t = trend === "flat" ? "flat" : (trend === "down" ? "down" : "up");
  const cls = ["rds-stat", `rds-stat--${t}`, size !== "default" && `rds-stat--${size}`, className].filter(Boolean).join(" ");
  const icon = t === "up"
    ? <path d="M3 8l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    : t === "down"
      ? <path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      : <path d="M3 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>;
  return (
    <span className={cls} {...rest}>
      {showIcon && <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">{icon}</svg>}
      <span>{value}</span>
    </span>
  );
}
