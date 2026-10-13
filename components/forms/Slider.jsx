import React from "react";

/** Radius UI — Slider (native range). Indigo-neutral thumb, 6px track. */
export function Slider({ className = "", ...rest }) {
  return <input type="range" className={["rds-slider", className].filter(Boolean).join(" ")} {...rest} />;
}
