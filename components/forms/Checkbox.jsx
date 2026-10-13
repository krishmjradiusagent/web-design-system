import React from "react";

/** Radius UI — Checkbox. 16px square, indigo-neutral check when selected.
 *  Wrap with `label` prop for a clickable row. */
export function Checkbox({ label, className = "", id, ...rest }) {
  const box = <input type="checkbox" className={["rds-checkbox", className].filter(Boolean).join(" ")} id={id} {...rest} />;
  if (!label) return box;
  return <label className="rds-choice" htmlFor={id}>{box}<span>{label}</span></label>;
}
