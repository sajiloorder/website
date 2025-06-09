// components/FoodCard.tsx
import Image from 'next/image';

export default function FoodCard({
  name,
  image,
  price,
  rating,
  tag,
}: {
  name: string;
  image: string;
  price: number;
  rating: number;
  tag?: string;
}) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-200">
      {/* Tag */}
      {tag && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          {tag}
        </span>
      )}

      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={200}
        height={150}
        className="w-full h-35 object-cover"
      />

      {/* Content */}
      <div className="p-2 ">
        <h3 className="text-lg font-serif  text-black truncate">{name}</h3>
        <div className="flex items-center text-sm text-red-700">
          ⭐⭐⭐ {rating.toFixed(1)} <span className="text-black ">•</span>{' '}
          <span className="ml-2 font-serif  pl-8 font-bold text-black">Rs.{price.toFixed(0)}</span>
        </div>
        <button className="w-full  bg-teal-800 text-white text-sm py-1  rounded-lg hover:bg-red-500 transition">
          order now
        </button>
      </div>
    </div>
  );
}
