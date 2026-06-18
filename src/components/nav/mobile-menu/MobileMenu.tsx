"use client";

import Link from "next/link";
import {
  Home,
  User,
  History,
  PenSquare,
  Bell,
  CircleHelp,
  Settings,
  LogOut,
  X,
  Sun,
  Moon,
} from "lucide-react";
import useMenu from "@/hooks/useMenu";

const LINKS = [
  { id: 1, name: "Home", href: "/", icon: Home },
  { id: 2, name: "Profile", href: "/profile", icon: User },
  { id: 3, name: "History", href: "/history", icon: History },
  { id: 4, name: "Author", href: "/author", icon: PenSquare },
  { id: 5, name: "Notifications", href: "/notifications", icon: Bell },
  { id: 6, name: "Help", href: "/help", icon: CircleHelp },
  { id: 7, name: "Settings", href: "/settings", icon: Settings },
];

export default function MobileMenu() {
  const { active, close } = useMenu();
  const isOpen = active === "menu";

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-[320px]
          bg-[#111111]
          text-white
          z-50
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-6 right-5 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="px-6 pt-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h2 className="text-2xl font-semibold">Hello,</h2>
              <p className="text-gray-400 text-sm">
                Sajilo Order User
              </p>
            </div>
          </div>

          {/* Theme Switch */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-3">Theme</p>

            <div className="flex w-fit rounded-lg bg-[#1b1b1b] p-1">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-black">
                <Sun size={16} />
                <span className="text-sm">Light</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-400">
                <Moon size={16} />
                <span className="text-sm">Dark</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-5">
          {LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={close}
                className="
                  flex items-center gap-4
                  px-3 py-4 rounded-xl
                  text-gray-300
                  hover:bg-white/5
                  hover:text-white
                  transition-all
                "
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            className="
              w-full
              flex items-center gap-3
              px-4 py-4
              rounded-xl
              text-gray-300
              hover:bg-red-500/10
              hover:text-red-400
              transition
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}