// import React, {useState, useRef, useEffect} from 'react'
// import Carousel from "react-elastic-carousel";
// import PopularData from './OurPopularData';
// import OurPopularMenuCard from './OurPopularMenuCard';
// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 300, itemsToShow: 2 },
//     { width: 600, itemsToShow: 3 },
//     { width: 900, itemsToShow: 4 },
//     { width: 1200, itemsToShow: 5 },
//   ];



  

// export default function OurPopularMenu() {
  
  
  
  
//     const carouselRef = useRef(null);


//     const [data, setData] = useState(PopularData);




//     const onNextStart = (currentItem, nextItem) => {
//         if (currentItem.index === nextItem.index) {
//           // we hit the last item, go to first item
//           carouselRef.current.goTo(0);
//         }
//       };
//       const onPrevStart = (currentItem, nextItem) => {
//         if (currentItem.index === nextItem.index) {
//           // we hit the first item, go to last item
//           carouselRef.current.goTo(data.length);
//         }
//       };



//     return (
//     <div className='ourpopularmenu__main'>


// <div className='ourpopularmenu__title'> 

// <h4> OUR POPULAR MENU </h4>
// <div className='title__div' />
// <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

//  </div>


// <div className='ourpopularmenu__crousal'> 
    
// <Carousel  className='carousel-university'
// //  ref={carouselRef}
//  enableAutoPlay
//  autoPlaySpeed={3500}
//   breakPoints={breakPoints}
//   ref={carouselRef}
//   onPrevStart={onPrevStart}
//   onNextStart={onNextStart}
//   disableArrowsOnEnd={false}> 
//           {
//               data.map((data,index)=>{

//         return  <OurPopularMenuCard key = {index} name = {data.name} des = {data.description} image = {data.Image} price = {data.price} preprice = {data.preprice} sale = {data.sale} /> 
//               })
//           }
//           </Carousel>

//      </div>


//     </div>
//   )
// }
