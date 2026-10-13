import React from "react";
/** Radius UI — kit family "Table / Header". Materialized 1:1 from the Figma file. Table header cell. */
export function TableHeader({ children, align = "left", className = "", style = {}, ...rest }) {
  return <th className={className} style={{ padding:"10px 12px", textAlign:align, font:"500 12px/1.2 Inter, sans-serif", color:"#737373", textTransform:"none", background:"#FAFAFA", borderBottom:"1px solid #E5E5E5", ...style }} {...rest}>{children}</th>;
}
