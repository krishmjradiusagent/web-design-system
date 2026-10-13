import React from "react";

/** Radius UI — InputGroup. An input with leading/trailing addons (icon, text,
 *  or a button) inside one bordered control. */
export function InputGroup({ leading = null, trailing = null, className = "", ...inputProps }) {
  return (
    <div className={["rds-input-group", className].filter(Boolean).join(" ")}>
      {leading && <span className={"rds-input-group__addon" + (typeof leading === "object" ? "" : "")}>{leading}</span>}
      <input {...inputProps} />
      {trailing && <span className="rds-input-group__addon">{trailing}</span>}
    </div>
  );
}
