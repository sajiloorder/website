"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import useOrder from "@/hooks/useOrder";
import CartControls from "@/components/cart-controls/CartControls";

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

export default function CheckoutPage() {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: { cart: CartState }) => state.cart,
  );

  const { deliveryType, address, startOrder } = useOrder();

  const isDeliverySet =
    deliveryType === "pickup" || (deliveryType === "delivery" && address);

  const handleCheckout = () => {
    if (!deliveryType) {
      startOrder(); // open modal to set delivery
      return;
    }

    if (deliveryType === "delivery" && !address) {
      startOrder(); // force address step
      return;
    }

    // proceed payment logic here
    alert("Proceeding to payment...");
  };

  return (
    <div className="min-h-screen bg-background pt-20 px-4 pb-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-xl font-semibold">Checkout</h1>

          {items.length === 0 ? (
            <div className="p-6 border border-border rounded bg-white">
              <p className="text-text-muted">Your cart is empty</p>
              <Link href="/menu" className="text-primary underline">
                Go back to menu
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border border-border rounded p-3 bg-white"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <CartControls item={item} />
                  </div>

                  <p className="font-medium">Rs {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="space-y-4">
          {/* DELIVERY INFO */}
          <div className="border border-border rounded p-4 bg-white">
            <h2 className="font-semibold mb-2">Delivery</h2>

            {!deliveryType ? (
              <button
                onClick={startOrder}
                className="text-primary underline text-sm"
              >
                Set delivery method
              </button>
            ) : (
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-text-muted">Type:</span>{" "}
                  <span className="font-medium">
                    {deliveryType === "delivery" ? "Delivery" : "Pickup"}
                  </span>
                </p>

                {deliveryType === "delivery" && (
                  <p>
                    <span className="text-text-muted">Address:</span>{" "}
                    <span className="font-medium">{address || "Not set"}</span>
                  </p>
                )}

                <button
                  onClick={startOrder}
                  className="text-primary underline text-xs mt-2"
                >
                  Change
                </button>
              </div>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="border border-border rounded p-4 bg-white">
            <h2 className="font-semibold mb-3">Order Summary</h2>

            <div className="flex justify-between text-sm">
              <span>Total Items</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>Total Amount</span>
              <span className="font-semibold">Rs {totalAmount}</span>
            </div>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={handleCheckout}
            className={`w-full py-3 rounded text-white font-medium transition
              ${
                isDeliverySet
                  ? "bg-primary hover:bg-primary-hover"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            {isDeliverySet ? "Proceed to Payment" : "Set Delivery First"}
          </button>
        </div>
      </div>
    </div>
  );
}
