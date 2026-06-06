"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "./cartSlice"; // you'll define this action

type CartState = import("./cartSlice").CartState;

export default function CartProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData) as unknown;
      dispatch(hydrateCart(parsedCart as Partial<CartState>));
    }
  }, [dispatch]);

  return null;
}
