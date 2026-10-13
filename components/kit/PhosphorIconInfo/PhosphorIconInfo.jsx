import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Phosphor Icon / Info". Materialized 1:1 from the Figma file. (Phosphor glyph, rendered from the Lucide-equivalent path.) */
export function PhosphorIconInfo({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="info" size={size} color={color} className={className} {...rest} />;
}
