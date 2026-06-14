"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  Wallet,
  Settings,
  Heart,
  Download,
  LogOut,
  ChevronRight,
  MapPin,
  BookOpen,
  ListTodo,
  Award,
} from "lucide-react";
import useMenu from "@/hooks/useMenu";

const MENU_ITEMS = [
  {
    title: "Wallet",
    href: "/wallet",
    icon: Wallet,
  },
  {
    title: "Edit Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "User Guide",
    href: "/guide",
    icon: BookOpen,
  },
  {
    title: "Task Center",
    href: "/tasks",
    icon: ListTodo,
  },
  {
    title: "Addresses",
    href: "/addresses",
    icon: MapPin,
  },
];

const SETTINGS_ITEMS = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Level",
    href: "/level",
    icon: Award,
  },
  {
    title: "Favorites",
    href: "/favorites",
    icon: Heart,
  },
  {
    title: "Downloads",
    href: "/downloads",
    icon: Download,
  },
];

export default function ProfileMenu() {
  const { close } = useMenu();

  return (
    <div className="fixed inset-0 top-16 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={close}
      />

      {/* Sidebar */}
      <aside className="relative w-[340px] h-full bg-[#f5f5f7] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary-hover pt-8 pb-6 px-6">
          <div className="flex flex-col items-center">
            <Image
              src="/images/Nitesh1.jpeg"
              alt="Profile"
              width={80}
              height={80}
              priority
              quality={100}
              className="h-20 w-20 rounded-full object-cover object-center border-2 border-white"
            />

            <h2 className="mt-3 text-white font-semibold text-base">
              Nitesh Panday
            </h2>

            <p className="text-xs text-background">Itahari-7,Sunsari</p>
            <p className="text-xs text-background">Founder</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-t-3xl -mt-2 overflow-hidden">
          {/* First Section */}
          <div className="py-2">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={close}
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-gray-500" />

                    <span className="text-sm text-gray-800">{item.title}</span>
                  </div>

                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              );
            })}
          </div>

          <div className="mx-5 h-px bg-gray-100" />

          {/* Second Section */}
          <div className="py-2">
            {SETTINGS_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={close}
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-gray-500" />

                    <span className="text-sm text-gray-800">{item.title}</span>
                  </div>

                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              );
            })}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-100">
            <button className="w-full flex items-center gap-3 px-5 py-4 text-primary hover:bg-red-50">
              <LogOut size={16} />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
