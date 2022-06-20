import React from 'react'
import Navbar from '../components/Navbar'
import WhoWeAre from './WhoWeAre'
import Video from './Video'
// import WhyChooseUs from './WhyChooseUs'
import WhyChoose from './WhyChoose'
import Footer from '../components/Footer'
import OurChefs from './OurChefs'
export default function About() {
  return (
    <div>
      <Navbar/>
      <WhoWeAre/>
      {/* <WhyChooseUs/> */}
      <WhyChoose/>
      <Video/>
      <OurChefs/>
      <Footer/>
    </div>
  )
}
