import React from "react";
/** Radius UI — kit family "Component 16". Materialized 1:1 from the Figma file. Anonymous frame from the Figma file (Component 16); rendered as an inert placeholder surface. */
export function Component16({ width = 240, height = 120, label = "Component 16", className = "", style = {}, ...rest }) {
  return (
    <div className={className} style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width, height, background:"#FAFAFA", border:"1px dashed #E5E5E5", borderRadius:8, color:"#737373", font:"400 12px/1 Geist Mono, ui-monospace, monospace", ...style }} {...rest}>{label}</div>
  );
}
