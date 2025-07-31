"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";
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
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" absolute bg-white right-[50px] top-[55px] h-[50vh] w-[400px] shadow-lg border border-gray-200 ">
      <div className="p-4">
        <div className="">
          {items.length == 0 && <p className="text-secondary">Cart is empty</p>}

          {/* items */}

          {items.length > 0 && (
            <>
              <div className="w-full  mt-4 ">
                {items.map((item: any) => (
                  <div key={item.id} className="w-full flex justify-between items-center ">
                    <div className="flex flex-col ">
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
                    <div className="text-sm text-black mt">
                      <p>
                        Rs {item.price} x {item.quantity}
                      </p>
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 text-xs underline cursor-pointer ">
                        Remove Item
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex ">
                  <div className=" w-full flex flex-col gap-2 my-5">
                    <p>Total Quantity: {totalQuantity}</p>
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    <button onClick={handleClearCart} className="mt-2 bg-red-500 text-white px-4 py-2">
                      Clear Cart
                    </button>
                  </div>

                  {/*  */}
                  <div className="absolute w-full bottom-10 left-0 flex justify-center items-center h-auto  ">
                    <button onClick={() => {}} className={` min-w-fit px-10 py-2 bg-primary hover:bg-primary-dark cursor-pointer text-white rounded-md text-lg transition `}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
