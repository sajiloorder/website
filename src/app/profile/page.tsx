/* "use client";
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
  {
    id: 5,
    name: "offer",
    href: "/contact",
  },
  {
    id: 6,
    name: "FAQ",
    href: "/contact",
  },
];
export default function Profile() {
  const { closeProfile } = useContext(NavContext);
  return (
    <section className=" absolute w-[350px] h-[427px] bg-primary text-white  border border-gray-400 shadow-md z-10">
      <div className=" flex mt-6 flex-col gap-4 px-2">
        {LINKS.map((link) => (
          <Link key={link.id} href={link.href} onClick={closeProfile}>
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
 */