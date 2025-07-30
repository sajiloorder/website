import Image from "next/image";
import { dummy_menu_categories } from "@/lib/data/menu";
import SectionHead from "@/components/ui/section/section-head/SectionHead";


export default function Category() {
  return (
    <section className="flex flex-col mt-2 gap-2 ">
      <div className="mt-6 flex justify-center">
        <SectionHead title="Categories" />
      </div>

      <div className="overflow-x-auto  scrollbar-hide">
        <div className="flex flex-nowrap gap-7  pb-6">
          {dummy_menu_categories.map((cat) => (
            <div
              key={cat.name}
              className="min-w-fit flex flex-col items-center  text-center cursor-pointer"
            >
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-orange-400">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm mt-2 font-semibold text-primary hover:opacity-80">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

