import * as React from "react";
export type ChipColor = "neutral" | "blue" | "green" | "yellow" | "orange" | "red" | "indigo";
export type ChipVariant = "soft" | "solid" | "outline";
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onRemove"> {
  color?: ChipColor;
  variant?: ChipVariant;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare function Chip(props: ChipProps): JSX.Element;
