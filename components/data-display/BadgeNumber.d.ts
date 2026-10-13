import * as React from "react";
export interface BadgeNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "destructive" | "neutral" | "primary";
  /** Clamp display to `${max}+`. */
  max?: number;
  children?: React.ReactNode;
}
export declare function BadgeNumber(props: BadgeNumberProps): JSX.Element;
