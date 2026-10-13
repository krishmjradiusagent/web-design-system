import React from "react";

/** Radius UI — DataTable. Table with sortable headers and optional row selection.
 *  Dense, scannable; numeric columns use the mono stack. */
export function DataTable({ columns = [], data = [], selectable = false, className = "" }) {
  const [sort, setSort] = React.useState(null);
  const [selected, setSelected] = React.useState(new Set());
  const sorted = React.useMemo(() => {
    if (!sort) return data;
    const col = columns.find((c) => c.key === sort.key);
    const arr = [...data].sort((a, b) => {
      const av = a[sort.key], bv = b[sort.key];
      return (av > bv ? 1 : av < bv ? -1 : 0) * (sort.dir === "desc" ? -1 : 1);
    });
    return arr;
  }, [data, sort, columns]);
  const toggleSort = (k) => setSort((s) => s && s.key === k ? (s.dir === "asc" ? { key: k, dir: "desc" } : null) : { key: k, dir: "asc" });
  const toggleRow = (id) => setSelected((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <table className={["rds-table", "rds-datatable", className].filter(Boolean).join(" ")}>
      <thead>
        <tr>
          {selectable && <th style={{ width: 36 }} />}
          {columns.map((c) => (
            <th key={c.key} className={c.sortable ? "rds-datatable__th" : undefined} style={c.numeric ? { textAlign: "right" } : undefined}
                onClick={c.sortable ? () => toggleSort(c.key) : undefined}>
              <span className="rds-datatable__sort">{c.header}
                {c.sortable && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{sort && sort.key === c.key ? (sort.dir === "asc" ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />) : <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />}</svg>}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, i) => {
          const id = row.id ?? i;
          return (
            <tr key={id} data-selected={selected.has(id)}>
              {selectable && <td style={{ width: 36 }}><input type="checkbox" className="rds-checkbox" checked={selected.has(id)} onChange={() => toggleRow(id)} /></td>}
              {columns.map((c) => <td key={c.key} className={c.numeric ? "rds-table--num" : undefined}>{c.render ? c.render(row) : row[c.key]}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
