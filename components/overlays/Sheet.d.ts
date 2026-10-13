import * as React from "react";
export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  side?: "left" | "right";
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}
export declare function Sheet(props: SheetProps): JSX.Element | null;
