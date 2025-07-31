"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { dummy_menu_items } from "@/lib/data/menu";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function MenuItemPage() {
  // redux cart
  const { cart, items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const { item_id } = useParams();
  const [item, setItem] = useState<any>(null);
  const found = dummy_menu_items.find((f) => String(f.id) === String(item_id));
  if (!found) {
    return <p className="text-center text-red-500 mt-10">Item not found</p>;
  }

  const similarItems = dummy_menu_items.filter((item) => item.category === found.category && item.id !== found.id);

  useEffect(() => {
    const found = dummy_menu_items.find((f) => String(f.id) === String(item_id));
    setItem(found);
  }, [item_id]);

  if (!item) {
    return <div className="p-6 text-center text-gray-500">Loading item...</div>;
  }

  function handleAddToCart() {
    const data = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    console.log("dispatched");
    dispatch(addToCart(data));
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-xl rounded-xl overflow-hidden">
        <img src={item.image_url} alt={item.name} className="w-full h-80 object-cover" />
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>

          {item.is_popular && <span className="inline-block bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">Popular</span>}

          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-500 text-sm">Category: {item.name}</p>

          <p className="text-2xl font-bold text-primary">Rs. {item.price}</p>

          <p className={`text-md font-medium ${item.is_available ? "text-green-600" : "text-red-500"}`}>{item.is_available ? "Available" : "Out of Stock"}</p>

          <button onClick={handleAddToCart} disabled={!item.is_available} className={`mt-4 w-full py-2 cursor-pointer text-white rounded-md text-lg transition ${item.is_available ? "bg-primary hover:bg-primary-dark" : "bg-gray-400 cursor-not-allowed"}`}>
            {item.is_available ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Similar Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {similarItems.map((item) => (
            <div key={item.category} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image_url} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">Category: {item.category}</p>
                <p className="text-primary font-bold mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
