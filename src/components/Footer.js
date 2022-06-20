import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='footer__main'>
      
      <div className='footer__upper'>

<h4 > Subscribe our newsletter and get
discount 30% off</h4>
<div className='videosection__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

<div className='subscribebar'>
<input type="text" className="form-control "  placeholder="Enter Your Email..." />
<Button variant="contained" sx={{backgroundColor: "orange", padding: "10px 20px 10px 20px", fontFamily: "Francois One", borderRadius: "0px" }}> <SendIcon style = {{fontSize: "1.6rem"}}/> </Button>
</div>

<div className='footerdivider'></div>



<div className='footerBottom'>


<div className='linksec1'>
<img style={{height: "40px", width: "105px"}} src = "https://demo.themewinter.com/wp/gloreya/wp-content/themes/gloreya/assets/images/logo/logo-v2.png" />
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>

</div>
<div className='linksec2'>
  <h4> SUPPORT </h4>
<p> FAQ's </p>
<p> Privacy Policy </p>
<p> Terms & Conditions </p>
<p> Contact </p>
</div>

<div className='linksec2'>
  <h4> PHONE </h4>
<p> (+92)-53462789 </p>
<h4> EMAIL </h4>
<p> gloreya@gmail.com </p>
</div>

<div className='linksec2'>
  <h4> ADDRESS </h4>
<p> 729 Heritage Street Buford, GA 30518 </p>
<h4> FOLLOW US </h4>
<div className='footerfollowus'>
<a href='https://www.facebook.com/kingfastfoods1/' target= "_blank"><FacebookIcon className='socialicons'/> </a>
<a href='https://twitter.com/hashtag/fastfood' target= "_blank"><TwitterIcon className='socialicons'/> </a>
<a href='https://www.instagram.com/explore/tags/fastfood/?hl=en' target= "_blank"><InstagramIcon className='socialicons'/></a>
<a href='https://www.linkedin.com/company/fastfood123/?trk=similar-pages' target= "_blank"><LinkedInIcon className='socialicons'/></a>
</div>
</div>


</div>


<div className="footer-copyright">
<div className="container">
<div className="row">
<div className="col-md-12 text-center">
<p style={{fontSize: "0.8rem", fontFamily: "Barlow"}}>Copyright AH DESIGNER © 2022. All rights reserved.</p>
</div>
</div>
</div>
</div>

</div>




    </div>
  )
}
