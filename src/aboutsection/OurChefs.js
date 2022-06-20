import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const colors = [{
  name: "BRADD L.",
  image: "https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/about_img_4.jpg",
  des: " Everything We Pizza, We Pizza With Love. Designer Fastfood.  ",
  pos: "MANAGER"
,
  name2: "WILLIAM SMITH",
  image2: "https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/about_img_5.jpg",
  des2: " Everything We Pizza, We Pizza With Love. Designer Fastfood.",
  pos2: "CHEF",

  name3: "JOHN DOE",
  image3: "https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/about_img_6.jpg",
  des3: " Everything We Pizza, We Pizza With Love. Designer Fastfood.",
  pos3: "MANAGER"
},

{
  name: "JOHNY",
  image: "https://img.freepik.com/free-photo/happy-male-chef-cook-restaurant-kitchen_496169-81.jpg?t=st=1654416199~exp=1654416799~hmac=95c264b8dd30d349f25037db10ec2b68acd8c2d5f6d0bb0442949d795e9d3f34&w=740",
  des: " Everything We Pizza, We Pizza With Love. Designer Fastfood.  ",
  pos: "CHEF"
,
  name2: "ALIANA ",
  image2: "https://img.freepik.com/free-photo/pleased-young-female-cook-wearing-chef-uniform-holding-cake-plate-showing-delicious-gesture-isolated-orange-wall_141793-119532.jpg?t=st=1654416199~exp=1654416799~hmac=b55a9e48f85d0ad312bb223915f4701fa7c2a26d31a4c8ee8369bcc097ca5f5e&w=740",
  des2: " Everything We Pizza, We Pizza With Love. Designer Fastfood.",
  pos2: "CHEF",

  name3: "MONGIBO",
  image3: "https://img.freepik.com/free-photo/happy-young-cook-uniform-showing-thumbs-up_171337-5330.jpg?t=st=1654416199~exp=1654416799~hmac=8f2fbfc6dfe92f9188d16d817a236ab1f27962322c4f3633ff91e60521239c33&w=740",
  des3: " Everything We Pizza, We Pizza With Love. Designer Fastfood.",
  pos3: "CHEF"
},

];


// const delay = 2200;

export default function OurChefs() {
  
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === colors.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

  
  return (
    <div className='whychooseus__main'>
      
<div className='whychooseus__title' >
<h4 > OUR TALENTED CHEFS </h4>

<div className='title__div'/>
</div>






    <div className="slideshow" style={{marginTop: "10px", backgroundColor: "white"}}>



      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >

{colors.map((val, setVal)=>(

 <div className="slide"       key={setVal} >

<div className=' news__items' >

    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" , borderRadius: "0px"}}>
    <div
style={{
  height: "180px",
 borderRadius: "0px",
  border: "10px solid white",
        backgroundImage: `url(${val.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
    }}
      />
      <CardContent style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", textAlign: "center", fontSize: "1.2rem", fontWeight: 300}}>
       
        {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: "center"}}>
        {val.des}
                </Typography>
        <Button  size="small" style={{color: "white", backgroundColor: "red", fontFamily: "Asap Condensed", letterSpacing: "1px", marginTop: "10px"}}>{val.pos}</Button>

      </CardContent>
      <CardActions  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <FacebookIcon fontSize='small' className='socialicons2'/>
       <TwitterIcon fontSize='small' className='socialicons2'/>
       <InstagramIcon fontSize='small' className='socialicons2'/>
        <LinkedInIcon fontSize='small' className='socialicons2'/>
      </CardActions>
 
    </Card>


    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
    <div
style={{
  height: "180px",
 borderRadius: "0px",
  border: "10px solid white",
           backgroundImage: `url(${val.image2})`,
           backgroundSize: "cover",
           backgroundPosition: "top",
       }}

      />
      <CardContent style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", fontSize: "1.2rem", fontWeight: 300, textAlign: "center"}}>
        {val.name2}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: "center"}}>
        {val.des2}
        </Typography>
        <Button  size="small" style={{color: "white", backgroundColor: "red", fontFamily: "Asap Condensed", letterSpacing: "1px", marginTop: "10px"}}>{val.pos2}</Button>
      </CardContent>
      <CardActions  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <FacebookIcon fontSize='small' className='socialicons2'/>
       <TwitterIcon fontSize='small' className='socialicons2'/>
       <InstagramIcon fontSize='small' className='socialicons2'/>
        <LinkedInIcon fontSize='small' className='socialicons2'/>
      </CardActions>
 
    </Card>
 



    <Card sx={{ maxWidth: 320, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <div
style={{
  height: "180px",
 borderRadius: "0px",
  border: "10px solid white",
backgroundImage: `url(${val.image3})`,
backgroundSize: "cover",
backgroundPosition: "top",
}}
      />
      <CardContent style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography gutterBottom variant="h5" component="div" style = {{fontFamily: "Asap Condensed", textAlign: "center", fontSize: "1.2rem", fontWeight: 300}}>
        {val.name3}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: "center"}}>
       {val.des3}
        </Typography>
        <Button  size="small" style={{color: "white", backgroundColor: "red", fontFamily: "Asap Condensed", letterSpacing: "1px", marginTop: "10px"}}>{val.pos3}</Button>

      </CardContent>
      <CardActions  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <FacebookIcon fontSize='small' className='socialicons2'/>
       <TwitterIcon fontSize='small' className='socialicons2'/>
       <InstagramIcon fontSize='small' className='socialicons2'/>
        <LinkedInIcon fontSize='small' className='socialicons2'/>
      </CardActions>
 
    </Card>
 
 

    </div>

</div>


))}









        {/* {colors.map((val, index) => (
          <div
            className="slide"
            key={index}
          >

     
<div className=' container innertesi'>

<Avatar
        alt="Remy Sharp"
        src={val.image}
        sx={{ width: 56, height: 56 }}
      />

      <h5 style={{marginTop: "10px", color: "white", fontFamily: "Asap Condensed"}}> {val.name} </h5>
      <p style={{fontSize: "0.8rem", color: "orange", marginTop: "5px"}}> {val.position}</p>


<p style={{ fontSize: "0.9rem", fontFamily: "Raleway", marginTop: "5px", marginBottom: "0px", textAlign: "center", width: "80%", color: "white"}}> {val.des}  </p>
</div>

          </div>
        ))} */}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    
  











    </div>
  )
}
