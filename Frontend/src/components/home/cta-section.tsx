import { Button } from "@components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-amber-500 text-black">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ready for a Luxury Experience?</h2>
            <p className="text-black/80 max-w-xl">
              Download our app now and enjoy premium transportation at your fingertips
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-black text-white hover:bg-gray-900">App Store</Button>
            <Button className="bg-black text-white hover:bg-gray-900">Google Play</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
