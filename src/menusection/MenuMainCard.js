import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

export default function MenuMainCard(props) {
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };




    return (
<Card className='maincard'  sx={{ maxWidth: 230, marginBottom: "20px", position: "relative" }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image= {props.image}
        alt="Paella dish"
      />

<div className='Menucard__sale' style={{display: props.sale == "" ? "none" : "block"}}>
 Discount
</div>

<div className='menucard__upper'>
<Button onClick={()=>props.addClickEvent(props.id, props.idd)} variant="contained" sx={{backgroundColor: "orange", marginTop: "3%", padding:  {xs: "5px 20px 5px 20px", sm : "10px 40px 10px 40px"}, fontFamily: "Francois One", fontSize: {xs: "0.8rem", sm : "1.1rem"} }}>ADD TO CART</Button>

<div style={{display: "flex", marginTop: "5%", gap: "3%" }}>

           <IconButton aria-label="share">
          <VisibilityIcon  className='favicon'/>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className='favicon' />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className='favicon'/>
        </IconButton>
        

</div>

</div>

   



      <CardContent>
      <Typography style = {{fontFamily: "Asap Condensed", fontSize: "1rem", fontWeight: "bold"}} variant="body2" color="text.secondary">
          {props.name}
        </Typography>
        <Typography style={{marginTop: "1%"}} variant="body2" color="text.secondary">
          {props.des}          
        </Typography>

        <div style={{display: "flex", gap: "3%"}}>
        <Typography style = {{fontFamily: "Raleway", color: "rgb(255, 0, 0)", fontWeight: "bold", fontSize: "1.3rem",  marginTop: "1%", textDecoration: "line-through"}} variant="body2" color="text.secondary">
         {props.preprice}
        </Typography>


        <Typography style = {{fontFamily: "Acme", fontSize: "1.4rem", fontWeight: "bold", color: "orange", marginTop: "1%"}} variant="body2" color="text.secondary">
         {props.price} $
        </Typography>
        </div>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>

    )
}
