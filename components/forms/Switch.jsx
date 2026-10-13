import React from "react";

/** Radius UI — Switch. 32x18 toggle; indigo-neutral track when on. Prefer for
 *  instant on/off settings (not form submission). */
export function Switch({ label, className = "", id, ...rest }) {
  const el = <input type="checkbox" role="switch" className={["rds-switch", className].filter(Boolean).join(" ")} id={id} {...rest} />;
  if (!label) return el;
  return <label className="rds-choice" htmlFor={id} style={{ alignItems: "center" }}>{el}<span>{label}</span></label>;
}
