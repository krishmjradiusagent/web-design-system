import * as React from "react";
export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}
export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options: RadioOption[];
  className?: string;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
