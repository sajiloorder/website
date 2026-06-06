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

import SetLocationButton from "../set-location/SetLocationButton";
import MenuSearch from "../menu/item/MenuSearch";

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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-3">
            {/* MENU */}
            <button onClick={() => open("menu")}>
              {isMenuOpen ? (
                <MdOutlineClose size={18} />
              ) : (
                <AiOutlineMenu size={18} />
              )}
            </button>
            <Link href="/" onClick={close}>
              <Logo />
            </Link>
            <div className="hidden md:block">
              <SetLocationButton />
            </div>

            <div className="hidden md:flex flex-1 justify-center px-4">
              <MenuSearch />
            </div>

            {/* LOGO */}

            {/* LOCATION */}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            {/* CART */}
            <button
              onClick={() => (isCartOpen ? close() : open("cart"))}
              className="relative"
            >
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full px-1">
                  {totalQuantity}
                </span>
              )}

              {isCartOpen ? (
                <MdOutlineClose size={18} />
              ) : (
                <AiOutlineShoppingCart size={18} />
              )}
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
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-4 pb-3">
          <MenuSearch />
        </div>
      </nav>

      {/* CHECKOUT BAR */}
      {totalQuantity > 0 && (
        <div className="z-50 fixed bottom-0 left-0 w-full bg-white h-[65px] px-4 flex items-center justify-between border-t border-border">
          <p className="font-semibold text-sm">Rs {totalAmount}</p>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm bg-primary px-6 py-2 rounded text-white"
          >
            {totalQuantity} Checkout <HiArrowLongRight size={18} />
          </Link>
        </div>
      )}

      {/* OVERLAY */}
      {active !== "none" && (
        <div onClick={close} className="fixed inset-0 bg-black/40 z-40" />
      )}

      {/* PANELS */}
      {isMenuOpen && <MobileMenu />}
      {isProfileOpen && <ProfileMenu />}
      {isCartOpen && <Cart />}
    </>
  );
}
