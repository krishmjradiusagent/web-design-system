import * as React from "react";
export interface CarouselProps {
  /** Slide nodes. */
  slides: React.ReactNode[];
  className?: string;
}
export declare function Carousel(props: CarouselProps): JSX.Element;
