import * as React from "react";
export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}
export declare function FieldGroup(props: FieldGroupProps): JSX.Element;
export interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function FieldSet(props: FieldSetProps): JSX.Element;
