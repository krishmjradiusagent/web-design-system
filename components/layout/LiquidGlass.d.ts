import * as React from "react";
export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  context?: "bright" | "dim";
  state?: "default" | "hover";
}
export declare function LiquidGlass(props: LiquidGlassProps): JSX.Element;
