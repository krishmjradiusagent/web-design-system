import React from "react";

/** Radius UI — DotIndicator. Sequence dots for pagination, carousels, steps. */
export function DotIndicator({ count = 3, active = 0, size = "default", onSelect, className = "", ...rest }) {
  const cls = ["rds-dots", size !== "default" && `rds-dots--${size}`, className].filter(Boolean).join(" ");
  return (
    <div role="tablist" className={cls} {...rest}>
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} type="button" role="tab" aria-selected={i === active}
          className="rds-dots__dot" data-active={i === active}
          onClick={() => onSelect && onSelect(i)} aria-label={`Go to ${i + 1}`} />
      ))}
    </div>
  );
}
