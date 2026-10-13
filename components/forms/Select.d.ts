import * as React from "react";
export interface SelectOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Options array; alternatively pass <option> children. */
  options?: SelectOption[];
  children?: React.ReactNode;
}
export declare function Select(props: SelectProps): JSX.Element;
