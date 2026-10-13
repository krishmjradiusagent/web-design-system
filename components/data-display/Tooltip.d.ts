import * as React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text shown on hover. */
  label: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
