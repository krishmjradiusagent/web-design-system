import React from "react";

/** Radius UI — Rating. 1–N star rating (readonly or interactive). */
export function Rating({ value = 0, max = 5, size = 16, readOnly = false, onChange, className = "", ...rest }) {
  const [hover, setHover] = React.useState(0);
  const shown = hover || value;
  return (
    <div role={readOnly ? "img" : "radiogroup"} aria-label={`Rating: ${value} of ${max}`}
      className={["rds-rating", className].filter(Boolean).join(" ")} {...rest}>
      {Array.from({ length: max }).map((_, i) => {
        const on = i < shown;
        return (
          <button key={i} type="button" tabIndex={readOnly ? -1 : 0} className="rds-rating__star" data-on={on}
            disabled={readOnly} onClick={() => !readOnly && onChange && onChange(i + 1)}
            onMouseEnter={() => !readOnly && setHover(i + 1)} onMouseLeave={() => setHover(0)}
            aria-label={`${i + 1} star${i ? "s" : ""}`}>
            <svg width={size} height={size} viewBox="0 0 20 20" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
              <path d="M10 2l2.472 5.012 5.528.803-4 3.9.944 5.505L10 14.62l-4.944 2.6.944-5.506-4-3.9 5.528-.802L10 2z" strokeLinejoin="round"/>
            </svg>
          </button>
        );
      })}
    </div>
  );
}
