import React from "react";
/** Radius UI — kit family "DropdownMenu / Menu". Materialized 1:1 from the Figma file. Menu container: bordered surface, 6px radius, sm shadow. */
export function DropdownmenuMenu({ children, className = "", style = {}, ...rest }) {
  return (
    <div role="menu" className={className}
      style={{ minWidth:200, padding:4, background:"#FFFFFF", border:"1px solid #E5E5E5", borderRadius:10, boxShadow:"0 4px 12px rgba(0,0,0,.06)", ...style }} {...rest}>
      {children}
    </div>
  );
}
