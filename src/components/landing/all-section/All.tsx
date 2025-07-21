// components/BestSellers.tsx
import SectionHead from "@/components/ui/section/section-head/SectionHead";
import FoodCard from "./FoodCard";

const foods = [
  {
    name: "Spicy Chicken Biryani",
    image: "/images/chilly momo.jpg",
    price: 200,
    rating: 4.8,
    tag: "Best Seller",
  },
  {
    name: "Classic burger",
    image: "/images/burger.jpg",
    price: 8.49,
    rating: 4.6,
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/drinks.jpg",
    price: 10.99,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/sekwa.jpg",
    price: 10.99,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/chicken katti.jpg",
    price: 10.99,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/combo.jpeg",
    price: 10.99,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/sekwa.jpg",
    price: 10.99,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/chicken gravy.jpg",
    price: 350,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/drinks.jpg",
    price: 450,
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/burger.jpg",
    price: 200,
    rating: 4.7,
    tag: "Popular",
  },
];

export default function All() {
  return (
    <section>
      <SectionHead title="All" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6  py-4  gap-6">
        {foods.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </div>
    </section>
  );
}
