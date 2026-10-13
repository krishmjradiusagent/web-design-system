import * as React from "react";
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Footer actions row (right-aligned). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
