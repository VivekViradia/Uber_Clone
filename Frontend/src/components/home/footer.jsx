import React from 'react'

const FooterComponent = () => {
  return (
    <>  <section className="p-10 text-center">
    <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h4 className="font-bold text-xl">Affordable Rides</h4>
        <p className="mt-2">Get where you need to go at a price that fits your budget.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h4 className="font-bold text-xl">Safety First</h4>
        <p className="mt-2">Every ride is tracked and secure.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h4 className="font-bold text-xl">Fast Service</h4>
        <p className="mt-2">Find a ride quickly and conveniently.</p>
      </div>
    </div>
  </section>
  <footer className="bg-gray-800 text-white p-6 text-center">
    <p>© 2025 Uber-Like. All rights reserved.</p>
  </footer></>
  )
}

export default FooterComponent;
