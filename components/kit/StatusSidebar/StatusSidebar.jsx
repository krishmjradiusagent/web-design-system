import React from "react";
/** Radius UI — kit family "Status /sidebar". Materialized 1:1 from the Figma file. Sidebar footer status row (workspace + presence dot). */
export function StatusSidebar({ label = "Radius", status = "online", className = "", style = {}, ...rest }) {
  const c = { online:"#6DA544", offline:"#A3A3A3", busy:"#DC2626" }[status] || "#A3A3A3";
  return (
    <div className={className} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", font:"500 13px/1.2 Inter, sans-serif", color:"#171717", ...style }} {...rest}>
      <span style={{ width:8, height:8, borderRadius:9999, background:c }} />
      <span>{label}</span>
    </div>
  );
}
