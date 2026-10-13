import * as React from "react";
export interface NavMenuItem {
  label: React.ReactNode;
  href?: string;
  /** Flyout panel content; makes this a trigger instead of a link. */
  content?: React.ReactNode;
}
export interface NavigationMenuProps {
  items: NavMenuItem[];
  className?: string;
}
export declare function NavigationMenu(props: NavigationMenuProps): JSX.Element;
