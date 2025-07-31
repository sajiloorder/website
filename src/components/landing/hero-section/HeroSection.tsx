import Image from "next/image";

export default function HeroSection({ item }: any) {
  return (
    <section className="  h-[175px] md:h-[90vh] w-full flex flex-col   md:flex-row justify-between  p-4  bg-primary  rounded-lg  ">
      {/* left */}
      <div className=" flex-1 flex flex-col justify-center items-start gap-2 ">
        <h3 className="text-sm font-semibold text-white  ">{item?.title}</h3>
        <p className="hidden md:block text-white  text-lg  ">{item?.description}</p>
        <div className="  flex flex-row md:flex-col justify-start gap-4  ">
          <button className="  text-black bg-white outline-none   px-2 py-1 rounded-lg hover:opacity-80 transition">Order Now</button>
          <button className="  text-black bg-white outline-none  px-2 py-1 rounded-lg hover:opacity-90 transition">See Menu</button>
        </div>
      </div>
      {/* right */}
      <div className=" hidden md:flex flex-1  flex-row justify-center items-center w-full overflow-hidden  rounded-lg ">
        <img src={"/images/b1.png"} alt="Food Delivery" className="w-auto h-full object-cover " />
      </div>
    </section>
  );
}
