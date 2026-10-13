import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Sheet / Close Icon". Materialized 1:1 from the Figma file.  */
export function SheetCloseIcon({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="x" size={size} color={color} className={className} {...rest} />;
}
