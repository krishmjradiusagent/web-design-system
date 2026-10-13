import * as React from "react";
export interface ProgressBarLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage?: number;
  segments?: number;
  size?: "sm" | "default" | "lg";
  color?: "primary" | "green" | "blue" | "orange" | "red";
}
export declare function ProgressBarLines(props: ProgressBarLinesProps): JSX.Element;
