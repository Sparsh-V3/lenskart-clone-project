import React from "react";
import "./main-category.css";

function MainCategory() {
  return (
    <div className="main-category">
      <div className="sub-main-category">
        <div>
          <img src="men_pic.webp" alt="" />
        </div>
        <p>Men</p>
      </div>
      <div className="sub-main-category">
        <div>
          <img src="women_pic.webp" alt="" />
        </div>
        <p>Women</p>
      </div>
      <div className="sub-main-category">
        <div>
          <img src="kid_pic.webp" alt="" />
        </div>
        <p>Kids</p>
      </div>
    </div>
  );
}

export default MainCategory;
