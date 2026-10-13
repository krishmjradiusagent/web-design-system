import * as React from "react";
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  /** Lucide icon name (kebab-case), e.g. "arrow-right", "sparkles", "users". */
  name: string;
  /** Pixel size. 16 in controls, 20 in nav, 24 in empty states. */
  size?: number;
  /** Lucide stroke width (2 default; 1.5 for a lighter weight). */
  strokeWidth?: number;
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
