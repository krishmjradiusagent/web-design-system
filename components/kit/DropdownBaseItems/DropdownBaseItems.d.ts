import * as React from "react";
export interface DropdownBaseItemsProps { icon?: string; children?: React.ReactNode; shortcut?: string; trailing?: string; disabled?: boolean; selected?: boolean; onSelect?: () => void; className?: string; style?: React.CSSProperties; }
export declare function DropdownBaseItems(props: DropdownBaseItemsProps): JSX.Element;
