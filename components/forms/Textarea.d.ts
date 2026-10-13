import * as React from "react";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Marks the field invalid (destructive border + ring). */
  invalid?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
