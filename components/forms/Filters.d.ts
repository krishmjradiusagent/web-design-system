import * as React from "react";
export interface FilterEntry {
  key?: string | number;
  label?: React.ReactNode;
  value: React.ReactNode;
  onRemove?: () => void;
}
export interface FiltersProps extends React.HTMLAttributes<HTMLDivElement> {
  filters?: FilterEntry[];
  onAdd?: () => void;
  addLabel?: React.ReactNode;
  onClear?: () => void;
  clearLabel?: React.ReactNode;
}
export declare function Filters(props: FiltersProps): JSX.Element;
