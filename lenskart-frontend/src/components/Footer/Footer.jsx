import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer id="lenskart-footer">
      <h1 className="footer-heading">Buy The Best Eyewear From Lenskart</h1>
      <p className="footer-para1">
        Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
        Revolutionised The Eyewear Industry In The Country With Its Omni-Channel
        Approach. From An Ever-Growing Number Of Offline Stores Across Major
        Cities In The Country To Innovative Integration Of Technology While
        Purchasing Online, Lenskart Caters To Every Customer With Several Deals
        And Offers.
      </p>
      <p className="footer-para2">
        A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
        Lenskart Delivers Them Right At Your Doorstep With Convenient Methods Of
        Payment. Sunglasses as well as Eyeglasses Are Available For Men And
        Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
        Try Out Contact Lenses, Pick The Ones Of Your Choice From The Extensive
        Variety Of Coloured Contact Lenses From Our Online Store.
      </p>
      <div className="footer-rest">
        <div className="footer-extras">
          <div className="services">
            <h2>Services</h2>
            <ul>
              <li>Store Locator</li>
              <li>Buying Guide</li>
              <li>Frame Size</li>
            </ul>
          </div>
          <div className="services">
            <h2>About Us</h2>
            <ul>
              <li>We are hiring</li>
              <li>Refer & Earn</li>
              <li>About us</li>
              <li>Lenskart Coupons</li>
            </ul>
          </div>
          <div className="services">
            <h2>Help</h2>
            <ul>
              <li>FAQ's</li>
              <li>Grievance Redressal</li>
              <li>Cardemi</li>
            </ul>
          </div>
        </div>
        <div className="apps">
          <div className="apps-links">
            <div>
              <img src="play-store.svg" alt="" />
            </div>
            <div>
              <img src="app-store.svg" alt="" />
            </div>
          </div>
          <div className="extra-others">
            <p>Download Lenskart App to buy</p>
            <p>Eyeglasses, Sunglasses and Contact Lenses</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div style={{textAlign:"right"}}><p>Cloned by Sparsh Vardhan</p></div>
    </footer>
  );
}

export default Footer;
