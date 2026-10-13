import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Avatar / Icons". Materialized 1:1 from the Figma file. Circular icon-avatar used in menus, cards, and thread rows. */
export function AvatarIcons({ name = "user", size = 32, iconSize, bg = "#F5F5F5", color = "#171717", className = "", style = {}, ...rest }) {
  const is = iconSize ?? Math.round(size * 0.55);
  return (
    <span className={className} style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:size, height:size, borderRadius:9999, background:bg, color, ...style }} {...rest}>
      <Icon name={name} size={is} />
    </span>
  );
}
