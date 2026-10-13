import * as React from "react";
export interface SidebarItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  count?: React.ReactNode;
}
export interface SidebarGroup {
  label?: React.ReactNode;
  items: SidebarItem[];
}
export interface SidebarProps {
  /** Brand/logo node at the top. */
  brand?: React.ReactNode;
  groups: SidebarGroup[];
  active?: string;
  onSelect?: (id: string) => void;
  /** Footer node (user row, settings) pinned to the bottom. */
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Sidebar(props: SidebarProps): JSX.Element;
