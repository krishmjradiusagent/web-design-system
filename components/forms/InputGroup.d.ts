import * as React from "react";
export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading addon (icon or text). */
  leading?: React.ReactNode;
  /** Trailing addon (icon, text, or button). */
  trailing?: React.ReactNode;
}
export declare function InputGroup(props: InputGroupProps): JSX.Element;
