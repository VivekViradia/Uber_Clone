import type React from "react"
import { Car, User, Clock, Shield } from "lucide-react"

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose LuxRide</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the difference with our premium service features</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-black" />}
            title="24/7 Service"
            description="Available whenever you need us, day or night"
          />
          <FeatureCard
            icon={<User className="h-6 w-6 text-black" />}
            title="Professional Drivers"
            description="Experienced, vetted, and courteous chauffeurs"
          />
          <FeatureCard
            icon={<Car className="h-6 w-6 text-black" />}
            title="Premium Vehicles"
            description="Luxury fleet maintained to the highest standards"
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-black" />}
            title="Safety First"
            description="Your security is our top priority"
          />
        </div>
      </div>
    </section>
  )
}
