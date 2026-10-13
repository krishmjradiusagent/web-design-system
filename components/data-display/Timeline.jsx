import React from "react";

/** Radius UI — Timeline. Vertical activity feed; items {time, title, description, icon, tone}. */
export function Timeline({ items = [], className = "", ...rest }) {
  return (
    <ol className={["rds-timeline", className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it, i) => (
        <li key={i} className="rds-timeline__item">
          <span className="rds-timeline__marker" data-tone={it.tone || "neutral"}>
            {it.icon || <span className="rds-timeline__dot"/>}
          </span>
          <div className="rds-timeline__body">
            <div className="rds-timeline__head">
              <span className="rds-timeline__title">{it.title}</span>
              {it.time && <span className="rds-timeline__time">{it.time}</span>}
            </div>
            {it.description && <div className="rds-timeline__desc">{it.description}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
