import React from "react";

/** Radius UI — Pagination. Prev/next + numbered pages with ellipsis. */
export function Pagination({ page = 1, total = 1, onChange, className = "" }) {
  const go = (p) => { if (p >= 1 && p <= total && p !== page) onChange && onChange(p); };
  const pages = [];
  const push = (p) => pages.push(p);
  push(1);
  const start = Math.max(2, page - 1), end = Math.min(total - 1, page + 1);
  if (start > 2) push("…");
  for (let p = start; p <= end; p++) push(p);
  if (end < total - 1) push("…");
  if (total > 1) push(total);
  return (
    <nav className={["rds-pagination", className].filter(Boolean).join(" ")} aria-label="Pagination">
      <button className="rds-page" onClick={() => go(page - 1)} disabled={page === 1} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      {pages.map((p, i) => p === "…"
        ? <span key={"e" + i} className="rds-page__ellipsis">…</span>
        : <button key={p} className="rds-page" aria-current={p === page ? "page" : undefined} onClick={() => go(p)}>{p}</button>)}
      <button className="rds-page" onClick={() => go(page + 1)} disabled={page === total} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </nav>
  );
}
