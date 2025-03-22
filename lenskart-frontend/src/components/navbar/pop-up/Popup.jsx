import React, { useEffect, useState } from "react";
import "./popup.css";
import LoginSignup from "./login-signup/LoginSignup";
import TalkToUs from "./talk-to-us/TalkToUs";
import ShopGlasses from "./shop-glasses/ShopGlasses";

function Popup({ anim, onClose }) {
  return (
    <div className={`pop-up ${anim ? "active" : ""}`}>
      <div className="heading">
        <div className="logo">
          <img src="main_logo.svg" alt="" />
        </div>
        <div className="exit">
          <button onClick={onClose}>X</button>
        </div>
      </div>
      <div className="signup-login">
        <LoginSignup />
      </div>
      <div className="contact-us">
        <TalkToUs />
      </div>
      <div className="eyeglasses">
        <ShopGlasses />
      </div>
    </div>
  );
}

export default Popup;
