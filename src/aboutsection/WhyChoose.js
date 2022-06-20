import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WhyChoose() {
  return (
    <div className='whychooseus__main'>
      
<div className='whychooseus__title' >
<h4 > Why Choose Us </h4>

<div className='title__div'/>
</div>






<div className=' news__items'

// data-aos="fade-up"
// data-aos-offset="-1400"
// data-aos-delay="10"
// data-aos-duration="600"
// data-aos-easing="ease-in"
// data-aos-once="true"

>

    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="160"
        image="https://velikorodnov.com/wordpress/yummi/wp-content/uploads/2021/06/448x312_img1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        Premium Quality
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button  href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Asap Condensed", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>


    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="160"
        image="https://velikorodnov.com/wordpress/yummi/wp-content/uploads/2021/06/448x312_img2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        Always Fresh
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button  href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Asap Condensed", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>
 



    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="160"
        image="https://velikorodnov.com/wordpress/yummi/wp-content/uploads/2021/06/448x312_img3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        Variety of Dishes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button  href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Asap Condensed", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>
 
 

    </div>




    </div>
  )
}
