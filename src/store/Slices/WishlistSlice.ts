// store/slices/wishlistSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
  id: number;
  name: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
