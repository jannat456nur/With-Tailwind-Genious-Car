import React, { useEffect } from 'react'
import { useState } from 'react'
import ServiceCart from './ServiceCart'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold"> Our Service Area</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
        </p>
      </div>
      <div className="gap-6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <h2>Services:{services.length}</h2> */}
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  )
}

export default Services
