import { OrderContext } from "@/context/OrderContext";
import { useContext } from "react";

export default function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within NavContextProvider");
  }
  return context;
}
