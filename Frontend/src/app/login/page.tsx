import { Car, User, Clock } from "lucide-react"
import { AuthSidebar } from "@components/auth/auth-sidebar"
import { LoginForm } from "@components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="flex-1 hidden lg:block relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <AuthSidebar
            title="Experience Luxury On Every Journey"
            description="Join our premium transportation service and enjoy comfort, style, and reliability on every ride."
            features={[
              {
                icon: <User className="h-5 w-5 text-black" />,
                title: "Professional Drivers",
                description: "Experienced and courteous chauffeurs",
              },
              {
                icon: <Car className="h-5 w-5 text-black" />,
                title: "Premium Vehicles",
                description: "Luxury fleet for your comfort",
              },
              {
                icon: <Clock className="h-5 w-5 text-black" />,
                title: "24/7 Availability",
                description: "Ready whenever you need us",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold tracking-tight">LUXRIDE</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
