import React from "react";
import { Calendar } from "../data-display/Calendar.jsx";

/** Radius UI — DatePicker. A trigger that opens a Calendar in a popover. */
export function DatePicker({ value, defaultValue, onChange, placeholder = "Pick a date", className = "" }) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue || null);
  const val = value ?? internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const fmt = (d) => d ? new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "";
  return (
    <div className={["rds-combobox", className].filter(Boolean).join(" ")} ref={ref}>
      <button type="button" className="rds-combobox__trigger" data-placeholder={!val} onClick={() => setOpen((o) => !o)}>
        <span>{val ? fmt(val) : placeholder}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" /></svg>
      </button>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 70 }}>
          <Calendar value={val} onChange={(d) => { if (value == null) setInternal(d); onChange && onChange(d); setOpen(false); }} />
        </div>
      )}
    </div>
  );
}
