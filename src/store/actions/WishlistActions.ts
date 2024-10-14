import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from './actionTypes';

// Define action interfaces
interface AddToWishlistAction {
  type: typeof ADD_TO_WISHLIST;
  item: any;
}

interface RemoveFromWishlistAction {
  type: typeof REMOVE_FROM_WISHLIST;
  itemId: number;
}

interface ClearWishlistAction {
  type: typeof CLEAR_WISHLIST;
}

// Action creators
export const addToWishlist = (item: any): AddToWishlistAction => ({
  type: ADD_TO_WISHLIST,
  item,
});

export const removeFromWishlist = (
  itemId: number,
): RemoveFromWishlistAction => ({
  type: REMOVE_FROM_WISHLIST,
  itemId,
});

export const clearWishlist = (): ClearWishlistAction => ({
  type: CLEAR_WISHLIST,
});
