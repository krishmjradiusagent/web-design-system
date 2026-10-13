import * as React from "react";
export interface TabsTriggerProps { active?: boolean; children?: React.ReactNode; onClick?: (e: React.MouseEvent) => void; className?: string; style?: React.CSSProperties; }
export declare function TabsTrigger(props: TabsTriggerProps): JSX.Element;
