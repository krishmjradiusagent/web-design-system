import * as React from "react";
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  /** Muted helper text under the control. */
  hint?: React.ReactNode;
  /** Destructive error text; replaces the hint when present. */
  error?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
