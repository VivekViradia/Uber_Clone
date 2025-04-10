import Image from "next/image"
import { Button } from "@components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative h-[600px] w-full">
        <Image src="/images/home_image.png" alt="Luxury car" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              <span className="block">Luxury Travel</span>
              <span className="block text-amber-500">Redefined</span>
            </h1>
            <p className="text-lg text-white/90">
              Experience the perfect blend of comfort, style, and reliability with our premium transportation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 text-black hover:bg-amber-600 px-8 py-6 text-lg">Book Now</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
