import { Avatar, Rating } from '@mui/material'
import React from 'react'




export default function ReviewsCard(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    const datee = new Date;
    const d = monthNames[datee.getMonth()] + " " + datee.getDate()  + ", " + datee.getFullYear(); 


    return (
    <div className='review__card__main'>
      
<div className='top__avatar__name'>

<Avatar src="/broken-image.jpg" />

<div className='review__output__name__date'>
<h4> {props.name} </h4>
<h6> {d} </h6>

<Rating name="size-small" value={props.rating} size="small" />

<p style={{marginTop: "0px", fontSize: "1rem", fontFamily: "Darker Grotesque"}}> {props.review} </p>

</div>

</div>




    </div>
  )
}
