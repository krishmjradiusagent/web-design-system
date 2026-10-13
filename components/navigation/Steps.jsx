import React from "react";

/** Radius UI — Steps. Horizontal step tracker (numbered / checked). */
export function Steps({ steps = [], current = 0, className = "", ...rest }) {
  return (
    <ol className={["rds-steps", className].filter(Boolean).join(" ")} {...rest}>
      {steps.map((s, i) => {
        const state = i < current ? "done" : (i === current ? "current" : "todo");
        return (
          <li key={i} className="rds-steps__item" data-state={state}>
            <span className="rds-steps__marker" aria-hidden="true">
              {state === "done"
                ? <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6.5l2.5 2.5 5-5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                : <span>{i + 1}</span>}
            </span>
            <span className="rds-steps__label">
              <span className="rds-steps__title">{typeof s === "string" ? s : s.title}</span>
              {typeof s !== "string" && s.description && <span className="rds-steps__desc">{s.description}</span>}
            </span>
            {i < steps.length - 1 && <span className="rds-steps__line" aria-hidden="true"/>}
          </li>
        );
      })}
    </ol>
  );
}
