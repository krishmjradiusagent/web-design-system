import * as React from "react";
export interface PopoverProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  align?: "start" | "end";
  className?: string;
}
export declare function Popover(props: PopoverProps): JSX.Element;
