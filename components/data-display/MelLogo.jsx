import React from "react";

/** Radius UI — MelLogo. Radius's AI-assistant mark; renders the SVG from /assets. */
export function MelLogo({ size = 20, showText = false, src = "assets/mel-icon.svg", className = "", style = {}, ...rest }) {
  const cls = ["rds-mel-logo", className].filter(Boolean).join(" ");
  return (
    <span className={cls} style={style} {...rest}>
      <img src={src} alt="Mel" width={size} height={size} style={{ display: "block" }} />
      {showText && <span className="rds-mel-logo__text">Mel</span>}
    </span>
  );
}
