import * as React from "react";
export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 24px icon node inside the media chip. */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
export declare function Empty(props: EmptyProps): JSX.Element;
