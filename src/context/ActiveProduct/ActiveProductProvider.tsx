import { FC, useReducer } from 'react';
import { ActiveProductContext } from './ActiveProductContext';
import { activeProductReducer } from './activeProductReducer';
import { Product } from '../../interfaces/product';

export interface activeProductToCartProps {
  makerId: number;
  owner: number;
  productId: number;
  quantity: number;
  renovationSchemeId: number;
}
export interface ActiveProductState {
  activeProduct: Product;
  activeProductToCart: activeProductToCartProps;
}

const UI_INITIAL_STATE: ActiveProductState = {
  activeProduct: {
    productId: 0,
    sku: '',
    name: '',
    description: '',
    lastUpdateProduct: '',
    currencyPrice: '',
    maxQuantity: null,
    image: 'images/defaultMicrosoft.png',
    renovationScheme: [],
    price: [],
    maker: { id: 0, value: 0, text: '' },
    promotionPrice: 0,
    productType: { id: 0, value: 0, text: '' },
  },
  activeProductToCart: {
    makerId: 0,
    owner: 0,
    productId: 0,
    quantity: 0,
    renovationSchemeId: 0,
  },
};

export const ActiveProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(activeProductReducer, UI_INITIAL_STATE);

  const setActiveProduct = (product: Product) => {
    dispatch({ type: '[Product] Set active product', payload: product });
  };

  const setActiveProductToCart = (product: activeProductToCartProps) => {
    dispatch({ type: '[Product] Set active product to cart', payload: product });
  };

  return <ActiveProductContext.Provider value={{ ...state, setActiveProduct, setActiveProductToCart }}>{children}</ActiveProductContext.Provider>;
};
