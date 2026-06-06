"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type MenuItem = {
  id: number;
  name: string;
  category?: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Chicken Burger", category: "Burgers" },
  { id: 2, name: "Veg Burger", category: "Burgers" },
  { id: 3, name: "Pepperoni Pizza", category: "Pizza" },
  { id: 4, name: "Margherita Pizza", category: "Pizza" },
  { id: 5, name: "Coke", category: "Drinks" },
  { id: 6, name: "Fries", category: "Sides" },
];

export default function MenuSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-md flex items-center"
    >
      {/* 🔍 MOBILE ICON */}
      <button onClick={() => setMobileOpen(true)} className="md:hidden p-2">
        <AiOutlineSearch size={20} />
      </button>

      {/* DESKTOP INPUT */}
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search menu items..."
        className="hidden md:block w-full border border-border rounded px-3 py-2 outline-none text-sm"
      />

      {/* MOBILE EXPANDED INPUT */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 flex items-start justify-center pt-20"
          onClick={() => setMobileOpen(false)}
        >
          {" "}
          <div className="w-[90%] bg-white rounded-lg shadow-lg p-3">
            {/* input */}
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              placeholder="Search menu items..."
              className="w-full border border-border rounded px-3 py-2 outline-none text-sm"
            />

            {/* results */}
            {open && (
              <div className="mt-2 max-h-64 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="p-3 text-sm text-text-muted">
                    No items found
                  </div>
                ) : (
                  filtered.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setQuery(item.name);
                        setMobileOpen(false);
                        setOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 flex justify-between text-sm"
                    >
                      <span>{item.name}</span>
                      {item.category && (
                        <span className="text-xs text-text-muted">
                          {item.category}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP DROPDOWN */}
      {open && !mobileOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-border rounded shadow-lg z-50 max-h-64 overflow-y-auto hidden md:block">
          {filtered.length === 0 ? (
            <div className="p-3 text-sm text-text-muted">No items found</div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setQuery(item.name);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex justify-between text-sm"
              >
                <span>{item.name}</span>
                {item.category && (
                  <span className="text-xs text-text-muted">
                    {item.category}
                  </span>
                )}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
