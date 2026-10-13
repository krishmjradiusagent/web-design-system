import React from "react";

/** Radius UI — Chip. Small pill tag (removable) — colored + solid/soft styles. */
export function Chip({ children, color = "neutral", variant = "soft", onRemove, className = "", ...rest }) {
  const cls = ["rds-chip", `rds-chip--${variant}`, `rds-chip--${color}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      <span className="rds-chip__label">{children}</span>
      {onRemove && (
        <button type="button" className="rds-chip__x" aria-label="Remove" onClick={onRemove}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      )}
    </span>
  );
}
