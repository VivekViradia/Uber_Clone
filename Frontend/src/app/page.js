'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeroSection } from "@components/home/hero-section"
import { BookingForm } from "@components/home/booking-form"
import { VehicleShowcase } from "@components/home/vehicle-showcase"
import { FeaturesSection } from "@components/home/features-section"
import { Testimonials } from "@components/home/testimonials"
import { CTASection } from "@components/home/cta-section"

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <BookingForm />
        <VehicleShowcase />
        <FeaturesSection />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  )
}
