"use client";

import useOrder from "@/hooks/useOrder";
import { CiLocationOff, CiLocationOn } from "react-icons/ci";

export default function SetLocationButton() {
  const { deliveryType, address, startOrder } = useOrder();

  const hasOrderSetup = !!deliveryType;

  return (
    <button
      onClick={startOrder}
      className="hidden sm:flex items-center gap-2 px-3 py-2 rounded bg-background-secondary hover:bg-border  cursor-pointer transition"
    >
      {/* ICON */}
      {hasOrderSetup ? <CiLocationOn size={18} /> : <CiLocationOff size={18} />}

      {/* CONTENT */}
      <div className="flex flex-row justify-center items-center  gap-1 leading-tight">
        {!hasOrderSetup ? (
          <>
            <span className="text-sm font-medium">Set Location</span>
            <span className="text-xs text-text-muted">Delivery or Pickup</span>
          </>
        ) : deliveryType === "delivery" ? (
          <>
            <span className="text-xs text-text-muted">Deliver to</span>

            <span className="max-w-[180px] truncate text-sm font-medium">
              {address || "Select address"}
            </span>
          </>
        ) : (
          <>
            <span className="text-xs text-text-muted">Order Type</span>

            <span className="text-xs font-medium">Pickup</span>
          </>
        )}
      </div>

      {/* CHANGE */}
      {hasOrderSetup && (
        <span className="ml-1 text-xs text-primary underline">Change</span>
      )}
    </button>
  );
}
