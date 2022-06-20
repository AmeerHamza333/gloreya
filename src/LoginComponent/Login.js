import React, {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import {useNavigate} from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Navbar from '../components/Navbar';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const getLocalItems3 = ()=>{
    let login = localStorage.getItem('login');
    // console.log(list);
  if(login){
    return JSON.parse(localStorage.getItem('login'));
  }
  else{
    return [];
  }
  }


export default function Login() {

const Navigate = useNavigate();

// const gotosignUp = ()=>{
//   Navigate('/login');
// }





const [open2, setOpen2] = React.useState(false);

const handleClickOpen2 = () => {
  setOpen2(true);
};

const handleClose2 = () => {
  setOpen2(false);
};


const gotocart = ()=>{
Navigate('/checkout');
handleClose2(); 
}


const gotohome = ()=>{
  Navigate('/gloreya');
  handleClose2(); 
  }






  const [data3, setData3] = useState(getLocalItems3());
  const [signindata, setSigninData] = useState({
    email: "",
    password: ""
  }) 

  

  const signindatachange = (e)=>{
    const {name, value} = e.target;
      setSigninData((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      });
  }


  const addsigninEvent = ()=>{
  
    if(signindata.email == "" || signindata.password == ""){
      alert("Please Enter Your Email & Password");
      }

      else{
  let a = JSON.parse( localStorage.getItem("register"));
 a?.map((vall, index)=>{
  //  console.log(vall.email);
   // console.log(signindata.email);
   if(vall.email === signindata.email && vall.pass === signindata.password){
    // Navigate('/gloreya')
    setData3 (()=>{
      return [signindata] });
    // localStorage.setItem('login' , JSON.stringify(data3))
    handleClickOpen2();
  }


  else if(vall.email !== signindata.email || vall.pass !== signindata.password){
    const pass = document.getElementById("passpara");
    pass.style.display = "block";
  }


  // else if(vall.email !== signindata.email && vall.pass !== signindata.password) {
  //   const both = document.getElementById("bothpara");
  //   both.style.display = "block";
  // }

  // else if(vall.email !== signindata.email && vall.pass !== signindata.password){
  //   const email = document.getElementById("emailpara");
  //   email.style.display = "none";
  //   const pass = document.getElementById("passpara");
  //   pass.style.display = "none";
  //   const both = document.getElementById("bothpara");
  //   both.style.display = "block";
  // }

  })
  
}


  setSigninData({
    email: "",
    password: ""
  })

}
    


const addregisterEvent = ()=>{
Navigate('/register');

}
// useEffect(() => {
  
// }, [data3]);


useEffect(() => {
  localStorage.setItem('login' , JSON.stringify(data3))
}, [data3]);

    const [open, setOpen] = React.useState(true);
  return (
      <>
   
<Navbar/>

<div>



<Dialog
  fullScreen
  open={open}
  TransitionComponent={Transition}
>
  
<div className='mainlogin' style= {{width: "100vw", height: "100vh", paddingLeft: "5%",position: "relative", flexDirection: "column", paddingRight: "5%", display: "flex", justifyContent: "center", alignItems: "center", }}>



<div className='container login'>
      <h2> Sign In </h2>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth onChange={signindatachange} value={signindata.email} name = "email" label="Email Address" id="fullWidth" style={{marginTop: "8%" }} />
      <TextField fullWidth onChange={signindatachange} value={signindata.password} name = "password" label="Password" type="password" id="fullWidth" style={{marginTop: "8%" }} />
      <p id='passpara' style={{display: "none", color: "red", fontFamily: "Darker Grotesque", fontSize: "0.9rem"}}> Email or Password Incorrect Please Try Again... </p>
    </Box>

   

   

    <div className='loginbtn'>
    <Button variant="contained"  onClick={addsigninEvent} style={{width: "100%", marginTop: "5%", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
signin
</Button>

<Dialog
        open={open2}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Login Successfully"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thankyou For Login in our website... 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={gotocart} autoFocus>
            View Cart
          </Button>

          <Button onClick={gotohome} autoFocus>
            Go to Home
          </Button>
        </DialogActions>
      </Dialog>





<div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "10px", marginBottom: "10px"}}> <hr style={{width: "100%", height: "1px", color: "gray"}}/> <p style={{padding: "0px 5px 0px 5px", fontFamily: "Acme", fontWeight: "200", fontSize: "0.8rem"}}> OR </p> <hr style={{width: "100%", height: "1px", color: "gray"}}/> </div>


<Button variant="contained"  onClick={addregisterEvent} style={{width: "100%",  backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>
Register
</Button>


</div>

    </div>
    </div>
</Dialog>
</div>
</>

  )
}
