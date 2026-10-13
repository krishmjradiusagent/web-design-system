import * as React from "react";
export interface TableColumn<T = any> {
  key: string;
  header: React.ReactNode;
  /** Mono, right-aligned numeric column (money, metrics, caps). */
  numeric?: boolean;
  /** Custom cell renderer. */
  render?: (row: T) => React.ReactNode;
}
export interface TableProps<T = any> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[];
  data: T[];
}
export declare function Table<T = any>(props: TableProps<T>): JSX.Element;
