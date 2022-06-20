import { Avatar } from '@mui/material';
import React from 'react'
const colors = [{
  name: "John Lucas",
  position: "Project Manager",
  image: "https://static.vecteezy.com/system/resources/thumbnails/002/000/510/small_2x/friendly-man-in-dress-shirt-character-icon-free-vector.jpg",
  des: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.  "
},

{
  name: "Rammy Sharp",
  position: "Graphic Designer",
  image: "https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg",
  des: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles."
},

{
  name: "Elita William",
  position: "Web Developer",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-km6iq3XJexHyKwaOBbtKnvamGuhqLEXjoUsegMIKv56jU9ZZkfaluGi9mPA6IJBTac&usqp=CAU",
  des: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles."
},


];
const delay = 3500;

function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
      <div className='slideshow__main'
//       data-aos="fade-up"
// data-aos-offset="-1000"
// data-aos-delay="10"
// data-aos-duration="600"
// data-aos-easing="ease-in"
// data-aos-once="true"
      
      >
    <div className="slideshow">



      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((val, index) => (
          <div
            className="slide"
            key={index}
          >

     
<div className=' container innertesi'>

<Avatar
        alt="Remy Sharp"
        src={val.image}
        sx={{ width: 56, height: 56 }}
      />

      <h5 style={{marginTop: "10px", color: "white", fontFamily: "Asap Condensed"}}> {val.name} </h5>
      <p style={{fontSize: "0.8rem", color: "orange", marginTop: "5px"}}> {val.position}</p>


<p style={{ fontSize: "0.9rem", fontFamily: "Raleway", marginTop: "5px", marginBottom: "0px", textAlign: "center", width: "80%", color: "white"}}> {val.des}  </p>
</div>

          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TestimonialsSection;