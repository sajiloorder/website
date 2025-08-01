"use client";
import { useState } from "react";
import { DummyMenuItemType } from "@/lib/types/menu";
import { IoAddOutline } from "react-icons/io5";
import DisplayMenuItem from "./DisplayMenuItem";

type ItemCardProps = {
  item: DummyMenuItemType;
};

export default function ItemCard({ item }: ItemCardProps) {
  const [itemDetails, setItemDetails] = useState<DummyMenuItemType | null>(null);

  return (
    <>
      <button onClick={() => setItemDetails(item)} className="  relative cursor-pointer hover:shadow-lg transition-all duration-300  ">
        <div key={item.name} className="bg-white rounded-md  shadow-md overflow-hidden  transition text-xs text-left">
          {/* image url will hadle later */}
          <img src={item.image_url} alt={item.name} className="w-full h-[100px] md:h-40 object-cover" />

          <div className="flex flex-col p-4 gap-2 h-[150px] md:auto ">
            <div className="flex  justify-between items-start gap-1">
              <h3 className="font-semibold  md:text-base text-primary ">{item.name}</h3>
              {/* just button icons */}
              <div className="cursor-pointer w-fit flex justify-center  items-center gap-2  text-black bg-transparent">
                <IoAddOutline size={22} className="text-whote" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="md:text-sm font-semibold ">Rs. {item.price}</p>
              <p className="md:text-sm text-gray-600  line-clamp-2 ">{item?.description}</p>
            </div>
          </div>
        </div>
      </button>
      {itemDetails && <DisplayMenuItem item={itemDetails} isOpen={true} onClose={() => setItemDetails(null)} />}
    </>
  );
}
