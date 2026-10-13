import * as React from "react";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}
export declare function Progress(props: ProgressProps): JSX.Element;
