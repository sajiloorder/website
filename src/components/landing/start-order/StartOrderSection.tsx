"use client";

import useOrder from "@/hooks/useOrder";

export default function StartOrderSection() {
  const { startOrder } = useOrder();

  return (
    <section
      className="
        w-full
        border-y border-[#ebe7df]
        bg-[#faf8f3]
        dark:border-white/10
        dark:bg-black
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
          gap-5
          px-4
          py-7
          sm:px-6
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-8
          xl:px-10
        "
      >
        {/* TEXT */}
        <div className="flex flex-col">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
            Ready when you are
          </p>

          <h2 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
            Let&apos;s get your order started
          </h2>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Order for delivery, pickup, or dine-in in just a few clicks.
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={startOrder}
          className="
            w-fit
            shrink-0
            rounded-lg
            bg-primary
            px-6
            py-2.5
            text-sm
            font-medium
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:opacity-90
            hover:shadow-md
            active:translate-y-0
            cursor-pointer
          "
        >
          Start Order
        </button>
      </div>
    </section>
  );
}