import React, { useEffect, useState } from "react";
import "./navbar.css";
import Eyeglasses from "./row3/eyeglasses/Eyeglasses";
import Screenglasses from "./row3/screenglasses/Screenglasses";
import Kidsglasses from "./row3/kidsglasses/Kidsglasses";
import Contactlenses from "./row3/contactlenses/Contactlenses";
import Sunglasses from "./row3/sunglasses/Sunglasses";
import Homeeyetest from "./row3/home-eye-test/Homeeyetest";
import Storelocator from "./row3/store-locator/Storelocator";
import Row1 from "./row1/Row1";
import Row2 from "./row2/Row2";
import MobileCompatible from "./MobileCompatible/MobileCompatible";

function Navbar() {
  const [isDeviceCompatible, setIsDeviceCompatible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Function to update state based on media query match
    const handleResize = () => {
      setIsDeviceCompatible(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Add event listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <nav id="navbar">
      <Row1 />
      <Row2 />
      {isDeviceCompatible && <MobileCompatible />}
      {/* <div className="row3">
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
      </div> */}
    </nav>
  );
}
export default Navbar;
