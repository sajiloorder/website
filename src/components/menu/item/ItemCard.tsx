"use client";
import { useState } from "react";
import { DummyMenuItemType } from "@/lib/types/menu";
import { IoAddOutline } from "react-icons/io5";
import DisplayMenuItem from "./DisplayMenuItem";
import Button from "@/components/ui/buttons/Button";

type ItemCardProps = {
  item: DummyMenuItemType;
};

export default function ItemCard({ item }: ItemCardProps) {
  const [itemDetails, setItemDetails] = useState<DummyMenuItemType | null>(null);

  return (
    <>
      <button onClick={() => setItemDetails(item)} className=" relative cursor-pointer hover:shadow-lg transition-all duration-300  ">
        <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden  transition">
          {/* image url will hadle later */}
          <img src={item.image_url} alt={item.name} className="w-full h-40 object-cover" />

          <div className="flex flex-col p-4 gap-2">
            <div className="flex  justify-between items-start gap-1">
              <h3 className="font-semibold text-base text-primary">{item.name}</h3>
              {/* just button icons */}
              <div className="cursor-pointer w-fit flex justify-center  items-center gap-2  text-black bg-transparent">
                <IoAddOutline size={22} className="text-whote" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-sm font-semibold ">Rs. {item.price}</p>
              <p className="text-sm text-gray-600 text-left line-clamp-2 ">{item?.description}</p>
            </div>
          </div>
        </div>
      </button>
      {itemDetails && <DisplayMenuItem item={itemDetails} isOpen={true} onClose={() => setItemDetails(null)} />}
    </>
  );
}
