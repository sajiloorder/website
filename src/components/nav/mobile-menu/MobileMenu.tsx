"use client";

import Link from "next/link";
import useMenu from "@/hooks/useMenu";

const LINKS = [
  { id: 1, name: "home", href: "/" },
  { id: 2, name: "menu", href: "/menu" },
  { id: 3, name: "about", href: "/about" },
  { id: 4, name: "contact", href: "/contact" },
  { id: 5, name: "offers", href: "/offers" },
  { id: 6, name: "FAQ", href: "/faqs" },
];

export default function MobileMenu() {
  const { active, close } = useMenu();

  const isOpen = active === "menu";

  return (
    <aside
      className={`
        fixed top-0 left-0
        w-[280px] sm:w-[320px]
        h-screen
        bg-white text-secondary
        border-r border-gray-200
        shadow-lg
        z-50

        transform transition-transform duration-300 ease-in-out 

        ${isOpen ? "translate-x-0 slide-in-right" : "-translate-x-full"}
      `}
    >
      <div className="flex mt-12 flex-col gap-4 px-6 capitalize text-text ">
        {LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={close}
            className="hover:text-primary transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
