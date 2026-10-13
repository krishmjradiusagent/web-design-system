import * as React from "react";
export interface MelLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  showText?: boolean;
  src?: string;
}
export declare function MelLogo(props: MelLogoProps): JSX.Element;
