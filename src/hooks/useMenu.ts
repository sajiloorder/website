import { NavContext } from "@/context/NavContext";
import { useContext } from "react";

export default function useMenu() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useMenu must be used within NavContextProvider");
  }
  return context;
}
