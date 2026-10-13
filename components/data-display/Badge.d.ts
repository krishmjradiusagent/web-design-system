import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** default/secondary/outline/destructive mirror the Figma set; the tint
   *  variants (green/blue/amber/red/indigo) are the status badge tints. */
  variant?: "default" | "secondary" | "outline" | "destructive" | "green" | "blue" | "amber" | "red" | "indigo";
  /** Leading status dot in the current color. */
  dot?: boolean;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
