import * as React from "react";
export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function Drawer(props: DrawerProps): JSX.Element | null;
