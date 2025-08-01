"use client";
import Image from "next/image";
import { dummy_menu_categories } from "@/lib/data/menu";
import SectionHead from "@/components/ui/section/section-head/SectionHead";

export default function Category() {
  return (
    <section className="flex flex-col mt-2 gap-2 ">
      <SectionHead title="Categories" />

      <div className="overflow-x-auto  scrollbar-hide">
        <div className="flex flex-nowrap gap-7  pb-6">
          {dummy_menu_categories.map((cat) => (
            <div key={cat.name} className="min-w-fit flex flex-col items-center  text-left cursor-pointer">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-gray-400">
                <Image src={cat.image} alt={cat.name} width={60} height={60} className="object-cover w-full h-full" />
              </div>
              <p className=" flex  justify-start text-sm mt-2 font-semibold   hover:opacity-80">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
