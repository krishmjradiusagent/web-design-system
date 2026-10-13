import * as React from "react";
export interface PageHeaderLegacyTab {
  id: string;
  label: React.ReactNode;
  count?: React.ReactNode;
}
/** Legacy page shell — kept for pages already built on it.
 *  New CRM screens: CrmShell. New generic pages: PageHeader. */
export interface PageHeaderLegacyProps {
  title: React.ReactNode;
  count?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  meta?: React.ReactNode;
  tabs?: PageHeaderLegacyTab[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  toolbar?: React.ReactNode;
  isEmpty?: boolean;
  empty?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function PageHeaderLegacy(props: PageHeaderLegacyProps): JSX.Element;
