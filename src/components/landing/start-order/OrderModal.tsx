"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import useOrder from "@/hooks/useOrder";

const MOCK_ADDRESSES = ["Itahari", "Biratnagar", "Dharan", "Kathmandu"];

export default function OrderModal() {
  const {
    open,
    step,
    deliveryType,
    setDeliveryType,
    setAddress,
    nextStep,
    backStep,
    closeOrder,
    address,
  } = useOrder();

  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  const filtered = MOCK_ADDRESSES.filter((a) =>
    a.toLowerCase().includes(query.toLowerCase()),
  );

  const resetOrder = () => {
    setDeliveryType(null);
    setAddress("");
    setQuery("");
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* OVERLAY */}
      <div onClick={closeOrder} className="absolute inset-0 bg-black/40" />

      {/* MODAL */}
      <div className="relative bg-white w-[92%] max-w-lg rounded-lg shadow-lg p-6 z-10">
        {/* ========================= */}
        {/* STEP 1: DELIVERY TYPE */}
        {/* ========================= */}
        {step === "delivery" && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold">Welcome to Sajilo Order</h2>
              <p className="text-sm text-gray-500">
                Select how you want to receive your order.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setDeliveryType("delivery")}
                className={`p-3 border rounded cursor-pointer ${
                  deliveryType === "delivery" ? "bg-primary text-white" : ""
                }`}
              >
                Delivery
              </button>

              <button
                onClick={() => setDeliveryType("pickup")}
                className={`p-3 border rounded cursor-pointer ${
                  deliveryType === "pickup" ? "bg-primary text-white" : ""
                }`}
              >
                Pickup
              </button>
            </div>

            <button
              disabled={!deliveryType}
              onClick={nextStep}
              className="bg-primary text-white p-3 rounded cursor-pointer disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {/* ========================= */}
        {/* STEP 2: ADDRESS */}
        {/* ========================= */}
        {step === "address" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Select Address</h2>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search address..."
              className="border border-border p-2 rounded text-sm"
            />

            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="text-sm text-gray-500">No address found</p>
              ) : (
                filtered.map((addr) => (
                  <button
                    key={addr}
                    onClick={() => {
                      setAddress(addr);
                      nextStep();
                    }}
                    className="text-left p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    {addr}
                  </button>
                ))
              )}
            </div>

            <button
              onClick={backStep}
              className="text-sm text-primary underline cursor-pointer"
            >
              Back
            </button>
          </div>
        )}

        {/* ========================= */}
        {/* STEP 3: CONFIRMATION */}
        {/* ========================= */}
        {step === "done" && (
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Confirm your order setup</h2>

            {/* SUMMARY */}
            <div className="border border-border rounded p-4 text-sm space-y-2">
              <p>
                <b>Type:</b>{" "}
                {deliveryType === "delivery" ? "Delivery" : "Pickup"}
              </p>

              <p>
                <b>Address:</b> {address}
              </p>
            </div>

            {/* CONFIRM */}
            <button
              onClick={closeOrder}
              className="bg-primary text-white p-3 rounded cursor-pointer"
            >
              Confirm & Continue
            </button>

            {/* CHANGE ORDER */}
            <button
              onClick={() => {
                resetOrder();
                backStep(); // go to delivery step
              }}
              className="text-sm text-primary underline cursor-pointer"
            >
              Change order method
            </button>

            {/* CANCEL */}
            <button
              onClick={closeOrder}
              className="text-sm text-gray-500 underline cursor-pointer"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
