import React from "react";

/** Radius UI — ToggleGroup. Single- or multi-select set of toggles in a bordered
 *  segmented container. Pass items as {value,label|icon}. */
export function ToggleGroup({ items = [], value, defaultValue, onChange, type = "single", className = "" }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (type === "multiple" ? [] : items[0]?.value));
  const val = value ?? internal;
  const isActive = (v) => (type === "multiple" ? (val || []).includes(v) : val === v);
  const toggle = (v) => {
    let next;
    if (type === "multiple") { const set = new Set(val || []); set.has(v) ? set.delete(v) : set.add(v); next = [...set]; }
    else next = v;
    if (value == null) setInternal(next);
    onChange && onChange(next);
  };
  return (
    <div className={["rds-toggle-group", className].filter(Boolean).join(" ")} role="group">
      {items.map((it) => (
        <button key={it.value} type="button" className="rds-toggle" aria-pressed={isActive(it.value)} onClick={() => toggle(it.value)} aria-label={it.ariaLabel}>
          {it.icon}{it.label}
        </button>
      ))}
    </div>
  );
}
