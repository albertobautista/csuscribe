import { ActiveProductState, activeProductToCartProps } from './ActiveProductProvider';
import { Product } from '../../interfaces/product';

type ActiveProductActionType = { type: '[Product] Set active product'; payload: Product } | { type: '[Product] Set active product to cart'; payload: activeProductToCartProps };

export const activeProductReducer = (state: ActiveProductState, action: ActiveProductActionType): ActiveProductState => {
  switch (action.type) {
    case '[Product] Set active product':
      return { ...state, activeProduct: action.payload };
    case '[Product] Set active product to cart':
      return { ...state, activeProductToCart: action.payload };
    default:
      return state;
  }
};
