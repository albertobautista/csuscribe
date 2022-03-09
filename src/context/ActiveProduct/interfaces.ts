/* eslint-disable no-unused-vars */
import { Product } from '@interfaces/product';
import { activeProductToCartProps } from './ActiveProductProvider';

export interface ActiveProductContextProps {
  setActiveProduct: (product: Product) => void;
  activeProductToCart: activeProductToCartProps;

  setActiveProductToCart: (product: activeProductToCartProps) => void;
  activeProduct: Product;
}
