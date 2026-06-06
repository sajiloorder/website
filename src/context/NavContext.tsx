"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type NavState = "none" | "menu" | "profile" | "cart";

interface NavContextType {
  active: NavState;
  open: (state: NavState) => void;
  close: () => void;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export default function NavProvider({ children }: Props) {
  const [active, setActive] = useState<NavState>("none");

  const open = (state: NavState) => {
    setActive((prev) => (prev === state ? "none" : state));
  };

  const close = () => setActive("none");

  return (
    <NavContext.Provider value={{ active, open, close }}>
      {children}
    </NavContext.Provider>
  );
}
