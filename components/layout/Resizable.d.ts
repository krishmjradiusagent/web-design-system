import * as React from "react";
export interface ResizableProps {
  left: React.ReactNode;
  right: React.ReactNode;
  /** Initial left-pane width (percent). */
  defaultSize?: number;
  min?: number;
  max?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Resizable(props: ResizableProps): JSX.Element;
