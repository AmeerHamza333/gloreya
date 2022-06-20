import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuMainCard from './MenuMainCard';
import MenuData from './MenuData';
import { makeStyles, withStyles } from "@material-ui/styles";
import Pagination from './Pagination';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../components/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import Login from '../LoginComponent/Login';

import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';


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


// const StyledButton = withStyles(() => ({
//   root: {
//     marginRight: "1rem",
//     fontSize: "1rem",
//     borderRadius: "4px",
//     color: "orange",
//     fontFamily: "Acme",
//     fontWeight: "200",
//     padding: "2px 6px 2px 6px",
//     textTransform: "capitalize"
//   }

// }))(ButtonBase);


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
  //  border: "2px solid black",
   boxShadow: "1px 1px 3px 3px rgb(240,240,240)",
   borderRadius: "5px",
    color: "orange",
    transform: "scale(1)"
  }
}));














export default function Menu() {

  const [left, setleft] = React.useState(false);

  const classes = useStyles();

const location = useLocation();


const [data, setData] = React.useState(MenuData);

  const [activeButton, setActiveButton] = useState('first');
 
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  const [cartdata, setCartData] = useState(getLocalItems());

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  

const deleteEventFun = (id)=>{
  setCartData(
       cartdata.filter((val, index)=>{
          return index !== id;
       }))
}



// console.log(data);

const addDataEvent = (id, idd)=>{

const updatedvalue = data.filter((name, index)=>{
  return id == name.id;
})

const upvalue = cartdata.some((el)=>{
  return el.updatedvalue[0].id == idd;
})  
 

// console.log(upvalue);

if(upvalue == false){
  updatedvalue[0].quantity = 1
setCartData((preval)=>{
  return [...preval, {updatedvalue}]
})

}

}








const [searchdata, setSearchData] = useState("");

  const valChange = (e)=>{
  setSearchData(e.target.value);
  }


  const searchval = ()=>{
    const updateddata =  MenuData.filter((item)=>{
  return item.name.toLocaleLowerCase().includes(searchdata) == searchdata.includes(searchdata)
  })
  setData(updateddata);
  
  if(searchdata == ""){
    pizzadata("first");
  }
  }
  


  const pricefilter = ()=>{
  if(age == 5){
      pizzadata("first");
    }
    

  else  if (age == 10){
    const updateddata =  MenuData?.sort((a, b) => (a.price > b.price ? 1 : -1))
  setData(updateddata);
}

else if(age == 20){
  const updateddata =  MenuData?.sort((a, b) => (a.price > b.price ? -1 : 1))
setData(updateddata);
}


else if(age == 30){
  const updateddata =  MenuData?.sort((a, b) => (a.rating > b.rating ? -1 : 1))
setData(updateddata);
}


else{
  const updateddata =  MenuData?.sort((a, b) => (a.rating > b.rating ? -1 : 1))
setData(updateddata);
}



console.log(age);


  
  }









// console.log(cartdata);

// console.log(currentTodos);

// Selector
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };





  const pizzadata = (name)=>{
    const updatedData1 = MenuData.filter((val, ind)=>{
      return val.category == "pizza"
         })
   setData(updatedData1);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const sushidata = (name)=>{
    const updatedData2 = MenuData.filter((val, ind)=>{
      return val.category == "sushi"
         })
   setData(updatedData2);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const salatdata = (name)=>{
    const updatedData3 = MenuData.filter((val, ind)=>{
      return val.category == "salat"
         })
   setData(updatedData3);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const burgerdata = (name)=>{
    const updatedData4 = MenuData.filter((val, ind)=>{
      return val.category == "burger"
         })
   setData(updatedData4);
   setActiveButton(name);
   setCurrentPage(1);
   
  }
  
  const desertdata = (name)=>{
    const updatedData5 = MenuData.filter((val, ind)=>{
      return val.category == "desert"
         })
   setData(updatedData5);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  

  useEffect(()=>{
    pricefilter();
  }, [age]);


  //   useEffect(() => {
  //  pizzadata();
  //  setActiveButton("first");
  //     }, []);

      useEffect(()=>{
        localStorage.setItem('cartmenu' , JSON.stringify(cartdata));
      }, [cartdata])
  

useEffect(()=>{
  searchval();

}, [searchdata]);






      useEffect(()=>{
        if (location.pathname == "/menu"){
  pizzadata("first");
}




        else if(location.pathname == "/menu/pizza"){
          pizzadata("first");
        }

        else if(location.pathname == '/menu/sushi'){
          sushidata("second");
        }

        else if(location.pathname == '/menu/salat'){
          salatdata("third");
        }

        
        else if(location.pathname == '/menu/burger'){
          burgerdata("fourth");
        }

        
        else{
          desertdata("fifth");
        }
      }, [])







      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setleft({ ...left, [anchor]: open });
      };
    

      const list = (anchor) => (
    
        <div className='sidemenu__main' style={{height: "auto"}}>
        <Box
        style={{backgroundColor: "rgba(0, 0, 0, 0.880)", height: "auto" }}
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
<div className='productcategories'>


<h4 className='menusideheadings' style={{color: "orange", padding: "20px 0px 0px 10px"}}> Product categories  </h4>
<div className='menusideline' />

          <List >

            {['Pizza', 'Sushi', 'Salat', 'Burger', 'Desert'].map((text, index) => (
              <ListItem  key={text} disablePadding style = {{color: "white", fontFamily: "Ubuntu Condensed"}}>
                <ListItemButton style={{borderBottom: "0.1px solid rgba(255, 255, 255, 0.315)"}} onClick = {index == 0 ? pizzadata : index == 1 ? sushidata : index == 2 ? salatdata : index == 3 ? burgerdata : desertdata }  >
                  {/* <ListItemIcon>
                    {index == 0 ? <HomeIcon style = {{color: "orange"}}/> : index == 1 ? <ListIcon style = {{color: "orange"}}/> :   index == 2 ?  <RiceBowlIcon style = {{color: "orange"}}/> : index == 3 ? <InfoIcon style = {{color: "orange"}}/> :index == 4 ? <InsertPageBreakIcon style = {{color: "orange"}}/> : <PermContactCalendarIcon style = {{color: "orange"}}/>}
                  
                  </ListItemIcon> */}

                  <ListItemText  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
</div>
          <Divider />
          <List >
            
          <div className='productss'>


<h4 className='menusideheadings' style={{color: "orange", padding: "0px 0px 0px 10px"}}> Recent Posts  </h4>
<div className='menusideline' />


<div className='specialties__products__main'>

<div className='product1' style={{color: "white", padding: "0px 0px 0px 10px"}}>
<div className='specialties__image1'></div>
<div className='specialties__des'>
<h4> Affogato </h4>
<p> affogato / coffee  </p>
<h5> $7.00 </h5>
</div>
</div>

<div className='product1' style={{color: "white", padding: "0px 0px 0px 10px"}}>
<div className='specialties__image2'></div>
<div className='specialties__des'>
<h4> Chicken Burger </h4>
<p> affogato / coffee  </p>
<h5> $12.45 </h5>
</div>
</div>


<div className='product1' style={{color: "white", padding: "0px 0px 0px 10px"}}>
<div className='specialties__image3'></div>
<div className='specialties__des'>
<h4> Conchiglia Verd </h4>
<p> affogato / coffee  </p>
<h5> $13.2 </h5>
</div>
</div>

<div className='product1' style={{color: "white", padding: "0px 0px 0px 10px"}}>
<div className='specialties__image4'></div>
<div className='specialties__des'>
<h4> Birthday Cake </h4>
<p> affogato / coffee  </p>
<h5> $10.23 </h5>
</div>
</div>


</div>

</div>
           
          </List>
    
          </Box>
    </div>
  );


// console.log(cartdata);

  return (
    <>
    <Navbar cartdata = {cartdata} deleteEvent = {deleteEventFun} changeEvent = {valChange}/>

{/* <Login/> */}

<div className='mainmenu__main'>

<div className='mainmenu__upper'>

<h4 > WE SERVE YOU THE BEST PRODUCT</h4>
<div className='mainmenu__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

</div>

</div>








{/* MENU */}

<div className='menusecmain__main'>





<div className='mainleft__main'>


<div className='mainleft__upperrow'>


<div>
{['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <IconButton onClick={toggleDrawer(anchor, true)} style = {{padding: "0px 10px 0px 0px"}} sx = {{display: { xs: 'flex', sm: 'none'}, color: "black", justifyContent: "center", alignItems: "center"}}><MenuIcon  /></IconButton>
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



<div>
<FormControl sx={{ m: 1, minWidth: 170 }} size="small">
      <InputLabel id="demo-select-small">Filter</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="">
          
        </MenuItem>
        <MenuItem value={5}>None</MenuItem>
        <MenuItem value={10}>Sort By Price: low to high</MenuItem>
        <MenuItem value={20}>Sort By Price: high to low</MenuItem>
        <MenuItem value={30}>Sort By Average Rating</MenuItem>
        <MenuItem value={40}>Sort By Popularity</MenuItem>
      </Select>
    </FormControl>
    </div>




</div>

<h3 style={{fontFamily: "Ubuntu Condensed", fontSize: "1rem", margin: "10px 0px 5px 20px"}}> Showing <span style = {{color: "red", fontSize: "1.2rem"}}> {data?.length} </span>  of 66 results </h3>

<div className='menusecmain__left'>
{
    currentTodos.map((data, index)=>{
    return <MenuMainCard addClickEvent = {addDataEvent} id = {data.id} idd = {data.id} key = {index} name = {data.name} des = {data.description} image = {data.Image} price = {data.price} preprice = {data.preprice} sale = {data.sale} />
    })
}

</div>

<div style={{display: "flex", justifyContent: "center"}}>

<Pagination
        todosPerPage={todosPerPage}
        totalTodos={data.length}
        paginate={paginate}
      />
</div>

</div>










<div className='menusecmain__right'>



{/* Product Categories */}


<div className='productcategories'>


<h4 className='menusideheadings'> Product categories  </h4>
<div className='menusideline' />


<Box sx={{ width: '200px', maxWidth: 460, bgcolor: 'background.paper', marginTop: "10px" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
         name="first"
         className={activeButton === "first" ? `${classes.activeButton}` : ""}
         onClick= {()=>pizzadata("first")}
        >
          <ListItemText primary="Pizza" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="second"
          className={activeButton === "second" ? `${classes.activeButton}` : ""}
          onClick={()=>sushidata("second") }
        >
          <ListItemText primary="Sushi" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="third"
          className={activeButton === "third" ? `${classes.activeButton}` : ""}
          onClick={()=>salatdata("third")}
        >
          <ListItemText primary="Salat" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="fourth"
          className={activeButton === "fourth" ? `${classes.activeButton}` : ""}
          onClick={()=>burgerdata("fourth")}
        >
          <ListItemText primary="Burger" />
        </ListItemButton>
        <Divider />
        <ListItemButton
         name="fifth"
         className={activeButton === "fifth" ? `${classes.activeButton}` : ""}
         onClick={()=>desertdata("fifth")}
        >
          <ListItemText primary="Desert" />
        </ListItemButton>
      </List>
      
      
    </Box>
</div>


<div className='productss'>


<h4 className='menusideheadings'> Recent Posts  </h4>
<div className='menusideline' />


<div className='specialties__products__main'>

<div className='product1'>
<div className='specialties__image1'></div>
<div className='specialties__des'>
<h4> Affogato </h4>
<p> affogato / coffee  </p>
<h5> $7.00 </h5>
</div>
</div>

<div className='product1'>
<div className='specialties__image2'></div>
<div className='specialties__des'>
<h4> Chicken Burger </h4>
<p> affogato / coffee  </p>
<h5> $12.45 </h5>
</div>
</div>


<div className='product1'>
<div className='specialties__image3'></div>
<div className='specialties__des'>
<h4> Conchiglia Verd </h4>
<p> affogato / coffee  </p>
<h5> $13.2 </h5>
</div>
</div>

<div className='product1'>
<div className='specialties__image4'></div>
<div className='specialties__des'>
<h4> Birthday Cake </h4>
<p> affogato / coffee  </p>
<h5> $10.23 </h5>
</div>
</div>


</div>

</div>


{/* APPS div */}
<div className='appscom'>
  <div className='appbarupper'>
<h4 > ORDER AND PAY IN MINUTES</h4>

<Button>  </Button>

</div>
</div>



</div>





</div>



<Footer/>

</>


  
   
  )
}
