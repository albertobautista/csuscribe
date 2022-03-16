import React from 'react';
import Image from 'next/image';
import { CarouselImageProps } from './interfaces';

const CarouselImage = ({ element, widthImage, heightImage }: CarouselImageProps) => {
  return <Image priority alt={element.title} src={element.background.web} layout="responsive" width={widthImage} height={heightImage} />;
};

export default CarouselImage;
