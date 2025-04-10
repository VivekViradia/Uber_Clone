import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { MapPin, Clock, Calendar } from "lucide-react"

export function BookingForm() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 -mt-32 relative z-30 shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">Book Your Ride</h2>
          <Tabs defaultValue="ride" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-700">
              <TabsTrigger value="ride" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                Ride
              </TabsTrigger>
              <TabsTrigger value="rental" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                Rental
              </TabsTrigger>
              <TabsTrigger value="airport" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                Airport
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ride" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Pickup Location"
                    className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Destination"
                    className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input type="datetime-local" className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500" />
                </div>
                <div className="flex gap-4">
                  <Button className="w-full bg-amber-500 text-black hover:bg-amber-600">Book Now</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rental" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Pickup Location"
                    className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="date"
                    placeholder="Pickup Date"
                    className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input type="time" className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500" />
                </div>
                <div className="flex gap-4">
                  <Button className="w-full bg-amber-500 text-black hover:bg-amber-600">Book Rental</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="airport" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Airport" className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Destination"
                    className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input type="datetime-local" className="pl-10 bg-gray-700 border-gray-600 focus:border-amber-500" />
                </div>
                <div className="flex gap-4">
                  <Button className="w-full bg-amber-500 text-black hover:bg-amber-600">Book Airport Transfer</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
