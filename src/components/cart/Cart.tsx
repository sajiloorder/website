"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";
import Link from "next/link";

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
};

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

export default function Cart() {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: { cart: CartState }) => state.cart,
  );
  const dispatch = useDispatch();

  const handleDecrement = (id: string | number, quantity: number) => {
    //
    dispatch(
      updateQuantity({
        id: id,
        quantity: quantity - 1,
      }),
    );
  };

  const handleIncrement = (id: string | number, quantity: number) => {
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
    <aside className="fixed  right-0  top-15 z-50 h-[calc(100vh-64px)] w-full sm:w-[400px] md:w-[420px]  bg-white border border-border shadow-xl flex flex-col">
      {/* HEADER */}
      <div className="flex items-center text-white justify-between p-4 border-b bg-white rounded-sm border-border">
        <div>
          <h2 className="font-bold text-lg text-gray-900">My Cart</h2>
          <p className="text-sm text-text-muted ">
            {totalQuantity} Item{totalQuantity !== 1 ? "s" : ""}
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-xs sm:text-sm text-white mb-2   bg-primary text-center rounded-lg hover:bg-primary px-3 py-2 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 bg-white overflow-y-auto">
        {items.length === 0 ? (
          <div className="h-full flex  items-center justify-center p-6">
            <p className="text-text-muted">Your cart is empty</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-border bg-white rounded-lg p-4"
              >
                <div className="flex gap-3 items-start">

  {/* IMAGE */}
  <div className="h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
    <img
      src={item.image_url}
      alt={item.name}
      className="h-full w-full object-cover"
    />
  </div>

  {/* NAME */}
  <div className="flex-1">
    <h3 className="font-medium">{item.name}</h3>
  </div>

  {/* PRICE */}
  <div className="text-right">
    <p className="font-medium">
      Rs {(item.price * item.quantity).toFixed(2)}
    </p>

    <button
      onClick={() => handleRemoveItem(item.id)}
      className="text-xs text-red-500 underline"
    >
      Remove
    </button>
  </div>
</div>

                {/* QUANTITY */}
                <div className="flex  items-center gap-3 mt-4">
                  <button
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="h-7 w-7 bg-white text-primary border border-border rounded cursor-pointer"
                  >
                    -
                  </button>

                  <span className="min-w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="h-7 w-7 bg-white text-primary text-center border border-border rbg-primary rounded cursor-pointer"
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
          <div className="flex justify-between items-center font-semibold text-base sm:text-lg mb-4">
            <span>Total</span>
            <span>Rs {totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <p className="text-sm text-text-muted ">
              {totalQuantity} Item{totalQuantity !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>service charge</span>
          </div>

          <div className="flex justify-center">
            <Link
              href="/checkout"
              className="bg-primary text-white py-3 w-full text-center rounded-sm font-medium hover:opacity-90 transition cursor-pointer"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
}
