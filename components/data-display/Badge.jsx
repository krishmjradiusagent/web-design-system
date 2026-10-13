import React from "react";

/** Radius UI — Badge. Pill shape (source radius 26). Use tint variants for status;
 *  pale bg + dark fg, same hue. Never invent badges to fill space. */
export function Badge({ variant = "default", dot = false, leftIcon = null, className = "", children, ...rest }) {
  const cls = [
    "rds-badge",
    variant !== "default" && `rds-badge--${variant}`,
    dot && "rds-badge--dot",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{leftIcon}{children}</span>;
}
