import { Button } from '@mui/material';
import React from 'react';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Footer from '../components/Footer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



// function myFunction() {
//   const video = document.getElementById("myVideo");
//   if(video.paused){  
//   video.play(); 
//   }
//   else{
//     video.pause();
//   }
//  }




export default function BlogsCard(props) {
  
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (


<div className='blogcard__main' >

<div className='blog__imagesec'>
<img style={{width: "100%", height: "100%", borderRadius: "20px", border: "1px solid orange", boxShadow: "2px 2px 3px 3px rgba(220, 220, 220, 0.352)"}} src= {props.image} />
</div>


<div className='blog__detailsec'>

<div className='blogs__cat__date'>
<div className='blogs__cat'>
  <h4> {props.category} </h4>
</div>
<h4 style={{fontFamily: "Raleway", fontWeight: "bold", fontSize: "0.8rem"}}>/ {props.date} </h4>
</div>


<h2 className='blogs__title'>{props.name}</h2>

<p className='blogs__description'>
  {props.des}
</p>



<div>
    
<Button onClick={handleClickOpen} variant="outlined" sx={{ margin: "15px 0px 0px 20px", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>Read More</Button>
<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}

<div className='aboutinfo__main'>


<div className='aboutinfo__upper'>

<div className='blogs__cat__date2'>
<div className='blogs__cat2'>
  <h4> {props.category} </h4>
</div>
<h4 style={{fontFamily: "Raleway", fontWeight: "bold", fontSize: "0.8rem", color: "white"}}> September 16 - 2022 </h4>
</div>


<h2 style={{fontSize: "2rem"}}>
{props.name}
</h2>
<div className='aboutinfo__title__div' />

<div className='blog__imagesec' style={{marginTop: "20px"}}>
<img style={{width: "100%", height: "100%", borderRadius: "10px"}} src= {props.image} />
</div>

<div sx={{padding:{xs:"10px 40px 10px 40px", sm: "10px 0px 10px 0px"}}}>
<h5 className='detail__para__first1' >
<span className='detail__para__first'> L </span> {props.des} 
</h5>


<div className='quotes__div'>
  <FormatQuoteIcon style ={{color: "red"}}/>
<h5 className='quotes'> {props.quote}</h5>
</div>


<h5 className='detail__para__first1' >
{props.des2}
</h5>








<div className='videosection__main__blog' style={{marginTop: "40px",  backgroundImage: `url(${props.thumbnail})`,
  backgroundSize: "cover" ,  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"}} >
   

<div className='video__div2'>
   {/* <video className='mainvideo'  id="myVideo" type="video/mp4"  muted loop>
 <source src="https://assets.mixkit.co/videos/preview/mixkit-tacos-and-nachos-in-a-restaurant-29849-large.mp4"  />
</video> */}
</div>

<div className='videosection__upper2'>
<div className='videosection__video__main'>
<div className='videosection__video__icon__1'>
<div className='videosection__video__icon__2'>    
<div className='videosection__video__icon' > <Button target= "_blank" href = "https://assets.mixkit.co/videos/preview/mixkit-tacos-and-nachos-in-a-restaurant-29849-large.mp4"> <PlayArrowIcon fontSize='large' style={{color: "white"}}/> </Button> </div>
</div>
</div>
</div>

</div>

   </div>





   <h5 className='detail__para__first1' >
{props.des3}
</h5>



</div>
<Footer/>
</div>


</div>






      </Dialog>

    </div>



</div>



</div>
  
  
  
  
  
  
  )
}
