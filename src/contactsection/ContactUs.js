import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function ContactUs() {

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <>
    <div className='contactus__main'>
      
      <div className='contactus__title' >
<h4 > CONTACT US </h4>
<div className='title__div'/>
</div>


<div className='contactus__below__main'>

<div className='contactus__below__left'>


<div className="container my-4">



    {/* <!--Google map--> */}
<div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
    style= {{border: "0"}} allowFullScreen></iframe>
</div>

{/* <!--Google Maps--> */}

  </div>

</div>

<div className='contactus__below__right'>

<div className='contactus__field1'>
<TextField id="outlined-basic" label="Name" variant="outlined" style={{width: "100%"}}/>
<TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "100%"}}/>
</div>
<div className='contactus__field2'>
<TextField id="outlined-basic" label="Phone#" variant="outlined" style={{width: "100%"}}/>
<TextField id="outlined-basic" label="Select Reason" variant="outlined" style={{width: "100%"}}/>
</div>

<div className='contactus__field3'>
<TextField
style={{width: "100%"}}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={5}
          
        />
</div>

<div className='below__btn'>
<Button variant="contained" sx={{width:{xs: "130px", sm: "200px"}, backgroundColor: "red", marginTop: "20px", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>Send Message</Button>
</div>


</div>




</div>


    </div>

<div className='findres__main'>

<div className='contactus__title' >
<h4 > FIND OUR RESTAURANT </h4>
<div className='title__div'/>
</div>

<div className="container my-4" style={{marginTop: "20px"}}>



    {/* <!--Google map--> */}
<div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
    style= {{border: "0"}} allowFullScreen></iframe>
</div>

{/* <!--Google Maps--> */}

  </div>




</div>


    </>
  )
}
