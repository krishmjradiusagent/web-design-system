import React from "react";

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/** Radius UI — Calendar. Single-month day grid with today + selected states. */
export function Calendar({ value, onChange, month: monthProp, className = "" }) {
  const sel = value ? new Date(value) : null;
  const [view, setView] = React.useState(() => { const d = sel || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const year = view.getFullYear(), month = view.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isSame = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
  return (
    <div className={["rds-calendar", className].filter(Boolean).join(" ")}>
      <div className="rds-calendar__head">
        <button className="rds-btn rds-btn--ghost rds-btn--icon rds-btn--sm" aria-label="Previous month" onClick={() => setView(new Date(year, month - 1, 1))}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <span className="rds-calendar__title">{view.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</span>
        <button className="rds-btn rds-btn--ghost rds-btn--icon rds-btn--sm" aria-label="Next month" onClick={() => setView(new Date(year, month + 1, 1))}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="rds-calendar__grid">
        {DOW.map((d) => <div key={d} className="rds-calendar__dow">{d}</div>)}
        {cells.map((d, i) => d
          ? <button key={i} className={["rds-calendar__day", isSame(d, today) && "rds-calendar__day--today", isSame(d, sel) && "rds-calendar__day--selected"].filter(Boolean).join(" ")} onClick={() => onChange && onChange(d)}>{d.getDate()}</button>
          : <span key={i} />)}
      </div>
    </div>
  );
}
