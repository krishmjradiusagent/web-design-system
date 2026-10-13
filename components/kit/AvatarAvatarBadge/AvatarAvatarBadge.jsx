import React from "react";
/** Radius UI — kit family "Avatar / Avatar Badge". Materialized 1:1 from the Figma file. A small status dot pinned to the corner of an Avatar. */
export function AvatarAvatarBadge({ status = "online", size = 8, color, className = "", style = {}, ...rest }) {
  const palette = { online: "#6DA544", offline: "#A3A3A3", busy: "#DC2626", away: "#EA580C" };
  const bg = color || palette[status] || palette.offline;
  return <span className={className} style={{ display:"inline-block", width:size, height:size, borderRadius:9999, background:bg, boxShadow:"0 0 0 2px #fff", ...style }} {...rest} />;
}
