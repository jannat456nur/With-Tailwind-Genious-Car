import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Login from './../../Login/Login';




const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <About></About>
     <Services></Services>
     <Login></Login>
    </div>
  )
}

export default Home