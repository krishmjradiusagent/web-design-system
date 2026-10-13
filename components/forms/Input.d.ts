import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 1:1 with the Figma Input set. */
  variant?: "default" | "file" | "password";
  /** Marks the field invalid (destructive border + ring). */
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
