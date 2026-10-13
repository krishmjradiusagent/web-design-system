import React from "react";
import { RADIUS_ICONS } from "./icon-data.js";

/** Radius UI — Icon. Real Lucide line icons via CDN (`lucide-static@0.474.0`).
 *  Any Lucide glyph name works (kebab-case). Falls back to the inline
 *  RADIUS_ICONS registry if the fetch fails (offline / air-gapped). */

const CDN = "https://unpkg.com/lucide-static@0.474.0/icons";
const cache = new Map(); // name -> { inner: string } | Promise
const subs = new Map(); // name -> Set<setter>

function fetchIcon(name) {
  if (cache.has(name)) return cache.get(name);
  const p = fetch(`${CDN}/${name}.svg`)
    .then((r) => (r.ok ? r.text() : ""))
    .then((svg) => {
      const m = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
      const inner = m ? m[1].trim() : "";
      const rec = { inner };
      cache.set(name, rec);
      const s = subs.get(name);
      if (s) s.forEach((fn) => fn(rec));
      return rec;
    })
    .catch(() => {
      const rec = { inner: "" };
      cache.set(name, rec);
      return rec;
    });
  cache.set(name, p);
  return p;
}

export function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  style = {},
  "aria-label": ariaLabel,
  ...rest
}) {
  const cached = cache.get(name);
  const initial = cached && !cached.then ? cached.inner : null;
  const [inner, setInner] = React.useState(initial);
  React.useEffect(() => {
    let alive = true;
    const setter = (rec) => { if (alive) setInner(rec.inner); };
    let s = subs.get(name);
    if (!s) { s = new Set(); subs.set(name, s); }
    s.add(setter);
    const c = cache.get(name);
    if (c && !c.then) setter(c);
    else Promise.resolve(fetchIcon(name)).then(setter);
    return () => { alive = false; s.delete(setter); };
  }, [name]);

  const a11y = ariaLabel
    ? { role: "img", "aria-label": ariaLabel }
    : { "aria-hidden": "true" };

  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    style: { display: "inline-block", flexShrink: 0, ...style },
    ...a11y,
    ...rest,
  };

  if (inner) {
    return <svg {...svgProps} dangerouslySetInnerHTML={{ __html: inner }} />;
  }
  // Fallback: inline registry paths (used before CDN response arrives or when offline).
  const d = RADIUS_ICONS[name];
  return (
    <svg {...svgProps}>
      {d
        ? d.split("@").map((seg, i) => <path key={i} d={seg} />)
        : <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20" strokeDasharray="3 3" />}
    </svg>
  );
}
