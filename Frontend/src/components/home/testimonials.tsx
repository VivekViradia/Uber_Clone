import Image from "next/image"
import { Star } from "lucide-react"

type TestimonialCardProps = {
  quote: string
  name: string
  title: string
  imageUrl: string
}

function TestimonialCard({ quote, name, title, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-5 w-5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied customers about their luxury travel experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The service was impeccable. The driver was professional, the car was immaculate, and the entire experience was seamless. I'll definitely be using LuxRide again."
            name="Sarah Johnson"
            title="Executive, Tech Corp"
            imageUrl="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="I've tried many luxury transportation services, but LuxRide stands out. The attention to detail and customer service are unmatched. My go-to for all my travel needs."
            name="Michael Chen"
            title="Business Traveler"
            imageUrl="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="For our wedding day, we wanted everything to be perfect. LuxRide delivered beyond our expectations. The fleet was stunning and made our special day even more memorable."
            name="Emily & David"
            title="Wedding Clients"
            imageUrl="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}
