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
  ChevronRight,
} from "lucide-react";
import useMenu from "@/hooks/useMenu";
import Image from "next/image";

const LINKS = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    id: 3,
    name: "Order History",
    href: "/history",
    icon: History,
  },
  {
    id: 4,
    name: "Author",
    href: "/author",
    icon: PenSquare,
  },
  {
    id: 5,
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    id: 6,
    name: "Help Center",
    href: "/help",
    icon: CircleHelp,
  },
  {
    id: 7,
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileMenu() {
  const { active, close } = useMenu();

  const isOpen = active === "menu";

  return (
    <>
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={close}
        className={`
          fixed inset-0 z-40
          bg-black/35
          backdrop-blur-[3px]
          transition-opacity duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          RIGHT DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-[100dvh]
          w-[300px]
          flex-col
          overflow-hidden
          border-l border-gray-200
          bg-white
          text-gray-900
          shadow-[-10px_0_40px_rgba(0,0,0,0.08)]
          transition-transform
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex items-center justify-between px-5 py-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Sajilo Order
            </p>

            <h2 className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
              Menu
            </h2>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-gray-200
              bg-gray-50
              text-gray-500
              transition-all
              hover:bg-gray-100
              hover:text-gray-900
              active:scale-95
            "
          >
            <X size={17} strokeWidth={1.8} />
          </button>
        </div>

        {/* ===================================================
            PROFILE
        =================================================== */}

        <div className="px-4">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-4
            "
          >
            <div
              className="
                absolute -right-8 -top-8
                h-24 w-24
                rounded-full
                bg-gray-200/60
              "
            />

            <div className="relative flex items-center gap-3">
              <div
                className="
                  relative
                  h-12 w-12
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border-2 border-white
                  bg-gray-200
                  shadow-sm
                "
              >
                import Image from "next/image";

<Image
  src="/images/logo.png"
  alt="Sajilo Order"
  width={200}
  height={60}
/>
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-medium text-gray-400">
                  Welcome back
                </p>

                <h3 className="mt-0.5 truncate text-sm font-semibold text-gray-900">
                  Sajilo Order User
                </h3>
              </div>
            </div>

            <Link
              href="/profile"
              onClick={close}
              className="
                relative
                mt-4
                flex items-center justify-between
                border-t border-gray-200
                pt-3
                text-xs font-medium
                text-gray-500
                transition
                hover:text-gray-900
              "
            >
              <span>View profile</span>

              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* ===================================================
            THEME
        =================================================== */}

        <div className="px-5 pt-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            Appearance
          </p>

          <div
            className="
              flex
              rounded-xl
              border border-gray-200
              bg-gray-50
              p-1
            "
          >
            <button
              type="button"
              className="
                flex flex-1
                items-center justify-center
                gap-2
                rounded-lg
                bg-white
                px-3 py-2
                text-xs font-medium
                text-gray-900
                shadow-sm
              "
            >
              <Sun size={14} strokeWidth={1.8} />
              Light
            </button>

            <button
              type="button"
              className="
                flex flex-1
                items-center justify-center
                gap-2
                rounded-lg
                px-3 py-2
                text-xs font-medium
                text-gray-400
                transition
                hover:text-gray-700
              "
            >
              <Moon size={14} strokeWidth={1.8} />
              Dark
            </button>
          </div>
        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <div className="mt-5 flex-1 overflow-y-auto px-4 pb-4">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            Navigation
          </p>

          <nav className="space-y-0.5">
            {LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={close}
                  className="
                    group
                    flex items-center
                    gap-3
                    rounded-xl
                    px-3 py-3
                    text-gray-500
                    transition-all duration-200
                    hover:bg-gray-50
                    hover:text-gray-900
                    active:scale-[0.99]
                  "
                >
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      bg-gray-50
                      text-gray-400
                      transition
                      group-hover:bg-white
                      group-hover:text-gray-900
                      group-hover:shadow-sm
                    "
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="flex-1 text-sm font-medium">
                    {link.name}
                  </span>

                  <ChevronRight
                    size={14}
                    className="
                      text-gray-300
                      opacity-0
                      transition-all
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ===================================================
            LOGOUT
        =================================================== */}

        <div className="border-t border-gray-100 p-4">
          <button
            type="button"
            className="
              group
              flex w-full
              items-center
              gap-3
              rounded-xl
              px-3 py-3
              text-gray-500
              transition-all
              hover:bg-red-50
              hover:text-red-600
            "
          >
            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-lg
                bg-gray-50
                text-gray-400
                transition
                group-hover:bg-red-100
                group-hover:text-red-500
              "
            >
              <LogOut
                size={16}
                strokeWidth={1.8}
              />
            </span>

            <span className="text-sm font-medium">
              Logout
            </span>
          </button>

          <p className="mt-3 text-center text-[10px] text-gray-300">
            Sajilo Order
          </p>
        </div>
      </aside>
    </>
  );
}