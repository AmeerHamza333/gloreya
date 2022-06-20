import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Btns.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import RelatedMenuCard from './RelatedMenuCard';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate, useLocation} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { ButtonBase } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Carousel from "react-elastic-carousel";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


import Rating from '@mui/material/Rating';

import ImageMove from './ImageMove';


import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Data from './MenuCardData';
import Footer from './Footer'
import OurMenuCard from './OurMenuCard';
import { TextField } from '@mui/material';

import ReviewsCard from './ReviewsCard';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";




const getLocalItems = ()=>{
  let  reviewlist = localStorage.getItem('reviews');
if(reviewlist){
  return JSON.parse(localStorage.getItem('reviews'));
}
else{
  return [];
}
}



const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 300, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 900, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];


//Cart Right BAr




// Search functions start

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.warning.main, 0.9),
  '&:hover': {
    backgroundColor: alpha(theme.palette.warning.main, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0.3),
    backgroundColor: alpha(theme.palette.warning.main, 0.5),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
   
      width: '0ch',
      '&:focus': {
        width: '20ch',
      
    },
  },
}));


// Search functions end




const StyledButton = withStyles(() => ({
  root: {
    // marginRight: "1rem",
    // fontSize: "1rem",
    // borderRadius: "4px",
    color: "orange",
    fontFamily: "Acme",
    fontWeight: "200",
   height: "100%",
    border: "2px solid rgba(0, 0, 0, 0.0)",
    padding: "2px 6px 2px 6px",
    textTransform: "capitalize",
  }

}))(ButtonBase);

// const useStyles = makeStyles(() => ({
//   buttonContainerWrapper: {
//     display: "flex",
//     justifyContent: "center"
//   },
//   buttonContainer: {
//     backgroundColor: "#ccc",
//     border: "1px solid #000",
//     padding: "1rem",
//     display: "flex",
//     justifyContent: "space-between"
//   },
//   lastButtonFilter: {
//     marginRight: "0rem"
//   },
// }));




const useStyles = makeStyles({
//   navbtn: {
// color: "white",
// backgroundColor: "none",
// borderRadius: "0px",
// fontFamily: "Acme",

//     '&:hover': {
//     color: 'white',
//     borderRadius: "0px",
//     backgroundColor: "none",
//     borderTop: "2px solid red",
//     borderBottom: "2px solid red",
//     fontSize: "0.9rem",
//     color: "orange",
//     padding: '10 20px',
//     transition: "all 0.2s ease",
//     },
//   },

  activeButton: {
    border: "1px solid white",
    height: "100%",
    boxShadow: "1px 1px 1px 1px rgb(40,40,40)",
    borderRadius: "5px",
     color: "white",
     transform: "scale(1.15)"
   }
 
});



// const prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos >= currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-200px";
//   }
//   prevScrollpos = currentScrollPos;
// }


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}










const props = {
  width: 400,
  height: 250,
  zoomWidth: 500,
  img: "http://malaman.github.io/react-image-zoom/example/1.jpg"
};



export default function Navbar({cartdata, deleteEvent, changeEvent}) {

  // const [value, setValue] = React.useState(cartdetaildata[0].updatedvalue[0].rating);
  






  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //  console.log("State Changing")


// console.log(countrieDataList);




  const Navigate = useNavigate();
  const location = useLocation();
  // const [activeButton, setActiveButton] = useState('');
  

  


const [cartdetaildata, setCartDetailData] = useState([]);

const [cartdataorig, setCartDataOrig] = useState([]);


const [relateddata, setRelatedData] = useState(Data);



const [open8, setOpen8] = React.useState(false);

const handleClickOpen8 = () => {
  setOpen8(true);
};

const handleClose8 = () => {
  setOpen8(false);
};



const [open10, setOpen10] = React.useState(false);

const handleClickOpen10 = () => {
  setOpen10(true);
};

const handleClose10 = () => {
  setOpen10(false);
};



const enterData = (id) =>{
  handleClickOpen10();
  handleClose9();
 const updatedregis =  JSON.parse(localStorage.getItem("register"))?.filter((val,ind)=>{
return id == ind;
  })
  localStorage.setItem('login' , JSON.stringify(updatedregis));
 
  

}






const [open9, setOpen9] = React.useState(false);

  const handleClickOpen9 = () => {
    setOpen9(true);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };



const addData = (id, quan)=>{
  const updateCart = cartdataorig;
  const index = updateCart.findIndex((c)=>{
   return c.updatedvalue[0].id === id;
})
// console.log(index, quan);
updateCart[index].updatedvalue[0].quantity = quan;
setCartDataOrig(updateCart);
window.localStorage.removeItem("cartmenu");
localStorage.setItem("cartmenu", JSON.stringify(updateCart));


}


// console.log(cartdetaildata);
// console.log(cartdataorig);
// console.log(cartdetaildata);

// console.log(dat);

// if (cartdataorig.length > 0){
// const sum = cartdataorig.map(datum => datum.updatedvalue[0].price).reduce((a, b) => a + b)
// console.log(sum)
// }


// const deleteEvent = (id)=>{
//  cartdataorig(
//    cartdata.filter((val, index)=>{
//       return index !== id;
//    }))
// }



const [open, setOpen] = React.useState(false);


const [count, setCount] = React.useState(0);



const [dat, setDat] = useState([]);



const logoutbtn = ()=>{
  window.localStorage.removeItem("login");
  Navigate('/gloreya');
}



const [anchorEl, setAnchorEl] = React.useState(null);
const open4 = Boolean(anchorEl);
const handleClick4 = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose4 = () => {
  setAnchorEl(null);
};






// const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    const value = JSON.parse(localStorage.getItem("login"))?.length;
  if( value > 0 ){
    Navigate('/checkout');
  }
  else{
    Navigate("/login");
  }
  };



  // const handleClose2 = () => {
  //   setOpen2(false);
  // };




// console.log(relateddata);




const [data, setData] = useState(getLocalItems());
const [vall, setVall] = useState({
  rating: "",
  review: "",
  name: "",
  email: "",
  });


  const vallChange = (e)=>{
    const {name, value} = e.target;
      setVall((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      
      });
  }




  const addEvent = ()=>{
    if(vall.rating == "" || vall.review == "" || vall.name == ""){
    alert("please Enter Data in All Fields... Thankyou!!!");
    }
    else{
      const alldata = { rating: vall.rating, review: vall.review, name: vall.name}
              setData([...data, alldata]);
              setVall({
                rating: "",
                review: "",
                name: "",
                email: "",
            });
          }
          }
  

// console.log(data);

// console.log(dat);

const handleClickOpen = (id) => {
  const updateddata = cartdataorig.filter((name, ind)=>{
return id == ind;
  })
setCartDetailData(updateddata);
setCount(updateddata[0].updatedvalue[0].quantity)
setDat([]);
setValue(0);
setOpen(true);

};

const handleClose = () => {
  setOpen(false);
};


const cartImagesDecision = (id)=>{
  const updatedData = (cartdetaildata[0].updatedvalue[0].images)?.filter((datt,ind)=>{
return id == ind;
  })
  setDat(updatedData);
 
}


// console.log(dat);

  const [right, setright] = React.useState(false);

  const toggleDrawer2 = (anchor, open) => (event) => {
    // setCartDataOrig(props.cartdata);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setright({ ...right, [anchor]: open });
  };


  // console.log(cartdetaildata[0].updatedvalue[0].images); 
  
  const list2 = (anchor) => (

    
    
    <div>
    <Box
    style={{ height: "100%" }}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 275 }}
      role="presentation"
     
    >
    
    <div className='right__bar__main'>

<div className='cart__heading'>
<h2> SHOPPING CART </h2>

<IconButton onClick={toggleDrawer2(anchor, false)}>
<CloseIcon/>
</IconButton>

</div>
<Divider />

<div className='cart__data'>
<Box
      sx={{
          mb: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          overflowY: "scroll",
         // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
        }}
    >




{
(cartdataorig?.length <= 0) ?<div className='emptycart__info'><h2> Cart Is Empty</h2></div>:
  cartdataorig?.map((val, setVal)=>{
return (
  
<>


<div className='cart__card'  key = {setVal} >
<Button onClick={()=>handleClickOpen(setVal)} sx={{height: "auto", width: "100%", borderRadius: "0px"}} >
<div className='cart__image__div' style={{
  backgroundImage: `url("${val.updatedvalue[0].Image}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}}>

</div>

<div className='cart__des__div'>
<h2 >{val.updatedvalue[0].name}</h2>
<h3> {val.updatedvalue[0].quantity} x  <span style={{color: "red", marginLeft: "4px"}}> ${val.updatedvalue[0].price} </span></h3>
</div>
</Button>




<IconButton onClick={()=>{deleteEvent(setVal);}
     }>
<DeleteIcon />
</IconButton>

</div>

</>

)

  })

}



<Dialog
fullScreen
open={open}
onClose={handleClose}
TransitionComponent={Transition}
>
<AppBar sx={{ position: 'sticky' }} style={{backgroundColor: "white", boxShadow: "0px 0px 0px 0px white"}}>
  <Toolbar style={{display: "flex", justifyContent: "flex-end"}}>
    <IconButton
      edge="start"
      color="inherit"
      onClick={handleClose}
      aria-label="close"
    >
      <CloseIcon style={{color: "black"}} />
    </IconButton>
  </Toolbar>
</AppBar>

{
(cartdetaildata?.length == 0) ?<div className='emptycart__info'><h2> Cart Is Empty</h2></div>:

<>

<div className='cart__detail__main'>

<div className='cart__detail__image__sec'>




{/* <img height="100%" className='cart__detail__image__main' src= {cartdetaildata[0].updatedvalue[0].Image} /> */}
 
 <div className='cart__detail__image__mainimg'>

{/* <ImageMove image = {(dat?.length > 0 )? dat[0]?.image : cartdetaildata[0].updatedvalue[0].Image}/> */}
   
<TransformWrapper
 initialScale={1}
 maxScale={7}
 >

{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button variant='outlined' onClick={() => zoomIn()} style = {{height: "30px", width: "30px", backgroundColor: "orange", border: "1px solid white", boxShadow: "1px 1px 2px 2px rgba(220, 220, 220, 0.319)", borderRadius: "50%"}}>+</button>
              <button variant='outlined' onClick={() => zoomOut()} style = {{height: "30px", width: "30px", backgroundColor: "orange", order: "1px solid white", boxShadow: "1px 1px 2px 2px rgba(220, 220, 220, 0.319)", borderRadius: "50%"}}>-</button>
              <button variant='outlined' onClick={() => resetTransform()} style = {{height: "30px", width: "30px", backgroundColor: "orange", order: "1px solid white", boxShadow: "1px 1px 2px 2px rgba(220, 220, 220, 0.319)", borderRadius: "50%"}}>x</button>
            </div>
            <TransformComponent>
            <img src= {(dat?.length > 0 )? dat[0]?.image : cartdetaildata[0].updatedvalue[0].Image} alt="test" style={{width: "100%", height: "100%"}}/>
            </TransformComponent>
          </React.Fragment>
        )}


      {/* <TransformComponent>
        <img src= {(dat?.length > 0 )? dat[0]?.image : cartdetaildata[0].updatedvalue[0].Image} alt="test" style={{width: "100%", height: "100%"}}/>
      </TransformComponent> */}
    </TransformWrapper>


    </div>

<div className='cart__detail__image__subimgs'>


<Carousel  className='rec-carousel'  style = {{width: "90%", height: "auto"}} 
 breakPoints={breakPoints}
> 

{ (cartdetaildata[0].updatedvalue[0].images)?.map((images, index)=>{

return <Button key = {index} onClick={()=>cartImagesDecision(index)} style={{height: "100px", width: "100%"}}> <div className='cart__detail__image__subimg__inner' style={{backgroundImage: `url(${images.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} /> </Button>

}) }

</Carousel>

</div>

</div>

<div className='cart__detail__des__sec'>
  {
(cartdetaildata[0].updatedvalue[0].sale == "SALE ON")? 
<div className='cart__detail__des__sale'> <h3>"Discount"</h3></div>: <h2>  </h2>

  }
<h2>{cartdetaildata[0].updatedvalue[0].name}</h2>

<div className='rating__div'>
<Rating
        size="small"
        name="simple-controlled"
        value={cartdetaildata[0].updatedvalue[0].rating}
        // onChange={(event, newValue) => {
        //   // setValue(newValue);
        // }}
      />

      <p> ({cartdetaildata[0].updatedvalue[0].rating} Customer Reviews) </p>
</div>

<p> {cartdetaildata[0].updatedvalue[0].detaildes} </p>

<div className='cart__detail__des__pricing'>
<h3>{cartdetaildata[0].updatedvalue[0].preprice}</h3>
<h4>{cartdetaildata[0].updatedvalue[0].price}$</h4>
</div>

<hr style={{width: "100%", height: "1px solid gray", marginTop: "15px"}} />

<Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >







<div className='counter__addtocart__sec'>
        {/* <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge> */}

        <ButtonGroup>
          <Button
          style={{border: "0.5px solid blue"}}
            aria-label="reduce"
            onClick={() => {
             setCount( Math.max(count - 1, 1));
            }}
          >

            <RemoveIcon fontSize="small" />
          </Button>

<div className='counter__value__div'> {count} </div>

          <Button
          style={{border: "0.5px solid blue"}}
            aria-label="increase"
            onClick={() => { 
             setCount(count + 1) }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>


        <Button onClick={()=> addData(cartdetaildata[0].updatedvalue[0].id , count)} variant="contained" sx={{backgroundColor: "orange", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, height: "auto", fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>ADD TO CART</Button>


      </div>


      </Box>



<p> <span style={{fontWeight: "bold"}}> Categories: </span> {cartdetaildata[0].updatedvalue[0].category}  </p>


</div>

    </div>








<div className='cart__detail__Reviews__main'>

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{display: "flex", justifyContent: "center"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab  label="Description" {...a11yProps(0)} style = {{fontFamily: "Anton", fontSize: "1rem"}}/>
          <Tab label="Reviews" {...a11yProps(1)} style = {{fontFamily: "Anton", fontSize: "1rem", paddingRight: "0px"}}/>
          <h3 style={{display: "flex", justifyContent: "center", alignItems: "center", color: "orange", fontSize: "1.5rem"}}> {data?.length} </h3>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {cartdetaildata[0].updatedvalue[0].detaildes}
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <div className='customer__reviews__main__div'>




<div className='customer__reviews__output'> 
<h2> Customer Reviews </h2>

{
(data?.length <= 0) ?<div className='review__Empty__div'><h2> No Reviews </h2></div>:

          data.map((val, index)=>{
           return   <ReviewsCard key ={index} name = {val.name} review = {val.review} rating = {val.rating}/>
          })
      }
     







</div>




<div className='customer__reviews__input'> 

<div>
<h2> Add a review </h2>

<p style={{fontSize: "0.9rem"}}> Your email address will not be published. Required fields are marked * </p>
</div>


<div>
<h4 > Add Ratings </h4>
<Rating name = "rating"  onChange={vallChange} value={vall.rating} size="small" />
</div>


<TextField
onChange={vallChange}
   name = "review"
          id="outlined-multiline-static"
          label="Your Reviews"
          multiline
          rows={5}
          value={vall.review}
        />


        <div className='name__email__div'>
        <TextField onChange={vallChange}  name="name" value={vall.name}  id="outlined-basic" label="Name" variant="outlined" style={{width: "100%"}}  />
        <TextField onChange={vallChange}  name="email" value={vall.email} id="outlined-basic" label="Email" variant="outlined" style={{width: "100%"}}  />
        </div>

        <Button onClick={addEvent} variant="contained" sx={{backgroundColor: "red", width: "130px", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>Submit</Button>
        

 </div>


        </div>



      </TabPanel>
    </Box>


</div>














<div className='cart__main__related__products'>

<div className='ourmenu__title' style={{backgroundColor: "orange", padding: "10px 10px 10px 10px"}}>
<h4> RELATED PRODUCTS </h4>

</div>      


<div className='ourmenu__items'>

{
  relateddata.map((data,index)=>{
 return   (cartdetaildata[0].updatedvalue[0].category == data.category) ?   <RelatedMenuCard key = {index} name = {data.name} des = {data.description} image = {data.Image} price = {data.price} preprice = {data.preprice} sale = {data.sale} /> : ""
  })
}


</div>

</div>



<Footer/>

</>
}


</Dialog>




</Box>

</div>

<div className='cart__bottom'>

<div className='cart__bottom__pricing'>
<h2>SUBTOTAL</h2>

{
  
(cartdataorig?.length > 0)?
<h3>$ {cartdataorig.map(datum => datum.updatedvalue[0].price).reduce((a, b) => a + b)}</h3>:<h3>$ 0 </h3>
}


{/* {total && <h3>${total} </h3> } */}


</div>




{
  (cartdataorig?.length <= 0)?
<Button disabled variant='contained' style={{width: "90%", marginTop: "5px" }}> Checkout </Button>:

<StyledButton  onClick={handleClickOpen2} variant='contained' style={{width: "90%", marginTop: "5px" }}> <div style={{width: "100%", height: "auto", backgroundColor: "orange", zIndex: "-1", color: "black", padding: "10px 0px 10px 0px", borderRadius: "5px"}}> Checkout  </div> </StyledButton>
}

    

















      
   






























{/* {
  (cartdetaildata?.length == 0) ?<div className='emptycart__info'><h2> Cart Is Empty</h2></div>:
<div> <h2> {cartdetaildata[0].updatedvalue[0].name} </h2></div>

} */}

</div>



    </div>
    
      
    



    </Box>
    </div>
  );
  
  
  
  
  
  const [left, setleft] = React.useState(false);


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setleft({ ...left, [anchor]: open });
  };



  const onlineorderBtn = ()=>{
    Navigate('/menu')
  }


const loginBtn = ()=>{
  Navigate("/login");
}


const signupbtn = ()=>{
  Navigate('/register');
}

  

  const dashboardbtn = ()=>{
    Navigate('/gloreya');
  }
  
  const menubtn = ()=>{
    Navigate('/menu');
  }

    // const cateringbtn = ()=>{
    //   Navigate('/catering'); 
    //   // setActiveButton(name);
    // }


  const blogbtn = ()=>{
    Navigate('/blog');
    // setActiveButton(name);
  }
  
  const contactbtn = ()=>{
    Navigate('/contact');
    // setActiveButton(name);
  }
  
  const aboutbtn = ()=>{
    Navigate('/about');
    // setActiveButton(name);
  }
  

// const valueset = ()=>{

// }

  // this is side drawer fonction

  const list = (anchor) => (
    
    <div className='sidemenu__main'>
    <Box
    style={{backgroundColor: "rgba(0, 0, 0, 0.880)", height: "100%" }}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {['Dashboard', 'Menu', 'About', 'Blog', "Contact"].map((text, index) => (
          <ListItem  key={text} disablePadding style = {{color: "white", fontFamily: "Ubuntu Condensed"}}>
            <ListItemButton style={{borderBottom: "0.1px solid rgba(255, 255, 255, 0.315)"}} onClick = {index == 0 ? dashboardbtn : index == 1 ? menubtn  : index == 2 ? aboutbtn :index == 3 ? blogbtn : contactbtn }  >
              <ListItemIcon>
                {index == 0 ? <HomeIcon style = {{color: "orange"}}/> : index == 1 ? <ListIcon style = {{color: "orange"}}/>  : index == 2 ? <InfoIcon style = {{color: "orange"}}/> :index == 3 ? <InsertPageBreakIcon style = {{color: "orange"}}/> : <PermContactCalendarIcon style = {{color: "orange"}}/>}
              
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        
          <ListItem   sx = {{display: "flex", flexDirection: "column"}}>
            <ListItemButton>
            <Box gap={0.3} sx = {{  display: "flex", flexDirection: "column", justifyContent: "center", paddingRight:{xs: "0px", sm: "56px"}, alignItems: "center"}}>
<Typography
  variant="h6"
  noWrap
  component="div"
  sx={{ display: { xs: 'block', sm: 'none' }, flexGrow: 1 , fontSize: "1.2rem", fontFamily: "Acme", color: "white" }}
>
  Contact Us
</Typography>



<Typography
  variant="h6"
  noWrap
  component="div"
  sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' }, fontSize: "0.8rem", color: "orange", fontFamily: "Ubuntu Condensed" }}
>
  (+92)3457654198
</Typography>
</Box>     
            </ListItemButton>

            <ListItemButton>
            <Box gap={0.3} sx = {{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
<Typography
  variant="h6"
  noWrap
  component="div"
  sx={{ flexGrow: 1, fontSize: "1.2rem",display: { xs: 'block', sm: 'none' }, fontFamily: "Acme", color: "white" }}
>
  Follow Us
</Typography>

<Box gap={0.5} sx={{display: { xs: 'block', sm: 'none' }}}>
<a className='asocialicons' href ="https://www.facebook.com/LadiesFashionwearStore/" target = "_blank">
<FacebookIcon fontSize='small' style = {{color: "orange"}}  />
</a>
<a className='asocialicons' href ="https://www.instagram.com/accounts/login/?next=/clothingshoponline/" target = "_blank">
<InstagramIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://twitter.com/outfitfashionuk" target = "_blank">
<TwitterIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://www.linkedin.com/company/clothing-shop-online" target = "_blank">
<LinkedInIcon fontSize='small' style = {{color: "orange"}}/>
</a>
</Box>
    </Box>   
    </ListItemButton>


    <Button onClick={onlineorderBtn} variant="contained" sx={{backgroundColor: "orange", padding:  {xs: "5px 15px 5px 15px", sm : "10px 30px 10px 30px"}, fontFamily: "Francois One", fontSize: {xs: "0.7rem", sm : "1rem"}, display: {xs: "block", sm: "none" }, marginLeft: "10px" }} style={{display: (location.pathname == "/menu" ) ? "none" : "block" }}>Order Online</Button>

  

          </ListItem>
       
      </List>
    </Box>
    </div>
  );


  // side drawer function end

  
  // let data11 = JSON.parse( localStorage.getItem("cartmenu"));
  // const [total, setTotal] = useState(0);
  
  // const calculateTotal = () => {
  //   let total = 0;
  //  dataoriginal.map((val,setVal) => {
  //     total += data11[setVal].updatedvalue[0].quantity * val.updatedvalue[0].price
  //   })
    
  //   setTotal(total);
  // }
  
  
  // useEffect(() => {
  //   calculateTotal();
  // }, [cartdataorig])
  
  // const [dataoriginal, setDataOriginal] = useState( data11 )



  // useEffect(() => {
  //   (location.pathname == "/home") ? setActiveButton("first") :(location.pathname == "/menu") ? setActiveButton("second") : setActiveButton("third");
  //  }, []);

  const classes = useStyles();

  useEffect(() => {
    setCartDataOrig(cartdata);
  }, [cartdata]);

  useEffect(() => {
    localStorage.setItem('reviews' , JSON.stringify(data))
  }, [data]);




  return (
   
<>

      <AppBar  style={{width: "100%", backgroundColor: " rgba(0, 0, 0, 0)", boxShadow: "0px 0px black", border: "0px",}}>
        <Toolbar position="static" style={{display:"flex", justifyContent: {xs: "flex-start", sm : "center"}, backgroundColor: " rgba(0, 0, 0, 0.688)", zIndex: 1}}>
         
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0,  display: {xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}


<div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <IconButton onClick={toggleDrawer(anchor, true)} style = {{padding: "0px 10px 0px 0px"}} sx = {{display: { xs: 'flex', sm: 'none'}, color: "white", justifyContent: "center", alignItems: "center"}}><MenuIcon  /></IconButton>
          <Drawer
            anchor={anchor}
            open={left[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

          <IconButton
         
         size="large"
         edge="start"
         color="inherit"
         aria-label="menu"
         sx={{ mr: 0,  display: {xs: "block", sm: "none" } }}
       >
        <div style = {{ height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img className='navlogo' src = "https://demo.themewinter.com/wp/gloreya/wp-content/themes/gloreya/assets/images/logo/logo-v2.png" />
</div>
       </IconButton>
         
         



          <Box sx = {{display:{xs: "none", sm: "flex"}, justifyContent: "center", alignItems: "center", width: "100%", gap: "3px"}}>
          
          <StyledButton onClick={dashboardbtn} 
          className={location.pathname == "/gloreya" ? `${classes.activeButton}` : ""} style = {{fontFamily: "Acme"}} color="inherit">HOME</StyledButton>

          <StyledButton onClick={menubtn} 
          className={location.pathname === "/menu" ? `${classes.activeButton}` : ""} style = {{fontFamily: "Acme"}} color="inherit">MENU</StyledButton>

<StyledButton onClick={blogbtn}
          className={location.pathname === "/blog" ? `${classes.activeButton}` : ""} style = {{fontFamily: "Acme"}} color="inherit">BLOGS</StyledButton>


 <div style={{width: "80px", margin:"0px 10px 0px 10px", display: "flex", justifyContent: "center", alignItems: "center"}}>

 <img style={{width: "80px", height: "40px", border: "0px solid rgba(0, 0, 0, 0)" }} src = "https://demo.themewinter.com/wp/gloreya/home-green/wp-content/uploads/sites/2/2019/10/logo.png" />

 </div>


<StyledButton onClick={aboutbtn}
          className={location.pathname === "/about" ? `${classes.activeButton}` : ""} style = {{fontFamily: "Acme"}} color="inherit">ABOUT</StyledButton>


<StyledButton onClick={contactbtn}
          className={location.pathname === "/contact" ? `${classes.activeButton}` : ""} style = {{fontFamily: "Acme"}} color="inherit">CONTACT</StyledButton>







        </Box>

<div style={{position: "absolute", right: "10px", display: "flex", gap: "5px", alignItem: "center", justifyContent: "center"}}>



<Dialog
        open={open10}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Account Updated"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you agree to login to this Account...
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose10} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>









<Dialog
        open={open9}
        onClose={handleClose9}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"My Accounts"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
            Let Google help apps determine location. This means sending anonymous
      
          </DialogContentText>


<div className='acounts__info__main'>

{
  JSON.parse(localStorage.getItem("register"))?.map((val, index)=>{

return(
<ListItemButton onClick={()=> enterData(index)}>
<div className='accounts__main'>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<Avatar src="https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16-180x180.png" sx={{ width: 32, height: 32 }}></Avatar>
</div>



<div style={{marginLeft: "10px"}}>
  <h5> {val.fname} </h5>
  <h6 style={{fontFamily: "Darker Grotesque", fontSize: "0.9rem", color: "red"}}> {val.email}</h6>
</div>

</div>
</ListItemButton>
)
  })
}


<div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10px"}}> 

<Button onClick={signupbtn}  variant="contained" style={{width: "100%", backgroundColor: "orange"}}>Add Another Account</Button>

</div>

</div>
        </DialogContent>
        
      </Dialog>







<Dialog
        open={open8}    
        onClose = {handleClose8}    
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
       <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?t=st=1655455933~exp=1655456533~hmac=6254032e9fce0a281d1556da548f921ad62ff7025c1a499c680903888a8885f0&w=996"
        alt="green iguana"
      />
      <CardContent style={{position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        
        <div style={{width: "auto", height: "auto", display: "flex", justifyContent: "center", position: "absolute", top: "-5px",  left: "50%", transform: "translate(-50%, -50%)"}}>
        <Avatar src="https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16-180x180.png" sx={{ width: "60%", height: "60%" }}></Avatar>

        </div>


        { (JSON.parse(localStorage.getItem("login"))?.length) > 0 ?
        <Typography gutterBottom variant="body4" component="div" style = {{marginTop: "30px"}}>
       {JSON.parse(localStorage.getItem("login"))[0]?.email}  
       </Typography>
       :
       <h2>    </h2>
      }
        {/* <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography> */}
        <a href='' style={{marginTop: "10px", marginBottom: "20px"}}> Edit Profile</a>
      </CardContent>
      {/* <CardActions>
        <Button size="small">close</Button>
      </CardActions> */}
    </Card>



      </Dialog>




<div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8px"}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor} >
        
        <IconButton
              size="small"
              onClick={toggleDrawer2(anchor, true)}
              aria-label="show 17 new notifications"
              color="inherit"
          
              // sx = {{display: {xs: "block", sm: "none"}}}
              style={{ marginLeft: "0px", height: "auto"}}
            >
              <Badge badgeContent={cartdataorig?.length == 0 ? "0" : cartdataorig?.length} color="warning" style={{display:  (location.pathname == "/menu" || location.pathname == "/" || location.pathname == '/gloreya' || location.pathname == '/gloreya/'  || location.pathname == '/menu/pizza' || location.pathname == '/menu/sushi' || location.pathname == '/menu/salat' || location.pathname == '/menu/burger' || location.pathname == '/menu/desert') ? "block" : "none" }}>
                <LocalMallIcon fontSize='small' style={{color: "white"}}/>
              </Badge>
            </IconButton>



          <Drawer
            anchor={anchor}
            open={right[anchor]}
            onClose={toggleDrawer2(anchor, false)}
          >
            {list2(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>





    <Button onClick={loginBtn} variant='contained' style={{display :  (JSON.parse(localStorage.getItem("login")))?.length > 0 ? "none" : "flex", marginLeft: "8px", width: "90%", marginTop: "5px" , justifyContent: "center", alignItems: "center", backgroundColor: "#ed6c02",}}> Login </Button>


    <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick4}
            size="small"
            sx={{ ml: 1, display :  (JSON.parse(localStorage.getItem("login")))?.length > 0 ? "block" : "none"}}
            aria-controls={open4 ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open4 ? 'true' : undefined}
          >
            <Avatar src="https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16-180x180.png" sx={{ width: 22, height: 22 }}></Avatar>
          </IconButton>
        </Tooltip>
  
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open4}
        onClose={handleClose4}
        onClick={handleClose4}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={handleClickOpen8}>
          <Avatar /> Profile
        </MenuItem>
        
       
        

        <MenuItem onClick={handleClickOpen9}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick = {signupbtn}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
      
        <MenuItem onClick={logoutbtn}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>





            </div>


        </Toolbar>


        



<div className='searchmain' style={{  backgroundColor: "rgba(0, 0, 0, 0)", display: "flex", justifyContent: "flex-end", width: "auto", position: "absolute", right: "0px", top: "52px", paddingRight: "5px", paddingLeft: "5px"}}>



<Search style={{display: (location.pathname == "/menu" || location.pathname == '/menu/pizza' || location.pathname == '/menu/sushi' || location.pathname == '/menu/salat' || location.pathname == '/menu/burger' || location.pathname == '/menu/desert'  ) ? "block" : "none" }}>
         <StyledInputBase
         onChange={changeEvent}
             placeholder="Search…"
             inputProps={{ 'aria-label': 'search' }}
             style = {{ position: "relative", borderRadius: "5px", zIndex: 1}}
           />

           <SearchIconWrapper >
             <SearchIcon style={{color: "white", position: "absolute", top: "-30px", left: "13px",}}/>
           </SearchIconWrapper>
          
         </Search>


         {/* <Box style={{position: "absolute", left: "10px"}} sx = {{display:{xs: "none", sm: "flex"}}}>




</Box> */}



  
  <div className='onlineorderbtn' style={{marginLeft: "5px"}}>
           <Button onClick={onlineorderBtn} variant="contained"   sx={{backgroundColor: "orange", padding:"5px 10px 5px 10px", fontFamily: "Francois One", fontSize: "0.9rem", marginLeft: "0px" }} style={{display: (location.pathname == "/menu" || location.pathname == '/menu/pizza' || location.pathname == '/menu/sushi' || location.pathname == '/menu/salat' || location.pathname == '/menu/burger' || location.pathname == '/menu/desert') ? "none" : "block" }} >Order Online</Button>
           </div>
</div>

       
      </AppBar>
{/* 
      <Toolbar id="navbar" style={{  backgroundColor: "rgba(0, 0, 0, 0)", display: "flex", justifyContent: "flex-end", width: "100%", position: "absolute", top: "52px", zIndex: "20"}}>
         
         <Search style={{display: (location.pathname == "/menu") ? "block" : "none" }}>
         <StyledInputBase
             placeholder="Search…"
             inputProps={{ 'aria-label': 'search' }}
             style = {{ position: "relative", borderRadius: "5px", zIndex: 1}}
           />

           <SearchIconWrapper >
             <SearchIcon style={{color: "white", position: "absolute", top: "-30px", left: "13px",}}/>
           </SearchIconWrapper>
          
         </Search>

  
           <Button variant="contained" sx={{backgroundColor: "orange", padding:  {xs: "5px 15px 5px 15px", sm : "10px 30px 10px 30px"}, fontFamily: "Francois One", fontSize: {xs: "0.7rem", sm : "1rem"}, display: {xs: "none", sm: "block" }, marginLeft: "10px" }} style={{display: (location.pathname == "/menu") ? "none" : "block" }} >Order Online</Button>
         

       </Toolbar>

 */}


      </>

   
  )
}
