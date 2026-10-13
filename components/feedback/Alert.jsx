import React from "react";

/** Radius UI — Alert. Inline message with optional icon. Destructive variant for
 *  errors. Keep copy plain and specific. */
export function Alert({ variant = "default", icon = null, title, children, className = "", ...rest }) {
  const cls = ["rds-alert", variant !== "default" && `rds-alert--${variant}`, className].filter(Boolean).join(" ");
  return (
    <div className={cls} role="alert" {...rest}>
      {icon}
      <div>
        {title && <p className="rds-alert__title">{title}</p>}
        {children && <p className="rds-alert__desc">{children}</p>}
      </div>
    </div>
  );
}
