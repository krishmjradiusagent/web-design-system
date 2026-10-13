import * as React from "react";
export interface AlertDialogProps {
  open: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Name the action, e.g. "Delete lead". */
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  className?: string;
}
export declare function AlertDialog(props: AlertDialogProps): JSX.Element | null;
