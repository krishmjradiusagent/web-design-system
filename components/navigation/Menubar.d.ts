import * as React from "react";
import type { MenuItem } from "./DropdownMenu";
export interface MenubarMenu {
  label: React.ReactNode;
  items: MenuItem[];
}
export interface MenubarProps {
  menus: MenubarMenu[];
  className?: string;
}
export declare function Menubar(props: MenubarProps): JSX.Element;
