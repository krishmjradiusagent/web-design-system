import React from "react";

/** Radius UI — lightweight bar Chart (CSS). For richer charts, feed the same
 *  --chart-1..5 tokens into your charting lib. */
export function Chart({ data = [], series = [], className = "" }) {
  const max = Math.max(1, ...data.map((d) => Math.max(...(series.length ? series.map((s) => d[s.key] || 0) : [d.value || 0]))));
  const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];
  return (
    <div className={["rds-chart", className].filter(Boolean).join(" ")}>
      <div className="rds-chart__bars">
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", gap: 3, alignItems: "flex-end", height: "100%" }}>
            {(series.length ? series : [{ key: "value" }]).map((s, j) => (
              <div key={j} className="rds-chart__bar" style={{ height: `${((d[s.key] || 0) / max) * 100}%`, background: colors[j % colors.length] }} title={`${d[s.key]}`} />
            ))}
          </div>
        ))}
      </div>
      <div className="rds-chart__x">{data.map((d, i) => <span key={i}>{d.label}</span>)}</div>
      {series.length > 0 && (
        <div className="rds-chart__legend">
          {series.map((s, j) => <span key={j} className="rds-chart__legend-item"><span className="rds-chart__swatch" style={{ background: colors[j % colors.length] }} />{s.label || s.key}</span>)}
        </div>
      )}
    </div>
  );
}
