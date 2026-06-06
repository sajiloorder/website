"use client";

import Link from "next/link";
import Image from "next/image";
import useMenu from "@/hooks/useMenu";

const LINKS = [
  { id: 3, name: "Shipping", href: "/about" },
  { id: 4, name: "Payment", href: "/contact" },
  { id: 5, name: "Offers", href: "/offers" },
  { id: 6, name: "FAQs", href: "/faqs" },
];

export default function ProfileMenu() {
  const { close } = useMenu();

  return (
    <div className=" h-calc[100vh - 64px] top-16 fixed inset-0 z-50 flex justify-end">
      {/* overlay (click outside to close) */}
      <div className="absolute inset-0 bg-black/30" onClick={close} />

      {/* panel */}
      <aside className="relative w-[340px] h-full bg-primary text-white shadow-xl">
        {/* profile header */}
        <div className="flex items-center gap-3 p-5 border-b border-white/10">
          <Image
            src="/images/ronaldo.jpg"
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full aspect-square"
          />

          <div className="leading-tight">
            <h2 className="text-base font-semibold">Ronaldo</h2>
            <p className="text-xs text-white/70">Location</p>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col gap-1 p-3">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={close}
              className="px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/10 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
