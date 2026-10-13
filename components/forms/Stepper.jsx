import React from "react";

/** Radius UI — Stepper. Number input with — / + increment buttons; keyboard-friendly. */
export function Stepper({ value = 0, onChange, min, max, step = 1, size = "default", disabled = false, className = "", ...rest }) {
  const cls = ["rds-stepper", size !== "default" && `rds-stepper--${size}`, disabled && "is-disabled", className].filter(Boolean).join(" ");
  const clamp = (v) => Math.min(max ?? Infinity, Math.max(min ?? -Infinity, v));
  const set = (v) => onChange && onChange(clamp(v));
  return (
    <div className={cls} {...rest}>
      <button type="button" className="rds-stepper__btn" onClick={() => set(value - step)}
        disabled={disabled || (min != null && value <= min)} aria-label="Decrement">−</button>
      <input className="rds-stepper__input" type="text" inputMode="numeric" value={value} disabled={disabled}
        onChange={(e) => { const n = Number(e.target.value); if (!Number.isNaN(n)) set(n); }} />
      <button type="button" className="rds-stepper__btn" onClick={() => set(value + step)}
        disabled={disabled || (max != null && value >= max)} aria-label="Increment">+</button>
    </div>
  );
}
