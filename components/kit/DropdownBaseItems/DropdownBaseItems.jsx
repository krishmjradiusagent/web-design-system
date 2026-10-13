import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family ".Dropdown Base Items". Materialized 1:1 from the Figma file. Menu row: leading icon, label, optional shortcut/trailing icon. */
export function DropdownBaseItems({ icon, children, shortcut, trailing, disabled = false, selected = false, onSelect, className = "", style = {}, ...rest }) {
  return (
    <button type="button" role="menuitem" disabled={disabled} onClick={onSelect} className={className}
      style={{ display:"flex", alignItems:"center", gap:8, width:"100%", padding:"6px 8px", border:0, background: selected ? "#F5F5F5" : "transparent", color:"#171717", font:"400 14px/1.4 Inter, sans-serif", borderRadius:6, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, textAlign:"left", ...style }} {...rest}>
      {icon ? <Icon name={icon} size={16} /> : null}
      <span style={{ flex:1 }}>{children}</span>
      {shortcut ? <span style={{ font:"400 12px/1 Geist Mono, ui-monospace, monospace", color:"#737373" }}>{shortcut}</span> : null}
      {trailing ? <Icon name={trailing} size={14} color="#737373" /> : null}
    </button>
  );
}
