import * as React from "react";
export interface ContextMenuItem {
  type?: "item" | "separator" | "label";
  label?: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
  danger?: boolean;
  onSelect?: () => void;
}
export interface ContextMenuProps {
  items: ContextMenuItem[];
  /** The area that responds to right-click. */
  children?: React.ReactNode;
  className?: string;
}
export declare function ContextMenu(props: ContextMenuProps): JSX.Element;
