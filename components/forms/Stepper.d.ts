import * as React from "react";
export interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: "sm" | "default";
  disabled?: boolean;
}
export declare function Stepper(props: StepperProps): JSX.Element;
