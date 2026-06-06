"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import NavContextProvider from "@/context/NavContext";
import { OrderProvider } from "@/context/OrderContext";
import CartProvider from "@/store/CartProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <OrderProvider>
        <CartProvider />
        <NavContextProvider>{children}</NavContextProvider>
      </OrderProvider>
    </Provider>
  );
}
