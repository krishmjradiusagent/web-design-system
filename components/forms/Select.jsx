import React from "react";

/** Radius UI — native Select. 32px control with a chevron affordance; matches
 *  Input geometry. Pass options as {value,label} or children. */
export function Select({ options, className = "", children, ...rest }) {
  const cls = ["rds-select", className].filter(Boolean).join(" ");
  return (
    <select className={cls} {...rest}>
      {options ? options.map((o) => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>) : children}
    </select>
  );
}
