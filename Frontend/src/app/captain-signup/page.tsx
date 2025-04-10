import { Car } from "lucide-react"
import { AuthSidebar } from "@components/auth/auth-sidebar"
import { CaptainSignupForm } from "@components/auth/captain-signup-form"

export default function CaptainSignupPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="flex-1 hidden lg:block relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <AuthSidebar
            title="Join Our Captain Team"
            description="Become a part of our premium transportation service and enjoy flexible working hours and competitive earnings."
            features={[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-black"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                ),
                title: "Competitive Earnings",
                description: "Maximize your income potential",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-black"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ),
                title: "Flexible Schedule",
                description: "Work when it suits you",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-black"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Premium Clientele",
                description: "Serve discerning customers",
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
          <CaptainSignupForm />
        </div>
      </div>
    </div>
  )
}
