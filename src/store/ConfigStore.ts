import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './Slices/AuthSlice';
import cartSlice from './Slices/CartSlice';
import wishlistSlice from './Slices/WishlistSlice';

const rootReducers = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
});
const store = configureStore({
  reducer: rootReducers,
});
export default store;
