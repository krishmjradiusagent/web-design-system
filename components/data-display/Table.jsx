import React from "react";

/** Radius UI — Table. Dense, scannable rows (aim ~20 in a viewport). Numeric
 *  columns use the mono stack, right-aligned. Wrap in overflow container as needed. */
export function Table({ columns = [], data = [], className = "", ...rest }) {
  return (
    <table className={["rds-table", className].filter(Boolean).join(" ")} {...rest}>
      <thead>
        <tr>{columns.map((c) => <th key={c.key} style={c.numeric ? { textAlign: "right" } : undefined}>{c.header}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={row.id ?? i}>
            {columns.map((c) => (
              <td key={c.key} className={c.numeric ? "rds-table--num" : undefined}>
                {c.render ? c.render(row) : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
