import React from "react";

/** Radius UI — Tabs. Segmented (default) or underline. Selected state is always
 *  obvious — gray-on-white with no selected treatment is a fail. */
export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "segmented", className = "", children }) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value ?? internal;
  const select = (v) => { if (value == null) setInternal(v); onChange && onChange(v); };
  const cls = ["rds-tabs", variant === "underline" && "rds-tabs--underline", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <div className="rds-tabs__list" role="tablist">
        {tabs.map((t) => (
          <button key={t.value} role="tab" aria-selected={active === t.value} className="rds-tab" onClick={() => select(t.value)}>
            {t.icon}{t.label}
          </button>
        ))}
      </div>
      {typeof children === "function" ? children(active) : children}
    </div>
  );
}
