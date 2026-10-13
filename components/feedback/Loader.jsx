import React from "react";

/** Radius UI — Loader. Multi-type animated loader (spinner, dots, bars, pulse). */
export function Loader({ type = "spinner", size = 20, label = "Loading", className = "", style = {}, ...rest }) {
  const cls = ["rds-loader", `rds-loader--${type}`, className].filter(Boolean).join(" ");
  const s = { "--rds-loader-size": `${size}px`, ...style };
  return (
    <span role="status" aria-label={label} className={cls} style={s} {...rest}>
      {type === "dots" && (<><i/><i/><i/></>)}
      {type === "bars" && (<><i/><i/><i/><i/></>)}
      {type === "pulse" && <i/>}
      {type === "spinner" && (
        <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" fill="none"/>
          <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
      )}
    </span>
  );
}
