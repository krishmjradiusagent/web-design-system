import * as React from "react";
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Initials shown when no src (e.g. "JD"). */
  initials?: string;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  /** true for green online dot, or a CSS color string. */
  status?: boolean | string | null;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}
export declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;
