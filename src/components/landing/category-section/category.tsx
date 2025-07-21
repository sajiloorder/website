import Image from "next/image";
import { dummy_menu_categories } from "@/lib/data/menu";
import SectionHead from "@/components/ui/section/section-head/SectionHead";

export default function Category() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHead title="Categories" />

      <div className="">
        <div className=" flex flex-row flex-nowrap overflow-x-scroll space-x-5">
          {dummy_menu_categories.map((cat) => (
            <div key={cat.name} className="   min-w-fit flex flex-col items-center justify-center  text-center cursor-pointer  ">
              <div className="w-[50px] h-[50px] rounded-full  items-center justify-center overflow-x-hidden border-1 border-orange-400">{/* <Image src={cat.image_url} alt={cat.name} width={80} height={80} className="object-cover w-full h-full" /> */}</div>
              <p className="text-sm py-2 font-semibold text-primary hover:opacity-80">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
