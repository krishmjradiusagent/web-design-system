import React from "react";

/** Radius UI — Logo. The Radius wordmark or mark, in ink/light/white/dark. */
export function Logo({ variant = "wordmark", tone = "ink", size = 22, className = "", style = {}, ...rest }) {
  const src = variant === "mark"
    ? `assets/logo-mark-${tone === "white" ? "light" : "dark"}.svg`
    : `assets/logo-wordmark-${tone}.svg`;
  const h = size;
  const w = variant === "mark" ? size : Math.round(size * (122 / 22));
  return (
    <img src={src} alt="Radius" width={w} height={h}
      className={["rds-logo", className].filter(Boolean).join(" ")}
      style={{ display: "block", ...style }} {...rest} />
  );
}
