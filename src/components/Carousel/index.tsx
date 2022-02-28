import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselImage from './CarouselImage';
import { CarouselElement, CarouselProps } from './interfaces';

const Carousel = ({ elements, widthElement, heightElement }: CarouselProps) => {
  return (
    <ResponsiveCarousel showThumbs={false} infiniteLoop autoPlay interval={6000} showStatus={false}>
      {elements.map((element: CarouselElement) => (
        <CarouselImage key={element.title} element={element} widthImage={widthElement} heightImage={heightElement} />
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
