import React from "react";

/** Radius UI — Separator. 1px divider, horizontal or vertical. */
export function Separator({ orientation = "horizontal", className = "", ...rest }) {
  const cls = ["rds-separator", `rds-separator--${orientation === "vertical" ? "v" : "h"}`, className].filter(Boolean).join(" ");
  return <div role="separator" aria-orientation={orientation} className={cls} {...rest} />;
}
