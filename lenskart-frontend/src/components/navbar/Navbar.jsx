import React, { useEffect, useState } from "react";
import "./navbar.css";
import Row1 from "./row1/Row1";
import Row2 from "./row2/Row2";
import MobileCompatible from "./MobileCompatible/MobileCompatible";
import Row3 from "./row3/Row3";

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
      <Row3 />
      {isDeviceCompatible && <MobileCompatible />}
    </nav>
  );
}
export default Navbar;
