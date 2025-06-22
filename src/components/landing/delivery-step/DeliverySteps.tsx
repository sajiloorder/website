// components/DeliverySteps.tsx

import Image from "next/image";

const steps = [
  {
    image: "/images/food-searching.jpg",
    title: "Choose Your Meal",
    description: "Explore a wide variety of dishes and pick your favorites.",
  },
  {
    image: "/images/order-com.jpg",
    title: "Place Your Order",
    description: "Seamless checkout with multiple payment options.",
  },
  {
    image: "/images/enjoy.jpg",
    title: "Fast Delivery",
    description: "Sit back and relax while your food comes to you hot and fresh.",
  },
];

export default function DeliverySteps() {
  return (
    <section className="relative  bg-red-50 rounded-md mb-2 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Simple Steps to Delicious Meals
        </h2>
        <p className="text-gray-800 mb-12 text-lg">
          Ordering food has never been easier. Here's how it works:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transform transition duration-300"
            >
              <div className="w-full h-40 relative mb-2">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-2xl  text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
