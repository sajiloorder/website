"use client";

import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Logo from "../ui/logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

import { NavContext } from "@/context/nav-context";
import MobileMenu from "./mobile-menu/MobileMenu";
// import Profile from "@/app/profile/page";
import ProfileMenu from "@/app/profile/ProfileMenu/page";
import Cart from "../cart/Cart";
import { toggleCartMenu } from "@/store/cartSlice";

export default function Nav() {
  const { menu, toggleMenu, closeMenu, profile, toggleProfile, closeProfile } = useContext(NavContext);

  // redux for cart
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalAmount } = useSelector((state: any) => state.cart);

  useEffect(() => {
    const element = document.getElementById("app");
    const handleClickOutside = (event: MouseEvent) => {
      if (element && element.contains(event.target as Node)) {
        dispatch(toggleCartMenu());
      }
    };
    if (cart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cart, toggleCartMenu]);

  useEffect(() => {
    const element = document.getElementById("app");

    const handleClickOutside = (event: MouseEvent) => {
      if (element && element.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu, closeMenu]);

  // profile menu, if clicked outside close #app from
  useEffect(() => {
    const element = document.getElementById("app");

    const handleClickOutside = (event: MouseEvent) => {
      if (element && element.contains(event.target as Node)) {
        closeProfile();
      }
    };
    if (profile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profile, closeProfile]);

  return (
    <>
      <nav className=" flex flex-row bg-white text-primary justify-between items-center mb-2 px-6 pt-3 pb-2  ">
        {menu ? <MdOutlineClose size={18} className="cursor-pointer  hover:text-green-400" onClick={toggleMenu} /> : <AiOutlineMenu size={18} className="cursor-pointer  hover:text-green-400" onClick={toggleMenu} />}

        <div className="flex flex-row gap-2 justify-between items-center  ">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center ">
          {/* cart-icon */}
          {cart ? (
            <button onClick={() => dispatch(toggleCartMenu())}>
              <div className="flex   ">
                {totalQuantity > 0 && <span className="text-xs font-semibold">{totalQuantity}</span>}
                <MdOutlineClose size={18} className="cursor-pointer text-primary hover:text-green-400" />
              </div>
            </button>
          ) : (
            <button onClick={() => dispatch(toggleCartMenu())}>
              <div className="flex  ">
                {totalQuantity > 0 && <span className="text-xs font-semibold">{totalQuantity}</span>}
                <AiOutlineShoppingCart size={18} className="cursor-pointer text-primary hover:text-green-400" />
              </div>
            </button>
          )}

          {/* user-icon */}

          {profile ? <MdOutlineClose size={18} className="cursor-pointer  hover:text-green-400" onClick={toggleProfile} /> : <AiOutlineUser size={18} className="cursor-pointer  hover:text-green-400" onClick={toggleProfile} />}
          {/* <AiOutlineUser className="cursor-pointer text-primary  hover:text-green-400" /> */}
        </div>
      </nav>
      {/* side menu */}

      {totalQuantity > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white h-[65px] p-2 flex justify-center items-center gap-4">
          <p className="font-semibold text-sm">Rs {totalAmount} </p>
          <Link href={"/cart"} className=" flex justify-center  gap-2 items-center text-sm bg-primary px-10 p-2 min-w-fit rounded text-white ">
            {totalQuantity} Checkout <HiArrowLongRight size={20} />
          </Link>
        </div>
      )}
      {menu && <MobileMenu />}
      {profile && <ProfileMenu />}
      {cart && <Cart />}
    </>
  );
}
