"use client";

import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";

export default function CartControls({ item }: any) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      }),
    );
  };

  const handleDecrease = () => {
    if (item.quantity <= 1) {
      dispatch(removeFromCart({ id: item.id }));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        }),
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <div className="flex items-center gap-2 mt-1">
      {/* minus */}
      <button
        onClick={handleDecrease}
        className="w-7 h-7 border border-border rounded flex items-center justify-center"
      >
        -
      </button>

      {/* qty */}
      <span className="text-sm font-medium">{item.quantity}</span>

      {/* plus */}
      <button
        onClick={handleIncrease}
        className="w-7 h-7 border border-border rounded flex items-center justify-center"
      >
        +
      </button>

      {/* remove */}
      <button
        onClick={handleRemove}
        className="text-xs text-red-500 underline ml-2"
      >
        remove
      </button>
    </div>
  );
}
