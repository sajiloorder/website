"use client";

import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Logo from "../ui/logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

import { NavContext } from "@/context/nav-context";
import MobileMenu from "./mobile-menu/MobileMenu";
// import Profile from "@/app/profile/page";
import ProfileMenu from "@/app/profile/ProfileMenu/page";
import Cart from "../cart/Cart";

export default function Nav() {
  const { menu, toggleMenu, closeMenu, profile, toggleProfile, closeProfile } = useContext(NavContext);
  /**
   * check menu state
   */

  const cart = useSelector((state: any) => state.cart.cart);

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
      <nav className=" flex flex-row bg-white text-primary justify-between items-center mb-2 px-6 py-3  ">
        {menu ? <MdOutlineClose className="cursor-pointer  hover:text-green-400" onClick={toggleMenu} /> : <AiOutlineMenu className="cursor-pointer  hover:text-green-400" onClick={toggleMenu} />}

        <div className="flex flex-row gap-2 justify-between items-center  ">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center ">
          {/* cart-icon */}
          <Link href={"/cart"}>
            <AiOutlineShoppingCart className="cursor-pointer text-primary hover:text-green-400" />
          </Link>

          {/* user-icon */}

          {profile ? <AiOutlineUser className="cursor-pointer  hover:text-green-400" onClick={toggleProfile} /> : <AiOutlineUser className="cursor-pointer  hover:text-green-400" onClick={toggleProfile} />}
          {/* <AiOutlineUser className="cursor-pointer text-primary  hover:text-green-400" /> */}
        </div>
      </nav>
      {/* side menu */}
      {menu && <MobileMenu />}
      {profile && <ProfileMenu />}
      {cart && <Cart />}
    </>
  );
}
