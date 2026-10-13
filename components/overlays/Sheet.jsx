import React from "react";

/** Radius UI — Sheet. Edge-anchored panel over a scrim for secondary flows
 *  (filters, detail side panels). Controlled via `open`. */
export function Sheet({ open, onClose, side = "right", title, description, children, footer, className = "" }) {
  if (!open) return null;
  return (
    <div className="rds-overlay" style={{ padding: 0, justifyContent: side === "left" ? "flex-start" : "flex-end" }} onClick={onClose}>
      <div className={["rds-sheet", `rds-sheet--${side}`, className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {(title || description) && (
          <div className="rds-sheet__header">
            {title && <h2 className="rds-sheet__title">{title}</h2>}
            {description && <p className="rds-sheet__desc">{description}</p>}
          </div>
        )}
        <div className="rds-sheet__body">{children}</div>
        {footer && <div className="rds-sheet__header" style={{ borderTop: "1px solid var(--border)", borderBottom: "none" }}>{footer}</div>}
      </div>
    </div>
  );
}
