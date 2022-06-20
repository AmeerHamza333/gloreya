import React from 'react'
import Navbar from '../components/Navbar'
import ContactMainSec from './ContactMainSec'
import ContactUs from './ContactUs'
import HaveQuestion from './HaveQuestion'
import Branches from './Branches'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactMainSec/>

<ContactUs/>

<Branches/>

<HaveQuestion/>
<Footer/>
    </div>
  )
}
