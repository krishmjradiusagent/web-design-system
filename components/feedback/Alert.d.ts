import * as React from "react";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
  /** 18px leading icon node. */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
