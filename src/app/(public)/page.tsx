"use client";
import Popular from "@/components/landing/popular-section/Popular";
import All from "@/components/landing/all-section/All";
import DeliverySteps from "@/components/landing/delivery-step/DeliverySteps";
import MainLayout from "@/components/ui/layout/MainLayout";
import Category from "@/components/landing/Category";
import OrderModal from "@/components/landing/start-order/OrderModal";
import StartOrderSection from "@/components/landing/start-order/StartOrderSection";
import { useEffect, useState, } from "react";
import WelcomeModal from "@/components/welcome-modal/WelcomeModal";


export default function LandingPage() {
    const [showModal, setShowModal] = useState(false);

     useEffect(() => {
    // Show popup when page loads
    setShowModal(true);

    // Hide popup after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <MainLayout>
       <WelcomeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      {/*nav section */}
      {/* hero section <HeroSection item={dummy_main_hero} /> */}
      {/* <CarouselSection /> */}
      {/* category section */}

      <StartOrderSection />

      <Category />
      {/* popular section */}
      <All />
      <Popular />
      {/* drinks section */}
      <DeliverySteps />
      <OrderModal />
    </MainLayout>
  );
}
