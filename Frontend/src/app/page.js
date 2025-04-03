'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="relative h-screen bg-white bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/images/home_image.jpg")' }}>
        <div className="bg-white/75 p-8 rounded-lg">
          <h2 className="text-5xl font-bold">Go anywhere with ease</h2>
          <p className="mt-4 text-lg text-center">Request a ride, hop in, and go.</p>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded w-full text-center" onClick={() => router.push("/signIn/caption")}>Drive as a Captain</button>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded w-full text-center" onClick={() => router.push("/signIn/passenger")}>Book a Ride</button>
        </div>
      </section>
    </>
  );
}
