import * as React from "react";
export interface TableContentCellProps { children?: React.ReactNode; align?: "left"|"right"|"center"; numeric?: boolean; className?: string; style?: React.CSSProperties; }
export declare function TableContentCell(props: TableContentCellProps): JSX.Element;
