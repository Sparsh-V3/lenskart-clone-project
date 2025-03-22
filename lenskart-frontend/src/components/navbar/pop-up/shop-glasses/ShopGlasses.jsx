import React from "react";
import "./shop-glasses.css";

function ShopGlasses() {
  return (
    <>
      <div className="shop-eyeglasses">
        <details>
          <summary>Shop Eyeglasses</summary>
          <div className="dropdown-content">
            <a href="#">Eyeglasses</a>
            <a href="#">Lenskart BLU Lenses</a>
            <a href="#">Computer Glasses</a>
            <a href="#">Kids Glasses</a>
          </div>
        </details>
      </div>
      <div className="shop-sunglasses">
        <details>
          <summary>Shop Sunglasses</summary>
          <div className="dropdown-content">
            <a href="#">All Sunglasses</a>
            <a href="#">Power Sunglasses</a>
            <a href="#">Vincent Chase</a>
            <a href="#">Polarized Sunglasses</a>
            <a href="#">Aviator</a>
          </div>
        </details>
      </div>
      <div className="shop-contact-lenses">
        <details>
          <summary>Shop Contact Lens</summary>
          <div className="dropdown-content">
            <a href="#">Colored Contact Lens</a>
            <a href="#">Yearly</a>
            <a href="#">Daily</a>
            <a href="#">Monthly</a>
            <a href="#">Day & Night</a>
          </div>
        </details>
      </div>
    </>
  );
}

export default ShopGlasses;
