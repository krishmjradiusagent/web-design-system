import * as React from 'react';
export type IconName =
  | "MediaIconFilledRss"
  | "MediaIconUnfilledBellAlert"
  | "MediaIconUnfilledBuildingStorefront"
  | "MediaIconUnfilledCog8"
  | "MediaIconUnfilledCollection"
  | "MediaIconUnfilledGift"
  | "MediaIconUnfilledPresentationChart"
  | "MediaIconUnfilledSpeakerphone"
  | "MediaIconUnfilledUserGroup"
  | "MediaIconUnfilledUsers";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const HeroIcon: React.FC<IconProps>;
export default HeroIcon;
