import React from "react";

/** Radius UI — ProgressBarLines. Segmented progress: N ticks of a percentage. */
export function ProgressBarLines({ percentage = 0, segments = 10, size = "default", color = "primary", className = "", ...rest }) {
  const filled = Math.round((percentage / 100) * segments);
  const cls = ["rds-pbar", `rds-pbar--${size}`, `rds-pbar--${color}`, className].filter(Boolean).join(" ");
  return (
    <div role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}
      className={cls} {...rest}>
      {Array.from({ length: segments }).map((_, i) => (
        <span key={i} className="rds-pbar__seg" data-on={i < filled} />
      ))}
    </div>
  );
}
