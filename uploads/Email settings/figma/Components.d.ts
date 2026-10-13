// Components.d.ts — the complete catalog of the 3 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.CenterPanelSendToClient) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Center panel | Send to client" (node 124:9883)
export interface CenterPanelSendToClientProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Header" (node 124:9852)
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Side bar" (node 124:9703)
export interface SideBar3Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const CenterPanelSendToClient: React.FC<CenterPanelSendToClientProps>;
declare const Header: React.FC<HeaderProps>;
declare const SideBar3: React.FC<SideBar3Props>;
declare global {
  interface Window {
    CenterPanelSendToClient: React.FC<CenterPanelSendToClientProps>;
    Header: React.FC<HeaderProps>;
    SideBar3: React.FC<SideBar3Props>;
  }
}
