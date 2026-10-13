import * as React from "react";
export interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
