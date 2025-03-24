import React from "react";
import Eyeglasses from "./eyeglasses/Eyeglasses";
import Screenglasses from "./screenglasses/Screenglasses";
import Kidsglasses from "./kidsglasses/Kidsglasses";
import Contactlenses from "./contactlenses/Contactlenses";
import Sunglasses from "./sunglasses/Sunglasses";
import Homeeyetest from "./home-eye-test/Homeeyetest";
import Storelocator from "./store-locator/Storelocator";
import "./row3.css"

function Row3() {
  return (
    <div className="row3">
      <div className="drop-cards">
        <Eyeglasses />
        <Screenglasses />
        <Kidsglasses />
        <Contactlenses />
        <Sunglasses />
        <Homeeyetest />
        <Storelocator />
      </div>
      <div className="linked-images">
        <div className="img">
          <img src="3dtryon1.webp" alt="" />
        </div>
        <div className="img">
          <img src="blulogo.webp" alt="" />
        </div>
        <div className="img">
          <img src="gold_max_logo_dc.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Row3;
