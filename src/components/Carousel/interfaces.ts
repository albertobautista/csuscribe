export interface CarouselProps {
  elements: CarouselElement[];
  widthElement: number;
  heightElement: number;
}
export interface CarouselElement {
  title: string;
  background: Background;
  points: any[];
}

export interface Background {
  web: string;
  tablet: string;
  mobile: string;
}
