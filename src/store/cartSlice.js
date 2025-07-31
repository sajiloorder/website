"use client";
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cartMenu: false,
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    toggleCartMenu: (state) => {
      state.cart = !state.cart;
    },
    closeCartMenu: (state) => {
      state.cart = false;
    },
    addToCart(state, action) {
      
      const item = action.payload;

      const exitingItem = state.items.find((i) => i.id == item.id);
      if (exitingItem) {
        exitingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity +=1 
      state.totalAmount += item.price;

    },
    removeFromCart(state, action) {
      const id = action.payload.id
      const item = state.items.find(item=> item.id == id)
      if(!item) {
        console.log("item not found")
      }

      state.totalQuantity -= item.quantity
      state.totalAmount -= item.price * item.quantity
      state.items = state.items.filter(item => item.id !== id)
    
    },
     updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item || quantity < 1) return;

      const quantityDiff = quantity - item.quantity;
      item.quantity = quantity;
      state.totalQuantity += quantityDiff;
      state.totalAmount += item.price * quantityDiff;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    hydrateCart(state, action) {
    return {
      ...state,
      ...action.payload,
    };
  }
 

  },
});



export const {toggleCartMenu, closeCartMenu, addToCart, removeFromCart, updateQuantity, clearCart,hydrateCart } = cartSlice.actions;

export default cartSlice.reducer;
