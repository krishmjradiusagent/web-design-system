import React from "react";

/** Radius UI — PageHeaderLegacy. Kept for pages already built on it: the page
 *  header that also owns its body — title + record count, description, actions,
 *  a segmented tab row, a toolbar row, and a built-in zero-state.
 *  New CRM screens should use CrmShell; new generic pages use PageHeader. */
export function PageHeaderLegacy({
  title, count, description, actions, breadcrumb, meta,
  tabs = [], activeTab, onTabChange,
  toolbar = null, isEmpty = false, empty = null, children,
  className = "", ...rest
}) {
  return (
    <section className={["rds-pagelayout", className].filter(Boolean).join(" ")} {...rest}>
      <header className="rds-pageheader">
        {breadcrumb && <div className="rds-pageheader__crumb">{breadcrumb}</div>}
        <div className="rds-pageheader__row">
          <div className="rds-pageheader__main">
            <h1 className="rds-pageheader__title rds-pageheader__title--count">
              {title}
              {count != null && <span className="rds-pageheader__count">{count}</span>}
            </h1>
            {description && <p className="rds-pageheader__desc">{description}</p>}
            {meta && <div className="rds-pageheader__meta">{meta}</div>}
          </div>
          {actions && <div className="rds-pageheader__actions">{actions}</div>}
        </div>
        {tabs.length > 0 && (
          <div className="rds-pageheader__tabs" role="tablist">
            {tabs.map((t) => (
              <button key={t.id} role="tab" className="rds-pageheader__tab" data-active={activeTab === t.id} aria-selected={activeTab === t.id} onClick={() => onTabChange && onTabChange(t.id)}>
                {t.label}
                {t.count != null && <span className="rds-pageheader__tabcount">{t.count}</span>}
              </button>
            ))}
          </div>
        )}
      </header>
      {toolbar && <div className="rds-pagelayout__toolbar">{toolbar}</div>}
      <div className="rds-pagelayout__body">{isEmpty ? empty : children}</div>
    </section>
  );
}
