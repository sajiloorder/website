// components/PopularItems.tsx
import Image from 'next/image';

const popularItems = [
  {
    id: 1,
    name: 'Momo',
    image: '/images/chilly momo.jpg',
    rating: 4.5,
    price: 9.99,
  },
  {
    id: 2,
    name: 'Burger',
    image: '/images/burger.jpg',
    rating: 4.7,
    price: 7.49,
  },
  {
    id: 3,
    name: 'Sekwa',
    image: '/images/sekwa.jpg',
    rating: 4.8,
    price: 14.99,
  },
  {
    id: 4,
    name: 'Drinks',
    image: '/images/drinks.jpg',
    rating: 4.6,
    price: 12.99,
  },
  {
    id: 4,
    name: 'Drinks',
    image: '/images/drinks.jpg',
    rating: 4.6,
    price: 12.99,
  },
  {
    id: 4,
    name: 'Drinks',
    image: '/images/drinks.jpg',
    rating: 4.6,
    price: 12.99,
  },
  {
    id: 4,
    name: 'Combo',
    image: '/images/combo.jpeg',
    rating: 4.6,
    price: 12.99,
  },
];

export default function PopularItems() {
  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Popular Dishes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularItems.map((item) => (
          <div
            key={item.id}
            className="bg-black rounded-e-md shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-25 object-cover"
            />

            <div className="p-1">
              <h3 className="text-lg text-white font-serif">{item.name}</h3>
              <div className="flex items-center text-sm text-yellow-500 mt-1">
                ⭐⭐⭐⭐ {item.rating.toFixed(1)} / 5
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-lg text-white font-bold">${item.price.toFixed(2)}</span>
                <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600">
                  Order
                </button>
                 
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
