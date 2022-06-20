import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BlogsCard from './BlogsCard';
import BlogsData from './BlogsData';
import { makeStyles, withStyles } from "@material-ui/styles";
import Pagination from './Pagination';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';












const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid  rgba(220, 220, 220, 0.674)",
  backgroundColor: alpha(theme.palette.warning.light, 0),
  '&:hover': {
    backgroundColor: alpha(theme.palette.warning.light, 0.5),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '100%',
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));







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














export default function MainBlogSection() {

  const [left, setleft] = React.useState(false);

  const classes = useStyles();

const [data, setData] = React.useState(BlogsData);

  const [activeButton, setActiveButton] = useState('first');
 
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);


  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);


  const paginate = pageNumber => setCurrentPage(pageNumber);

// Selector
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  const pizzadata = (name)=>{
    const updatedData1 = BlogsData.filter((val, ind)=>{
      return val.category == "events"
         })
   setData(updatedData1);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const sushidata = (name)=>{
    const updatedData2 = BlogsData.filter((val, ind)=>{
      return val.category == "food"
         })
   setData(updatedData2);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const salatdata = (name)=>{
    const updatedData3 = BlogsData.filter((val, ind)=>{
      return val.category == "news"
         })
   setData(updatedData3);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const burgerdata = (name)=>{
    const updatedData4 = BlogsData.filter((val, ind)=>{
      return val.category == "tips"
         })
   setData(updatedData4);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  const desertdata = (name)=>{
    const updatedData5 = BlogsData.filter((val, ind)=>{
      return val.category == "ceremony"
         })
   setData(updatedData5);
   setActiveButton(name);
   setCurrentPage(1);
  }
  
  
      useEffect(() => {
   pizzadata();
   setActiveButton("first")
      }, []);
  







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

            {['Events', 'Food', 'News', 'Tips & Tricks', 'Ceremony'].map((text, index) => (
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









  return (
    <>
    <Navbar/>


<div className='blogsmenu__main'>

<div className='mainmenu__upper'>

<h4 > We Are The Best  </h4>
<div className='mainmenu__line'/>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

</div>

</div>








{/* MENU */}

<div className='menusecmain__main'>





<div className='mainleft__main' >


<div className='mainleft__upperrow'>


<div style = {{marginBottom: "10px"}}>
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



<div className='mainsearch__bar'>

<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            style={{width: "100%"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


</div>



{/* 
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
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Sort By Latest</MenuItem>
        <MenuItem value={20}>Sort By Price: low to high</MenuItem>
        <MenuItem value={30}>Sort By Price: high to low</MenuItem>
        <MenuItem value={30}>Sort By Average Rating</MenuItem>
        <MenuItem value={30}>Sort By Popularity</MenuItem>
      </Select>
    </FormControl>
    </div> */}




</div>

<div className='menusecmain__left2'   >
{
    currentTodos.map((data, index)=>{
    return <BlogsCard key = {index} name = {data.name} des = {data.description} des2 = {data.description2} des3 = {data.description3} date = {data.date} quote = {data.quote} thumbnail = {data.videothumbnail} image = {data.Image} category = {data.category} />
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










<div className='menusecmain__right' style={{paddingRight: "10px"}}>



{/* Product Categories */}


<div className='blogs__searchbar'>

<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            style={{width: "100%"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

</div>


<div className='productcategories' style={{border: "0.5px solid rgba(220, 220, 220, 0.551)", padding: "10px 10px 10px 20px", borderRadius: "10px", boxShadow: "1px 1px 3px 3px rgba(220, 220, 220, 0.151)"}}>


<h4 className='menusideheadings'> Blogs Categories  </h4>
<div className='menusideline' />


<Box sx={{ width: '220px', maxWidth: 460, bgcolor: 'background.paper', marginTop: "10px" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
         name="first"
         className={activeButton === "first" ? `${classes.activeButton}` : ""}
         onClick= {()=>pizzadata("first")}
        >
          <ListItemText primary="Events" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="second"
          className={activeButton === "second" ? `${classes.activeButton}` : ""}
          onClick={()=>sushidata("second") }
        >
          <ListItemText primary="Food" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="third"
          className={activeButton === "third" ? `${classes.activeButton}` : ""}
          onClick={()=>salatdata("third")}
        >
          <ListItemText primary="News" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          name="fourth"
          className={activeButton === "fourth" ? `${classes.activeButton}` : ""}
          onClick={()=>burgerdata("fourth")}
        >
          <ListItemText primary="Tips & Tricks" />
        </ListItemButton>
        <Divider />
        <ListItemButton
         name="fifth"
         className={activeButton === "fifth" ? `${classes.activeButton}` : ""}
         onClick={()=>desertdata("fifth")}
        >
          <ListItemText primary="Ceremony" />
        </ListItemButton>
      </List>
      
      
    </Box>
</div>


<div className='productss' style={{border: "0.5px solid rgba(220, 220, 220, 0.551)", padding: "10px 10px 10px 20px", borderRadius: "10px", boxShadow: "1px 1px 3px 3px rgba(220, 220, 220, 0.151)"}}>


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

</div>





</div>





</>


  
   
  )
}
