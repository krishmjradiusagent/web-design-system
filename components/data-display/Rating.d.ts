import * as React from "react";
export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  max?: number;
  size?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
}
export declare function Rating(props: RatingProps): JSX.Element;
