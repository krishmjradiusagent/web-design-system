import * as React from "react";
export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
  /** Indices open initially. */
  defaultOpen?: number[];
  /** Allow multiple panels open at once. */
  multiple?: boolean;
  className?: string;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
