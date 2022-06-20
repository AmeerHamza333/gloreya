import React from 'react'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';

export default function ProjectsCompleted() {
  return (
    <div className='projectssec__main' >
      
    <div className='projectssec__items'
    //  data-aos="fade-up"
    //  data-aos-offset="-1300"
    //  data-aos-delay="10"
    //  data-aos-duration="600"
    //  data-aos-easing="ease-in"
    //  data-aos-once="true"
    
    >
    <div className='projectsec__text'>
    <AssuredWorkloadIcon fontSize='large' className='projectssec__fonts' />
    <h2> 15 + </h2>
    </div>
    <h4> Years Of Experience </h4>
    </div>
    
    <div className='projectssec__items'
    
    // data-aos="fade-down"
    // data-aos-offset="-1300"
    // data-aos-delay="10"
    // data-aos-duration="600"
    // data-aos-easing="ease-in"
    // data-aos-once="true"
    >
        <div className='projectsec__text'>
    <SoupKitchenIcon fontSize='large' className='projectssec__fonts' />
    <h2> 100% </h2>
    </div>
    <h4> Taste & Fun </h4>
    </div>
    
    <div className='projectssec__items'
      // data-aos="fade-up"
      // data-aos-offset="-1300"
      // data-aos-delay="10"
      // data-aos-duration="600"
      // data-aos-easing="ease-in"
      // data-aos-once="true"
    >
    <div className='projectsec__text'>
    <LocalDiningIcon fontSize='large' className='projectssec__fonts' />
    <h2> 138 </h2>
    </div>
    <h4> Menu Items </h4>
    </div>
    
    <div className='projectssec__items'
      // data-aos="fade-down"
      // data-aos-offset="-1300"
      // data-aos-delay="10"
      // data-aos-duration="600"
      // data-aos-easing="ease-in"
      // data-aos-once="true"
    >
    <div className='projectsec__text'>
    <PregnantWomanIcon fontSize='large' className='projectssec__fonts' />
    <h2> 300 + </h2>
    </div>
    <h4> Visitors Everyday </h4>
    </div>
        </div>
  )
}
