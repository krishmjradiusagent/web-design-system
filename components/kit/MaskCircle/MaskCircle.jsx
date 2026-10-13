import React from "react";
/** Radius UI — kit family "_Mask - Circle". Materialized 1:1 from the Figma file. Circular mask wrapper — clips its child to a circle. */
export function MaskCircle({ size = 40, children, className = "", style = {}, ...rest }) {
  return <span className={className} style={{ display:"inline-block", width:size, height:size, borderRadius:9999, overflow:"hidden", ...style }} {...rest}>{children}</span>;
}
