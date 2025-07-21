"use client";

import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const offers = [
  {
    title: "50% OFF on First Order",
    description: "Enjoy half off your first meal delivery today!",
    image: "/images/combo.jpeg",
  },
  {
    title: "Free Delivery Over ₹499",
    description: "Order more than ₹499 and get free delivery.",
    image: "/images/pizza.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Free Delivery Over ₹499",
    description: "Order more than ₹499 and get free delivery.",
    image: "/images/pizza.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Free Delivery Over ₹499",
    description: "Order more than ₹499 and get free delivery.",
    image: "/images/pizza.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected burgers and pizzas. Limited time only!",
    image: "/images/chilly momo.jpg",
  },
  {
    title: "Free Delivery Over ₹499",
    description: "Order more than ₹499 and get free delivery.",
    image: "/images/pizza.jpg",
  },
];

export default function OfferSection() {
  return (<div>
    <section className="py-12 px-4 justify-center bg-orange-50">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-mono font-bold text-gray-800 mb-2"> Hot Offers</h2>
        <p className="text-gray-600 text-sm md:text-base">Grab the best deals before they're gone!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-center gap-4 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl text-left hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={400}
              height={250}
              className=" w-full h-48 object-cover rounded-xl  mb-2"
            />

            <Link href="/order">
              <button className=" p-4 mx-14 bg-primary text-white text-sm py-1 text-center item-center  rounded-lg hover:opacity-80 transition">
                Add to Cart
              </button>
            </Link>

            <div className="text-center p-2 mx-auto">
              <h3 className="text-md font-semibold  text-gray-800">{offer.title}</h3>
              <p className="text-sm text-gray-600 mb-2 ">{offer.description}</p>
            </div>
          </motion.div>

        ))}
      </div>
    </section>
    <Footer />

  </div>


  );
}
