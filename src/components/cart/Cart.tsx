"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
export default function Cart() {
  const { items, totalAmount, totalQuantity } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleDecrement = (id: any, quantity: number) => {
    //
    dispatch(
      updateQuantity({
        id: id,
        quantity: quantity - 1,
      })
    );
  };

  const handleIncrement = (id: any, quantity: number) => {
    //
    dispatch(
      updateQuantity({
        id: id,
        quantity: quantity + 1,
      })
    );
  };

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeFromCart({ id }));
    console.log("Item removed from cart:", id);
  };
  return (
    <div className=" absolute bg-white right-[50px] top-[55px] h-[70vh] w-[400px] shadow-lg border border-gray-200 ">
      <div className="p-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          {items.length == 0 && <p className="text-secondary">Cart is empty</p>}

          {/* items */}

          {items.length > 0 && (
            <>
              {items.map((item: any) => (
                <div key={item.id} className="w-full flex flex-row justify-between items-center my-4">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold">{item.name}</p>

                    <div className="flex justify-start gap-2 items-center text-sm">
                      <button onClick={() => handleDecrement(item.id, item.quantity)} className="p-1 h-[25px] w-[25px] border-[0.5px] border-primary cursor-pointer ">
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => handleIncrement(item.id, item.quantity)} className="p-1 h-[25px] w-[25px] border-[0.5px] border-primary cursor-pointer ">
                        +
                      </button>
                    </div>
                  </div>

                  {/* update button */}

                  <div>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 text-xs underline cursor-pointer ">
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}

              {/*  */}
              <button onClick={() => {}} className="a">
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
