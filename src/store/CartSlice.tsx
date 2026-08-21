import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<string | number>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string | number;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!item) return;

      if (action.payload.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

    hydrateCart: (
      state,
      action: PayloadAction<CartItem[]>
    ) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  hydrateCart,
} = CartSlice.actions;

export default CartSlice.reducer;