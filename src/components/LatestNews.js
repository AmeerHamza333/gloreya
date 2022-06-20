import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function LatestNews() {


  return (

<div className='news__main'>

<div className='ourmenu__title'
//  data-aos="fade-up"
//  data-aos-offset="-1200"
//  data-aos-delay="10"
//  data-aos-duration="600"
//  data-aos-easing="ease-in"
//  data-aos-once="true"
>
<h4>OUR LATEST NEWS </h4>
<div className='title__div' />
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
</div>  


<div className=' news__items'

// data-aos="fade-up"
// data-aos-offset="-1400"
// data-aos-delay="10"
// data-aos-duration="600"
// data-aos-easing="ease-in"
// data-aos-once="true"

>

    <Card sx={{ maxWidth: 300, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/side-view-woman-eating-french-fries-with-club-sandwich-ketchup-mayonnaise-stand-with-soft-drink_141793-13055.jpg?t=st=1654091790~exp=1654092390~hmac=545adf3e7b5548a39b04b3ced46731ee2510742f0016654f503d542b304e61a5&w=740"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        Weekender Food
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='outlined' href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Francois One", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>


    <Card sx={{ maxWidth: 300, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/four-boxes-nuggets-with-chicken-prawn-cheese-fish-with-four-sauce_141793-2305.jpg?t=st=1654091790~exp=1654092390~hmac=1c45ba7311e865d376cb37ebaaa7a328e401d71a35fb33705cb3acc8f40805f2&w=740"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        Spicy Sandwich
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='outlined' href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Francois One", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>
 



    <Card sx={{ maxWidth: 300, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?t=st=1654103954~exp=1654104554~hmac=3ae3b15b1508d2936d7395f8bc45f513977fbd7830aaf513d1015931fe30cf71&w=900"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300}}>
        White Bread Paste
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It can be tough to think of things to add, especially when you’re first starting out in the tech industry and all your previous experience…
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='outlined' href = 'https://www.hellofashionblog.com/' target= '_blank' size="small" style={{color: "orange", fontFamily: "Francois One", letterSpacing: "1px"}}>Read More</Button>
      </CardActions>
 
    </Card>
 
 

    </div>

    </div>
    
  );
}