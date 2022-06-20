import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import {useNavigate} from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const getLocalItems2 = ()=>{
  let regis = localStorage.getItem('register');
  // console.log(list);
if(regis){
  return JSON.parse(localStorage.getItem('register'));
}
else{
  return [];
  
}
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function Register() {

  const Navigation = useNavigate();




  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


const gotologin = ()=>{
 Navigation('/login');
 handleClose2(); 
}




const [data, setData] = useState(getLocalItems2());
  const [signdata, setSignData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: ""
  }) 

  const addsignupEvent = ()=>{
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(signdata.fname == "" || signdata.lname == "" || signdata.email == "" || signdata.pass == ""){
      alert("Please Enter Your Name, Email & Password");
      }


      else if(!signdata.email.match(regexEmail)){
        const email = document.getElementById("emailpara");
        email.style.display = "block";
      }
     
      else{
      
    setData((preValue)=>{
  
      return [...preValue, signdata];
      
  })

 
handleClickOpen2();
// Navigation("/login");

}
  
  setSignData({
    fname: "",
    lname: "",
    email: "",
    pass: ""
  })
  
    }


    const signupdatachange = (e)=>{
      const {name, value} = e.target;
        setSignData((preValue)=>{
        return{ ...preValue,
         [name] : value
        }
        });
    }

// console.log(data);

    const [open, setOpen] = React.useState(true);

    useEffect(() => {
      localStorage.setItem('register' , JSON.stringify(data))
    }, [data]);


  return (
      <>
   
<Navbar/>

<div>



<Dialog
  fullScreen
  open={open}
  TransitionComponent={Transition}
  
>
  
<div className='mainsignup' style= {{width: "100vw", height: "100vh", paddingLeft: "5%",position: "relative", flexDirection: "column", paddingRight: "5%", display: "flex", justifyContent: "center", alignItems: "center", }}>


<div className='container login'>
      <h2> Sign Up </h2>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth onChange={signupdatachange} value={signdata.fname} name = "fname" label="First Name" id="fullWidth" style={{marginTop: "20px" }} />
      <TextField fullWidth onChange={signupdatachange} value={signdata.lname} name = "lname" label="Last Name" id="fullWidth" style={{marginTop: "20px" }} />
      <TextField fullWidth onChange={signupdatachange} value={signdata.email} name = "email" label="Email Address" id="fullWidth" style={{marginTop: "20px" }} />
      <p id='emailpara' style={{display: "none", color: "red", fontFamily: "Darker Grotesque", fontSize: "0.9rem"}}> Please enter right Email like "Example@gmail.com" </p>
      <TextField fullWidth onChange={signupdatachange} value={signdata.pass} name = "pass" label="Password"  id="fullWidth" style={{marginTop: "20px" }} />
    </Box>

    <div className='loginbtn'>
    <Button variant="contained" onClick={addsignupEvent}  style={{width: "100%", marginTop: "5%", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
 Regiter 
</Button>


      <Dialog
        open={open2}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Registered Successfully"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thankyou For Register in our website...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={gotologin} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>



</div>

    </div>
    </div>
</Dialog>
</div>
</>

  )
}

