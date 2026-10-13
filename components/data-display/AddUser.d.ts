import * as React from "react";
export interface AddUserProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}
export declare function AddUser(props: AddUserProps): JSX.Element;
