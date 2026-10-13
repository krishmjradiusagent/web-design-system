import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Dialog / Close Icon". Materialized 1:1 from the Figma file.  */
export function DialogCloseIcon({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="x" size={size} color={color} className={className} {...rest} />;
}
