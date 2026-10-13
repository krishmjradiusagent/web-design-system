import * as React from "react";
export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading media (icon, avatar, thumbnail). */
  media?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing actions. */
  actions?: React.ReactNode;
  variant?: "plain" | "bordered" | "button";
}
export declare function Item(props: ItemProps): JSX.Element;
