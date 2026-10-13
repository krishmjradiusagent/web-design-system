import * as React from "react";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional inline label; renders a clickable row. */
  label?: React.ReactNode;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
