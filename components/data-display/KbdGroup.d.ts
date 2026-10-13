import * as React from "react";
export interface KbdGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  keys: string | string[];
  separator?: React.ReactNode;
}
export declare function KbdGroup(props: KbdGroupProps): JSX.Element;
