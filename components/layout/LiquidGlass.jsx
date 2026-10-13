import React from "react";

/** Radius UI — LiquidGlass. Frosted-glass panel for overlay chrome on imagery.
 *  Ships two contexts: on bright imagery ("bright") or dim ("dim"). */
export function LiquidGlass({ context = "bright", state = "default", children, className = "", style = {}, ...rest }) {
  const cls = ["rds-glass", `rds-glass--${context}`, state !== "default" && `rds-glass--${state}`, className].filter(Boolean).join(" ");
  return <div className={cls} style={style} {...rest}>{children}</div>;
}
