import React from "react";
import { DropdownMenu } from "./DropdownMenu.jsx";

/** Radius UI — Menubar. Horizontal application menu bar (File / Edit / View).
 *  Pass menus as {label, items:[…]} using the DropdownMenu item shape. */
export function Menubar({ menus = [], className = "" }) {
  return (
    <div className={["rds-menubar", className].filter(Boolean).join(" ")} role="menubar">
      {menus.map((m, i) => (
        <DropdownMenu key={i} trigger={<button className="rds-menubar__trigger">{m.label}</button>} items={m.items} />
      ))}
    </div>
  );
}
