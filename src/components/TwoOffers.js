import React from 'react'
import Button from '@mui/material/Button';

export default function TwoOffers() {
  return (
    <div className='twooffers__main'>
      
      <div className='twooffers__inner__left'     
    //   data-aos="fade-right"
    // data-aos-offset="100"
    // data-aos-delay="50"
    // data-aos-duration="600"
    // data-aos-easing="ease-in"
    // data-aos-once="true"
    >
<div className='twooffers__inner__des'> 
<h6> Payday Promo </h6>
<h4> GET 10% DISCOUNT ON PAYDAY WEEK </h4> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<Button variant="text"  style = {{color: "orange",  width: "70px", paddingLeft: "0px", display: "flex", justifyContent: "flex-start"}}> <h6 style={{fontSize: "0.7rem", marginTop: "10%"}}> Buy Online </h6> </Button>
 </div>
<div className='twooffers__inner__image__left' >

</div>
      </div>


      <div className='twooffers__inner__right' 
      
    //   data-aos="fade-left"
    // data-aos-offset="100"
    // data-aos-delay="50"
    // data-aos-duration="600"
    // data-aos-easing="ease-in"
    // data-aos-once="true"
      
      >
<div className='twooffers__inner__des'> 
<h6> Payday Promo </h6>
<h4> BUY 1 COKE GET MORE FREE 1 COKE </h4> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<Button variant="text"  style = {{color: "orange",  width: "70px", paddingLeft: "0px", display: "flex", justifyContent: "flex-start"}}> <h6 style={{fontSize: "0.7rem", marginTop: "10%"}}> Buy Online </h6> </Button>
 </div>
<div className=' twooffers__inner__image__right' >
</div>
      
      </div>

    
    </div>

  )
}
