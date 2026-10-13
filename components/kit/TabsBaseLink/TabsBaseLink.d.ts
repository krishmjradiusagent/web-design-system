import * as React from "react";
export interface TabsBaseLinkProps { active?: boolean; children?: React.ReactNode; onClick?: (e: React.MouseEvent) => void; className?: string; style?: React.CSSProperties; }
export declare function TabsBaseLink(props: TabsBaseLinkProps): JSX.Element;
