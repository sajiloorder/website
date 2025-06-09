export default function HeroSection({ item }: any) {
  return (
    <section className=" flex flex-col h-[225px] justify-between  items-center w-full relative overflow-hidden bg-black rounded-lg md:flex-row  md:h-[500px] ">
      {/* Left Content */}
      <div className=" z-10 w-full px-10 pt-10 md:w-2/3 md:pt-0 flex flex-col justify-center items-start  gap-2   ">
        <h1 className="text-2xl md:text-2xl font-bold  text-white smoke mb-2">{item?.title}</h1>
        <p className="hidden md:block text-white smoke text-lg mb-2 ">{item?.description}</p>
        <div className=" gap-4 flex flex-col justify-between  ">
          <button className="border border-green-700 bg-teal-600 text-white smoke  px-2 py-0.5 rounded-lg hover:bg-red-500 transition">Order Now</button>
          <button className="border border-green-600 bg-teal-600 text-white  px-2 py-2 rounded-lg hover:bg-red-500 transition">See Menu</button>
        </div>
      </div>

      <div className=" sm:absolute sm:bottom-10 sm:left-1/4 z-9 w-full md:relative   md:w-1/3 flex-row   ">
        <img src={item?.img_url} alt="Food Delivery" className="w-auto h-[350px]" />
      </div>

      {/* Right Image */}
    </section>
  );
}
