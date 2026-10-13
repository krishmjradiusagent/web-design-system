import * as React from "react";
export interface CollapsibleProps {
  label: React.ReactNode;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export declare function Collapsible(props: CollapsibleProps): JSX.Element;
