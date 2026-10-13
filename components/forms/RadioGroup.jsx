import React from "react";

/** Radius UI — Radio group. Single choice; mirrors Checkbox styling with a full
 *  round control. Pass options as {value,label}. */
export function RadioGroup({ name, value, defaultValue, onChange, options = [], className = "" }) {
  const cls = ["rds-radiogroup", className].filter(Boolean).join(" ");
  return (
    <div className={cls} role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {options.map((o) => (
        <label className="rds-choice" key={o.value}>
          <input
            type="radio"
            className="rds-radio"
            name={name}
            value={o.value}
            checked={value != null ? value === o.value : undefined}
            defaultChecked={value == null ? defaultValue === o.value : undefined}
            onChange={onChange}
            disabled={o.disabled}
          />
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
}
