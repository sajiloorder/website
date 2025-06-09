// components/BestSellers.tsx
import FoodCard from './FoodCard';

const foods = [
  {
    name: 'Spicy Chicken Biryani',
    image: '/images/chilly momo.jpg',
    price: 200,
    rating: 4.8,
    tag: 'Best Seller',
  },
  {
    name: 'Classic burger',
    image: '/images/burger.jpg',
    price: 8.49,
    rating: 4.6,
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/drinks.jpg',
    price: 10.99,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/sekwa.jpg',
    price: 10.99,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/chicken katti.jpg',
    price: 10.99,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/combo.jpeg',
    price: 10.99,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/sekwa.jpg',
    price: 10.99,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/chicken gravy.jpg',
    price: 350,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/drinks.jpg',
    price: 450,
    rating: 4.7,
    tag: 'Popular',
  },
  {
    name: 'Pepperoni Pizza',
    image: '/images/burger.jpg',
    price: 200,
    rating: 4.7,
    tag: 'Popular',
  },
];

export default function Popular() {
  return (
    <section className="py-6 px-2 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Popular order</h2>
      <div className="grid py-4 gap-8 sm:grid-cols-8 md:grid-cols-6">
        {foods.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </div>
    </section>
  );
}
