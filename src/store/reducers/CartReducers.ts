// reducers/cartReducer.js
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    CLEAR_CART,
  } from '../actions/actionTypes';
  
  const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let updatedItems;
        if (existingItemIndex >= 0) {
          // Item already in cart, update quantity
          updatedItems = state.items.map((item, index) => 
            index === existingItemIndex 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
        } else {
          // New item, add to cart
          updatedItems = [...state.items, { ...action.item, quantity: 1 }];
        }
  
        const updatedTotalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
        const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedTotalItems,
          totalPrice: updatedTotalPrice,
        };
      }
  
      case REMOVE_FROM_CART: {
        const updatedItems = state.items.filter(item => item.id !== action.itemId);
        const updatedTotalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
        const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedTotalItems,
          totalPrice: updatedTotalPrice,
        };
      }
  
      case UPDATE_CART_ITEM: {
        const updatedItems = state.items.map(item => 
          item.id === action.item.id 
            ? { ...item, quantity: action.item.quantity } 
            : item
        );
        const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
        };
      }
  
      case CLEAR_CART:
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  