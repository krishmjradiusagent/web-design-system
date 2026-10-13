import * as React from "react";
export interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "spinner" | "dots" | "bars" | "pulse";
  size?: number;
  label?: string;
}
export declare function Loader(props: LoaderProps): JSX.Element;
