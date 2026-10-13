import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Icon placeholder". Materialized 1:1 from the Figma file.  */
export function IconPlaceholder({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="square" size={size} color={color} className={className} {...rest} />;
}
