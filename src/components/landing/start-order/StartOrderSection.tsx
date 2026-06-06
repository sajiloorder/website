"use client";

import useOrder from "@/hooks/useOrder";

export default function StartOrderSection() {
  const { startOrder } = useOrder();

  return (
    <section className="w-full bg-background rounded-lg px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* TEXT */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-text">
          Let&apos;s get your order started
        </h2>

        <p className="text-sm text-text-muted">
          Order for delivery, pickup, or dine-in in just a few clicks.
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={startOrder}
        className="bg-primary text-white px-5 py-2 rounded  text-sm font-medium hover:opacity-90 transition cursor-pointer"
      >
        Start Order
      </button>
    </section>
  );
}
