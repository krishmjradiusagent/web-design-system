import React from "react";

/** Radius UI — Button. One primary action per surface; secondary/outline/ghost
 *  for the rest. Compact 32px default. Variant + size vocabulary is 1:1 with the
 *  Figma Button set (6 variants x 8 sizes x states). */
export function Button({
  variant = "default",
  size = "default",
  state = "default",
  block = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  children,
  ...rest
}) {
  const isIcon = size.startsWith("icon");
  const sizeKey = size.replace(/^icon-?/, ""); // "", "xs", "sm", "lg"
  const cls = [
    "rds-btn",
    variant !== "default" && `rds-btn--${variant}`,
    sizeKey && `rds-btn--${sizeKey}`,
    isIcon && "rds-btn--icon",
    block && "rds-btn--block",
    className,
  ].filter(Boolean).join(" ");
  const loading = state === "loading";
  return (
    <button
      className={cls}
      aria-busy={loading || undefined}
      disabled={state === "disabled" || rest.disabled}
      {...rest}
    >
      {loading ? <span className="rds-spinner" aria-hidden="true" /> : leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
