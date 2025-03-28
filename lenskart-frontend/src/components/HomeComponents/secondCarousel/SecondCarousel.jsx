import React, { useState } from "react";
import "./secondCarousel.css";

function SecondCarousel() {
  const [activeSet, setActiveSet] = useState("set1");

  const handleLeftClick = () => {
    setActiveSet("set1");
  };
  const handleRightClick = () => {
    setActiveSet("set2");
  };

  return (
    <section className="section2">
      <div className="title">
        <p className="wear-the">WEAR THE</p>
        <p className="trend" style={{fontWeight:"bolder"}}>TREND</p>
        <p>Our hottest collections</p>
      </div>
      <div className="secondCarousel">
        <button onClick={handleLeftClick} disabled={activeSet === "set1"}>
          <img src="left-arrow.svg" alt="" />
        </button>
        <div className="imgSets">
          <div className={`set1 ${activeSet === "set1" ? "active" : ""}`}>
            <div>
              <img src="secondCarousel_img1.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img2.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img3.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img4.webp" alt="" />
            </div>
          </div>
          <div className={`set2 ${activeSet === "set2" ? "active" : ""}`}>
            <div>
              <img src="secondCarousel_img5.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img6.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img7.webp" alt="" />
            </div>
            <div>
              <img src="secondCarousel_img8.webp" alt="" />
            </div>
          </div>
        </div>
        <button onClick={handleRightClick} disabled={activeSet === "set2"}>
          <img src="right-arrow.svg" alt="" />
        </button>
      </div>
    </section>
  );
}

export default SecondCarousel;
