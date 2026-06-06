"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import Logo from "../ui/logo/Logo";

import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { MdOutlineClose } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

import MobileMenu from "./mobile-menu/MobileMenu";
import ProfileMenu from "@/app/profile/ProfileMenu/page";
import Cart from "../cart/Cart";

import useMenu from "@/app/hooks/useMenu";

export default function Nav() {
  const { active, open, close } = useMenu();

  const { totalQuantity, totalAmount } = useSelector(
    (state: any) => state.cart,
  );

  const isMenuOpen = active === "menu";
  const isProfileOpen = active === "profile";
  const isCartOpen = active === "cart";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between px-6 py-3 border border-border bg-background">
        {" "}
        {/* MENU BUTTON */}
        <button onClick={() => open("menu")}>
          {isMenuOpen ? (
            <MdOutlineClose
              size={18}
              className="cursor-pointer hover:text-green-400"
            />
          ) : (
            <AiOutlineMenu
              size={18}
              className="cursor-pointer hover:text-green-400"
            />
          )}
        </button>
        {/* LOGO */}
        <Link href="/" onClick={close}>
          <Logo />
        </Link>
        {/* RIGHT ACTIONS */}
        <div className="flex flex-row gap-4 items-center">
          {/* CART */}
          <button onClick={() => (isCartOpen ? close() : open("cart"))}>
            <div className="flex items-center gap-1">
              {totalQuantity > 0 && (
                <span className="text-xs font-semibold">{totalQuantity}</span>
              )}

              {isCartOpen ? (
                <MdOutlineClose size={18} />
              ) : (
                <AiOutlineShoppingCart size={18} />
              )}
            </div>
          </button>

          {/* PROFILE */}
          <button onClick={() => open("profile")}>
            {isProfileOpen ? (
              <MdOutlineClose size={18} />
            ) : (
              <AiOutlineUser size={18} />
            )}
          </button>
        </div>
      </nav>

      {/* BOTTOM CHECKOUT BAR */}
      {totalQuantity > 0 && (
        <div className="z-50 fixed bottom-0 left-0 w-full bg-white h-[65px] p-2 flex justify-center items-center gap-4">
          <p className="font-semibold text-sm">Rs {totalAmount}</p>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm bg-primary px-10 py-2 rounded text-white"
          >
            {totalQuantity} Checkout <HiArrowLongRight size={20} />
          </Link>
        </div>
      )}

      {/* CONDITIONAL PANELS (ONLY ONE CAN BE OPEN NOW) */}
      {/* OVERLAY (click to close all) */}
      {active !== "none" && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 z-40 cursor-pointer"
        />
      )}

      {/* PANELS */}
      {isMenuOpen && <MobileMenu />}
      {isProfileOpen && <ProfileMenu />}
      {isCartOpen && <Cart />}
    </>
  );
}
