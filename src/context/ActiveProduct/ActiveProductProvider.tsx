import { FC, useReducer, useEffect } from 'react';
import { ActiveProductContext } from './ActiveProductContext';
import { activeProductReducer } from './activeProductReducer';

export interface activeProductToCartProps {
  makerId: number;
  owner: number;
  productId: number;
  quantity: number;
  renovationSchemeId: number;
  clientId: number;
  contractId?: number;
  contactId?: number;
}
export interface ActiveProductState {
  activeProductToCart: activeProductToCartProps;
  isCartReady: boolean;
}

const UI_INITIAL_STATE: ActiveProductState = {
  activeProductToCart: {
    makerId: 0,
    owner: 0,
    productId: 0,
    quantity: 0,
    renovationSchemeId: 0,
    clientId: 0,
    contractId: 0,
    contactId: 0,
  },
  isCartReady: false,
};

export const ActiveProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(activeProductReducer, UI_INITIAL_STATE);

  const setActiveProductToCart = (product: activeProductToCartProps) => {
    console.log('🚀 ~ file: ActiveProductProvider.tsx ~ line 38 ~ setActiveProductToCart ~ product', product);
    dispatch({ type: '[Product] Set active product to cart', payload: product });
  };
  const hasAutodeskErros = () => {
    if (state.activeProductToCart.contractId === 0 && state.activeProductToCart.contactId === 0) return true;
    return false;
  };
  const haveErrors = () => {
    if (state.activeProductToCart.clientId === 0) return true;
    if (state.activeProductToCart.makerId === 11) {
      return hasAutodeskErros();
    }

    return false;
  };
  useEffect(() => {
    const isError = haveErrors();
    console.log('🚀 ~ file: ActiveProductProvider.tsx ~ line 43 ~ useEffect ~ condicion', isError);
    dispatch({ type: '[Product] Set status cart', payload: !isError });
  }, [state.activeProductToCart]);

  return <ActiveProductContext.Provider value={{ ...state, setActiveProductToCart }}>{children}</ActiveProductContext.Provider>;
};
