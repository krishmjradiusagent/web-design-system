import React from "react";
/** Radius UI — kit family "Table / Content Cell". Materialized 1:1 from the Figma file. Table body cell. */
export function TableContentCell({ children, align = "left", numeric = false, className = "", style = {}, ...rest }) {
  return <td className={className} style={{ padding:"10px 12px", textAlign:align, fontFamily: numeric ? "Geist Mono, ui-monospace, monospace" : "Inter, sans-serif", fontVariantNumeric: numeric ? "tabular-nums" : undefined, fontSize:14, color:"#171717", borderBottom:"1px solid #E5E5E5", ...style }} {...rest}>{children}</td>;
}
