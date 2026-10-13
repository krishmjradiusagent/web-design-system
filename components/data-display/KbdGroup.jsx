import React from "react";
import { Kbd } from "./Kbd.jsx";

/** Radius UI — KbdGroup. Renders a keystroke as a row of Kbd chips with a separator. */
export function KbdGroup({ keys = [], separator = "+", className = "", ...rest }) {
  const arr = typeof keys === "string" ? keys.split(/\s+/) : keys;
  return (
    <span className={["rds-kbd-group", className].filter(Boolean).join(" ")} {...rest}>
      {arr.map((k, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="rds-kbd-group__sep" aria-hidden="true">{separator}</span>}
          <Kbd>{k}</Kbd>
        </React.Fragment>
      ))}
    </span>
  );
}
