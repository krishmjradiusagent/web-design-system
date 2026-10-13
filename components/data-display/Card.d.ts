import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shorthand title in the header. */
  title?: React.ReactNode;
  /** Shorthand muted description under the title. */
  description?: React.ReactNode;
  /** Footer node (actions row). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
export declare function CardHeader(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
export declare function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;
export declare function CardBody(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardFooter(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
