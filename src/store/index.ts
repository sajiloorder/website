"use client";
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
store.subscribe(() => {
  if (typeof window !== "undefined") {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }
});

export default store;
