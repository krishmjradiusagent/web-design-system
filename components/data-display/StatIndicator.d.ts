import * as React from "react";
export interface StatIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: React.ReactNode;
  trend?: "up" | "down" | "flat";
  size?: "sm" | "default";
  showIcon?: boolean;
}
export declare function StatIndicator(props: StatIndicatorProps): JSX.Element;
