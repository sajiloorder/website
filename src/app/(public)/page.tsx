import HeroSection from "@/components/landing/hero-section/HeroSection";
import { dummy_main_hero } from "@/lib/dummy_data";

import Popular from "@/components/landing/popular-section/Popular";
import All from "@/components/landing/all-section/All";
import DeliverySteps from "@/components/landing/delivery-step/DeliverySteps";
import MainLayout from "@/components/ui/layout/MainLayout";
import CarouselSection from "@/components/landing/carousel-section/CarouselSection";
import Category from "@/components/landing/Category";
export default function LandingPage() {
  return (
    <MainLayout>
      {/*nav section */}
      {/* hero section <HeroSection item={dummy_main_hero} /> */}
      <CarouselSection />
      {/* category section */}
      <Category />
      {/* popular section */}
      <All />
      <Popular />
      {/* drinks section */}
      <DeliverySteps />
    </MainLayout>
  );
}
