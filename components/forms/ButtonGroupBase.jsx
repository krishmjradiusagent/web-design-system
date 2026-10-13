import React from "react";

/** Radius UI — ButtonGroupBase. A joined row of segmented buttons.
 *  Consumers pass items {value,label,icon,disabled}; onChange returns value. */
export function ButtonGroupBase({ items = [], value, onChange, size = "default", style: styleVariant = "outline", className = "", ...rest }) {
  const cls = ["rds-btn-group", `rds-btn-group--${size}`, `rds-btn-group--${styleVariant}`, className].filter(Boolean).join(" ");
  return (
    <div role="group" className={cls} {...rest}>
      {items.map((it, i) => {
        const active = it.value === value;
        return (
          <button key={it.value ?? i} type="button" className="rds-btn-group__btn"
            data-active={active} disabled={it.disabled}
            onClick={() => onChange && onChange(it.value)}>
            {it.icon}{it.label}
          </button>
        );
      })}
    </div>
  );
}
