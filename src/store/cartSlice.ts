"use client";
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cart: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    open: (state) => {
      state.cart = true;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartSlice;
