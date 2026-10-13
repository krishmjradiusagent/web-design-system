import React from "react";
/** Radius UI — kit family "Ring". Materialized 1:1 from the Figma file. Concentric ring (progress/decorative). */
export function Ring({ size = 24, thickness = 2, color = "#171717", trackColor = "#E5E5E5", value, className = "", style = {}, ...rest }) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const off = value != null ? c * (1 - Math.max(0, Math.min(1, value/100))) : 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} style={style} {...rest}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={trackColor} strokeWidth={thickness} />
      {value != null && <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={thickness} strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />}
    </svg>
  );
}
