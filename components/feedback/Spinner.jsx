import React from "react";

/** Radius UI — Spinner. Indeterminate loading indicator. */
export function Spinner({ size = 16, className = "", style = {}, ...rest }) {
  return <span className={["rds-spinner", className].filter(Boolean).join(" ")} style={{ width: size, height: size, ...style }} role="status" aria-label="Loading" {...rest} />;
}
