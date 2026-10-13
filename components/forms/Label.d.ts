import * as React from "react";
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Label(props: LabelProps): JSX.Element;
