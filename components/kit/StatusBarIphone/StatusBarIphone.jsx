import React from "react";
/** Radius UI — kit family "Status Bar - iPhone". Materialized 1:1 from the Figma file. iPhone status bar mock (time / cell / wifi / battery). */
export function StatusBarIphone({ time = "9:41", color = "#171717", className = "", style = {}, ...rest }) {
  const s = { color };
  return (
    <div className={className} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", font:"600 15px/1 -apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif", ...s, ...style }} {...rest}>
      <span>{time}</span>
      <span style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
        <svg width="17" height="10" viewBox="0 0 17 10" fill={color}><rect x="0" y="6" width="3" height="4" rx="1"/><rect x="4.5" y="4" width="3" height="6" rx="1"/><rect x="9" y="2" width="3" height="8" rx="1"/><rect x="13.5" y="0" width="3" height="10" rx="1"/></svg>
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" stroke={color} strokeWidth="1.5"><path d="M1 3.5a10 10 0 0 1 13 0M3.5 5.5a6.5 6.5 0 0 1 8 0M6 7.5a3 3 0 0 1 3 0"/></svg>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke={color}/><rect x="21.5" y="3.5" width="1.5" height="4" rx="0.5" fill={color}/><rect x="2" y="2" width="16" height="7" rx="1" fill={color}/></svg>
      </span>
    </div>
  );
}
