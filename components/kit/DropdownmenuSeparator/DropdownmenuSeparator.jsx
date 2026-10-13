import React from "react";
/** Radius UI — kit family "DropdownMenu / Separator". Materialized 1:1 from the Figma file. 1px divider between menu groups. */
export function DropdownmenuSeparator({ className = "", style = {}, ...rest }) {
  return <div role="separator" className={className} style={{ height:1, margin:"4px 0", background:"#E5E5E5", ...style }} {...rest} />;
}
