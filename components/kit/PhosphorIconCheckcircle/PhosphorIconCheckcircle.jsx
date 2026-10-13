import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Phosphor Icon / CheckCircle". Materialized 1:1 from the Figma file. (Phosphor glyph, rendered from the Lucide-equivalent path.) */
export function PhosphorIconCheckcircle({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="check-circle" size={size} color={color} className={className} {...rest} />;
}
