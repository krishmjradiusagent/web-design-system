import React from "react";

/** Radius UI — Dialog. Modal centered card over a scrim. Controlled via `open`.
 *  Use for focused tasks; keep to one primary action in the footer. */
export function Dialog({ open, onClose, title, description, footer, children, className = "" }) {
  if (!open) return null;
  return (
    <div className="rds-overlay" onClick={onClose}>
      <div className={["rds-dialog", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="rds-dialog__title">{title}</h2>}
        {description && <p className="rds-dialog__desc">{description}</p>}
        {children}
        {footer && <div className="rds-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
