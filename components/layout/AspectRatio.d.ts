import * as React from "react";
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width/height ratio, e.g. 16/9 or 1. */
  ratio?: number;
  children?: React.ReactNode;
}
export declare function AspectRatio(props: AspectRatioProps): JSX.Element;
