import React from "react";
/** Radius UI — kit family ".Dot Indicators". Materialized 1:1 from the Figma file. Row of small dots showing carousel/step position. */
export function DotIndicators({ count = 3, active = 0, size = 6, gap = 6, activeColor = "#171717", inactiveColor = "#D4D4D4", className = "", style = {}, ...rest }) {
  return (
    <span role="tablist" className={className} style={{ display:"inline-flex", alignItems:"center", gap, ...style }} {...rest}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-selected={i===active} style={{ width: i===active ? size*3 : size, height: size, borderRadius: 9999, background: i===active ? activeColor : inactiveColor, transition: "width 160ms ease" }} />
      ))}
    </span>
  );
}
