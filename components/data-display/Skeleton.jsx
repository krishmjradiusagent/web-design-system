import React from "react";

/** Radius UI — Skeleton. Pulsing placeholder; pass width/height via style. */
export function Skeleton({ className = "", style = {}, ...rest }) {
  return <div className={["rds-skeleton", className].filter(Boolean).join(" ")} style={style} {...rest} />;
}
