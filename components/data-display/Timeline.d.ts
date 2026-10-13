import * as React from "react";
export interface TimelineItem {
  time?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: "neutral" | "blue" | "green" | "orange" | "red" | "indigo";
}
export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}
export declare function Timeline(props: TimelineProps): JSX.Element;
