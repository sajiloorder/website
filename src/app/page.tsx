import HeroSection from "@/components/landing/hero-section/HeroSection";
// import Category from '@/components/landing/category-section/Category';
import Popular from "@/components/landing/popular-section/Popular";
import All from "@/components/landing/all-section/All";
import DeliverySteps from "@/components/landing/delivery-step/DeliverySteps";
import Footer from "@/components/footer/Footer";
import CarouselSection from "@/components/landing/carousel-section/CarouselSection";

export default function LandingPage() {
  return (
    <>
      {/*nav section */}
      {/* hero section */}
      <CarouselSection />
      <HeroSection />
      {/* category section */}
      {/* <Category /> */}
      {/*popular section */}
      <All />
      <Popular />
      {/* drinks section */}
      <DeliverySteps />

      <Footer />
    </>
  );
}
