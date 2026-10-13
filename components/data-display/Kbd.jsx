import React from "react";

/** Radius UI — Kbd. Keyboard key hint in the mono stack. */
export function Kbd({ className = "", children, ...rest }) {
  return <kbd className={["rds-kbd", className].filter(Boolean).join(" ")} {...rest}>{children}</kbd>;
}
