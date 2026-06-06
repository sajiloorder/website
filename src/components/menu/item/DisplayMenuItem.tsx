"use client";
import React from "react";
import { DummyMenuItemType } from "@/lib/types/menu";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, closeCartMenu } from "@/store/cartSlice";
import Button from "@/components/ui/buttons/Button";

type ModalProps = {
  item: DummyMenuItemType;
  isOpen: boolean;
  onClose: () => void;
};

import useOrder from "@/hooks/useOrder";

export default function DisplayMenuItem({ item, isOpen, onClose }: ModalProps) {
  const dispatch = useDispatch();

  const { deliveryType, address, startOrder } = useOrder();

  const isOrderConfigured =
    deliveryType && (deliveryType === "pickup" || address);

  function handleAddToCart() {
    // Force user to choose delivery/pickup first
    if (!isOrderConfigured) {
      onClose(); // close food modal
      startOrder(); // open delivery modal
      return;
    }

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
      }),
    );

    onClose();
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 cursor-pointer "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 pt-[100px] md:p-6 min-w-[300px] max-w-[1000px] h-auto  relative"
      >
        <button
          className="absolute top-5 right-6 cursor-pointer  text-black rounded-full"
          onClick={onClose}
          aria-label="Close"
        >
          <IoCloseOutline size={30} />
        </button>
        {/* main content */}
        <section>
          <div className=" p-6 grid md:grid-cols-2 gap-6 bg-white shadow-xl  rounded-xl overflow-hidden ">
            {/* image  */}
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-80 object-cover rounded-md"
            />
            {/* content */}
            <div className=" relative flex flex-col gap-2 ">
              <h3 className="text-xl font-semibold text-primary">
                {item.name}
              </h3>
              <p className="text-base font-semibold">Rs. {item.price}</p>

              <div className="text-gray-600">
                <p>{item.description}</p>
              </div>

              <p
                className={`text-md font-medium ${item.is_available ? "text-green-600" : "text-red-500"}`}
              >
                {item.is_available ? "Available" : "Out of Stock"}
              </p>
              {/* options */}
              <ul className="list-decimal pl-5 text-gray-600">
                <li>option </li>
                <li>oprion </li>
                <li>oprion </li>
              </ul>
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="sm"
                disabled={!item.is_available}
                className={` absolute bottom-0 right-0 mt-4 w-full py-2 cursor-pointer text-white rounded-md text-base transition ${item.is_available ? "bg-primary hover:bg-primary-dark" : "bg-gray-400 cursor-not-allowed"}`}
              >
                <div className="flex justify-center items-center gap-2">
                  <span>{item.is_available ? "Add " : "Unavailable"}</span>
                  <span>{item.price > 0 && ` Rs. ${item.price}`}</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
