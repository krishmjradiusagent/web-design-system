import React from "react";

/** Radius UI — BadgeNumber. Compact count pill (notifications, tabs). */
export function BadgeNumber({ variant = "destructive", max = 99, children, className = "", ...rest }) {
  const n = typeof children === "number" && children > max ? `${max}+` : children;
  const cls = ["rds-badge-num", variant !== "destructive" && `rds-badge-num--${variant}`, className].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{n}</span>;
}
