import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    CLEAR_CART,
}from "./actionTypes"

 export const addToCart=(item)=>({
    type:ADD_TO_CART,
    item
 })
 export const removeFromCart=(itemId)=>({
    type:REMOVE_FROM_CART,
    itemId
 })


 export const clearCart=()=>({
    type:CLEAR_CART,
 })
 export const updateCartItem=(item)=>({
    type:UPDATE_CART_ITEM,
    item
 })