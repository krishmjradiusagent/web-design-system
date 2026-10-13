import * as React from "react";
export interface ToggleGroupItem {
  value: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  ariaLabel?: string;
}
export interface ToggleGroupProps {
  items: ToggleGroupItem[];
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  className?: string;
}
export declare function ToggleGroup(props: ToggleGroupProps): JSX.Element;
