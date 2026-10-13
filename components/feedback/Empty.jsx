import React from "react";

/** Radius UI — Empty state. Centered media + title + description + optional action.
 *  Empty is fine — never invent filler to occupy the space. */
export function Empty({ icon = null, title, description, action = null, className = "", ...rest }) {
  return (
    <div className={["rds-empty", className].filter(Boolean).join(" ")} {...rest}>
      {icon && <div className="rds-empty__media">{icon}</div>}
      {title && <p className="rds-empty__title">{title}</p>}
      {description && <p className="rds-empty__desc">{description}</p>}
      {action && <div style={{ marginTop: "var(--space-2)" }}>{action}</div>}
    </div>
  );
}
