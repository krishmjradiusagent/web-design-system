import React from "react";

/** Radius UI — ContextMenu. Right-click menu anchored to the cursor. Reuses the
 *  dropdown menu styling. */
export function ContextMenu({ items = [], children, className = "" }) {
  const [pos, setPos] = React.useState(null);
  React.useEffect(() => {
    if (!pos) return;
    const close = () => setPos(null);
    document.addEventListener("click", close);
    document.addEventListener("scroll", close, true);
    return () => { document.removeEventListener("click", close); document.removeEventListener("scroll", close, true); };
  }, [pos]);
  return (
    <div className={className} onContextMenu={(e) => { e.preventDefault(); setPos({ x: e.clientX, y: e.clientY }); }}>
      {children}
      {pos && (
        <div className="rds-menu" style={{ position: "fixed", top: pos.y, left: pos.x, zIndex: 120 }} role="menu">
          {items.map((it, i) =>
            it.type === "separator" ? <div key={i} className="rds-menu__sep" />
            : it.type === "label" ? <div key={i} className="rds-menu__label">{it.label}</div>
            : <div key={i} role="menuitem" className={["rds-menu__item", it.danger && "rds-menu__item--danger"].filter(Boolean).join(" ")} onClick={() => it.onSelect && it.onSelect()}>{it.icon}<span>{it.label}</span>{it.shortcut && <span className="rds-menu__shortcut">{it.shortcut}</span>}</div>
          )}
        </div>
      )}
    </div>
  );
}
