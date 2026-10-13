import React from "react";

/** Radius UI — AspectRatio. Locks child media to a ratio (e.g. 16/9, 4/3, 1). */
export function AspectRatio({ ratio = 16 / 9, className = "", children, ...rest }) {
  return (
    <div className={["rds-aspect", className].filter(Boolean).join(" ")} style={{ aspectRatio: String(ratio) }} {...rest}>
      {children}
    </div>
  );
}
