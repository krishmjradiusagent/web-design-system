import * as React from "react";
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "neutral" | "blue" | "green" | "yellow" | "orange" | "red" | "indigo";
  icon?: React.ReactNode;
  title?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
