import * as React from "react";
export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop"> {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  state?: "default" | "drag" | "error" | "success";
  title?: React.ReactNode;
  hint?: React.ReactNode;
  icon?: React.ReactNode;
  onFiles?: (files: File[]) => void;
}
export declare function FileUpload(props: FileUploadProps): JSX.Element;
