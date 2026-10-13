import React from "react";

/** Radius UI — text Input. 32px compact control, 8px radius, quiet 1px border,
 *  indigo-neutral focus ring. Variants mirror the Figma Input set. */
export function Input({ variant = "default", invalid = false, className = "", ...rest }) {
  const cls = ["rds-input", className].filter(Boolean).join(" ");
  return <input className={cls} aria-invalid={invalid || undefined} data-variant={variant} {...rest} />;
}
