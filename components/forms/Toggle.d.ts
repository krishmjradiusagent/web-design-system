import * as React from "react";
export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: "default" | "outline";
  children?: React.ReactNode;
}
export declare function Toggle(props: ToggleProps): JSX.Element;
