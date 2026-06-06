// components/BestSellers.tsx
import SectionHead from "@/components/ui/section/section-head/SectionHead";

import { dummy_menu_items } from "@/lib/data/menu";
import ItemCard from "@/components/menu/item/ItemCard";

export default function All() {
  return (
    <section>
      <SectionHead title="All" />
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 space-y-4 gap-2 space-x-2 ">
        {dummy_menu_items.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
