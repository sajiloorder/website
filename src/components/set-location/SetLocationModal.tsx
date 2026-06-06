"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SetLocationModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      {/* Modal Box */}
      <div className="relative w-[90%] max-w-md bg-white rounded-xl shadow-lg p-5 z-10">
        <h2 className="text-lg font-semibold mb-3">Set your location</h2>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search address..."
          className="w-full border border-border rounded px-3 py-2 outline-none"
        />

        {/* Fake results (replace with API later) */}
        <div className="mt-4 flex flex-col gap-2">
          {["Itahari", "Birathnaghar", "Dharan"]
            .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <button
                key={item}
                onClick={() => {
                  console.log("Selected:", item);
                  onClose();
                }}
                className="text-left px-3 py-2 hover:bg-gray-100 rounded"
              >
                {item}
              </button>
            ))}
        </div>

        {/* Close button */}
        <button onClick={onClose} className="mt-4 text-sm text-red-500">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
