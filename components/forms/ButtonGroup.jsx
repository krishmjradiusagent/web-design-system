import React from "react";

/** Radius UI — ButtonGroup. Joins related buttons into one segmented control. */
export function ButtonGroup({ className = "", children, ...rest }) {
  return <div className={["rds-btn-group", className].filter(Boolean).join(" ")} role="group" {...rest}>{children}</div>;
}
