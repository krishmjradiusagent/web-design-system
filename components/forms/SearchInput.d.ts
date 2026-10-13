import * as React from "react";
export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  value?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement> | null) => void;
  onClear?: () => void;
  size?: "sm" | "default" | "lg";
}
export declare function SearchInput(props: SearchInputProps): JSX.Element;
