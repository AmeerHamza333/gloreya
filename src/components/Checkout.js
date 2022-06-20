import React, {useEffect, useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CountriesData from './CountriesNamesList';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';

import Navbar from './Navbar';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from './Footer'

export default function Checkout() {

    const [countrieDataList, setCountriesDataList] = useState(CountriesData);

    const [count, setCount] = React.useState(1);

    const [age, setAge] = React.useState('');
  
    const handleChangeage = (event) => {
      setAge(event.target.value);
    };

    
    
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChangepm = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    let data = JSON.parse( localStorage.getItem("cartmenu"));
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
      let total = 0;
      cartdataorig.map((val,setVal) => {
        total += data[setVal].updatedvalue[0].quantity * val.updatedvalue[0].price
      })

      setTotal(total);
    }

    useEffect(() => {
      calculateTotal();
    },[])
const [cartdataorig, setCartDataOrig] = useState( data );
return (

       <> 
        <Navbar/>
        
<div className='checkout__main__div' style = {{marginTop: "20px"}}>

<div className='checkout__billing__details'>

<h2> Billing Details </h2>
<div className='checkout__text__field1'>
<TextField
         style={{width: "100%"}}
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
         <TextField
         style={{width: "100%"}}
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />

</div>


<TextField
         style={{width: "100%"}}
          
          id="outlined-required"
          label="Company Name (Optional)"
          defaultValue=""
        />






<FormControl sx={{ m: 0, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-helper-label">Country/Region *</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Country/Region *"
          onChange={handleChangeage}
        >

          {
            countrieDataList.map((cdata, index)=>{
            return   <MenuItem key = {index} value = {cdata.name}>{cdata.name}</MenuItem>
            })
          }
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          <MenuItem value={20}></MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      
      </FormControl>
      


      <TextField
         style={{width: "100%"}}
         required          
          id="outlined-required"
          label="Street Address"
          defaultValue=""
        />


<TextField
         style={{width: "100%"}}
         required          
          id="outlined-required"
          label="Town/City"
          defaultValue=""
        />



<TextField
         style={{width: "100%"}}
         required          
          id="outlined-required"
          label="Zip Code"
          defaultValue=""
        />

<TextField
         style={{width: "100%"}}
         required          
          id="outlined-required"
          label="Phone"
          defaultValue=""
        />


<TextField
         style={{width: "100%"}}
         required          
          id="outlined-required"
          label="Email Address"
          defaultValue=""
        />




</div>








<div className='checkout__product__details'>
 
<h2 style={{marginBottom: "20px"}}> Products </h2>

{
(cartdataorig?.length <= 0) ?<div className='emptycart__info' style={{height: "20px"}}><h2> Cart Is Empty</h2></div>:
  cartdataorig?.map((val, setVal)=>{
return (
<>
<div className='checkout__cart__div__main'>

<div className='product__name'> {val.updatedvalue[0].name} <span style={{color: "red", fontFamily: "Darker Grotesque"}}> * {data[setVal].updatedvalue[0].quantity} </span> </div>
<div className='product__price'> ${data[setVal].updatedvalue[0].quantity * val.updatedvalue[0].price}  </div>

</div>

<hr style={{width: "100%", height: "2px", color: "gray"}} />
</>
)})
  }


<div className='cart__bottom__pricing'>
<h2>TOTAL</h2>

  
{total && <h3>${total} </h3> }





</div>





     
      
       
        
        
  
   





<div style={{marginTop: "20px"}}>
<FormControl>
<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChangepm('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      
          <Typography sx={{ width: '95%', flexShrink: 0 }}>
          <FormControlLabel  value="bank" control={<Radio />}  label="Direct bank transfer" />
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChangepm('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '95%', flexShrink: 0 }}><FormControlLabel value="payments" control={<Radio />} label="Ckeck Payments" /></Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChangepm('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '95%', flexShrink: 0 }}>
          <FormControlLabel value="cash" control={<Radio />} label="Cash on delivery" />
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pay with cash upon delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChangepm('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '95%', flexShrink: 0 }}>
          <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
      </RadioGroup>
   
      </FormControl>

    </div>




<h4 style={{marginTop: "20px", fontWeight: "100", fontSize: "1.1rem"}}> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy. </h4>


<Button variant="contained" sx={{backgroundColor: "red", width: "100%", marginTop: "20px", marginBottom: "20px", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>Place Order</Button>



</div>

</div>



<Footer/>

        
</>   
        
           
  )
}
