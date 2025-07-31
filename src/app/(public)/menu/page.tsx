"use client";
import React, { useState } from "react";
import { dummy_menu_items } from "@/lib/data/menu";
import { categories } from "@/lib/data/menu";
import Link from "next/link";

/* const categories = [
  { id: 1, name: "Momo" },
  { id: 2, name: "Burger" },
  { id: 3, name: "Pizza" },
  { id: 4, name: "Drinks" },
  { id: 6, name: "Chowmein" },
  { id: 7, name: "Biryani" },
  { id: 8, name: "Chilly" },
  { id: 9, name: "Snack" },
  { id: 10, name: "Sekwa" },
  { id: 11, name: "Veg" },
  { id: 12, name: "Roll" },
  { id: 13, name: "Naan" },


]; */

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryName = (id: number) => {
    return categories.find((cat) => cat.id === id)?.name || "Unknown";
  };

  const filteredItems = dummy_menu_items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || getCategoryName(Number(item?.category)) === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Search */}
      <div className="flex justify-center mb-10">
        <input type="text" placeholder="Search food..." className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <h1 className="text-2xl font-bold mb-6 mr-6 text-center">Our Menu.. </h1>

      {/* Category Filter */}
      <div className="scrollbar-hide ">
        <div className="flex flex-row gap-3 overflow-x-auto md:overflow-visible md:flex-wrap justify-start md:justify-center mt-2 mb-10 px-2 scrollbar-hide scroll-smooth snap-x">
          {["All", ...categories.map((cat) => cat.name)].map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={` text-black font-serif py-2 text-center px-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${selectedCategory === cat ? "bg-primary text-white" : "border-gray-300 hover:bg-gray-100"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-4">
        {filteredItems.map((item) => (
          // replace with item card component
          <Link key={item.id} href={`/menu/${item.id}`}>
            <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image_url} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.is_popular && <span className="text-xs bg-yellow-400 text-white px-2 py-0.5 rounded-full">Popular</span>}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-500">Category: {getCategoryName(item.id)}</p>
                <p className="text-md font-bold text-primary">Rs. {item.price}</p>
                <p className={`text-sm ${item.is_available ? "text-green-600" : "text-red-500"}`}>{item.is_available ? "Available" : "Out of Stock"}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
