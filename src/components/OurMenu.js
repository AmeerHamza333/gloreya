import React, {useState, useEffect,  useRef} from 'react';
import Data from './MenuCardData';
import { Container, Box, ButtonBase } from "@material-ui/core";
import Button from '@mui/material/Button';
import OurMenuCard from './OurMenuCard';
import { makeStyles, withStyles } from "@material-ui/styles";
import Footer from './Footer';
import Carousel from "react-elastic-carousel";
import PopularData from './OurPopularData';
import OurPopularMenuCard from './OurPopularMenuCard';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Mainsection from '../components/Mainsection';
import TwoOffers from '../components/TwoOffers';
import MainsectionBottom from '../components/MainsectionBottom';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import OfferSection from '../components/OfferSection';
import LatestNews from '../components/LatestNews';
import ProjectsCompleted from '../components/ProjectsCompleted';
import TestimonialsSection from '../components/TestimonialsSection';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];



const getLocalItems = ()=>{
  let cartvalues = localStorage.getItem('cartmenu');
  // console.log(cartvalues);
if(cartvalues){
  return JSON.parse(localStorage.getItem('cartmenu'));
}
else{
  return [];
}
}



const StyledButton = withStyles(() => ({
  root: {
    marginRight: "1rem",
    fontSize: "1rem",
    borderRadius: "4px",
    color: "orange",
    fontFamily: "Acme",
    fontWeight: "200",
    padding: "2px 6px 2px 6px",
    textTransform: "capitalize"
  }

}))(ButtonBase);

const useStyles = makeStyles(() => ({
  buttonContainerWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  buttonContainer: {
    backgroundColor: "#ccc",
    border: "1px solid #000",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between"
  },
  lastButtonFilter: {
    marginRight: "0rem"
  },
  activeButton: {
   border: "2px solid black",
   boxShadow: "1px 1px 2px 2px rgb(240,240,240)",
   borderRadius: "5px",
    color: "orange",
    transform: "scale(1.15)"
  }
}));

export default function OurMenu() {

  const Navigate = useNavigate();

    const [menudata, setMenuData] = useState(Data);
    const classes = useStyles();
  const [activeButton, setActiveButton] = useState('first');

  
  const [cartdata, setCartData] = useState(getLocalItems());



  const carouselRef = useRef(null);

  const [data, setData] = useState(PopularData);




  const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        // we hit the last item, go to first item
        carouselRef.current.goTo(0);
      }
    };
    const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        // we hit the first item, go to last item
        carouselRef.current.goTo(data.length);
      }
    };




const showAllMenu = ()=>{
  if(activeButton == "first") 
  {Navigate('/menu/pizza');}

  else if(activeButton == "second"){
    Navigate('/menu/sushi');
  }

  else if(activeButton == "third"){
    Navigate('/menu/salat');
  }

  else if(activeButton == "fourth"){
    Navigate('/menu/burger');
  }

  else{
    Navigate('/menu/desert');
  }


}


  const addDataEvent = (id, idd)=>{

    const updatedvalue = menudata.filter((name, index)=>{
      return id == index;
    })
    
    const upvalue = cartdata.some((el)=>{
      return el.updatedvalue[0].id == idd;
    })  
     
    
    // console.log(upvalue);
    
    if(upvalue == false){
      // console.log(updatedvalue);
      updatedvalue[0].quantity = 1
      
    setCartData((preval)=>{
      return [...preval, {updatedvalue}]
    })
    
    }
    
    }






    const addDataEvent2 = (id, idd)=>{

      const updatedvalue = data.filter((name, index)=>{
        return id == index;
      })
      

      const upvalue = cartdata.some((el)=>{
        return el.updatedvalue[0].id == idd;

      })  
       
      
      if(upvalue == false){
      updatedvalue[0].quantity = 1
      setCartData((preval)=>{
        return [...preval, {updatedvalue}]
      })
      
      }
      
      }






    // console.log(cartdata);


  const deleteEventFun = (id)=>{
    setCartData(
         cartdata.filter((val, index)=>{
            return index !== id;
         }))
  }


const pizzadata = (name)=>{
  const updatedData1 = Data.filter((val, ind)=>{
    return val.category == "pizza"
       })
 setMenuData(updatedData1);
 setActiveButton(name);
}

const sushidata = (name)=>{
  const updatedData2 = Data.filter((val, ind)=>{
    return val.category == "sushi"
       })
 setMenuData(updatedData2);
 setActiveButton(name);
}

const salatdata = (name)=>{
  const updatedData3 = Data.filter((val, ind)=>{
    return val.category == "salat"
       })
 setMenuData(updatedData3);
 setActiveButton(name);
}

const burgerdata = (name)=>{
  const updatedData4 = Data.filter((val, ind)=>{
    return val.category == "burger"
       })
 setMenuData(updatedData4);
 setActiveButton(name);
}

const desertdata = (name)=>{
  const updatedData5 = Data.filter((val, ind)=>{
    return val.category == "desert"
       })
 setMenuData(updatedData5);
 setActiveButton(name);
}


    useEffect(() => {
 pizzadata();
 setActiveButton("first")
    }, []);

    useEffect(()=>{
      localStorage.setItem('cartmenu' , JSON.stringify(cartdata));
    }, [cartdata])


    
    return (

<>

      <Navbar cartdata = {cartdata} deleteEvent = {deleteEventFun}/>
      <Mainsection />
      <MainsectionBottom />
      <TwoOffers/>
      <AboutSection/>


{/* <Login2/> */}




    <div className='ourmenu__main'>

<div className='ourmenu__title'>
<h4> OUR BEST MENU </h4>
<div className='title__div' />
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
</div>      



<div className='ourmenu__categories'>


      <StyledButton
          name="first"
          className={activeButton === "first" ? `${classes.activeButton}` : ""}
          onClick= {()=>pizzadata("first")}
        >
          PIZZA
        </StyledButton>
        <StyledButton
          name="second"
          className={activeButton === "second" ? `${classes.activeButton}` : ""}
          onClick={()=>sushidata("second") }
        >
          SUSHI
        </StyledButton>
        <StyledButton
          name="third"
          className={activeButton === "third" ? `${classes.activeButton}` : ""}
          onClick={()=>salatdata("third")}
        >
          SALAT
        </StyledButton>
        <StyledButton
          name="fourth"
          className={activeButton === "fourth" ? `${classes.activeButton}` : ""}
          onClick={()=>burgerdata("fourth")}
        >
          BURGER
        </StyledButton>

        <StyledButton
          name="fifth"
          className={activeButton === "fifth" ? `${classes.activeButton}` : ""}
          onClick={()=>desertdata("fifth")}
        >
          DESERT
        </StyledButton>
          {/* <StyledButton onClick={desertdata} className={classes.navbtn} style = {{fontFamily: "Acme", backgroundColor: "white"}} color="inherit">DESERT</StyledButton> */}
         
</div>



<div className='ourmenu__items'>

{
    menudata.map((data, index)=>{
    return <OurMenuCard addclickevent = {addDataEvent} key = {index} id = {index} idd = {data.id} name = {data.name} des = {data.description} image = {data.Image} price = {data.price} preprice = {data.preprice} sale = {data.sale} />
    })
}

</div>

<div className='menubottombtn' >
<Button onClick={showAllMenu} variant="contained" sx={{backgroundColor: "orange", padding:  {xs: "5px 30px 5px 30px", sm : "8px 40px 8px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.9rem", sm : "1.1rem"} }}>SHOW ALL</Button>
</div>
    </div>
 








      <VideoSection/>
      <ProjectsCompleted/>
    
    
    
    
    
    
      <div className='ourpopularmenu__main'>


<div className='ourpopularmenu__title'> 

<h4> OUR POPULAR MENU </h4>
<div className='title__div' />
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

 </div>


<div className='ourpopularmenu__crousal'> 
    
<Carousel  className='carousel-university'
//  ref={carouselRef}
 enableAutoPlay
 autoPlaySpeed={3500}
  breakPoints={breakPoints}
  ref={carouselRef}
  onPrevStart={onPrevStart}
  onNextStart={onNextStart}
  disableArrowsOnEnd={false}> 
          {
              data.map((data,index)=>{

        return  <OurPopularMenuCard addclickevent = {addDataEvent2} id = {index} idd = {data.id} key = {index} name = {data.name} des = {data.description} image = {data.Image} price = {data.price} preprice = {data.preprice} sale = {data.sale} /> 
              })
          }
          </Carousel>

     </div>


    </div>












      <OfferSection/>
      <LatestNews/>
      <TestimonialsSection/>
    <Footer/>


    </>
 
  )
}
