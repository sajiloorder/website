"use client";

import { useState } from "react";
import SetLocationModal from "./SetLocationModal";

export default function SetLocationButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1">
      <button
        onClick={() => setOpen(true)}
        className="px-3 py-2 text-sm  text-text cursor-pointer rounded-md "
      >
        Set Location
      </button>

      <SetLocationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
