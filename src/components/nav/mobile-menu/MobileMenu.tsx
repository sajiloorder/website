"use client";
import { useContext } from "react";
import { NavContext } from "@/context/nav-context";

import Link from "next/link";

const LINKS = [
  {
    id: 1,
    name: "home",
    href: "/",
  },
  {
    id: 2,
    name: "menu",
    href: "/menu",
  },
  {
    id: 3,
    name: "about",
    href: "/about",
  },
  {
    id: 4,
    name: "contact",
    href: "/contact",
  },
];
export default function MobileMenu() {
  const { closeMenu } = useContext(NavContext);
  return (
    <section className=" absolute w-[350px] h-[600px] bg-white border border-gray-400 shadow-md z-10">
      <div className=" flex flex-col gap-2 px-4">
        {LINKS.map((link) => (
          <Link key={link.id} href={link.href} onClick={closeMenu}>
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
