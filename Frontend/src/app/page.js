'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* Section 1 - Image Left, Text Right */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white gap-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/home_image.jpg"
            alt="Ride booking"
            width={500}
            height={350}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Book a Ride Instantly</h1>
          <p className="text-lg text-gray-600 mb-6">
            Whether you're heading to work, a night out, or across the city, book your ride with ease and comfort.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Section 2 - Image Right, Text Left */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gray-50 gap-x-8">
        {/* Text */}
        <div className="w-full md:w-1/2 md:max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Captain Dashboard</h1>
          <p className="text-lg text-gray-600 mb-6">
            Manage ride requests, track earnings, and stay connected with passengers—all in one place.
          </p>
          <button
            onClick={() => router.push('/captain')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/home_image.jpg"
            alt="Captain Dashboard"
            width={500}
            height={350}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white gap-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/home_image.jpg"
            alt="Ride booking"
            width={500}
            height={350}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Book a Ride Instantly</h1>
          <p className="text-lg text-gray-600 mb-6">
            Whether you're heading to work, a night out, or across the city, book your ride with ease and comfort.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
