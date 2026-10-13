import React from "react";

/** Radius UI — Resizable. Two horizontal panes with a draggable divider. */
export function Resizable({ left, right, defaultSize = 50, min = 20, max = 80, className = "", style = {} }) {
  const [size, setSize] = React.useState(defaultSize);
  const ref = React.useRef(null);
  const drag = (e) => {
    e.preventDefault();
    const rect = ref.current.getBoundingClientRect();
    const move = (ev) => {
      const pct = ((ev.clientX - rect.left) / rect.width) * 100;
      setSize(Math.max(min, Math.min(max, pct)));
    };
    const up = () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  return (
    <div ref={ref} className={["rds-resizable", className].filter(Boolean).join(" ")} style={{ height: 220, ...style }}>
      <div className="rds-resizable__pane" style={{ width: size + "%" }}>{left}</div>
      <div className="rds-resizable__handle" onMouseDown={drag} role="separator" aria-orientation="vertical" />
      <div className="rds-resizable__pane" style={{ width: (100 - size) + "%" }}>{right}</div>
    </div>
  );
}
