import { ActiveProductState, activeProductToCartProps } from './ActiveProductProvider';

type ActiveProductActionType = { type: '[Product] Set active product to cart'; payload: activeProductToCartProps } | { type: '[Product] Set status cart'; payload: boolean };

export const activeProductReducer = (state: ActiveProductState, action: ActiveProductActionType): ActiveProductState => {
  switch (action.type) {
    case '[Product] Set active product to cart':
      return { ...state, activeProductToCart: action.payload };

    case '[Product] Set status cart':
      return {
        ...state,
        isCartReady: action.payload,
      };
    default:
      return state;
  }
};
