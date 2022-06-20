import React from 'react'
import Button from '@mui/material/Button';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function AboutSection() {
 
const Navigate = useNavigate();

 const aboutBtn = ()=>{
Navigate('/about');
 }
 
  return (
    <div className='aboutsection__main'>
      
      <div className='aboutsection__main__left'
      // data-aos="fade-left"
      // data-aos-offset="100"
      // data-aos-delay="10"
      // data-aos-duration="600"
      // data-aos-easing="ease-in"
      // data-aos-once="true"
      > 

<div className='backgroundaboutsection'>

<div className='aboutsection__welcome'>

<h2> WELCOME TO GLOREYA </h2>

<div className='aboutinfo__icons'>
<LocalPhoneIcon style={{color: "red"}}/>
</div>
<h6> (+92)-23476289  </h6>

<div className='aboutinfo__icons'>
<LocationOnIcon style={{color: "red"}}/>
</div>
<h6> 729 Heritage Street Buford, GA 30518 </h6>
</div>

</div>





       </div>

      <div className='aboutsection__main__right'
      //  data-aos="fade-right"
      //  data-aos-offset="100"
      //  data-aos-delay="10"
      //  data-aos-duration="600"
      //  data-aos-easing="ease-in"
      //  data-aos-once="true"
      > 
      <div className='aboutblackbackground'>
      <h4 > FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE </h4>
<div className='aboutsection__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

<div className='aboutsecton__info'></div>
<div className='aboutsection__info__inner'> 

<div className='aboutsection__info__inner__one'> <DoneAllIcon style={{color: "orange"}}/> <h6>Best Price</h6> </div>
<div className='aboutsection__info__inner__two'> <DoneAllIcon style={{color: "orange"}}/> <h6>Best Service</h6> </div>

 </div>
<div className='aboutsection__info__inner'> 
<div className='aboutsection__info__inner__one'> <DoneAllIcon style={{color: "orange"}}/>  <h6>Fresh Ingredient</h6></div>
<div className='aboutsection__info__inner__two'> <DoneAllIcon style={{color: "orange"}}/> <h6>Health Protocol</h6></div>
</div>


<Button onClick={aboutBtn} variant="contained" sx={{backgroundColor: "orange", marginTop: "20px", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>About Us</Button>



       </div>
       </div>
    </div>
  )
}
