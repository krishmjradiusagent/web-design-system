import React from "react";
/** Radius UI — kit family "DropdownMenu / Label". Materialized 1:1 from the Figma file. Section label above a group of menu items. */
export function DropdownmenuLabel({ children, className = "", style = {}, ...rest }) {
  return <div className={className} style={{ padding:"6px 8px", font:"500 12px/1.2 Inter, sans-serif", color:"#737373", textTransform:"none", ...style }} {...rest}>{children}</div>;
}
