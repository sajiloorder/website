

export default function HeroSection() {
  return (
    
      <section className=" min max-h-screen flex flex-col  md:flex-row items-center justify-between px-8 py-2 bg-black max-w-7xl mx-auto">
        
          {/* Left Content */}
          <div className="text-center md:text-left px-10 md:w-1/2 mb-30">
            <h1 className="text-2xl md:text-2xl font-bold  text-white smoke mb-2">JUST A TAP AWAY !<br />
              YOUR TRUSTED DELIVERY PARTNER.
            </h1>
            <p className="text-white smoke text-lg mb-2">
              Fresh fast delivered to your doorstep. Supporting local people and local business in your hometown.

            </p>
            <div className="flex flex-col  sm:flex-row gap-4 justify-center  md:justify-start">
              <button className="border border-green-700 bg-teal-600 text-white smoke  px-2 py-0.5 rounded-lg hover:bg-red-500 transition">
                Order Now
              </button>
              <button className="border border-green-600 bg-teal-600 text-white  px-2 py-2 rounded-lg hover:bg-red-500 transition">
                See Menu
              </button>
            </div>
          </div>
        
        <div className="mb-30  md:mt-0  md:w-1/2 flex justify-center ">
          <img 
            src="/images/burger.jpg"
            alt="Food Delivery"
            className="w-full"
          />
        </div>

        {/* Right Image */}
      </section>
    

  );
}