import * as React from "react";
export interface ComboboxOption {
  value: string;
  label: React.ReactNode;
}
export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export declare function Combobox(props: ComboboxProps): JSX.Element;
