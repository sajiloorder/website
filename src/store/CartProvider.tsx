"use client";

import { Provider } from "react-redux";
import { store } from "./store"; // your Redux store path

export default function CartProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
