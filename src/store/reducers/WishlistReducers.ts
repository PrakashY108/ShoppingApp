import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  removeFromWishlist,
  clearWishlist,
} from '../actions/WishlistActions';

interface WishlistState {
  items: any[];
}

const initialState: WishlistState = {
  items: [],
};

const WishlistReducer = (state = initialState, action) => {
  switch (action.types) {
    case ADD_TO_WISHLIST: {
      const existingIndex = state.items.findIndex(
        item => item.id == action.payload.id,
      );
      if (existingIndex >= 0) {
        return state;
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }
    case REMOVE_FROM_WISHLIST: {
      const updateditems = state.items.filter(
        item => item.id !== action.payload.id,
      );
      return updateditems;
    }
    case CLEAR_WISHLIST: {
      return initialState;
    }
  }
};
export default WishlistReducer;
