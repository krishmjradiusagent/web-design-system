import * as React from "react";
export interface CalendarProps {
  value?: string | Date | null;
  onChange?: (date: Date) => void;
  className?: string;
}
export declare function Calendar(props: CalendarProps): JSX.Element;
