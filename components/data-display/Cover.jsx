import React from "react";

/** Radius UI — Cover. Media header with an optional gradient overlay for a title.
 *  Client-portal / listing surfaces; the product CRM stays neutral. */
export function Cover({ src, alt = "", ratio = 21 / 9, overlay = null, className = "", style = {}, ...rest }) {
  return (
    <div className={["rds-cover", className].filter(Boolean).join(" ")} style={{ aspectRatio: String(ratio), ...style }} {...rest}>
      {src && <img src={src} alt={alt} />}
      {overlay && <div className="rds-cover__overlay">{overlay}</div>}
    </div>
  );
}
