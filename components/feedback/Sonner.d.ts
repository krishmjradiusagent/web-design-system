import * as React from "react";
import type { ToastProps } from "./Toast";
export interface SonnerToast extends ToastProps {
  id?: string | number;
}
export interface SonnerProps {
  /** Active toasts to render in the stack. */
  toasts: SonnerToast[];
  className?: string;
}
export declare function Sonner(props: SonnerProps): JSX.Element;
