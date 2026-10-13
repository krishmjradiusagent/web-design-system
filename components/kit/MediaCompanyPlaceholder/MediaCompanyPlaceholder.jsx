import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Media / Company Placeholder". Materialized 1:1 from the Figma file. Media placeholder tile ("Company Placeholder"). */
export function MediaCompanyPlaceholder({ size = 40, radius = 8, bg = "#F5F5F5", color = "#737373", className = "", style = {}, ...rest }) {
  return (
    <span className={className} style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:size, height:size, borderRadius:radius, background:bg, color, ...style }} {...rest}>
      <Icon name="building-2" size={Math.round(size*0.55)} />
    </span>
  );
}
