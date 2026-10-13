import * as React from "react";
export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  /** Separator node between items (default "/"). */
  separator?: React.ReactNode;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
