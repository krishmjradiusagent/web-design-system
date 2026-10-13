import * as React from "react";
export interface ChartSeries {
  key: string;
  label?: string;
}
export interface ChartProps {
  /** Rows like { label: "Jul", value: 12 } or multi-series { label, a, b }. */
  data: Array<Record<string, any>>;
  /** Series keys for grouped bars; omit for single-value bars. */
  series?: ChartSeries[];
  className?: string;
}
export declare function Chart(props: ChartProps): JSX.Element;
