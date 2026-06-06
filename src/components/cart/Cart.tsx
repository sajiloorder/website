"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";
import Link from "next/link";
export default function Cart() {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: any) => state.cart,
  );
  const dispatch = useDispatch();

  const handleDecrement = (id: any, quantity: number) => {
    //
    dispatch(
      updateQuantity({
        id: id,
        quantity: quantity - 1,
      }),
    );
  };

  const handleIncrement = (id: any, quantity: number) => {
    //
    dispatch(
      updateQuantity({
        id: id,
        quantity: quantity + 1,
      }),
    );
  };

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeFromCart({ id }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <aside className="fixed right-0 top-16 z-50 h-[calc(100vh-64px)] w-120 max-w-md bg-white border-l border-border shadow-xl flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div>
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <p className="text-sm text-text-muted">
            {totalQuantity} item{totalQuantity !== 1 ? "s" : ""}
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-sm text-danger underline cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <div className="h-full flex items-center justify-center p-6">
            <p className="text-text-muted">Your cart is empty</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {items.map((item: any) => (
              <div
                key={item.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium">{item.name}</h3>

                    <p className="text-sm text-text-muted">
                      Rs {item.price} each
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">
                      Rs {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-xs text-danger underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="h-8 w-8 border border-border rounded cursor-pointer"
                  >
                    -
                  </button>

                  <span className="min-w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="h-8 w-8 border border-border rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      {items.length > 0 && (
        <div className="border-t border-border p-4 bg-background">
          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <span>{totalQuantity}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>Rs {totalAmount.toFixed(2)}</span>
          </div>

          <Link
            href={"/checkout"}
            className="w-full bg-primary text-white py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
          >
            Checkout
          </Link>
        </div>
      )}
    </aside>
  );
}
