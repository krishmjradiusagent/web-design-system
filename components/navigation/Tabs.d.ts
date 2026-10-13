import * as React from "react";
export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}
export interface TabsProps {
  tabs: TabItem[];
  /** Controlled active value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "segmented" | "underline";
  className?: string;
  /** Render prop receiving the active value, or static panel nodes. */
  children?: ((active: string) => React.ReactNode) | React.ReactNode;
}
export declare function Tabs(props: TabsProps): JSX.Element;
