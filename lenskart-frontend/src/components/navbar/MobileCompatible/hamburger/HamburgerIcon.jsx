import React, { use, useState } from "react";
import "./HamburgerIcon.css";
import Popup from "../../pop-up/Popup";

function HamburgerIcon() {
  const [popup, setPopup] = useState(false);
  const [anim, setAnim] = useState(false);

  const handleOpen = () => {
    setPopup(true);
    setTimeout(() => {
      setAnim(true);
    }, 300);
  };

  const handleClose = () => {
    setAnim(false);
    setTimeout(() => {
      setPopup(false);
    }, 500);
  };

  return (
    <>
      <div onClick={handleOpen} id="hamburger">
        <img src="hamburger.svg" alt="" />
      </div>
      {popup && <Popup anim={anim} onClose={handleClose} />}
    </>
  );
}

export default HamburgerIcon;
