import React from "react";

/** Radius UI — Filters. Toolbar of filter chips with an "Add filter" button.
 *  Compose from array: {label, value, onRemove}. */
export function Filters({ filters = [], onAdd, addLabel = "Add filter", onClear, clearLabel = "Clear", className = "", ...rest }) {
  return (
    <div className={["rds-filters", className].filter(Boolean).join(" ")} {...rest}>
      {filters.map((f, i) => (
        <span key={f.key ?? i} className="rds-filters__chip">
          {f.label && <span className="rds-filters__label">{f.label}:</span>}
          <span className="rds-filters__value">{f.value}</span>
          {f.onRemove && (
            <button type="button" className="rds-filters__x" aria-label="Remove filter" onClick={f.onRemove}>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          )}
        </span>
      ))}
      {onAdd && (
        <button type="button" className="rds-filters__add" onClick={onAdd}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          {addLabel}
        </button>
      )}
      {onClear && filters.length > 0 && (
        <button type="button" className="rds-filters__clear" onClick={onClear}>{clearLabel}</button>
      )}
    </div>
  );
}
