import React from "react";

/** Radius UI — FieldGroup. Stacks or rows multiple Fields; FieldSet adds a legend. */
export function FieldGroup({ orientation = "vertical", className = "", children, ...rest }) {
  const cls = ["rds-field-group", orientation === "horizontal" && "rds-field-group--row", className].filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}
export function FieldSet({ legend, className = "", children, ...rest }) {
  return (
    <fieldset className={["rds-fieldset", className].filter(Boolean).join(" ")} {...rest}>
      {legend && <legend className="rds-fieldset__legend">{legend}</legend>}
      <div className="rds-field-group">{children}</div>
    </fieldset>
  );
}
