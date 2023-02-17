import React from 'react'
import img from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative bg-accent">
          <img
            src={img}
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={img2}
            className="absolute w-3/5  right-5 top-1/2 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2 ">
          <p className="text-2xl text-warning  font-bold">About us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& of experience<br></br> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
          <button className="btn btn-warning">Warning</button>
        </div>
      </div>
    </div>
  )
}

export default About
