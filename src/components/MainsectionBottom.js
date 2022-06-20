import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LiquorIcon from '@mui/icons-material/Liquor';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import CakeIcon from '@mui/icons-material/Cake';

export default function MainsectionBottom() {
  return (
    <div className='mainsectionbottom__main' >
      
<div className='mainsectionbottom__items'>
<FastfoodIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Fast Food </h4>
</div>

<div className='mainsectionbottom__items'>
<LiquorIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Drinks </h4>
</div>

<div className='mainsectionbottom__items'>
<RamenDiningIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Ramen Dining </h4>
</div>

<div className='mainsectionbottom__items'>
<BrunchDiningIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Brunch Dining </h4>
</div>


<div className='mainsectionbottom__items'>
<IcecreamIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Ice Cream </h4>
</div>


<div className='mainsectionbottom__items'>
<CakeIcon fontSize='large' className='mainsectionbottom__fonts' />
<h4> Cake </h4>
</div>
    </div>
  )
}
