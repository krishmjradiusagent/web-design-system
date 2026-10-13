import * as React from "react";
export interface DatePickerProps {
  /** ISO date string or Date. */
  value?: string | Date | null;
  defaultValue?: string | Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
}
export declare function DatePicker(props: DatePickerProps): JSX.Element;
