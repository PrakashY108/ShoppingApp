import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }

      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const updatedItems = state.items.filter(
        item => item.id !== action.payload,
      );
      state.items = updatedItems;

      state.totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    updateCartItem(
      state,
      action: PayloadAction<{id: number; quantity: number}>,
    ) {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? {...item, quantity: action.payload.quantity}
          : item,
      );
      state.items = updatedItems;

      // Update total price
      state.totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    clearCart(state) {
      return initialState;
    },
  },
});

// Export actions and reducer
export const {addToCart, removeFromCart, updateCartItem, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
