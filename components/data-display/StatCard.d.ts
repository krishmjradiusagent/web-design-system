import * as React from "react";
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  trend?: "up" | "down" | "flat";
  delta?: React.ReactNode;
  hint?: React.ReactNode;
  icon?: React.ReactNode;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
