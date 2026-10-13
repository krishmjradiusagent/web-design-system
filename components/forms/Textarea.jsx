import React from "react";

/** Radius UI — Textarea. Same treatment as Input; vertical resize only. */
export function Textarea({ invalid = false, className = "", ...rest }) {
  const cls = ["rds-input", "rds-textarea", className].filter(Boolean).join(" ");
  return <textarea className={cls} aria-invalid={invalid || undefined} {...rest} />;
}
