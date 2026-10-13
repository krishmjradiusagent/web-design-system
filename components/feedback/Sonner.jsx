import React from "react";
import { Toast } from "./Toast.jsx";

/** Radius UI — Sonner. Fixed bottom-right stack that renders a list of toasts.
 *  Pair with your own queue state; each toast takes the Toast props. */
export function Sonner({ toasts = [], className = "" }) {
  return (
    <div className={["rds-sonner", className].filter(Boolean).join(" ")}>
      {toasts.map((t, i) => <Toast key={t.id ?? i} {...t} />)}
    </div>
  );
}
