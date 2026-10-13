import React from "react";

/** Radius UI — Toggle. Single on/off pressable control (e.g. bold, filter). */
export function Toggle({ pressed, defaultPressed = false, onPressedChange, variant = "default", className = "", children, ...rest }) {
  const [on, setOn] = React.useState(defaultPressed);
  const active = pressed ?? on;
  const cls = ["rds-toggle", variant === "outline" && "rds-toggle--outline", className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} aria-pressed={active}
      onClick={() => { if (pressed == null) setOn(!active); onPressedChange && onPressedChange(!active); }} {...rest}>
      {children}
    </button>
  );
}
