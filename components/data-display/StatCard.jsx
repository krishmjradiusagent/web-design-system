import React from "react";
import { StatIndicator } from "./StatIndicator.jsx";

/** Radius UI — StatCard. Label / value / optional trend + delta, in a Card frame. */
export function StatCard({ label, value, trend, delta, hint, icon, className = "", ...rest }) {
  return (
    <div className={["rds-statcard", className].filter(Boolean).join(" ")} {...rest}>
      <div className="rds-statcard__row">
        <span className="rds-statcard__label">{label}</span>
        {icon && <span className="rds-statcard__icon" aria-hidden="true">{icon}</span>}
      </div>
      <div className="rds-statcard__value">{value}</div>
      {(trend || hint) && (
        <div className="rds-statcard__foot">
          {trend && <StatIndicator value={delta} trend={trend} size="sm" />}
          {hint && <span className="rds-statcard__hint">{hint}</span>}
        </div>
      )}
    </div>
  );
}
