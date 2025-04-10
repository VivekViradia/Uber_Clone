import type React from "react"
import { Car } from "lucide-react"

type AuthSidebarProps = {
  title: string
  description: string
  features: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export const AuthSidebar = ({ title, description, features }: AuthSidebarProps) => {
  return (
    <div className="max-w-md p-8">
      <div className="flex items-center gap-2 mb-6">
        <Car className="h-8 w-8 text-amber-500" />
        <span className="text-2xl font-bold tracking-tight">LUXRIDE</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 mb-8">{description}</p>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">{feature.icon}</div>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
