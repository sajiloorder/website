"use client";

import { Provider } from "react-redux";
import { store } from ".";
export default function CartProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
