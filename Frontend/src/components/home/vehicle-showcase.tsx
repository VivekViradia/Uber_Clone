import Image from "next/image"
import { Button } from "@components/ui/button"

type VehicleCardProps = {
  title: string
  description: string
  price: string
  imageUrl: string
}

function VehicleCard({ title, description, price, imageUrl }: VehicleCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
      <div className="h-48 relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-500 font-bold">{price}</span>
          <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
            Select
          </Button>
        </div>
      </div>
    </div>
  )
}

export function VehicleShowcase() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our selection of luxury vehicles for your perfect ride experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VehicleCard
            title="Luxury Sedan"
            description="Premium comfort for up to 4 passengers"
            price="From $60"
            imageUrl="/images/sedan.png"
          />
          <VehicleCard
            title="Premium SUV"
            description="Spacious luxury for up to 6 passengers"
            price="From $80"
            imageUrl="/images/suv.png"
          />
          <VehicleCard
            title="Executive Van"
            description="Group travel with style for up to 10 passengers"
            price="From $120"
            imageUrl="/images/van.png"
          />
        </div>
      </div>
    </section>
  )
}
