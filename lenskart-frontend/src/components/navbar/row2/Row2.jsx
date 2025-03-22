import React from "react";
import "./row2.css";

function Row2() {
  return (
    <div className="row2">
      <div className="logo">
        <img src="main_logo.svg" alt="" />
      </div>
      <div className="tollPhone">
        <img src="toll_phone.webp" alt="" />
      </div>
      <div className="search">
        <input
          type="text"
          id="search_specs"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="nav-links">
        <a href="">Track Order</a>
        <a href="">Sign In & Sign Up</a>
        <a href="">
          <img src="wishlist.svg" alt="" />
          <span>Wishlist</span>
        </a>
        <a href="">
          <img src="bag.svg" alt="" />
          <span>Cart</span>
        </a>
      </div>
    </div>
  );
}

export default Row2;
