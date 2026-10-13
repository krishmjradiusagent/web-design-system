import React from "react";

/** Radius UI — AlertDialog. Confirmation modal for consequential actions.
 *  Always name the action in the confirm button (not "OK"). */
export function AlertDialog({ open, onCancel, onConfirm, title, description, confirmLabel = "Confirm", cancelLabel = "Cancel", destructive = false, className = "" }) {
  if (!open) return null;
  return (
    <div className="rds-overlay" onClick={onCancel}>
      <div className={["rds-alertdialog", className].filter(Boolean).join(" ")} role="alertdialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="rds-alertdialog__title">{title}</h2>}
        {description && <p className="rds-alertdialog__desc">{description}</p>}
        <div className="rds-alertdialog__footer">
          <button className="rds-btn rds-btn--ghost" onClick={onCancel}>{cancelLabel}</button>
          <button className={"rds-btn" + (destructive ? " rds-btn--destructive" : "")} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
