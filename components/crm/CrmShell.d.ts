import * as React from "react";
export interface CrmNavItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Unread dot on the right. */
  dot?: boolean;
  /** Chevron on the right (submenu). */
  chevron?: boolean;
}
export interface CrmNavGroup {
  label?: React.ReactNode;
  items: CrmNavItem[];
}
export interface CrmOverflowItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
export interface CrmShellProps {
  /** Team wordmark text, used when logoSrc is absent. */
  brand?: string;
  /** Team colour driving the rail + page tint. */
  brandColor?: string;
  logoSrc?: string;
  /** Mel mark, used in the pill, the agent card and the ask bar. */
  melIconSrc?: string;
  navGroups?: CrmNavGroup[];
  activeNav?: string;
  onNavSelect?: (id: string) => void;
  melLabel?: string;
  agentName?: string;
  agentRole?: string;
  agentAvatar?: string;
  poweredBy?: string;
  title?: React.ReactNode;
  /** Scope label in the page-head dropdown. */
  scope?: string;
  count?: React.ReactNode;
  scopes?: string[];
  onScopeChange?: (scope: string) => void;
  primaryAction?: React.ReactNode;
  onPrimaryAction?: () => void;
  overflowItems?: CrmOverflowItem[];
  tabs?: { id: string; label: React.ReactNode }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  searchPlaceholder?: string;
  emptyTitle?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  emptyActions?: React.ReactNode;
  /** Render the zero-state instead of children. */
  isEmpty?: boolean;
  children?: React.ReactNode;
  askPlaceholder?: string;
  showAskBar?: boolean;
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/**
 * Radius CRM product frame. Intentional addition — the Figma file ships this as
 * `Blocks / CRM` screens rather than a named component set, so there is no kit
 * family to name it after. Ported 1:1 from `templates/crm-starter/`.
 */
export declare function CrmShell(props: CrmShellProps): JSX.Element;
