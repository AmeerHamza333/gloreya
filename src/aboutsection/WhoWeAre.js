import React from 'react'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import { Button } from '@mui/material';



import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function WhoWeAre() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='whowearesec__main'>

<div className='whowearesec__main__upper'>

<div className='whoweare__upper__area'>

<div className='whowearesec__main__left'>

</div>
<div className='whowearesec__main__mid'>

<h6> who are we </h6>
<h4>Best burger ideas & traditions from the whole world</h4>
<p>Back in 1993, three Kiwi guys including world-renowned chef Peter Moor set up the first Gloreya Burger Kitchen in Battersea, South London Burger Kitchen in</p>

<div>
<Button onClick={handleClickOpen} style={{ color: "orange", fontSize: "0.8rem"}}> Read More </Button>


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

<h2>
Storty About Us
</h2>

<div className='aboutinfo__title__div' />

<p>
Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum, as have many LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
</p>

<h2>
Our Vission
</h2>

<div className='aboutinfo__title__div' />

<p>
Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum, as have many LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
</p>


<h2>
Our History
</h2>
<div className='aboutinfo__title__div' />

<p>
Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum, as have many LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
</p>

</div>

</div>






      </Dialog>
    </div>







</div>


<div className='whowearesec__main__right'></div>

</div>


<div className='projectssec__main' style={{marginTop: "25px", backgroundColor: "rgba(0, 0, 0, 0)"}} >
      
      <div className='projectssec__items ' 
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



</div>
    </div>



  )
}
