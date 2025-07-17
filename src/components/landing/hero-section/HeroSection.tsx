import Image from "next/image";

export default function HeroSection({ item }: any) {
  return (
    <section className="  h-[175px] md:h-[70vh] w-full flex flex-col   md:flex-row justify-between  p-4  bg-primary  rounded-lg  ">
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

// export default function HeroSection({ item }: any) {
//   return (
//     <section className=" flex flex-col h-[200px] justify-between  items-center w-full relative overflow-hidden bg-primary rounded-lg md:flex-row  md:h-[500px] ">
//       {/* Left Content */}
//       <div className=" z-10 w-full shrink-1 px-10 pt-10 md:w-2/3 md:pt-0 flex flex-col justify-center items-start  gap-2   ">
//         <h1 className="text-2xl md:text-2xl font-bold  text-white smoke mb-2">{item?.title}</h1>
//         <p className="hidden md:block text-white smoke text-lg mb-2 ">{item?.description}</p>
//         <div className=" gap-4 flex flex-col justify-between  ">
//           <button className=" text-black bg-white outline-none smoke  px-2 py-1 rounded-lg hover:opacity-80 transition">Order Now</button>
//           <button className="  text-black bg-white outline-none  px-2 py-1 rounded-lg hover:opacity-90 transition">See Menu</button>
//         </div>
//       </div>

//       <div className=" shrink-1  sm:absolute sm:bottom-10 sm:left-1/4 z-9 w-full md:relative   md:w-1/3 flex-row   ">
//         <img src={item?.img_url} alt="Food Delivery" className="w-auto h-[350px]" />
//       </div>

//       {/* Right Image */}
//     </section>
//   );
// }
