"use client";
import { ItemType } from "@/lib/types/menu";
import Link from "next/link";
type ItemCardProps = {
  item: ItemType;
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link key={item.id} href={`/menu/${item.id}`}>
      <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <img src={item.image_url} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-4 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            {/* {item.is_popular && <span className="text-xs bg-yellow-400 text-white px-2 py-0.5 rounded-full">Popular</span>} */}
          </div>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-500">Category:category name</p>
          <p className="text-md font-bold text-primary">Rs. {item.price}</p>
          <p className={`text-sm ${item.is_active ? "text-green-600" : "text-red-500"}`}>{item.is_active ? "Available" : "Out of Stock"}</p>
        </div>
      </div>
    </Link>
  );
}
