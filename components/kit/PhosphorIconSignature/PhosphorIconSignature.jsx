import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Phosphor Icon / Signature". Materialized 1:1 from the Figma file. (Phosphor glyph, rendered from the Lucide-equivalent path.) */
export function PhosphorIconSignature({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="signature" size={size} color={color} className={className} {...rest} />;
}
