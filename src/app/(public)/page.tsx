import HeroSection from "@/components/landing/hero-section/HeroSection";
import { dummy_main_hero } from "@/lib/dummy_data";
/* import Category from "@/components/landing/category-section/category"; */
import Popular from "@/components/landing/popular-section/Popular";
import All from "@/components/landing/all-section/All";
import DeliverySteps from "@/components/landing/delivery-step/DeliverySteps";
import Footer from "@/components/footer/Footer";
import Category from "@/components/landing/category-section/Category";
import MainLayout from "@/components/ui/layout/MainLayout";
// import CarouselSection from "@/components/landing/carousel-section/CarouselSection";
// import PartnerSection from "@/components/landing/partner-restaurent/partnerRestaurent";

export default function LandingPage() {
  return (
    <MainLayout>
      {/*nav section */}
      {/* hero section */}
      {/*       <CarouselSection />
       */}{" "}
      <HeroSection item={dummy_main_hero} />
      {/* category section */}
      {<Category />}
      {/* popular section */}
      <All />
      <Popular />
      {/* drinks section */}
      <DeliverySteps />
    </MainLayout>
  );
}
