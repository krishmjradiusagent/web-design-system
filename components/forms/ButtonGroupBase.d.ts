import * as React from "react";
export interface ButtonGroupBaseItem {
  value: string | number;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}
export interface ButtonGroupBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "style"> {
  items: ButtonGroupBaseItem[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  size?: "sm" | "default" | "lg";
  style?: "outline" | "ghost" | "solid";
}
export declare function ButtonGroupBase(props: ButtonGroupBaseProps): JSX.Element;
