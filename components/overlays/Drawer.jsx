import React from "react";

/** Radius UI — Drawer. Bottom sheet over a scrim (mobile-friendly flows). */
export function Drawer({ open, onClose, title, description, children, className = "" }) {
  if (!open) return null;
  return (
    <div className="rds-overlay" style={{ padding: 0, alignItems: "flex-end" }} onClick={onClose}>
      <div className={["rds-drawer", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="rds-drawer__grip" />
        {(title || description) && (
          <div className="rds-drawer__header">
            {title && <h2 className="rds-drawer__title">{title}</h2>}
            {description && <p className="rds-drawer__desc">{description}</p>}
          </div>
        )}
        <div className="rds-drawer__body">{children}</div>
      </div>
    </div>
  );
}
