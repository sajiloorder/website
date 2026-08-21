"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  hydrateCart,
  type CartItem,
} from "./cartSlice";

type StoredCart =
  | CartItem[]
  | {
      items: CartItem[];
    };

function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    (typeof item.id === "string" || typeof item.id === "number") &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    typeof item.quantity === "number"
  );
}

function isCartItemArray(value: unknown): value is CartItem[] {
  return Array.isArray(value) && value.every(isCartItem);
}

function isStoredCart(value: unknown): value is StoredCart {
  if (isCartItemArray(value)) {
    return true;
  }

  if (typeof value !== "object" || value === null) {
    return false;
  }

  const cart = value as Record<string, unknown>;

  return isCartItemArray(cart.items);
}

export default function CartProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const cartData = localStorage.getItem("cart");

      if (!cartData) {
        return;
      }

      const parsedCart: unknown = JSON.parse(cartData);

      if (!isStoredCart(parsedCart)) {
        console.warn("Invalid cart data in localStorage");
        return;
      }

      if (Array.isArray(parsedCart)) {
        dispatch(hydrateCart(parsedCart));
      } else {
        dispatch(hydrateCart(parsedCart.items));
      }
    } catch (error) {
      console.error("Failed to hydrate cart:", error);
    }
  }, [dispatch]);

  return null;
}