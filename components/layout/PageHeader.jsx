import React from "react";

/** Radius UI — PageHeader. Title/description/actions row with optional breadcrumb slot. */
export function PageHeader({ title, description, actions, breadcrumb, meta, className = "", ...rest }) {
  return (
    <header className={["rds-pageheader", className].filter(Boolean).join(" ")} {...rest}>
      {breadcrumb && <div className="rds-pageheader__crumb">{breadcrumb}</div>}
      <div className="rds-pageheader__row">
        <div className="rds-pageheader__main">
          <h1 className="rds-pageheader__title">{title}</h1>
          {description && <p className="rds-pageheader__desc">{description}</p>}
          {meta && <div className="rds-pageheader__meta">{meta}</div>}
        </div>
        {actions && <div className="rds-pageheader__actions">{actions}</div>}
      </div>
    </header>
  );
}
