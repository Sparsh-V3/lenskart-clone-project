import React, { useState } from "react";
import "./eyeglasses.css";
import Hovered from "../hovered/Hovered";

function Eyeglasses() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="eyeglasses-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      EYEGLASSES
      {isHovered && (
        <div
          className="hovered-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Hovered />
        </div>
      )}
    </div>
  );
}

export default Eyeglasses;
