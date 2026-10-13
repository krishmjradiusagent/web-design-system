import React from "react";
/** Radius UI — kit family "Progress Bar Blocks". Materialized 1:1 from the Figma file. Discrete "block" progress bar — N segments filled up to value. */
export function ProgressBarBlocks({ value = 0, blocks = 10, gap = 2, height = 8, fillColor = "#171717", trackColor = "#E5E5E5", className = "", style = {}, ...rest }) {
  const filled = Math.max(0, Math.min(blocks, Math.round((value/100) * blocks)));
  return (
    <span className={className} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}
      style={{ display:"inline-flex", gap, width:"100%", ...style }} {...rest}>
      {Array.from({ length: blocks }).map((_, i) => (
        <span key={i} style={{ flex:1, height, borderRadius:2, background: i < filled ? fillColor : trackColor }} />
      ))}
    </span>
  );
}
