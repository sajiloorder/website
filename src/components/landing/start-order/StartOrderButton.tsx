"use client";

import useOrder from "@/hooks/useOrder";

export default function StartOrderButton() {
  const { startOrder } = useOrder();

  return (
    <button
      onClick={startOrder}
      className={` min-w-fit px-10 py-2 bg-primary hover:bg-primary-dark cursor-pointer text-white rounded-md text-lg transition `}
    >
      Start Order
    </button>
  );
}
