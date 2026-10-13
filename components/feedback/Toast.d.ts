import * as React from "react";
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error";
  /** 18px leading icon node. */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing action node (e.g. Undo button). */
  action?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
