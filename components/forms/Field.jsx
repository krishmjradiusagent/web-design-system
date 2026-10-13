import React from "react";

/** Radius UI — Field. Vertical label + control + hint/error stack. Keep concepts
 *  separate; one field, one purpose. */
export function Field({ label, htmlFor, hint, error, children, className = "", ...rest }) {
  const cls = ["rds-field", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {label && <label className="rds-label" htmlFor={htmlFor}>{label}</label>}
      {children}
      {error ? <span className="rds-field__error">{error}</span>
        : hint ? <span className="rds-field__hint">{hint}</span> : null}
    </div>
  );
}
