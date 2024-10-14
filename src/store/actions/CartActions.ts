import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from './actionTypes';

interface addTocartReducer {
  type: typeof ADD_TO_CART;
  item: any;
}
interface removeFromCartReducer {
  type: typeof REMOVE_FROM_CART;
  itemId: number;
}
interface clearcartReducer {
  type: typeof CLEAR_CART;
}
interface updatecartReducer {
  type: typeof UPDATE_CART_ITEM;
  item: any;
}
export const addToCart = (item: any): addTocartReducer => ({
  type: ADD_TO_CART,
  item,
});
export const removeFromCart = (itemId: number): removeFromCartReducer => ({
  type: REMOVE_FROM_CART,
  itemId,
});

export const clearCart = (): clearcartReducer => ({
  type: CLEAR_CART,
});
export const updateCartItem = (item: any): updatecartReducer => ({
  type: UPDATE_CART_ITEM,
  item,
});
