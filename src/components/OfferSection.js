import { Button } from '@mui/material'
import React from 'react'

export default function OfferSection() {
  return (
    <div className='offer_main' >
      
<div className='offer__upper'>

<h6> SPECIAL OFFER </h6>
<h4 > BUY <span style={{ fontSize: "3rem", color: "orange" }}> 1 </span> GET <span style={{ fontSize: "3rem", color: "orange" }}> 1 </span> FREE </h4>
<div className='videosection__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

<Button variant="contained" sx={{backgroundColor: "orange", marginTop: "3%", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>ORDER NOW</Button>

</div>

    </div>
  )
}
