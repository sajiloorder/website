import Button from "@/components/ui/buttons/Button";

export default function HeroSection({ item }: any) {
  return (
    <section className="h-[200px] sm:h-[250px] md:h-[90vh]  w-full flex flex-col md:flex-row justify-between p-4 md:p-8 bg-primary rounded-lg overflow-hidden">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 px-4 md:px-8">
        <h3 className="text-base sm:text-sm md:text-2xl font-semibold text-white normal-case ">{item?.title}</h3>
        <p className="hidden sm:block text-white text-sm md:text-lg">{item?.description}</p>
        <div className="flex flex-row justify-center w-ful sm:flex-row md:flex-col gap-2 mt-2">
          <Button variant="secondary" size="md" className="text-xs sm:text-sm">
            Order Now
          </Button>
          <Button variant="primary" size="md" className="text-xs sm:text-sm">
            View Menu
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex flex-1 justify-center items-center md:px-8">
        <img src="/images/b1.png" alt="Food Delivery" className="w-full h-full object-cover rounded-lg" />
      </div>
    </section>
  );
}
