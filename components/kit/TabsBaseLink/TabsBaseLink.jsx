import React from "react";
/** Radius UI — kit family "Tabs / Base Link". Materialized 1:1 from the Figma file. Single tab trigger (link/button style). */
export function TabsBaseLink({ active = false, children, onClick, className = "", style = {}, ...rest }) {
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onClick} className={className}
      style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"6px 10px", border:0, background: active ? "#FFFFFF" : "transparent", color: active ? "#171717" : "#737373", font:"500 14px/1 Inter, sans-serif", borderRadius:6, boxShadow: active ? "0 1px 2px rgba(0,0,0,.04)" : "none", cursor:"pointer", ...style }} {...rest}>
      {children}
    </button>
  );
}
