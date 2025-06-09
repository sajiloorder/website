import { dummy_hero } from "@/lib/dummy_data";
import HeroSection from "../hero-section/HeroSection";

export default function CarouselSection() {
  return dummy_hero.map((item) => (
    <div key={item.id}>
      {item.title}
      {/* <HeroSection item={item} /> */}
    </div>
  ));
}
