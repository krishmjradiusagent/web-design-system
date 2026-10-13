import * as React from "react";
export interface TabProps { active?: boolean; children?: React.ReactNode; onClick?: (e: React.MouseEvent) => void; className?: string; style?: React.CSSProperties; }
export declare function Tab(props: TabProps): JSX.Element;
