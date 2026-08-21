"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  Wallet,
  
  LogOut,
  ChevronRight,
  MapPin,
  BookOpen,
  ListTodo,
  
} from "lucide-react";
import useMenu from "@/hooks/useMenu";

const MENU_ITEMS = [
  { title: "Personal Information", href: "/wallet", icon: Wallet },
  { title: "My Orders", href: "/profile", icon: User },
  { title: "Addresses", href: "/guide", icon: BookOpen },
  { title: "Payment Method", href: "/tasks", icon: ListTodo },
  { title: "Setting", href: "/addresses", icon: MapPin },
  { title: "Help & Support", href: "/addresses", icon: MapPin },
  { title: "Logout", href: "/addresses", icon: MapPin },
];

export default function ProfileMenu() {
  const { close } = useMenu();

  return (
    <div className="fixed inset-0 top-15 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={close}
      />

      {/* Drawer */}
      <aside
        className="
          relative
          w-full sm:w-[380px]
          h-full
          bg-slate-50
          shadow-2xl
          overflow-y-auto
          sm:rounded-l-3xl
        "
      >
        {/* PROFILE HEADER */}
        <div className="pt-6 top-0 pb-4 rounded-sm bg-slate-100 flex flex-col items-center">
          <Image
            src="/images/Nitesh1.jpeg"
            alt="Profile"
            width={100}
            height={100}
            className="h-20 w-20 rounded-full object-cover border border-gray-200"
          />

          <h2 className="mt-2 text-lg font-semibold text-gray-900">
            Nitesh Panday
          </h2>

          <p className="text-sm text-gray-500">Founder</p>
          
        </div>

        {/* MENU SECTION */}
        <div className="px-6 flex flex-col gap-2 mt-2">
          {MENU_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={close}
                className={`
                  flex items-center justify-between px-4 py-3
                  hover:bg-gray-50 transition
                  ${
                    index !== MENU_ITEMS.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-800">
                    {item.title}
                  </span>
                </div>

                <ChevronRight size={16} className="text-gray-600" />
              </Link>
            );
          })}
        </div>

        {/* LOGOUT */}
        <div className="mt-4 px-3 pb-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}