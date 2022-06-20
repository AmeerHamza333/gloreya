import React, {useEffect} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';







function myFunction() {
  const video = document.getElementById("myVideo");
  if(video.paused){  
  video.play(); 
  }
  else{
    video.pause();
  }
 }


export default function Video() {


 


  return (
    <div className='videosection__main'
   
    // data-aos="fade-up"
    //    data-aos-offset="-1300"
    //    data-aos-delay="10"
    //    data-aos-duration="600"
    //    data-aos-easing="ease-in"
    //    data-aos-once="true"
     
    >
    

<div className='video__div'>
    <video className='mainvideo'  id="myVideo" type="video/mp4" autoPlay muted loop>
  <source src="https://assets.mixkit.co/videos/preview/mixkit-eating-pizza-at-the-office-23842-large.mp4"  />
</video>
</div>

<div className='videosection__upper'>
<div className='videosection__video__main'>
<div className='videosection__video__icon__1'>
<div className='videosection__video__icon__2'>    
<div className='videosection__video__icon' > <Button onClick={myFunction}> <PlayArrowIcon fontSize='large' style={{color: "white"}}/> </Button> </div>
</div>
</div>
</div>


<h4 > WE HAVE BEST FOOD AND TEAM </h4>
<div className='videosection__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

</div>





    </div>
  )
}
