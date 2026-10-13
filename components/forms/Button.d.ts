import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default = indigo primary CTA. */
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  /** Control size — 1:1 with the Figma Button set. */
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  /** Forced visual state for mockups. Runtime hover/focus/pressed are automatic. */
  state?: "default" | "hover" | "focus" | "loading" | "disabled" | "pressed";
  /** Full-width button. */
  block?: boolean;
  /** 16px icon node before the label. */
  leftIcon?: React.ReactNode;
  /** 16px icon node after the label. */
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
