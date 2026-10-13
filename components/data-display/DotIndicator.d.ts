import * as React from "react";
export interface DotIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  active?: number;
  size?: "sm" | "default" | "lg";
  onSelect?: (index: number) => void;
}
export declare function DotIndicator(props: DotIndicatorProps): JSX.Element;
