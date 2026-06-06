"use client";
import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {{
 *   id: string | number;
 *   name?: string;
 *   price: number;
 *   quantity: number;
 *   [key: string]: unknown;
 * }} CartItem
 */
/**
 * @typedef {{
 *   cartMenu: boolean;
 *   items: CartItem[];
 *   totalAmount: number;
 *   totalQuantity: number;
 * }} CartState
 */
/**
 * @typedef {import('@reduxjs/toolkit').Draft<CartState>} DraftCartState
 */

/** @type {CartState} */
const initialState = {
  cartMenu: false,
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartMenu: (state) => {
      state.cartMenu = !state.cartMenu;
    },
    closeCartMenu: (state) => {
      state.cartMenu = false;
    },
    /**
     * @param {DraftCartState} state
     * @param {{payload: Omit<CartItem, 'quantity'> & {id: string | number; price: number}}} action
     */
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    /**
     * @param {DraftCartState} state
     * @param {{payload: {id: string | number}}} action
     */
    removeFromCart(state, action) {
      const id = action.payload.id;
      const item = state.items.find((item) => item.id === id);
      if (!item) {
        return;
      }

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
    /**
     * @param {DraftCartState} state
     * @param {{payload: {id: string | number; quantity: number}}} action
     */
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
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
    /**
     * @param {DraftCartState} state
     * @param {{payload: Partial<CartState>}} action
     */
    hydrateCart(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {
  toggleCartMenu,
  closeCartMenu,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  hydrateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
