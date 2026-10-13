import * as React from 'react';
export type IconName =
  | "MediaIconFilledRss"
  | "MediaIconUnfilledBellAlert"
  | "MediaIconUnfilledBuildingStorefront"
  | "MediaIconUnfilledCog8"
  | "MediaIconUnfilledCube"
  | "MediaIconUnfilledGift"
  | "MediaIconUnfilledPresentationChart"
  | "MediaIconUnfilledSpeakerphone"
  | "MediaIconUnfilledUserGroup"
  | "MediaIconUnfilledUsers";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
