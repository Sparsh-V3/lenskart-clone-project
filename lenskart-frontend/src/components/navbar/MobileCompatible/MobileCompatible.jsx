import React from "react";
import User from "./user/User";
import HamburgerIcon from "./hamburger/HamburgerIcon";
import AddressLoc from "./address/AddressLoc";
import "./mobileCompatible.css";
import Wishlist from "./wishlist/Wishlist";
import Cart from "./cart/Cart";
import Search from "./search/Search";

function MobileCompatible() {
  return (
    <nav className="navigation">
      <div className="top">
        <div className="leftPart">
          <User /> <AddressLoc />
        </div>
        <div className="rightPart">
          <Wishlist /> <Cart />
          <HamburgerIcon />
        </div>
      </div>
      <div className="middle">
        <Search />
      </div>
    </nav>
  );
}

export default MobileCompatible;
