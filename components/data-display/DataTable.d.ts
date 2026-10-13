import * as React from "react";
export interface DataTableColumn<T = any> {
  key: string;
  header: React.ReactNode;
  sortable?: boolean;
  numeric?: boolean;
  render?: (row: T) => React.ReactNode;
}
export interface DataTableProps<T = any> {
  columns: DataTableColumn<T>[];
  data: T[];
  /** Adds a leading selection checkbox column. */
  selectable?: boolean;
  className?: string;
}
export declare function DataTable<T = any>(props: DataTableProps<T>): JSX.Element;
