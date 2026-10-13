import React from "react";

const I = {
  chevron: <path d="m9 18 6-6-6-6" />,
  chevdown: <path d="m6 9 6 6 6-6" />,
  panel: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  columns: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18" /></>,
  filter: <path d="M22 3H2l8 9.46V19l4 2v-8.54z" />,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>,
  home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></>,
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  expand: <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />,
};
const Svg = ({ children, ...p }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>;
const Dots = () => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="19" r="1.8" /></svg>;

/** Radius UI — CrmShell. The real Radius CRM frame: brand-tinted inset rail with
 *  the Mel Copilot pill, grouped nav, agent card; a white content card with the
 *  compact page head (title · scope · count · bell · CTA · overflow), the tab row
 *  with search / columns / filter, a body that falls back to the zero-state, and
 *  the Mel ask bar pinned to the bottom of the card. Ported from the CRM starter. */
export function CrmShell({
  brand = "Circle", brandColor = "#649A93", logoSrc, melIconSrc,
  navGroups = [], activeNav, onNavSelect, melLabel = "Mel Copilot",
  agentName = "Agent name", agentRole = "Agent", agentAvatar, poweredBy = "Powered by Radius",
  title = "Page title", scope = "All", count = 0, scopes = ["All", "Mine", "Team"], onScopeChange,
  primaryAction = "+ New item", onPrimaryAction, overflowItems = [],
  tabs = [], activeTab, onTabChange, searchPlaceholder = "Search",
  emptyTitle = "Nothing here yet",
  emptyDescription = "When you add your first item it shows up here with its status, owner and key dates.",
  emptyActions, isEmpty = true, children,
  askPlaceholder = "Ask Mel anything about this page", showAskBar = true,
  dark = false, className = "", style = {}, ...rest
}) {
  const [scopeOpen, setScopeOpen] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  return (
    <div className={["rcs-app", className].filter(Boolean).join(" ")} data-theme={dark ? "dark" : undefined} style={{ "--rcs-brand": brandColor, ...style }} {...rest}>
      <aside className="rcs-rail">
        <div className="rcs-logo">
          {logoSrc ? <img className="rcs-wordmark" src={logoSrc} alt={brand} /> : <span className="rcs-wordmark rcs-wordmark--text">{brand}</span>}
          <button className="rcs-railtoggle" title="Toggle sidebar"><Svg>{I.panel}</Svg></button>
        </div>
        <div className="rcs-melpill">
          {melIconSrc && <img className="rcs-melmark" src={melIconSrc} alt="" />}
          <span>{melLabel}</span>
          <Svg className="rcs-melchev">{I.chevron}</Svg>
        </div>
        {navGroups.map((g, gi) => (
          <React.Fragment key={gi}>
            {g.label && <div className="rcs-grouplabel">{g.label}</div>}
            {g.items.map((it) => (
              <button key={it.id} className="rcs-nav" data-active={activeNav === it.id} onClick={() => onNavSelect && onNavSelect(it.id)}>
                {it.icon}<span>{it.label}</span>
                {it.dot && <span className="rcs-navdot" />}
                {it.chevron && <Svg className="rcs-melchev" style={{ stroke: "currentColor", opacity: .6 }}>{I.chevron}</Svg>}
              </button>
            ))}
          </React.Fragment>
        ))}
        <div className="rcs-spacer" />
        <div className="rcs-profile">
          <div className="rcs-profiletop">
            <span className="rcs-pav">{agentAvatar ? <img src={agentAvatar} alt="" /> : agentName.slice(0, 1)}</span>
            <span className="rcs-pmeta"><span className="rcs-pname">{agentName}</span><span className="rcs-prole">{agentRole}</span></span>
            <Svg style={{ width: 16, height: 16, marginLeft: "auto", stroke: "var(--neutral-400)" }}>{I.chevdown}</Svg>
          </div>
          <div className="rcs-powered">{melIconSrc && <img src={melIconSrc} alt="" />}<span>{poweredBy}</span></div>
        </div>
      </aside>

      <main className="rcs-content">
        <div className="rcs-phead">
          <span className="rcs-ptitle">{title}</span>
          <div className="rcs-ictl" onClick={() => setScopeOpen((o) => !o)}>
            <span>{scope}</span>
            <span className="rcs-pcount">{count}</span>
            <Svg>{I.chevdown}</Svg>
            {scopeOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: 120, background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: 14, boxShadow: "var(--shadow-sm)", padding: 6, zIndex: 40 }}>
                {scopes.map((s) => (
                  <div key={s} style={{ height: 30, display: "flex", alignItems: "center", padding: "0 8px", borderRadius: 6, fontSize: 13, color: s === scope ? "var(--neutral-900)" : "var(--neutral-700)", fontWeight: s === scope ? 500 : 400, cursor: "pointer" }} onClick={() => { onScopeChange && onScopeChange(s); setScopeOpen(false); }}>{s}</div>
                ))}
              </div>
            )}
          </div>
          <span className="rcs-vsep" />
          <div className="rcs-spacer" />
          <button className="rcs-btn rcs-btn--icon" aria-label="Notifications"><Svg>{I.bell}</Svg></button>
          <button className="rcs-btn rcs-btn--primary" onClick={onPrimaryAction}>{primaryAction}</button>
          <div style={{ position: "relative" }}>
            <button className="rcs-btn rcs-btn--icon rcs-btn--filled" title="More" onClick={() => setMoreOpen((o) => !o)}><Dots /></button>
            {moreOpen && overflowItems.length > 0 && (
              <div style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", minWidth: 190, background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: 14, boxShadow: "var(--shadow-sm)", padding: 6, zIndex: 40 }}>
                {overflowItems.map((it) => (
                  <div key={it.label} style={{ display: "flex", alignItems: "center", gap: 10, height: 34, padding: "0 10px", borderRadius: 8, fontSize: 13, color: "var(--neutral-700)", cursor: "pointer", whiteSpace: "nowrap" }} onClick={it.onClick}>{it.icon}{it.label}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rcs-tabs">
          <div className="rcs-tabseg">
            {tabs.map((t) => (
              <button key={t.id} className="rcs-tab" data-active={activeTab === t.id} onClick={() => onTabChange && onTabChange(t.id)}>{t.label}</button>
            ))}
          </div>
          <div className="rcs-tabs__right">
            <div className="rcs-search"><Svg>{I.search}</Svg><input type="text" placeholder={searchPlaceholder} /></div>
            <div className="rcs-ictl"><Svg>{I.columns}</Svg>Columns</div>
            <div className="rcs-ictl rcs-ictl--iconly" title="Filter"><Svg>{I.filter}</Svg></div>
          </div>
        </div>

        <div className="rcs-body">
          {isEmpty ? (
            <div className="rcs-empty">
              <div className="rcs-empty__media"><Svg>{I.home}</Svg></div>
              <h2>{emptyTitle}</h2>
              <p>{emptyDescription}</p>
              <div className="rcs-empty__actions">
                {emptyActions || (<><button className="rcs-btn rcs-btn--primary">{primaryAction}</button><button className="rcs-btn">Import</button></>)}
              </div>
            </div>
          ) : children}
        </div>

        {showAskBar && (<>
          <div className="rcs-melfade" />
          <div className="rcs-melbar">
            <span className="rcs-melmini">{melIconSrc && <img className="rcs-melmark" src={melIconSrc} alt="" style={{ width: 24, height: 24 }} />}</span>
            <input className="rcs-ask" placeholder={askPlaceholder} />
            <button className="rcs-send" type="button" title="Send"><Svg>{I.arrow}</Svg></button>
            <div className="rcs-cluster">
              <span className="rcs-meldiv" />
              <button className="rcs-icob" type="button" title="More"><Dots /></button>
              <button className="rcs-icob" type="button" title="Expand"><Svg>{I.expand}</Svg></button>
              <button className="rcs-icob" type="button" title="Collapse"><Svg>{I.chevdown}</Svg></button>
            </div>
          </div>
        </>)}
      </main>
    </div>
  );
}
