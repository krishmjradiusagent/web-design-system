import * as React from "react";

export interface HeaderUser {
  /** Full name (rendered in the account button). */
  name: string;
  /** Email address (rendered under the name). */
  email?: string;
  /** Explicit initials for the avatar chip; derived from `name` if omitted. */
  initials?: string;
  /** Optional avatar image; when present, replaces the initials. */
  avatarSrc?: string;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom brand node — replaces the default wordmark <img>. */
  brand?: React.ReactNode;
  /** href for the brand link. */
  brandHref?: string;
  /** Source path for the default wordmark image. */
  brandSrc?: string;
  /** Alt text / aria-label for the brand link. */
  brandAlt?: string;
  /** The signed-in user shown in the account button. Omit to hide the button. */
  user?: HeaderUser;
  /** Click handler for the account button (open a dropdown, sheet, etc). */
  onAccountClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Optional overlay/menu node rendered inside the account button (positioned by consumer). */
  accountMenu?: React.ReactNode;
  /** Slot rendered between the brand and the account button (nav links, search, etc). */
  right?: React.ReactNode;
}

/** App top-bar with brand wordmark and an account menu button. */
export declare function Header(props: HeaderProps): JSX.Element;
