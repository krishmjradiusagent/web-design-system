import * as React from "react";
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Two or more <Button> elements. */
  children?: React.ReactNode;
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
