import React from "react";
/** Radius UI — kit family ".Number of Users". Materialized 1:1 from the Figma file. Compact "+N" chip that follows an AvatarGroup. */
export function NumberOfUsers({ count = 0, size = 24, className = "", style = {}, ...rest }) {
  return (
    <span className={className}
      style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", minWidth:size, height:size, padding:"0 6px", borderRadius:9999, background:"#F5F5F5", color:"#171717", font:"500 12px/1 Inter, sans-serif", border:"1px solid #E5E5E5", ...style }} {...rest}>
      +{count}
    </span>
  );
}
