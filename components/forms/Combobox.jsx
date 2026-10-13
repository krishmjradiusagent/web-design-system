import React from "react";

/** Radius UI — Combobox. Searchable single-select dropdown. Pass options as
 *  {value,label}. Filters as you type. */
export function Combobox({ options = [], value, defaultValue, onChange, placeholder = "Select…", className = "" }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value ?? internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const selected = options.find((o) => o.value === val);
  const filtered = options.filter((o) => String(o.label).toLowerCase().includes(query.toLowerCase()));
  const pick = (o) => { if (value == null) setInternal(o.value); onChange && onChange(o.value); setOpen(false); setQuery(""); };
  return (
    <div className={["rds-combobox", className].filter(Boolean).join(" ")} ref={ref}>
      <button type="button" className="rds-combobox__trigger" data-placeholder={!selected} onClick={() => setOpen((o) => !o)}>
        <span>{selected ? selected.label : placeholder}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5M7 9l5-5 5 5" /></svg>
      </button>
      {open && (
        <div className="rds-combobox__panel">
          <div className="rds-command__search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></svg>
            <input autoFocus placeholder="Search…" value={query} onChange={(e) => setQuery(e.target.value)} /></div>
          <div className="rds-command__list">
            {filtered.length ? filtered.map((o) => (
              <div key={o.value} className="rds-command__item" data-active={o.value === val} onClick={() => pick(o)}>
                <span style={{ flex: 1 }}>{o.label}</span>
                {o.value === val && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
              </div>
            )) : <div className="rds-command__empty">No results</div>}
          </div>
        </div>
      )}
    </div>
  );
}
