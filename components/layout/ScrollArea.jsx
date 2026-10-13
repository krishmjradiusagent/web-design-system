import React from "react";

/** Radius UI — ScrollArea. Overflow container with a slim styled scrollbar. */
export function ScrollArea({ className = "", style = {}, children, ...rest }) {
  return <div className={["rds-scrollarea", className].filter(Boolean).join(" ")} style={style} {...rest}>{children}</div>;
}
