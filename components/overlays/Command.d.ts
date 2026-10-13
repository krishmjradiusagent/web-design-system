import * as React from "react";
export interface CommandItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
  onSelect?: () => void;
}
export interface CommandGroup {
  label?: React.ReactNode;
  items: CommandItem[];
}
export interface CommandProps {
  groups: CommandGroup[];
  placeholder?: string;
  className?: string;
}
export declare function Command(props: CommandProps): JSX.Element;
