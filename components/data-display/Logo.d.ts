import * as React from "react";
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "wordmark" | "mark";
  tone?: "ink" | "light" | "dark" | "white";
  size?: number;
}
export declare function Logo(props: LogoProps): JSX.Element;
