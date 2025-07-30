"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,

    img: "/images/chilly momo.jpg",
    title: "50% OFF Your First Order!",
    subtitle: "Fresh meals delivered hot and fast.",
    btnText: "Order Now",
  },
  {
    id: 2,
    img: "/images/drinks.jpg",
    title: "Free Delivery Over ₹500",
    subtitle: "Enjoy savings and tasty bites!",
    btnText: "Start Eating",
  },
  {
    id: 3,
    img: "/images/tom.jpg",
    title: "Midnight Cravings?",
    subtitle: "We deliver 24/7, anytime, anywhere.",
    btnText: "Get Late Night Food",
  },
];

export default function AdCarousel() {
  return (
    <section className="  w-full h-auto px-4 py-4 ">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: true }} loop className="rounded-xl overflow-hidden">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" relative w-full h-[100px] md:w-4/5 md:h-[225px]   mx-auto overflow-hidden rounded-xl">
              <img src={slide.img} alt={slide.title} className=" w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/40 flex flex-row md:flex-col justify-center items-center text-white px-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="text-sm md:text-lg mt-2">{slide.subtitle}</p>
                <button className=" h-[35px]  mt-4 bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-white text-sm md:text-base shadow">{slide.btnText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
