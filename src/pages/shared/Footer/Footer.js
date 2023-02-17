import React from 'react'
import logo from '../../../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <footer
        className="footer p-32 bg-base-200 text-white-content "
        style={{ backgroundColor: 'black',color:'white' }}
      >
        <div>
          <img src={logo} alt="logo" />
          <p>
          Edwin Diaz is a software and web<br/> technologies engineer, a life coach <br/>trainer who is also a serial .
          </p>
          <div>
            {/* <Link></Link> */}
          </div>
        </div>
        <div>
          <span className="" style={{ fontSize: 20, fontWeight: 'bold' }}>
            About
          </span>
          <a href="/" className="link link-hover mt-8">
            Home
          </a>
          <a href="/" className="link link-hover">
            Service
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <span className="" style={{ fontSize: 20, fontWeight: 'bold' }}>
            Company
          </span>
          <a href="/" className="link link-hover mt-8">
            Why Car Doctor
          </a>
          <a href="/" className="link link-hover">
            About
          </a>
          {/* <a href='/' className="link link-hover">Jobs</a>  */}
          {/* <a href='/' className="link link-hover">Press kit</a> */}
        </div>
        <div>
          <span className="" style={{ fontSize: 20, fontWeight: 'bold' }}>
            Support
          </span>
          <a href="/" className="link link-hover">
            Support Center
          </a>
          <a href="/" className="link link-hover">
            Feedback
          </a>
          <a href="/" className="link link-hover">
            Accessibility
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
