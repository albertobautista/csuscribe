/* eslint-disable no-unused-vars */
import { activeProductToCartProps } from './ActiveProductProvider';

export interface ActiveProductContextProps {
  activeProductToCart: activeProductToCartProps;
  isCartReady: boolean;

  setActiveProductToCart: (product: activeProductToCartProps) => void;
}
