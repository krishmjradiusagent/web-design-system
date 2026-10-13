import * as React from "react";
export interface MenuItem {
  type?: "item" | "separator" | "label";
  label?: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
  danger?: boolean;
  onSelect?: () => void;
}
export interface DropdownMenuProps {
  /** Trigger node (usually a Button). */
  trigger: React.ReactNode;
  items: MenuItem[];
  align?: "start" | "end";
  className?: string;
}
export declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;
