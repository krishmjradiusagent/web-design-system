import React from "react";

/** Radius UI — form Label. Medium weight, sentence case, pairs with a control. */
export function Label({ disabled = false, className = "", children, ...rest }) {
  const cls = ["rds-label", disabled && "rds-label--disabled", className].filter(Boolean).join(" ");
  return <label className={cls} {...rest}>{children}</label>;
}
