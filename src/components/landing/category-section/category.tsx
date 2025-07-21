import Image from "next/image";
import { dummy_menu_categories } from "@/lib/data/menu";
// const categories = [
//     { name: 'Burger', image: '/images/burger.jpg' },
//     { name: 'Biryani', image: '/images/mutton.jpg' },
//     { name: 'Momo', image: '/images/chilly momo.jpg' },
//     { name: 'Roll', image: '/images/chicken katti.jpg' },
//     { name: 'Drinks', image: '/images/drinks.jpg' },
//     { name: 'Combo', image: '/images/combo.jpeg' },
//     { name: 'Sekwa', image: '/images/sekwa.jpg' },
//     { name: 'Breakfast', image: '/images/burger.jpg' },
//     { name: 'Salad', image: '/images/salad.jpg' },
//     { name: 'Pizza', image: '/images/burger.jpg' },
//     { name: 'Offer', image: '/images/chilly momo.jpg' },
//     { name: 'Recommended', image: '/images/combo.jpeg' },
//     { name: 'popular', image: '/images/drinks.jpg' },
// ];

export default function Category() {
  return (
    <section className="py-4 ml-30 max-w-7xl items-center overflow-x-hidden  justify-center sm:px-12 lg:px-2bg-red-50">
      <h2 className="text-3xl font-bold  mb-4">Explore Categories</h2>

      <div className="flex space-x-4 items-center  justify-center  scrollbar-hide">
        {dummy_menu_categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center justify-center  text-center cursor-pointer group">
            <div className="w-20 h-20 rounded-full  items-center justify-center overflow-x-hidden border-1 border-orange-400">{/* <Image src={cat.image_url} alt={cat.name} width={80} height={80} className="object-cover w-full h-full" /> */}</div>
            <p className="text-sm py-2 font-semibold text-primary hover:opacity-80">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
