import React from "react";
import classNames from "classnames";
// import ReactDOM from "react-dom";

export default class Mainsection extends React.Component {
    constructor(props) {
      super(props);
      
      this.IMAGE_PARTS = 4;
      
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 4000;
      
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
    
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
    
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
    
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
    
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
    
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (

        <>
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          
          <div className="slider__slides">
            {slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.city}
                >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                 <div className="mainhead">
                  <h2 className="slider__slide-heading">
                    {slide.city.split(' ').map(l => <span key = {l} style={{overflowWrap: "break-word", hyphens: "auto", margin: "0px 10px"}}>{l}</span>)}
                    {/* HELLO WORLD HOW ARE YOU */}
                  </h2>
                  </div>
                  <p className="slider__slide-subheading2"> {slide.des} </p>

                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="left-right-btns">
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
          </div>
        </div>



          </>
            );
    }
  }


  
  const slides = [
    {
      city: 'SHARE YOUR LOVE FOR PIZZA!',
      country: 'HAPPY HOUR SPECIAL',
      des: "Lorem ipsum dolor sit amet. Eum ratione sunt quo nulla quasi est repudiandae distinctio hic quia dicta. Non internos corporis At excepturi quo temporibus voluptas hic omnis magni et similique quod est numquam fugit sed vero sunt. ",
      img: 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?t=st=1653862766~exp=1653863366~hmac=0a2e9960276c9adf12fe9eda94936097c16a4fa19bd8e89b0e1fc1a5bfd7ca9d&w=740',
    },
    {
        country: "SPECIAL OFFER",
      city: 'DOUBLE MUSHROOM BURGER',
      des: "Lorem ipsum dolor sit amet. Eum ratione sunt quo nulla quasi est repudiandae distinctio hic quia dicta. Non internos corporis At excepturi quo temporibus voluptas hic omnis magni et similique quod est numquam fugit sed vero sunt. ",
      img: 'https://img.freepik.com/free-photo/front-view-chicken-burgers-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food_140725-25955.jpg?t=st=1653862917~exp=1653863517~hmac=7121b3c58caef95a91278577c32aa0e968ec931ebfac36962e5a7498992003ad&w=740',
    },
    {
      city: 'ITALIAN CUISINE',
      des: "Lorem ipsum dolor sit amet. Eum ratione sunt quo nulla quasi est repudiandae distinctio hic quia dicta. Non internos corporis At excepturi quo temporibus voluptas hic omnis magni et similique quod est numquam fugit sed vero sunt.  ",
      country: 'DELICIOUS',
      img: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1653863232~exp=1653863832~hmac=87191a35ecb9e3bf011b552788c12bdbd85cb77e997de6aa896a960e728a606c&w=740',
    },
    {
      city: 'GRILLED CHICKEN DONER',
      country: 'SPECIAL OFFER',
      des: "Lorem ipsum dolor sit amet. Eum ratione sunt quo nulla quasi est repudiandae distinctio hic quia dicta. Non internos corporis At excepturi quo temporibus voluptas hic omnis magni et similique quod est numquam fugit sed vero sunt.  ",
      img: 'https://img.freepik.com/free-photo/side-view-chicken-doner-grilled-chicken-with-cucumber-tomato-greens-red-onion-sauce-bread_141793-4822.jpg?t=st=1653863370~exp=1653863970~hmac=ff2aef7bcfdd4aae504c7e41b07c33f9db9edb4cf56e04d1efcb8b84ca81e4c7&w=740',
    },
    {
      city: 'FRIED CHICKEN WINGS',
      country: 'BEST OFFER',
      des: "Lorem ipsum dolor sit amet. Eum ratione sunt quo nulla quasi est repudiandae distinctio hic quia dicta. Non internos corporis At excepturi quo temporibus voluptas hic omnis magni et similique quod est numquam fugit sed vero sunt.",
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce-carrot_1150-20211.jpg?t=st=1653863581~exp=1653864181~hmac=70da2a2970f5f9bffb646224d4189a46084679508974d50e619a0eb0283b4964&w=740',
    },
  ];
  
//   Reactdom.render(<Mainsection slides={slides} />, document.getElementById('#root'));
  