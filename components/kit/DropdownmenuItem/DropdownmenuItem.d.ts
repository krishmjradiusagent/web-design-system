import * as React from "react";
export interface DropdownmenuItemProps { icon?: string; children?: React.ReactNode; shortcut?: string; trailing?: string; disabled?: boolean; selected?: boolean; onSelect?: () => void; className?: string; style?: React.CSSProperties; }
export declare function DropdownmenuItem(props: DropdownmenuItemProps): JSX.Element;
