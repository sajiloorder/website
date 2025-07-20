'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer/Footer';

const menuItems = [
  { id: 1, name: 'Drinks', category: 'Pizza', price: 12.99, image: '/images/drinks.jpg' },
  { id: 2, name: 'Cheeseburger', category: 'Burgers', price: 9.49, image: '/images/burger.jpg' },
  { id: 3, name: 'Chicken Biryani', category: 'Biryani', price: 11.99, image: '/images/combo.jpeg' },
  { id: 4, name: 'Sushi Platter', category: 'Japanese', price: 15.99, image: '/images/mutton.jpg' },
  { id: 5, name: 'fast', category: 'Fast Food', price: 15.99, image: '/images/drinks.jpg' },
  { id: 6, name: 'Drinks', category: 'Drinks', price: 15.99, image: '/images/drinks.jpg' },
  { id: 7, name: 'Chowmein', category: 'Chowmein', price: 15.99, image: '/images/mutton.jpg' },
  { id: 9, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 10, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 11, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 12, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 13, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 14, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 15, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 16, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 17, name: 'Momo', category: 'Momo', price: 15.99, image: '/images/chilly momo.jpg' },
  { id: 18, name: 'Chicken Biryani', category: 'Biryani', price: 11.99, image: '/images/combo.jpeg' },
  { id: 19, name: 'Chicken Biryani', category: 'Biryani', price: 11.99, image: '/images/combo.jpeg' },
  { id: 20, name: 'Chicken Biryani', category: 'Biryani', price: 11.99, image: '/images/combo.jpeg' },
  { id: 21, name: 'Chicken Biryani', category: 'Biryani', price: 11.99, image: '/images/combo.jpeg' },
];

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-white  rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-200">
      <h1 className="flex justify-center text-2xl pr-8 font-bold  mb-6">Our Menu</h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search food..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-2 max-w-6xl mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="w-full h-35 object-cover"
              />
              <div className="p-2 bg-orange-50 ">
                <h3 className="text-lg font-serif  text-black truncate">{item.name}</h3>
                <div className="flex items-center text-sm text-gray-400">
                  {item.category} <span className="text-black "></span>{' '}
                  <span className=" font-serif ml-5  font-bold text-black">Rs{item.price.toFixed(2)}</span>
                </div>
                <div className='flex justify-center'>
                  <Link href="/order">
                    <button className="w-auto p-4 m-2 bg-primary text-white text-sm py-1 text-center item-center  rounded-lg hover:opacity-80 transition">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <Footer />
    </div>

  );
}
