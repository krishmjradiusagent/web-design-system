import React from "react";

/** Radius UI — Callout. A tinted note for inline guidance; not a full Alert. */
export function Callout({ tone = "neutral", icon, title, children, className = "", ...rest }) {
  const cls = ["rds-callout", `rds-callout--${tone}`, className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {icon && <span className="rds-callout__icon" aria-hidden="true">{icon}</span>}
      <div className="rds-callout__body">
        {title && <div className="rds-callout__title">{title}</div>}
        <div className="rds-callout__content">{children}</div>
      </div>
    </div>
  );
}
