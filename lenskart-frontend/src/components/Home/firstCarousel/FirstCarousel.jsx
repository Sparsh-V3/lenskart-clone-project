import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function FirstCarousel() {
  return (
    <Carousel
    infiniteLoop={true} 
    autoPlay={true} 
    emulateTouch={true} 
    showStatus={false} 
    showThumbs={false} 
    stopOnHover={false}
    >
      <div>
        <img src="carousel_1.webp" />
      </div>
      <div>
        <img src="carousel_2.webp" />
      </div>
      <div>
        <img src="carousel_3.webp" />
      </div>
      <div>
        <img src="carousel_4.webp" />
      </div>
    </Carousel>
  );
}

export default FirstCarousel;
