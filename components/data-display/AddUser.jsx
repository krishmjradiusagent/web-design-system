import React from "react";

/** Radius UI — AddUser. Compact dashed-circle "add user" button; sizes sm/md/lg. */
export function AddUser({ size = "md", label = "Add user", onClick, className = "", ...rest }) {
  const px = size === "sm" ? 24 : size === "lg" ? 40 : 32;
  const cls = ["rds-add-user", `rds-add-user--${size}`, className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} aria-label={label} onClick={onClick}
      style={{ width: px, height: px }} {...rest}>
      <svg viewBox="0 0 24 24" width={px * 0.5} height={px * 0.5} fill="none" aria-hidden="true">
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
