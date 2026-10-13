import * as React from "react";
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional inline label; renders a clickable row. */
  label?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): JSX.Element;
