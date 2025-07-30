"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import MainLayout from "@/components/ui/layout/MainLayout";

import { dummy_menu_items } from "@/lib/data/menu";
import Category from "@/components/landing/category-section/category";



export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = dummy_menu_items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <MainLayout>
      <div className=" bg-white  rounded-2xl overflow-hidden ">
        {/* Search Bar */}
        <Category />
        <div className="max-w-md mx-auto mt-6 mb-6">
          <input type="text" placeholder="Search food..." className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <h1 className=" text-2xl pl-10 font-bold pb-2 font-inter mb-6">Our menu</h1>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-2 max-w-6xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

                <Image src={item.image_url} alt={item.name} width={200} height={150} className="w-full h-35 object-cover" />
                <div className="p-2 bg-orange-50 ">
                  <h3 className="text-lg font-serif  text-black truncate">{item.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    {item.category} <span className="text-black "></span> <span className=" font-inter ml-5 flex justify-end  font-bold text-black">Rs {item.price.toFixed()}</span>
                  </div>
                  <div className="flex justify-center">
                    <Link href="/order">
                      <button className="w-auto p-4 m-2 bg-primary text-white text-sm py-1 text-center item-center  rounded-lg hover:opacity-80 transition">Add to Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No items found.</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
