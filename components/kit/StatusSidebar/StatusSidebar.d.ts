import * as React from "react";
export interface StatusSidebarProps { label?: string; status?: "online"|"offline"|"busy"; className?: string; style?: React.CSSProperties; }
export declare function StatusSidebar(props: StatusSidebarProps): JSX.Element;
