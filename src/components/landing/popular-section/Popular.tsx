import SectionHead from "@/components/ui/section/section-head/SectionHead";
import type { DummyMenuItemType } from "@/lib/types/menu";
import { dummy_menu_items } from "@/lib/data/menu";
import ItemCard from "@/components/menu/item/ItemCard";

const menuItems = dummy_menu_items as DummyMenuItemType[];

export default function All() {
  return (
    <section>
      <SectionHead title="Popular" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 space-y-4 gap-2 space-x-2 ">
        {menuItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
