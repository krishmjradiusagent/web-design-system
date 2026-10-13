import * as React from "react";
export interface InputOTPProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function InputOTP(props: InputOTPProps): JSX.Element;
