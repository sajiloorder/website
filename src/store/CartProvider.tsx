"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "./cartSlice"; // you'll define this action

export default function CartProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      dispatch(hydrateCart(JSON.parse(cartData)));
    }
  }, []);

  return null;
}
