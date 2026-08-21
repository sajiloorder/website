"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  Clock3,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  slug: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Burgers",
    price: 8.99,
    image: "/images/products/chicken-burger.jpg",
    slug: "chicken-burger",
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Burgers",
    price: 7.49,
    image: "/images/products/veg-burger.jpg",
    slug: "veg-burger",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 12.99,
    image: "/images/products/pepperoni-pizza.jpg",
    slug: "pepperoni-pizza",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 10.99,
    image: "/images/products/margherita-pizza.jpg",
    slug: "margherita-pizza",
  },
  {
    id: 5,
    name: "Coke",
    category: "Drinks",
    price: 2.49,
    image: "/images/products/coke.jpg",
    slug: "coke",
  },
  {
    id: 6,
    name: "Fries",
    category: "Sides",
    price: 4.99,
    image: "/images/products/fries.jpg",
    slug: "fries",
  },
];

const POPULAR_SEARCHES = [
  "Chicken Burger",
  "Pizza",
  "Fries",
  "Drinks",
];

export default function MenuSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  /* ---------------------------------------------
     LOAD RECENT SEARCHES
  --------------------------------------------- */
useEffect(() => {
  try {
    const saved = localStorage.getItem("recent-menu-searches");

    if (!saved) return;

    const parsed: unknown = JSON.parse(saved);

    if (
      Array.isArray(parsed) &&
      parsed.every(
        (item): item is string => typeof item === "string",
      )
    ) {
      setRecentSearches(parsed);
    }
  } catch {
    // Ignore invalid localStorage data
  }
}, []);
  /* ---------------------------------------------
     SAVE RECENT SEARCH
  --------------------------------------------- */

  const saveRecentSearch = (value: string) => {
    const search = value.trim();

    if (!search) return;

    const updated = [
      search,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== search.toLowerCase(),
      ),
    ].slice(0, 5);

    setRecentSearches(updated);

    try {
      localStorage.setItem(
        "recent-menu-searches",
        JSON.stringify(updated),
      );
    } catch {
      // Ignore localStorage errors
    }
  };

  /* ---------------------------------------------
     FILTER RESULTS
  --------------------------------------------- */

  const filteredItems = MENU_ITEMS.filter((item) => {
    const value = query.trim().toLowerCase();

    if (!value) return false;

    return (
      item.name.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value)
    );
  });

  /* ---------------------------------------------
     OPEN SEARCH
  --------------------------------------------- */

  const handleFocus = () => {
    setIsOpen(true);
  };

  /* ---------------------------------------------
     CLOSE SEARCH
  --------------------------------------------- */

  const closeSearch = () => {
    setIsOpen(false);
    setMobileOpen(false);
  };

  /* ---------------------------------------------
     SELECT SEARCH
  --------------------------------------------- */

  const selectSearch = (value: string) => {
    setQuery(value);
    saveRecentSearch(value);
    closeSearch();
  };

  /* ---------------------------------------------
     MOBILE SEARCH
  --------------------------------------------- */

  const openMobileSearch = () => {
    setMobileOpen(true);
    setIsOpen(true);

    setTimeout(() => {
      mobileInputRef.current?.focus();
    }, 50);
  };

  /* ---------------------------------------------
     OUTSIDE CLICK
  --------------------------------------------- */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* ---------------------------------------------
     ESCAPE KEY
  --------------------------------------------- */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-sm"
    >
      {/* =====================================================
          DESKTOP SEARCH
      ===================================================== */}

      <div className="hidden md:block">
        <div
          className={`
            group
            flex
            h-10
            w-full
            items-center
            rounded-sm
            border
            px-3.5
            transition-all
            duration-200

            ${
              isOpen
                ? `
                  border-gray-300
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  dark:border-white/10
                  dark:bg-[#151515]
                  dark:shadow-none
                `
                : `
                  border-gray-200
                  bg-gray-50
                  hover:border-gray-300
                  hover:bg-white
                  dark:border-white/10
                  dark:bg-[#151515]
                  dark:hover:border-white/15
                  dark:hover:bg-[#181818]
                `
            }
          `}
        >
          {/* Search icon */}

          <Search
            size={17}
            strokeWidth={1.8}
            className={`
              mr-2.5
              shrink-0
              transition-colors

              ${
                isOpen
                  ? "text-gray-700 dark:text-white/80"
                  : "text-gray-400 group-hover:text-gray-600 dark:text-white/40 dark:group-hover:text-white/70"
              }
            `}
          />

          {/* Input */}

          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={handleFocus}
            placeholder="Search menu..."
            className="
              min-w-0
              flex-1
              bg-transparent
              text-[13px]
              text-gray-900
              outline-none
              placeholder:text-gray-400

              dark:text-white
              dark:placeholder:text-white/40
            "
          />

          {/* Clear */}

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="
                ml-2
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                text-gray-400
                transition

                hover:bg-gray-100
                hover:text-gray-700

                dark:text-white/40
                dark:hover:bg-white/10
                dark:hover:text-white
              "
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* ===================================================
            DESKTOP DROPDOWN
        =================================================== */}

        {isOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              top-[calc(100%+8px)]
              z-50
              overflow-hidden
              rounded-2xl
              border
              border-gray-100
              bg-white
              shadow-[0_18px_50px_rgba(0,0,0,0.10)]
            "
          >
            {/* Empty Search */}

            {!query.trim() && (
              <div className="p-4">
                {/* Recent */}

                {recentSearches.length > 0 && (
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Clock3
                        size={13}
                        strokeWidth={1.8}
                        className="text-gray-400"
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                        Recent
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search) => (
                        <button
                          key={search}
                          type="button"
                          onClick={() => selectSearch(search)}
                          className="
                            rounded-full
                            border
                            border-gray-200
                            bg-white
                            px-3
                            py-1.5
                            text-[11px]
                            text-gray-600
                            transition

                            hover:border-gray-300
                            hover:bg-gray-50
                            hover:text-gray-900
                          "
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular */}

                <div
                  className={
                    recentSearches.length > 0
                      ? "mt-5"
                      : ""
                  }
                >
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp
                      size={13}
                      strokeWidth={1.8}
                      className="text-gray-400"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                      Popular
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {POPULAR_SEARCHES.map((search) => (
                      <button
                        key={search}
                        type="button"
                        onClick={() => selectSearch(search)}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-3
                          py-2.5
                          text-left
                          transition
                          hover:bg-gray-50
                        "
                      >
                        <span className="text-xs font-medium text-gray-700">
                          {search}
                        </span>

                        <ChevronRight
                          size={14}
                          className="text-gray-300"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Search Results */}

            {query.trim() && (
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                    Results
                  </span>

                  <span className="text-[11px] text-gray-400">
                    {filteredItems.length}{" "}
                    {filteredItems.length === 1
                      ? "item"
                      : "items"}
                  </span>
                </div>

                <div className="max-h-72 overflow-y-auto p-1.5">
                  {filteredItems.length === 0 ? (
                    <div className="px-4 py-8 text-center">
                      <div
                        className="
                          mx-auto
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-50
                        "
                      >
                        <Search
                          size={17}
                          className="text-gray-400"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-gray-900">
                        No items found
                      </p>

                      <p className="mt-1 text-[11px] text-gray-400">
                        Try another search.
                      </p>
                    </div>
                  ) : (
                    filteredItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/menu/${item.slug}`}
                        onClick={() =>
                          saveRecentSearch(item.name)
                        }
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          p-2
                          transition
                          hover:bg-gray-50
                        "
                      >
                        {/* Image */}

                        <div
                          className="
                            relative
                            h-11
                            w-11
                            shrink-0
                            overflow-hidden
                            rounded-lg
                            bg-gray-100
                          "
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="44px"
                            className="
                              object-cover
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                          />
                        </div>

                        {/* Info */}

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-gray-900">
                            {item.name}
                          </p>

                          <p className="mt-0.5 text-[10px] text-gray-400">
                            {item.category}
                          </p>
                        </div>

                        {/* Price */}

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>

                          <ArrowRight
                            size={13}
                            className="
                              text-gray-300
                              transition
                              group-hover:translate-x-0.5
                              group-hover:text-gray-700
                            "
                          />
                        </div>
                      </Link>
                    ))
                  )}
                </div>

                {filteredItems.length > 0 && (
                  <div className="border-t border-gray-100 px-4 py-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        saveRecentSearch(query)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        text-[11px]
                        font-medium
                        text-gray-500
                        transition
                        hover:text-gray-900
                      "
                    >
                      <span>View all results</span>

                      <ArrowRight size={13} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* =====================================================
          MOBILE SEARCH BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={openMobileSearch}
        aria-label="Open search"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-gray-700
          transition

          hover:bg-gray-50

          dark:border-white/10
          dark:bg-[#151515]
          dark:text-white
          dark:hover:bg-[#181818]

          md:hidden
        "
      >
        <Search
          size={18}
          strokeWidth={1.8}
        />
      </button>

      {/* =====================================================
          MOBILE SEARCH
      ===================================================== */}

      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            bg-black/40
            backdrop-blur-[2px]
            md:hidden
          "
          onClick={closeSearch}
        >
          <div
            className="
              absolute
              inset-x-0
              top-0
              overflow-hidden
              rounded-b-3xl
              bg-white
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Header */}

            <div className="flex items-center gap-3 border-b border-gray-100 p-4">
              <button
                type="button"
                onClick={closeSearch}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-600
                  transition
                  hover:bg-gray-200
                "
                aria-label="Close search"
              >
                <X size={17} />
              </button>

              {/* Mobile Search Field */}

              <div
                className="
                  flex
                  h-10
                  flex-1
                  items-center
                  rounded-full
                  bg-gray-100
                  px-3.5

                  dark:bg-[#151515]
                "
              >
                <Search
                  size={17}
                  className="
                    mr-2.5
                    text-gray-400
                    dark:text-white/40
                  "
                />

                <input
                  ref={mobileInputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setIsOpen(true);
                  }}
                  placeholder="Search menu..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400

                    dark:text-white
                    dark:placeholder:text-white/40
                  "
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      mobileInputRef.current?.focus();
                    }}
                    className="
                      text-gray-400
                      dark:text-white/40
                    "
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>

            {/* Content */}

            <div className="max-h-[80vh] overflow-y-auto">
              {!query.trim() ? (
                <div className="p-5">
                  {/* Recent */}

                  {recentSearches.length > 0 && (
                    <section>
                      <div className="mb-3 flex items-center gap-2">
                        <Clock3
                          size={14}
                          className="text-gray-400"
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                          Recent searches
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search) => (
                          <button
                            key={search}
                            type="button"
                            onClick={() =>
                              selectSearch(search)
                            }
                            className="
                              rounded-full
                              border
                              border-gray-200
                              px-3
                              py-2
                              text-xs
                              text-gray-600
                            "
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Popular */}

                  <section
                    className={
                      recentSearches.length > 0
                        ? "mt-7"
                        : ""
                    }
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <TrendingUp
                        size={14}
                        className="text-gray-400"
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                        Popular
                      </span>
                    </div>

                    <div>
                      {POPULAR_SEARCHES.map((search) => (
                        <button
                          key={search}
                          type="button"
                          onClick={() =>
                            selectSearch(search)
                          }
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            px-3
                            py-3
                            text-left
                            transition
                            hover:bg-gray-50
                          "
                        >
                          <span className="text-sm font-medium text-gray-800">
                            {search}
                          </span>

                          <ChevronRight
                            size={16}
                            className="text-gray-300"
                          />
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              ) : (
                <div className="p-2">
                  {filteredItems.length === 0 ? (
                    <div className="px-5 py-12 text-center">
                      <div
                        className="
                          mx-auto
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-50
                        "
                      >
                        <Search
                          size={20}
                          className="text-gray-400"
                        />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-gray-900">
                        No results found
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Try searching for something else.
                      </p>
                    </div>
                  ) : (
                    filteredItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/menu/${item.slug}`}
                        onClick={() =>
                          saveRecentSearch(item.name)
                        }
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          p-3
                          transition
                          active:bg-gray-50
                        "
                      >
                        <div
                          className="
                            relative
                            h-14
                            w-14
                            shrink-0
                            overflow-hidden
                            rounded-xl
                            bg-gray-100
                          "
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-gray-900">
                            {item.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            {item.category}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>

                          <ChevronRight
                            size={15}
                            className="text-gray-300"
                          />
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}