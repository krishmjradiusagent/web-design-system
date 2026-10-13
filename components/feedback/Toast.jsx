import React from "react";

/** Radius UI — Toast. Transient confirmation/notice. Render inside a fixed-position
 *  stack; pair with your own queue. */
export function Toast({ variant = "default", icon = null, title, description, action = null, className = "", ...rest }) {
  const cls = ["rds-toast", variant !== "default" && `rds-toast--${variant}`, className].filter(Boolean).join(" ");
  return (
    <div className={cls} role="status" {...rest}>
      {icon}
      <div style={{ flex: 1 }}>
        {title && <p className="rds-toast__title">{title}</p>}
        {description && <p className="rds-toast__desc">{description}</p>}
      </div>
      {action}
    </div>
  );
}
