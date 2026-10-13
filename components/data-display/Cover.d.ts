import * as React from "react";
export interface CoverProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  /** Aspect ratio, e.g. 21/9. */
  ratio?: number;
  /** Content laid over a bottom gradient (title, meta). */
  overlay?: React.ReactNode;
}
export declare function Cover(props: CoverProps): JSX.Element;
