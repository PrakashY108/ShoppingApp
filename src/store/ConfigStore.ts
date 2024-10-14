import { authReducer } from './Slices/AuthSlice';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";

const store = configureStore({
    reducer:cartReducer,
    authReducer
})
export default store;